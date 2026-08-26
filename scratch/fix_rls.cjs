const fs = require('fs');
let schema = fs.readFileSync('supabase/schema.sql', 'utf8');

// Replace authenticated checks with is_admin() checks
schema = schema.replace(/auth\.role\(\) = 'authenticated'/g, 'public.is_admin()');

// Prepare the admin_users table and function
const adminSql = `
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
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = (auth.jwt() ->> 'email')::text
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
`;

if (!schema.includes('public.admin_users')) {
  // Inject right before the first policy that uses is_admin()
  schema = schema.replace('-- Allow authenticated admins to perform CRUD operations on all tables', adminSql + '\n-- Allow authorized admins to perform CRUD operations on all tables');
}

fs.writeFileSync('supabase/schema.sql', schema);
console.log("Updated schema.sql for admin auth");
