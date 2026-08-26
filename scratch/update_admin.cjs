const fs = require('fs');
let content = fs.readFileSync('src/routes/admin.tsx', 'utf8');

const newLogic = `
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
            className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors"
          >
            Sign in
          </button>
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
`;

content = content.replace(/function AdminLayout\(\) \{[\s\S]*?return \(/, newLogic.trim());
fs.writeFileSync('src/routes/admin.tsx', content);
console.log("Updated admin.tsx logic");
