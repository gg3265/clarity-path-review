-- 1. Add is_active to tests:

ALTER TABLE public.tests
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- 2. Add is_active to packages:

ALTER TABLE public.packages
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- 3. Create app_settings:

CREATE TABLE IF NOT EXISTS public.app_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Enable RLS:

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- 5. Make the settings policies safely idempotent.

DROP POLICY IF EXISTS "Enable read access for all users"
ON public.app_settings;

DROP POLICY IF EXISTS "Enable all operations for authenticated admins"
ON public.app_settings;

CREATE POLICY "Enable read access for all users"
ON public.app_settings
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Enable all operations for authenticated admins"
ON public.app_settings
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- 6. Seed exactly these two settings:

INSERT INTO public.app_settings (key, value)
VALUES
(
  'home_collection',
  '{"freeRadiusKm":5,"fee":100}'::jsonb
),
(
  'promos',
  '{"bloodSugarPrice":49,"thyroidPrice":299}'::jsonb
)
ON CONFLICT (key) DO NOTHING;
