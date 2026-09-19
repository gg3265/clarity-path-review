-- Add descriptive fields to tests table for the Admin Test Directory

ALTER TABLE public.tests
ADD COLUMN IF NOT EXISTS crl_code TEXT,
ADD COLUMN IF NOT EXISTS specimen TEXT,
ADD COLUMN IF NOT EXISTS turnaround_time TEXT,
ADD COLUMN IF NOT EXISTS preparation TEXT,
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS method TEXT,
ADD COLUMN IF NOT EXISTS sample_volume TEXT,
ADD COLUMN IF NOT EXISTS container TEXT,
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS aliases TEXT[];

-- Notify PostgREST to reload schema cache
NOTIFY pgrst, 'reload schema';
