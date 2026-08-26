import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/admin')({
  beforeLoad: async () => {
    // If we have a server-side session check, we could do it here
    // But for a simple SPA, we'll check it in the component
  },
  component: AdminLayout,
})

function AdminLayout() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const checkAdmin = async (sessionData: any) => {
    if (!sessionData) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase.rpc('is_admin');
      if (error) throw error;
      setIsAdmin(!!data);
    } catch (err) {
      console.error("Admin check failed:", err);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      checkAdmin(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(true);
      checkAdmin(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading Admin...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Access</h1>
          <p className="text-gray-500 mb-8">Please log in to access the dashboard.</p>
          <button 
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })} 
            className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors mb-4"
          >
            Sign in with GitHub
          </button>
          
          <div className="text-sm text-gray-400 mb-4">Or sign in with email</div>
          
          <form className="flex flex-col gap-4" onSubmit={async (e) => {
            e.preventDefault();
            const email = (e.target as any).email.value;
            const password = (e.target as any).password.value;
            await supabase.auth.signInWithPassword({ email, password });
          }}>
            <input name="email" type="email" placeholder="Email" className="w-full p-3 border border-gray-200 rounded-lg" required />
            <input name="password" type="password" placeholder="Password" className="w-full p-3 border border-gray-200 rounded-lg" required />
            <button type="submit" className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-6">Unauthorized</h1>
          <p className="text-gray-500 mb-4">Your account ({session.user.email}) does not have admin privileges.</p>
          <p className="text-gray-500 mb-8 text-sm">Please ask a system administrator to add your email to the admin_users table.</p>
          <button 
            onClick={() => supabase.auth.signOut()} 
            className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">CRL Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{session.user.email}</span>
              <button 
                onClick={() => supabase.auth.signOut()}
                className="text-sm text-red-600 hover:text-red-800 font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}
