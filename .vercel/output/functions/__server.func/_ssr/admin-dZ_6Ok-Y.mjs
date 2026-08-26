import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as supabase } from "./router-dwDVHqyE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-dZ_6Ok-Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const checkAdmin = async (sessionData) => {
		if (!sessionData) {
			setIsAdmin(false);
			setLoading(false);
			return;
		}
		try {
			const { data, error } = await supabase.rpc("is_admin");
			if (error) throw error;
			setIsAdmin(!!data);
		} catch (err) {
			console.error("Admin check failed:", err);
			setIsAdmin(false);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			checkAdmin(session);
		});
		const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setLoading(true);
			checkAdmin(session);
		});
		return () => subscription.unsubscribe();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gray-50",
		children: "Loading Admin..."
	});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gray-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-gray-900 mb-6",
					children: "Admin Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-500 mb-8",
					children: "Please log in to access the dashboard."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => supabase.auth.signInWithOAuth({ provider: "github" }),
					className: "w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors mb-4",
					children: "Sign in with GitHub"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-gray-400 mb-4",
					children: "Or sign in with email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-4",
					onSubmit: async (e) => {
						e.preventDefault();
						const email = e.target.email.value;
						const password = e.target.password.value;
						await supabase.auth.signInWithPassword({
							email,
							password
						});
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							placeholder: "Email",
							className: "w-full p-3 border border-gray-200 rounded-lg",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "password",
							type: "password",
							placeholder: "Password",
							className: "w-full p-3 border border-gray-200 rounded-lg",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors",
							children: "Sign In"
						})
					]
				})
			]
		})
	});
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gray-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md p-8 bg-white rounded-xl shadow-md border border-gray-100 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-red-600 mb-6",
					children: "Unauthorized"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-gray-500 mb-4",
					children: [
						"Your account (",
						session?.user?.email,
						") does not have admin privileges."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-500 mb-8 text-sm",
					children: "Please ask a system administrator to add your email to the admin_users table."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => supabase.auth.signOut(),
					className: "w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition-colors",
					children: "Sign Out"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-gray-50 flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "bg-white border-b border-gray-200 sticky top-0 z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center h-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-bold text-gray-900",
							children: "CRL Admin"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-gray-500",
							children: session?.user?.email
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => supabase.auth.signOut(),
							className: "text-sm text-red-600 hover:text-red-800 font-semibold",
							children: "Sign Out"
						})]
					})]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
//#endregion
export { AdminLayout as component };
