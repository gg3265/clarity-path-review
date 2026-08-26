import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleAlert, c as Save, k as CircleCheck, s as Search, t as X, u as Pen } from "../_libs/lucide-react.mjs";
import { C as supabase, b as fetchAdminTests, v as fetchAdminPackages, y as fetchAdminSettings } from "./router-Y1X9ZrKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-0jHxvsSg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var formatCurrency = (amount) => {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(amount);
};
function AdminDashboard() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("tests");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-gray-200 bg-gray-50/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex overflow-x-auto custom-scrollbar -mb-px",
				children: [
					{
						id: "tests",
						label: "Test Directory"
					},
					{
						id: "clinical",
						label: "Health Packages"
					},
					{
						id: "second_opinion",
						label: "Second Opinion"
					},
					{
						id: "cancer",
						label: "Cancer Services"
					},
					{
						id: "settings",
						label: "Site Settings"
					}
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(tab.id),
					className: `whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-colors ${activeTab === tab.id ? "border-blue-600 text-blue-700 bg-white" : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"}`,
					children: tab.label
				}, tab.id))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-6 lg:p-8 min-h-[600px]",
			children: [
				activeTab === "tests" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestsManager, {}),
				activeTab === "clinical" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesManager, { categoryFilter: "Clinical Health Packages" }),
				activeTab === "second_opinion" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesManager, { categoryFilter: "Pathology Second Opinion" }),
				activeTab === "cancer" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CancerServicesManager, {}),
				activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsManager, {})
			]
		})]
	});
}
function InlineEdit({ initialValue, onSave, type = "number" }) {
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)(initialValue);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const handleSave = async () => {
		if (type === "number") {
			const num = Number(value);
			if (isNaN(num) || num < 0 || value === "") {
				alert("Please enter a valid non-negative price.");
				return;
			}
		}
		if (value === initialValue) {
			setIsEditing(false);
			return;
		}
		setSaving(true);
		try {
			await onSave(type === "number" ? Number(value) : value);
			setIsEditing(false);
		} catch (e) {
			alert("Error saving: " + e.message);
		} finally {
			setSaving(false);
		}
	};
	const handleCancel = () => {
		setValue(initialValue);
		setIsEditing(false);
	};
	if (!isEditing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-gray-900",
			children: type === "number" ? formatCurrency(Number(initialValue)) : initialValue
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setIsEditing(true),
			className: "text-gray-400 hover:text-blue-600 transition-colors p-1",
			title: "Edit",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-4" })
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type,
				value,
				onChange: (e) => setValue(e.target.value),
				className: "w-24 p-1.5 border-2 border-blue-200 rounded-md focus:outline-none focus:border-blue-500 text-sm font-semibold",
				autoFocus: true,
				disabled: saving,
				min: 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleSave,
				disabled: saving,
				className: "text-green-600 hover:text-green-800 p-1 disabled:opacity-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleCancel,
				disabled: saving,
				className: "text-red-500 hover:text-red-700 p-1 disabled:opacity-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})
		]
	});
}
function TestsManager() {
	const [tests, setTests] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const loadTests = async () => {
		setLoading(true);
		try {
			const data = await fetchAdminTests();
			setTests(data || []);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadTests();
	}, []);
	const categories = (0, import_react.useMemo)(() => {
		return ["All", ...Array.from(new Set(tests.map((t) => t.category).filter(Boolean)))];
	}, [tests]);
	const filteredTests = (0, import_react.useMemo)(() => {
		return tests.filter((t) => {
			const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || (t.crl_code || "").toLowerCase().includes(search.toLowerCase());
			const matchesCategory = category === "All" || t.category === category;
			return matchesSearch && matchesCategory;
		});
	}, [
		tests,
		search,
		category
	]);
	const handlePriceUpdate = async (id, newPrice) => {
		const { error } = await supabase.from("tests").update({ price: newPrice }).eq("id", id);
		if (error) throw error;
		setTests(tests.map((t) => t.id === id ? {
			...t,
			price: newPrice
		} : t));
	};
	const toggleStatus = async (id, currentStatus) => {
		try {
			const { error } = await supabase.from("tests").update({ is_active: !currentStatus }).eq("id", id);
			if (error) throw error;
			setTests(tests.map((t) => t.id === id ? {
				...t,
				is_active: !currentStatus
			} : t));
		} catch (e) {
			alert("Status update failed: " + e.message);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-20 text-center text-gray-500 font-medium",
		children: "Loading test directory..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-gray-900",
				children: "Test Directory"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-gray-500 mt-1",
				children: [
					"Manage pricing and availability for ",
					tests.length,
					" tests."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						placeholder: "Search tests...",
						value: search,
						onChange: (e) => setSearch(e.target.value),
						className: "pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: category,
					onChange: (e) => setCategory(e.target.value),
					className: "border border-gray-300 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: c,
						children: c
					}, c))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border border-gray-200 rounded-xl overflow-hidden shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "min-w-full divide-y divide-gray-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-gray-50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",
							children: "Test Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",
							children: "Price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider",
							children: "Status"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "bg-white divide-y divide-gray-200",
					children: filteredTests.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 4,
						className: "px-6 py-10 text-center text-gray-500",
						children: "No tests found matching your criteria."
					}) }) : filteredTests.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "hover:bg-gray-50/50 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-gray-900",
										children: test.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-gray-500 mt-1",
										children: [
											test.crl_code || "No Code",
											" • ",
											test.specimen || "No Specimen"
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium",
								children: test.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 whitespace-nowrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
									initialValue: test.price,
									onSave: (val) => handlePriceUpdate(test.id, val)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 whitespace-nowrap text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggleStatus(test.id, test.is_active),
									className: `px-3 py-1.5 inline-flex text-xs font-bold rounded-full transition-colors ${test.is_active ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}`,
									children: test.is_active ? "Active" : "Inactive"
								})
							})
						]
					}, test.id))
				})]
			})
		})]
	});
}
function PackagesManager({ categoryFilter }) {
	const [packages, setPackages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const loadPackages = async () => {
		setLoading(true);
		try {
			const data = await fetchAdminPackages();
			setPackages(data || []);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadPackages();
	}, []);
	const filteredPackages = (0, import_react.useMemo)(() => {
		return packages.filter((p) => p.category === categoryFilter);
	}, [packages, categoryFilter]);
	const handlePriceUpdate = async (id, newPrice) => {
		const { error } = await supabase.from("packages").update({ price: newPrice }).eq("id", id);
		if (error) throw error;
		setPackages(packages.map((p) => p.id === id ? {
			...p,
			price: newPrice
		} : p));
	};
	const toggleStatus = async (id, currentStatus) => {
		try {
			const { error } = await supabase.from("packages").update({ is_active: !currentStatus }).eq("id", id);
			if (error) throw error;
			setPackages(packages.map((p) => p.id === id ? {
				...p,
				is_active: !currentStatus
			} : p));
		} catch (e) {
			alert("Status update failed: " + e.message);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-20 text-center text-gray-500 font-medium",
		children: [
			"Loading ",
			categoryFilter,
			"..."
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-between items-center mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-gray-900",
				children: categoryFilter
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gray-500 mt-1",
				children: "Manage pricing and details for package offerings."
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6",
			children: filteredPackages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-blue-200 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-gray-900",
							children: pkg.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toggleStatus(pkg.id, pkg.is_active),
							className: `px-2 py-1 text-[10px] uppercase font-bold rounded transition-colors ${pkg.is_active ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}`,
							children: pkg.is_active ? "Active" : "Inactive"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gray-500 max-w-2xl",
						children: pkg.description || pkg.short_description
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gray-50 p-4 rounded-xl border border-gray-100 shrink-0 min-w-[200px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase text-gray-500 tracking-wider mb-2",
							children: "Package Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
							initialValue: pkg.price,
							onSave: (val) => handlePriceUpdate(pkg.id, val)
						})]
					})]
				}), pkg.included_tests && pkg.included_tests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gray-50/50 rounded-xl p-4 border border-gray-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-3",
						children: [
							"Included Items (",
							pkg.included_tests.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: pkg.included_tests.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm",
							children: t
						}, i))
					})]
				})]
			}, pkg.id))
		})]
	});
}
function CancerServicesManager() {
	const [services, setServices] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const loadServices = async () => {
		setLoading(true);
		try {
			const { data, error } = await supabase.from("cancer_services").select("*").order("name");
			if (error) throw error;
			setServices(data || []);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadServices();
	}, []);
	const handlePriceUpdate = async (id, newPrice) => {
		const { error } = await supabase.from("cancer_services").update({ price: newPrice }).eq("id", id);
		if (error) throw error;
		setServices(services.map((s) => s.id === id ? {
			...s,
			price: newPrice
		} : s));
	};
	const toggleStatus = async (id, currentStatus) => {
		try {
			const { error } = await supabase.from("cancer_services").update({ is_active: !currentStatus }).eq("id", id);
			if (error) throw error;
			setServices(services.map((s) => s.id === id ? {
				...s,
				is_active: !currentStatus
			} : s));
		} catch (e) {
			alert("Status update failed: " + e.message);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-20 text-center text-gray-500 font-medium",
		children: "Loading cancer services..."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-between items-center mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-gray-900",
				children: "Cancer & Oncopathology Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gray-500 mt-1",
				children: "Manage pricing for specialized oncology workflows."
			})] })
		}), services.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 border-dashed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-10 text-gray-400 mx-auto mb-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold text-gray-900",
					children: "No Services Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-500 max-w-sm mx-auto mt-2",
					children: "Cancer services have not been seeded into the database yet."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6",
			children: services.map((svc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-gray-900",
						children: svc.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleStatus(svc.id, svc.is_active),
						className: `px-2 py-1 text-[10px] uppercase font-bold rounded transition-colors ${svc.is_active ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-red-100 text-red-800 hover:bg-red-200"}`,
						children: svc.is_active ? "Active" : "Inactive"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-gray-500 max-w-xl",
					children: svc.description
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-gray-50 p-4 rounded-xl border border-gray-100 shrink-0 min-w-[200px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold uppercase text-gray-500 tracking-wider mb-2",
						children: "Consultation / Base Price"
					}), svc.price !== null && svc.price !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
						initialValue: svc.price,
						onSave: (val) => handlePriceUpdate(svc.id, val)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-gray-500",
						children: "Variable / Upon Assessment"
					})]
				})]
			}, svc.id))
		})]
	});
}
function SettingsManager() {
	const [settings, setSettings] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saveMessage, setSaveMessage] = (0, import_react.useState)("");
	const loadSettings = async () => {
		setLoading(true);
		try {
			const data = await fetchAdminSettings();
			setSettings(data || []);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadSettings();
	}, []);
	const handleUpdate = async (key, value) => {
		try {
			const { error } = await supabase.from("app_settings").upsert({
				key,
				value,
				updated_at: /* @__PURE__ */ new Date()
			});
			if (error) throw error;
			setSaveMessage("Settings saved successfully!");
			setTimeout(() => setSaveMessage(""), 3e3);
			loadSettings();
		} catch (e) {
			alert("Error updating settings: " + e.message);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-20 text-center text-gray-500 font-medium",
		children: "Loading settings..."
	});
	const homeCollection = settings.find((s) => s.key === "home_collection")?.value || {
		freeRadiusKm: 5,
		fee: 200
	};
	const promos = settings.find((s) => s.key === "promos")?.value || {
		bloodSugarPrice: 49,
		thyroidPrice: 299
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4 mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold text-gray-900",
				children: "Site Settings"
			}), saveMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }),
					" ",
					saveMessage
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-gray-500",
			children: "Manage global site configurations like homepage promotions and home collection rules."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-gray-200 rounded-2xl p-8 bg-white shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-gray-900 mb-2",
						children: "Promotional Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gray-500 mb-8",
						children: "These prices are displayed prominently on the homepage hero section."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-6 border-b border-gray-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
								children: "Blood Sugar Promo Price"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
								initialValue: promos.bloodSugarPrice,
								onSave: (val) => handleUpdate("promos", {
									...promos,
									bloodSugarPrice: Number(val)
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
							children: "Thyroid Promo Price"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
							initialValue: promos.thyroidPrice,
							onSave: (val) => handleUpdate("promos", {
								...promos,
								thyroidPrice: Number(val)
							})
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-gray-200 rounded-2xl p-8 bg-white shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-gray-900 mb-2",
						children: "Home Collection Rules"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gray-500 mb-8",
						children: "Configure the logistics and extra charges for home sample collection."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pb-6 border-b border-gray-100",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
									children: "Free Radius (km)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
									initialValue: homeCollection.freeRadiusKm,
									onSave: (val) => handleUpdate("home_collection", {
										...homeCollection,
										freeRadiusKm: Number(val)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-gray-400 mt-2",
									children: "Bookings within this radius of the lab are free."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2",
								children: "Fee Beyond Radius"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineEdit, {
								initialValue: homeCollection.fee,
								onSave: (val) => handleUpdate("home_collection", {
									...homeCollection,
									fee: Number(val)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gray-400 mt-2",
								children: "The flat fee applied to bookings outside the free radius."
							})
						] })]
					})
				]
			})]
		})]
	});
}
//#endregion
export { AdminDashboard as component };
