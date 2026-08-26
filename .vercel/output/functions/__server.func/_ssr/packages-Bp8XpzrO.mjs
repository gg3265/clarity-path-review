import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as useLocation, v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as Activity, f as Microscope, k as CircleCheck, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { T as cn, o as Route$10, s as useCart } from "./router-dwDVHqyE.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
import { t as BookingBar } from "./BookingBar-DOCTJe6g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-Bp8XpzrO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COMPARISON_PARAMETERS = [
	{
		label: "CBC / Complete Hemogram",
		match: ["CBC"]
	},
	{
		label: "ESR",
		match: ["ESR"]
	},
	{
		label: "Fasting Blood Glucose",
		match: ["Fasting Glucose", "Fasting blood glucose"]
	},
	{
		label: "HbA1c",
		match: ["HbA1c"]
	},
	{
		label: "Lipid Profile",
		match: ["Lipid Profile"]
	},
	{
		label: "Liver Function Test (LFT)",
		match: ["Liver Function Test", "LFT"]
	},
	{
		label: "Kidney Function Test (KFT)",
		match: ["Kidney Function Test", "KFT"]
	},
	{
		label: "Sodium & Potassium / Electrolytes",
		match: ["Sodium & Potassium", "Electrolytes"]
	},
	{
		label: "Urine Routine",
		match: ["Urine Routine"]
	},
	{
		label: "TSH / Thyroid Profile",
		match: ["TSH", "Thyroid Profile"]
	},
	{
		label: "Free T4",
		match: ["Free T4", "Thyroid Profile"]
	},
	{
		label: "Vitamin B12",
		match: ["Vitamin B12"]
	},
	{
		label: "Vitamin D",
		match: ["Vitamin D"]
	},
	{
		label: "Calcium",
		match: ["Calcium"]
	},
	{
		label: "Uric Acid",
		match: ["Uric Acid"]
	},
	{
		label: "Iron Profile / Ferritin / TIBC",
		match: [
			"Iron",
			"Ferritin",
			"Iron Profile",
			"TIBC"
		]
	},
	{
		label: "Stool Occult Blood / FIT",
		match: ["Stool Occult Blood", "FIT"]
	},
	{
		label: "ApoB",
		match: ["ApoB"]
	},
	{
		label: "Lipoprotein(a)",
		match: ["Lipoprotein(a)"]
	},
	{
		label: "hs-CRP",
		match: ["hs-CRP"]
	},
	{
		label: "Homocysteine",
		match: ["Homocysteine"]
	},
	{
		label: "Urine Microalbumin",
		match: ["Urine Microalbumin"]
	},
	{
		label: "Physician Consultation",
		match: ["Physician Consultation"]
	}
];
function PackagesPage() {
	const { packages } = Route$10.useLoaderData();
	const { selectedPackages, addPackage, removePackage } = useCart();
	const navigate = useNavigate();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		if (location.hash) {
			const id = location.hash.replace("#", "");
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					const y = el.getBoundingClientRect().top + window.pageYOffset + -80;
					window.scrollTo({
						top: y,
						behavior: "smooth"
					});
				}
			}, 100);
		} else window.scrollTo(0, 0);
	}, [location.hash]);
	const isSelected = (pkgId) => selectedPackages.some((p) => p.id === pkgId);
	const clinicalPackages = packages.filter((p) => p.category === "Clinical Health Packages");
	const cancerPackages = packages.filter((p) => p.category === "Cancer Screening Series");
	const pathologyPackages = packages.filter((p) => p.category === "Pathology Second Opinion");
	const renderPackageCard = (pkg) => {
		const selected = isSelected(pkg.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("group relative flex flex-col justify-between p-6 sm:p-8 bg-background border rounded-3xl transition-all duration-300", selected ? "border-primary shadow-lg ring-1 ring-primary" : "border-border shadow-sm hover:shadow-xl hover:border-primary/20"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [
						pkg.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-extrabold uppercase tracking-widest bg-secondary text-primary px-3 py-1 rounded-full",
							children: pkg.badge
						}),
						!pkg.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-extrabold text-2xl text-foreground",
							children: formatPrice(pkg.price)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors",
					children: pkg.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground line-clamp-3 mb-6",
					children: pkg.shortDescription
				}),
				pkg.includedTests && pkg.includedTests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-bold uppercase tracking-widest text-primary/70",
						children: "Key Investigations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm font-medium text-foreground line-clamp-3 leading-relaxed",
						children: [
							pkg.includedTests.slice(0, 5).join(" • "),
							" ",
							pkg.includedTests.length > 5 && "..."
						]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/packages/${pkg.id}`,
					className: "w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl border border-primary/20 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors",
					children: "View Details"
				}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => removePackage(pkg.id),
					className: "w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl bg-green-50 text-green-700 border border-green-200 text-sm font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Added"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						if (pkg.bookingType === "booking") addPackage(pkg);
						else navigate({ to: `/packages/${pkg.id}` });
					},
					className: "w-full sm:w-1/2 flex items-center justify-center h-12 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-soft transition-colors shadow-sm",
					children: pkg.ctaText
				})]
			})]
		}, pkg.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Health & Screening",
			title: "CRL Health Packages",
			intro: "Thoughtfully designed screening and expert pathology packages for preventive health, early risk assessment and specialist second opinions.",
			watermark: "PACKAGES",
			showBack: true,
			backFallback: "/#packages"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "clinical",
			className: "bg-surface pt-12 pb-24 border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-6xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl sm:text-3xl font-display font-bold text-foreground",
							children: "Clinical Health Packages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1 text-sm sm:text-base",
							children: "Preventive health screening packages designed for different levels of health assessment."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16",
						children: clinicalPackages.map(renderPackageCard)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background rounded-3xl p-6 md:p-10 border border-border shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-foreground mb-6",
							children: "Compare Clinical Packages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "md:hidden text-xs text-muted-foreground mb-3 italic",
									children: "Swipe horizontally to view all packages 👉"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto pb-4 custom-scrollbar rounded-xl border border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-sm min-w-[800px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-surface border-b border-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "p-4 font-bold text-foreground sticky left-0 bg-surface z-10 w-48 border-r border-border shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]",
												children: "Test / Parameter"
											}), clinicalPackages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
												className: "p-4 bg-surface text-center align-top min-w-[130px]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-bold text-foreground text-sm mb-1",
														children: pkg.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-primary font-bold",
														children: formatPrice(pkg.price)
													}),
													(pkg.id === "pkg-crl-complete" || pkg.id === "pkg-crl-prime") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] uppercase font-bold text-teal mt-2 bg-teal/10 inline-block px-2 py-0.5 rounded shadow-sm",
														children: "Recommended"
													})
												]
											}, pkg.id))] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border",
											children: COMPARISON_PARAMETERS.map((param, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "group hover:bg-surface/30 transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "p-4 font-medium text-foreground sticky left-0 bg-background group-hover:bg-surface/50 z-10 border-r border-border transition-colors shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]",
													children: param.label
												}), clinicalPackages.map((pkg) => {
													const included = pkg.includedTests && param.match.some((m) => (pkg.includedTests || []).some((t) => t.toLowerCase().includes(m.toLowerCase())));
													return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-center cursor-pointer",
														onClick: () => navigate({ to: `/packages/${pkg.id}` }),
														children: included ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-green-600 mx-auto" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground/30 font-bold",
															children: "—"
														})
													}, pkg.id);
												})]
											}, i))
										})]
									})
								})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "cancer",
			className: "bg-background pt-16 pb-24 border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-foreground",
						children: "CRL Cancer Screening Series"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 text-sm max-w-2xl",
						children: "Focused screening packages designed around age-, sex- and risk-appropriate preventive assessment. Screening should be selected according to age, personal history, family history and applicable clinical recommendations."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: cancerPackages.map(renderPackageCard)
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "pathology",
			className: "bg-surface pt-16 pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold text-foreground",
						children: "Pathology Second Opinion"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1 text-sm max-w-2xl",
						children: "Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: pathologyPackages.map(renderPackageCard)
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-background border-t border-border py-8 text-center px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground max-w-4xl mx-auto",
				children: "Package contents and screening recommendations may vary based on age, medical history, clinical indication and applicable guidelines. Please consult a qualified healthcare professional where appropriate."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingBar, {})
	] });
}
//#endregion
export { PackagesPage as component };
