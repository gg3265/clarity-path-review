-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Patients Table
CREATE TABLE public.patients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    age TEXT,
    gender TEXT,
    mobile TEXT NOT NULL,
    email TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tests Table
CREATE TABLE public.tests (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price NUMERIC,
    price_status TEXT DEFAULT 'Confirmed',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Packages Table
CREATE TABLE public.packages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price NUMERIC,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Package Tests (Many-to-Many)
CREATE TABLE public.package_tests (
    package_id TEXT REFERENCES public.packages(id) ON DELETE CASCADE,
    test_id TEXT REFERENCES public.tests(id) ON DELETE CASCADE,
    PRIMARY KEY (package_id, test_id)
);

-- 5. Bookings Table
CREATE TABLE public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ref_id TEXT UNIQUE NOT NULL,
    patient_id UUID REFERENCES public.patients(id),
    collection_method TEXT NOT NULL, -- 'HOME' or 'WALK_IN'
    
    -- Home Collection Address
    address_line1 TEXT,
    address_line2 TEXT,
    area TEXT,
    city TEXT,
    state TEXT,
    pincode TEXT,
    
    -- Appointment details
    appointment_date TEXT,
    appointment_time TEXT,
    
    notes TEXT,
    total_price NUMERIC,
    status TEXT DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Booking Tests (Many-to-Many)
CREATE TABLE public.booking_tests (
    booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
    test_id TEXT REFERENCES public.tests(id),
    price_at_booking NUMERIC,
    PRIMARY KEY (booking_id, test_id)
);

-- 7. Booking Packages (Many-to-Many)
CREATE TABLE public.booking_packages (
    booking_id UUID REFERENCES public.bookings(id) ON DELETE CASCADE,
    package_id TEXT REFERENCES public.packages(id),
    price_at_booking NUMERIC,
    PRIMARY KEY (booking_id, package_id)
);

-- 8. Prescription Requests
CREATE TABLE public.prescription_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    status TEXT DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Prescription Files
CREATE TABLE public.prescription_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    request_id UUID REFERENCES public.prescription_requests(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Second Opinion Requests
CREATE TABLE public.second_opinion_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    patient_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT,
    case_description TEXT,
    status TEXT DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Second Opinion Files
CREATE TABLE public.second_opinion_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    request_id UUID REFERENCES public.second_opinion_requests(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. Service Requests
CREATE TABLE public.service_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id TEXT NOT NULL,
    service_name TEXT NOT NULL,
    patient_name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT,
    message TEXT,
    status TEXT DEFAULT 'PENDING',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. Contact Enquiries
CREATE TABLE public.contact_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT,
    subject TEXT,
    message TEXT,
    status TEXT DEFAULT 'NEW',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.package_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescription_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescription_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.second_opinion_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.second_opinion_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (creation) but NOT reads/updates/deletes for sensitive user data
-- Patients can be created anonymously during booking
CREATE POLICY "Enable insert for anonymous users" ON public.patients FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.booking_tests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.booking_packages FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.prescription_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.prescription_files FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.second_opinion_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.second_opinion_files FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.service_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON public.contact_enquiries FOR INSERT WITH CHECK (true);

-- Allow public READ access ONLY for non-sensitive catalog data
CREATE POLICY "Enable read access for all users" ON public.tests FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.packages FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.package_tests FOR SELECT USING (true);


-- ==========================================
-- STORAGE BUCKETS
-- ==========================================

-- You need to run these manually in Supabase SQL editor or via Supabase CLI
INSERT INTO storage.buckets (id, name, public) VALUES ('prescriptions', 'prescriptions', false) ON CONFLICT DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('second-opinion-documents', 'second-opinion-documents', false) ON CONFLICT DO NOTHING;

-- Enable RLS for Storage
CREATE POLICY "Allow anonymous uploads to prescriptions" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'prescriptions');
CREATE POLICY "Allow anonymous uploads to second-opinion-documents" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'second-opinion-documents');
