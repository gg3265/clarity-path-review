-- Tests Policies
DROP POLICY IF EXISTS "Enable insert for admins" ON public.tests;
CREATE POLICY "Enable insert for admins"
ON public.tests
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Enable update for admins" ON public.tests;
CREATE POLICY "Enable update for admins"
ON public.tests
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Enable delete for admins" ON public.tests;
CREATE POLICY "Enable delete for admins"
ON public.tests
FOR DELETE
TO authenticated
USING (public.is_admin());

-- Packages Policies
DROP POLICY IF EXISTS "Enable insert for admins" ON public.packages;
CREATE POLICY "Enable insert for admins"
ON public.packages
FOR INSERT
TO authenticated
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Enable update for admins" ON public.packages;
CREATE POLICY "Enable update for admins"
ON public.packages
FOR UPDATE
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Enable delete for admins" ON public.packages;
CREATE POLICY "Enable delete for admins"
ON public.packages
FOR DELETE
TO authenticated
USING (public.is_admin());
