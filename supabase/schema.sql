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

-- ==========================================
-- ADMIN DASHBOARD EXTENSIONS
-- ==========================================

-- Alter Tests Table
ALTER TABLE public.tests 
ADD COLUMN IF NOT EXISTS crl_code TEXT,
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS preparation TEXT,
ADD COLUMN IF NOT EXISTS specimen TEXT,
ADD COLUMN IF NOT EXISTS turnaround_time TEXT,
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS aliases TEXT[],
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS requires_confirmation BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS is_popular BOOLEAN DEFAULT false;

-- Alter Packages Table
ALTER TABLE public.packages 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS short_description TEXT,
ADD COLUMN IF NOT EXISTS badge TEXT,
ADD COLUMN IF NOT EXISTS included_tests JSONB,
ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false;

-- Create Cancer Services Table
CREATE TABLE IF NOT EXISTS public.cancer_services (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC,
    required_patient_info JSONB,
    required_case_info JSONB,
    required_documents JSONB,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create App Settings Table
CREATE TABLE IF NOT EXISTS public.app_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================
-- ADMIN RLS POLICIES
-- ==========================================

ALTER TABLE public.cancer_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON public.cancer_services FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON public.app_settings FOR SELECT USING (true);


-- ==========================================
-- ADMIN AUTHORIZATION SYSTEM
-- ==========================================
CREATE TABLE IF NOT EXISTS public.admin_users (
    email TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Note: The client must insert their admin email into this table via the Supabase Dashboard
-- Example: INSERT INTO public.admin_users (email) VALUES ('client@crl.com');

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = (auth.jwt() ->> 'email')::text
  );
END;
$ LANGUAGE plpgsql SECURITY DEFINER;

-- Allow authorized admins to perform CRUD operations on all tables
-- NOTE: We rely on Supabase Auth. Any authenticated user is considered an admin for this MVP.
CREATE POLICY "Enable insert for authenticated users" ON public.tests FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Enable update for authenticated users" ON public.tests FOR UPDATE USING (public.is_admin());
CREATE POLICY "Enable delete for authenticated users" ON public.tests FOR DELETE USING (public.is_admin());

CREATE POLICY "Enable insert for authenticated users" ON public.packages FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Enable update for authenticated users" ON public.packages FOR UPDATE USING (public.is_admin());
CREATE POLICY "Enable delete for authenticated users" ON public.packages FOR DELETE USING (public.is_admin());

CREATE POLICY "Enable insert for authenticated users" ON public.cancer_services FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Enable update for authenticated users" ON public.cancer_services FOR UPDATE USING (public.is_admin());
CREATE POLICY "Enable delete for authenticated users" ON public.cancer_services FOR DELETE USING (public.is_admin());

CREATE POLICY "Enable insert for authenticated users" ON public.app_settings FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Enable update for authenticated users" ON public.app_settings FOR UPDATE USING (public.is_admin());
CREATE POLICY "Enable delete for authenticated users" ON public.app_settings FOR DELETE USING (public.is_admin());
