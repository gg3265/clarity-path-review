import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, k as CircleCheck, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { T as cn, a as Route$5, s as useCart } from "./router-Y1X9ZrKJ.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
import { t as BookingBar } from "./BookingBar-BRKIMRbC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tests-e-g3l62W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ALL_CATEGORIES = [
	"All",
	"Clinical - Hematology",
	"Clinical - Biochemistry",
	"Clinical - Endocrinology / Hormones",
	"Clinical - Vitamins / Trace Elements",
	"Clinical - Immunology / Autoimmune",
	"Clinical - Serology / Infectious Diseases",
	"Clinical - Clinical Pathology",
	"Clinical - Microbiology",
	"Clinical - Protein Studies",
	"Clinical - Cancer-related Serum Markers",
	"Histopathology",
	"Cytology",
	"IHC",
	"Molecular / Referral",
	"Hematopathology",
	"Renal / Liver / Breast"
];
var CATEGORY_DESCRIPTIONS = {
	"Histopathology": "Routine and specialized histopathology services for biopsy and surgical resections.",
	"Cytopathology": "Expert cytopathology services for gynecological and non-gynecological specimens.",
	"Immunohistochemistry": "Advanced immunohistochemistry markers for precise tumor typing and prognostic assessment.",
	"Second Opinion & Slide Review": "Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports."
};
function TestsPage() {
	const searchParams = Route$5.useSearch();
	const { tests, packages } = Route$5.useLoaderData();
	const navigate = useNavigate({ from: "/tests" });
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(searchParams.category || "All");
	const [localQuery, setLocalQuery] = (0, import_react.useState)(searchParams.q || "");
	const { selectedTests, selectedPackages, addTest, removeTest, addPackage, removePackage } = useCart();
	const handleSearch = (val) => {
		setLocalQuery(val);
		navigate({ search: { q: val || void 0 } });
	};
	const filteredTests = (0, import_react.useMemo)(() => {
		let result = tests;
		if (activeCategory !== "All") result = result.filter((t) => t.category === activeCategory || t.category?.includes(activeCategory));
		const q = (searchParams.q || "").toLowerCase().trim();
		if (q) result = result.filter((test) => {
			const matchName = test.name.toLowerCase().includes(q);
			const matchAlias = (test.aliases || []).some((a) => a.toLowerCase().includes(q));
			const matchCrl = test.crlCode?.toLowerCase().includes(q) || false;
			const matchCategory = test.category?.toLowerCase().includes(q) || false;
			return matchName || matchAlias || matchCrl || matchCategory;
		});
		return result.sort((a, b) => a.name.localeCompare(b.name));
	}, [activeCategory, searchParams.q]);
	const filteredPackages = (0, import_react.useMemo)(() => {
		let result = packages;
		if (activeCategory !== "All") return [];
		const q = (searchParams.q || "").toLowerCase().trim();
		if (q) result = result.filter((pkg) => {
			return pkg.name.toLowerCase().includes(q) || pkg.category.toLowerCase().includes(q);
		});
		else result = [];
		return result;
	}, [activeCategory, searchParams.q]);
	const showServiceDescription = activeCategory !== "All" && CATEGORY_DESCRIPTIONS[activeCategory] && filteredTests.length === 0;
	const isTestSelected = (testId) => selectedTests.some((t) => t.id === testId);
	const isPackageSelected = (pkgId) => selectedPackages?.some((p) => p.id === pkgId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Test Directory",
			title: "Diagnostic Test Menu",
			intro: "Browse our comprehensive menu of pathology and clinical investigations.",
			watermark: "DIRECTORY",
			showBack: true,
			backFallback: "/#test-directory"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-12 md:py-20 min-h-[60vh] pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: localQuery,
								onChange: (e) => handleSearch(e.target.value),
								placeholder: "Search tests, packages or services...",
								className: "w-full pl-12 pr-10 py-4 bg-background border border-border rounded-xl shadow-sm focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-foreground text-lg transition-all"
							}),
							localQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleSearch(""),
								className: "absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap gap-2",
						children: ALL_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setActiveCategory(category);
								if (searchParams.q) handleSearch("");
							},
							className: cn("whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border", activeCategory === category ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-foreground hover:border-primary/30 hover:bg-primary/5"),
							children: category
						}, category))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						showServiceDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-10 text-center bg-background border border-border rounded-2xl shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-foreground mb-3",
									children: activeCategory
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground max-w-2xl mx-auto",
									children: CATEGORY_DESCRIPTIONS[activeCategory]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/contact",
										className: "inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-navy-soft",
										children: "Enquire about this service"
									})
								})
							]
						}),
						filteredPackages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-foreground mb-4",
							children: "Health & Screening Packages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: filteredPackages.map((pkg) => {
								const selected = isPackageSelected(pkg.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("group relative flex flex-col justify-between p-5 bg-background border rounded-2xl transition-all duration-300", selected ? "border-primary shadow-md" : "border-border shadow-sm hover:shadow-md hover:border-primary/20"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-bold uppercase tracking-widest text-primary/70",
												children: pkg.category
											}), pkg.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] font-bold uppercase tracking-wider bg-secondary text-primary px-1.5 py-0.5 rounded-sm",
												children: pkg.badge
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground leading-snug group-hover:text-primary transition-colors",
											children: pkg.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-2 line-clamp-2",
											children: pkg.shortDescription
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 pt-4 border-t border-border/50 flex flex-col gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-end justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display font-bold text-lg text-foreground",
												children: formatPrice(pkg.price)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold text-primary hover:underline cursor-pointer",
												onClick: () => navigate({ to: `/packages/${pkg.id}` }),
												children: "View Details"
											})]
										}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 text-sm font-bold text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Added"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removePackage(pkg.id),
												className: "text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors px-2 py-1",
												children: "Remove"
											})]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												if (pkg.bookingType === "booking") addPackage(pkg);
												else navigate({ to: `/packages/${pkg.id}` });
											},
											className: "w-full h-10 rounded-lg bg-secondary text-sm font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
											children: pkg.ctaText
										})]
									})]
								}, pkg.id);
							})
						})] }),
						filteredTests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [(searchParams.q || activeCategory === "All") && filteredPackages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-foreground mb-4",
							children: "Diagnostic Tests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
							children: filteredTests.map((test) => {
								const selected = isTestSelected(test.id);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("group relative flex flex-col justify-between p-5 bg-background border rounded-2xl transition-all duration-300", selected ? "border-primary shadow-md" : "border-border shadow-sm hover:shadow-md hover:border-primary/20"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2",
											children: test.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground leading-snug group-hover:text-primary transition-colors",
											children: test.name
										}),
										test.specimen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-2 font-medium flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" }),
												"Sample: ",
												test.specimen
											]
										}),
										test.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 inline-flex items-start gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-md border border-amber-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: test.notes })]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 pt-4 border-t border-border/50 flex flex-col gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-end justify-between",
											children: test.priceStatus === "Confirmed" && (test.sheet1Price || test.sheet2MRP) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display font-bold text-lg text-foreground",
												children: formatPrice(test.sheet1Price || test.sheet2MRP)
											}) : test.priceStatus === "Sheet 2 Only" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display font-bold text-lg text-foreground",
												children: formatPrice(test.sheet2MRP)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] uppercase font-bold text-muted-foreground tracking-wider",
												children: "MRP Source"
											})] }) : test.priceStatus === "Price confirmation required" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-md border border-amber-200",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmation Required" })]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium text-muted-foreground",
												children: "Call for pricing"
											})
										}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 text-sm font-bold text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }), " Added"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removeTest(test.id),
												className: "text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors px-2 py-1",
												children: "Remove"
											})]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => addTest(test),
											className: "w-full h-10 rounded-lg bg-secondary text-sm font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
											children: "Book This Test"
										})]
									})]
								}, test.id);
							})
						})] }),
						!showServiceDescription && filteredTests.length === 0 && filteredPackages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-20 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-8" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-foreground mb-2",
									children: "No results found"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground max-w-md mx-auto",
									children: [
										"We couldn't find any tests or packages matching \"",
										searchParams.q,
										"\". Try checking the spelling or use a different search term."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => handleSearch(""),
									className: "mt-6 inline-flex font-medium text-primary hover:text-navy-soft transition-colors",
									children: "Clear search and view all tests"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingBar, {})
	] });
}
//#endregion
export { TestsPage as component };
