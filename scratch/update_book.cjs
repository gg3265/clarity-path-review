const fs = require('fs');
let content = fs.readFileSync('src/routes/book.tsx', 'utf8');

if (!content.includes('import { supabase }')) {
  content = content.replace('import { cn } from "@/lib/utils";', 'import { cn } from "@/lib/utils";\nimport { supabase } from "@/lib/supabase";');
}

const oldHandleConfirm = `  const handleConfirm = () => {
    if (isConfirming) return;
    setIsConfirming(true);

    setTimeout(() => {
      // Generate mock reference
      const ref = \`SOCRL-2026-\${Math.floor(1000 + Math.random() * 9000)}\`;
      
      const bookingData = {
        ref,
        patient,
        selectedTests,
        selectedPackages,
        totalEstimatedPrice,
        collectionMethod,
        address: collectionMethod === "HOME" ? address : undefined,
        appointment: (date || time) ? { date, time } : undefined,
        notes: "",
      };

      try {
        sessionStorage.setItem("lastBookingConfirmation", JSON.stringify(bookingData));
      } catch (e) {
        // Safe to ignore
      }

      clearCart();
      navigate({ to: "/confirmation" });
    }, 1500);
  };`;

const newHandleConfirm = `  const handleConfirm = async () => {
    if (isConfirming) return;
    setIsConfirming(true);

    try {
      const ref = \`SOCRL-2026-\${Math.floor(1000 + Math.random() * 9000)}\`;
      
      // 1. Insert patient
      const { data: patientData, error: patientError } = await supabase
        .from('patients')
        .insert({
          name: patient.name,
          age: patient.age,
          gender: patient.gender,
          mobile: patient.mobile,
          email: patient.email
        })
        .select()
        .single();
        
      if (patientError) throw patientError;

      // 2. Insert booking
      const { data: bookingDataDB, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          ref_id: ref,
          patient_id: patientData.id,
          collection_method: collectionMethod,
          address_line1: address.addressLine1,
          address_line2: address.addressLine2,
          area: address.area,
          city: address.city,
          state: address.state,
          pincode: address.pincode,
          appointment_date: date,
          appointment_time: time,
          notes: "",
          total_price: totalEstimatedPrice,
          status: 'PENDING'
        })
        .select()
        .single();

      if (bookingError) throw bookingError;

      // 3. Insert tests (preserving the exact current price)
      if (selectedTests.length > 0) {
        const testsToInsert = selectedTests.map(t => ({
          booking_id: bookingDataDB.id,
          test_id: t.id,
          price_at_booking: t.price
        }));
        const { error: testsError } = await supabase.from('booking_tests').insert(testsToInsert);
        if (testsError) throw testsError;
      }

      // 4. Insert packages (preserving the exact current price)
      if (selectedPackages.length > 0) {
        const pkgsToInsert = selectedPackages.map(p => ({
          booking_id: bookingDataDB.id,
          package_id: p.id,
          price_at_booking: p.price
        }));
        const { error: pkgsError } = await supabase.from('booking_packages').insert(pkgsToInsert);
        if (pkgsError) throw pkgsError;
      }

      // Save to session storage for the confirmation page
      const bookingDataLocal = {
        ref,
        patient,
        selectedTests,
        selectedPackages,
        totalEstimatedPrice,
        collectionMethod,
        address: collectionMethod === "HOME" ? address : undefined,
        appointment: (date || time) ? { date, time } : undefined,
        notes: "",
      };
      sessionStorage.setItem("lastBookingConfirmation", JSON.stringify(bookingDataLocal));
      
      clearCart();
      navigate({ to: "/confirmation" });

    } catch (e: any) {
      console.error(e);
      toast.error("Failed to submit booking: " + e.message);
      setIsConfirming(false);
    }
  };`;

content = content.replace(oldHandleConfirm, newHandleConfirm);
fs.writeFileSync('src/routes/book.tsx', content);
console.log("Replaced handleConfirm successfully");
