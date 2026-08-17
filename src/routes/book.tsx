import { useState, useEffect } from "react";
import { toast } from "sonner";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useCart } from "@/context/CartContext";
import { PageHeader } from "@/components/PageHeader";
import { AlertCircle, ArrowLeft, CheckCircle2, ChevronRight, Search } from "lucide-react";
import { CollectionSelector, CollectionMethod } from "@/components/booking/CollectionSelector";
import { AddressForm, AddressData } from "@/components/booking/AddressForm";
import { WalkInMap } from "@/components/booking/WalkInMap";
import { ContactAction } from "@/components/ContactAction";
import { BackButton } from "@/components/BackButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Test | Second Opinion CRL" },
      { name: "description", content: "Book your diagnostic tests online with Second Opinion CRL." },
    ],
  }),
  component: BookPage,
});

type Step = "TESTS" | "DETAILS" | "COLLECTION" | "REVIEW" | "SUCCESS";

interface PatientDetails {
  name: string;
  age: string;
  gender: string;
  mobile: string;
  email: string;
  notes: string;
}

function BookPage() {
  const { selectedTests, removeTest, totalEstimatedPrice, hasConflict, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveTest = (id: string) => {
    removeTest(id);
    if (selectedTests.length === 1 && selectedTests[0].id === id) {
      toast("No tests selected yet. Choose a test to begin your booking.");
      setStep("TESTS");
      if (window.history.length > 2) {
        window.history.back();
      } else {
        navigate({ to: "/tests", replace: true });
      }
    }
  };

  useEffect(() => {
    if (selectedTests.length === 0 && step !== "SUCCESS") {
      toast("No tests selected yet. Choose a test to begin your booking.");
      navigate({ to: "/tests", replace: true });
    }
  }, []);

  const [step, setStep] = useState<Step>("TESTS");
  const [patient, setPatient] = useState<PatientDetails>({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    notes: "",
  });
  
  const [collectionMethod, setCollectionMethod] = useState<CollectionMethod>(null);
  const [address, setAddress] = useState<AddressData>({
    addressLine1: "",
    addressLine2: "",
    area: "",
    city: "Pune",
    state: "Maharashtra",
    pincode: "",
  });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [bookingRef, setBookingRef] = useState("");

  const handleNext = (nextStep: Step) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(nextStep);
  };

  const handleConfirm = () => {
    // Generate mock reference
    const ref = `SOCRL-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    handleNext("SUCCESS");
    clearCart();
  };

  // Validation before allowing Review step
  const canProceedToReview = () => {
    if (collectionMethod === "WALK_IN") return true;
    if (collectionMethod === "HOME") {
      return address.city.toLowerCase().trim() === "pune" && 
             address.state.toLowerCase().trim() === "maharashtra" &&
             address.pincode.length === 6 &&
             address.addressLine1.trim() !== "" &&
             address.area.trim() !== "";
    }
    return false;
  };

  if (step === "SUCCESS") {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-background rounded-3xl p-8 shadow-xl text-center border border-border">
          <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="size-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-display font-extrabold text-foreground mb-3">
            Booking Request Received
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you. Your test booking request has been received successfully.
          </p>
          
          <div className="bg-surface rounded-xl p-6 mb-8 text-left border border-border/50">
            <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
              Booking Reference
            </div>
            <div className="text-xl font-mono font-bold text-foreground mb-6">
              {bookingRef}
            </div>

            <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
              Collection Method
            </div>
            <div className="text-base font-semibold text-foreground mb-6">
              {collectionMethod === "HOME" ? "Home Collection (Pune)" : "Walk-in Centre (Pune)"}
            </div>

            <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1">
              Contact
            </div>
            <div className="text-base font-semibold text-foreground">
              9359777222<br/>
              <a href="mailto:secondopinioncrl@gmail.com" className="text-primary hover:underline">secondopinioncrl@gmail.com</a>
            </div>
          </div>

          <div className="space-y-3">
            <Link to="/" className="flex w-full h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold transition-colors hover:bg-navy-soft">
              Back to Home
            </Link>
            <ContactAction type="call" variant="outline" className="w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-surface border-b border-border sticky top-[64px] lg:top-[76px] z-40">
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <BackButton 
              className="mb-0"
              fallbackUrl="/tests"
              onClick={() => {
                if (step === "REVIEW") handleNext("COLLECTION");
                else if (step === "COLLECTION") handleNext("DETAILS");
                else if (step === "DETAILS") handleNext("TESTS");
                else return false;
              }}
            />
            
            {/* Mobile Progress */}
            <div className="md:hidden text-xs font-bold uppercase tracking-widest text-primary/70">
              {step === "TESTS" && "Step 1 of 4"}
              {step === "DETAILS" && "Step 2 of 4"}
              {step === "COLLECTION" && "Step 3 of 4"}
              {step === "REVIEW" && "Step 4 of 4"}
            </div>

            {/* Desktop Progress */}
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className={cn(step === "TESTS" && "text-primary")}>01 Tests</span>
              <span className="text-muted-foreground/30">→</span>
              <span className={cn(step === "DETAILS" && "text-primary")}>02 Details</span>
              <span className="text-muted-foreground/30">→</span>
              <span className={cn(step === "COLLECTION" && "text-primary")}>03 Collection</span>
              <span className="text-muted-foreground/30">→</span>
              <span className={cn(step === "REVIEW" && "text-primary")}>04 Review</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 min-h-[70vh] bg-background">
        <div className="container-page max-w-3xl">
          
          {/* STEP 1: TESTS */}
          {step === "TESTS" && (
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8">
                Your Tests
              </h2>

              {selectedTests.length === 0 ? (
                <div className="text-center py-16 bg-surface rounded-3xl border border-border">
                  <div className="mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 text-muted-foreground shadow-sm">
                    <Search className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">No tests selected</h3>
                  <p className="text-muted-foreground mb-6">Please select at least one test to continue with your booking.</p>
                  <Link to="/tests" className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-navy-soft transition-colors">
                    Find a Test
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-8">
                    {selectedTests.map(test => (
                      <div key={test.id} className="flex items-center justify-between p-5 bg-surface rounded-2xl border border-border shadow-sm">
                        <div className="pr-4">
                          <h4 className="font-semibold text-foreground">{test.name}</h4>
                          <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-bold">
                            {test.category}
                          </div>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end gap-2">
                          {test.priceStatus === "Confirmed" ? (
                            <div className="font-display font-bold text-lg text-foreground">
                              ₹{test.sheet1Price || test.sheet2MRP}
                            </div>
                          ) : test.priceStatus === "Sheet 2 Only" ? (
                            <div className="font-display font-bold text-lg text-foreground">
                              ₹{test.sheet2MRP} <span className="text-[10px] text-muted-foreground uppercase block">MRP</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                              <AlertCircle className="size-3.5" /> Confirm
                            </div>
                          )}
                          <button onClick={() => handleRemoveTest(test.id)} className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft mb-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-muted-foreground font-medium">Number of Tests</div>
                      <div className="font-bold text-foreground">{selectedTests.length}</div>
                    </div>
                    <div className="border-t border-border pt-6 flex justify-between items-end">
                      <div className="text-lg font-bold text-foreground">Estimated Total</div>
                      <div className="text-right">
                        {hasConflict ? (
                          <div className="text-sm font-bold text-amber-600">Price confirmation required</div>
                        ) : (
                          <div className="text-3xl font-display font-extrabold text-foreground">₹{totalEstimatedPrice}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <Link to="/tests" className="text-primary font-semibold text-sm hover:underline hidden sm:block">
                      + Add more tests
                    </Link>
                    <button 
                      onClick={() => handleNext("DETAILS")}
                      className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm"
                    >
                      Continue to Details <ChevronRight className="size-5 ml-1" />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 2: DETAILS */}
          {step === "DETAILS" && (
            <div className="animate-fade-in slide-in-from-right-8">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8">
                Your Details
              </h2>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext("COLLECTION");
                }}
                className="space-y-8"
              >
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">Patient Details</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name *</label>
                    <input required type="text" value={patient.name} onChange={e => setPatient({...patient, name: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" placeholder="Enter patient's full name" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Age</label>
                      <input type="text" value={patient.age} onChange={e => setPatient({...patient, age: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" placeholder="e.g. 34 Years" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Gender</label>
                      <select value={patient.gender} onChange={e => setPatient({...patient, gender: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none">
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">Contact Details</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Mobile Number *</label>
                    <input required type="tel" pattern="[0-9]{10}" title="Please enter a valid 10-digit mobile number" value={patient.mobile} onChange={e => setPatient({...patient, mobile: e.target.value.replace(/\D/g, '').slice(0,10)})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" placeholder="10-digit mobile number" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <input type="email" value={patient.email} onChange={e => setPatient({...patient, email: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" placeholder="For receiving reports (optional)" />
                  </div>
                </div>

                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6">
                  <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">Additional Info</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Doctor / Hospital Name (Optional)</label>
                    <input type="text" value={patient.notes} onChange={e => setPatient({...patient, notes: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" placeholder="Referring doctor" />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button type="submit" className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm">
                    Continue to Collection
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: COLLECTION */}
          {step === "COLLECTION" && (
            <div className="animate-fade-in slide-in-from-right-8">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">
                Sample Collection
              </h2>
              <p className="text-muted-foreground text-lg mb-8">How would you like to give your sample?</p>

              <CollectionSelector 
                selected={collectionMethod} 
                onChange={setCollectionMethod} 
              />

              {collectionMethod === "HOME" && (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (canProceedToReview()) {
                      handleNext("REVIEW");
                    }
                  }}
                >
                  <AddressForm 
                    value={address} 
                    onChange={setAddress}
                    showTimeFields
                    date={date}
                    time={time}
                    onDateChange={setDate}
                    onTimeChange={setTime}
                  />

                  <div className="flex justify-end pt-8">
                    <button 
                      type="submit" 
                      disabled={!canProceedToReview()}
                      className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Review Booking
                    </button>
                  </div>
                </form>
              )}

              {collectionMethod === "WALK_IN" && (
                <>
                  <WalkInMap />
                  <div className="flex justify-end pt-8">
                    <button 
                      onClick={() => handleNext("REVIEW")}
                      className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm"
                    >
                      Review Booking
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 4: REVIEW */}
          {step === "REVIEW" && (
            <div className="animate-fade-in slide-in-from-right-8">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8">
                Review Your Booking
              </h2>

              <div className="space-y-6">
                
                {/* Tests Review */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Tests</h3>
                    <button onClick={() => handleNext("TESTS")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="space-y-3 mb-6">
                    {selectedTests.map(test => (
                      <div key={test.id} className="flex justify-between items-start text-sm">
                        <span className="font-medium text-foreground pr-4">{test.name}</span>
                        <span className="font-bold shrink-0">
                          {test.priceStatus === "Confirmed" ? `₹${test.sheet1Price || test.sheet2MRP}` : 
                           test.priceStatus === "Sheet 2 Only" ? `₹${test.sheet2MRP}` : 
                           <span className="text-amber-600">Confirmation Required</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between items-center font-bold">
                    <span>Estimated Total</span>
                    <span className="text-xl">
                      {hasConflict ? <span className="text-amber-600 text-sm">Price TBA</span> : `₹${totalEstimatedPrice}`}
                    </span>
                  </div>
                </div>

                {/* Patient Review */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Patient Details</h3>
                    <button onClick={() => handleNext("DETAILS")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div>
                      <div className="text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1">Name</div>
                      <div className="font-semibold text-foreground">{patient.name}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1">Mobile</div>
                      <div className="font-semibold text-foreground">{patient.mobile}</div>
                    </div>
                    {patient.age && (
                      <div>
                        <div className="text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1">Age</div>
                        <div className="font-semibold text-foreground">{patient.age}</div>
                      </div>
                    )}
                    {patient.gender && (
                      <div>
                        <div className="text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1">Gender</div>
                        <div className="font-semibold text-foreground">{patient.gender}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Collection Review */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Collection Method</h3>
                    <button onClick={() => handleNext("COLLECTION")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl">
                      {collectionMethod === "HOME" ? "🏠 Home Collection (Pune)" : "📍 Walk-in Centre (Pune)"}
                    </div>
                  </div>

                  {collectionMethod === "HOME" ? (
                    <div className="text-sm space-y-1 bg-background p-4 rounded-xl border border-border">
                      <div className="font-semibold text-foreground">{address.addressLine1}</div>
                      {address.addressLine2 && <div className="text-muted-foreground">{address.addressLine2}</div>}
                      <div className="text-muted-foreground">{address.area}, {address.city}</div>
                      <div className="text-muted-foreground">{address.state} - {address.pincode}</div>
                      {(date || time) && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1">Preferred Time</div>
                          <div className="font-semibold text-foreground">{date} {time}</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm space-y-1 bg-background p-4 rounded-xl border border-border">
                      <div className="font-semibold text-foreground">SECOND OPINION CRL</div>
                      <div className="text-muted-foreground">557, Vireen Heights, 3rd Floor,</div>
                      <div className="text-muted-foreground">Laxmi Road, Sadashiv Peth, Pune 411030</div>
                      <div className="mt-4">
                        <a href="https://maps.google.com/?q=557,+Vireen+Heights,+3rd+Floor,+Laxmi+Road,+Sadashiv+Peth,+Pune+411030" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Get Directions →</a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Support Shortcut */}
                <div className="bg-primary/5 rounded-3xl p-6 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-foreground text-center sm:text-left">Need help with your booking?</h4>
                    <p className="text-sm text-muted-foreground text-center sm:text-left">Our team is ready to assist you.</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <ContactAction context="book" type="call" variant="outline" className="flex-1 sm:flex-none" />
                    <ContactAction context="book" type="whatsapp" variant="solid" className="flex-1 sm:flex-none" />
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <button 
                  onClick={handleConfirm}
                  className="w-full flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-navy-soft transition-transform hover:scale-[1.01] shadow-md"
                >
                  Confirm Booking Request
                </button>
                <p className="text-center text-xs text-muted-foreground mt-4 max-w-md mx-auto">
                  Your booking request will be reviewed by SECOND OPINION CRL. Our team may contact you to confirm the appointment and applicable charges.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
