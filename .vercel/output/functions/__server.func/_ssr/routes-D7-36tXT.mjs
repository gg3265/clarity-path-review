import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, I as ArrowRight, R as Activity, f as Microscope, j as ChevronRight, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { i as WhenToSeekSection, n as DiagnosticApproachSection, r as SpecialistCTA, t as CancerSection } from "./SpecialistContent-CW1w5mmm.mjs";
import { T as cn, b as fetchAdminTests, l as LogoMark, v as fetchAdminPackages } from "./router-Y1X9ZrKJ.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
import { t as ContactSection } from "./ContactSection-Bzq-zo54.mjs";
import { n as WhyUs, t as SecondOpinionSection } from "./WhyUs-d50Fqqj6.mjs";
import { t as ServiceGrid } from "./ServiceGrid-vhOTlKbA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D7-36tXT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_optics_default = "/assets/hero-optics-Crv70owQ.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "lab-grid absolute inset-0 opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -top-40 -right-24 size-[36rem] rounded-full bg-teal/5 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl",
								children: "SECOND OPINION CRL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-bold uppercase tracking-widest text-teal",
								children: "Clinical Reference Laboratory"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 font-display text-[2.75rem] leading-[1.05] font-extrabold text-navy sm:text-[3.5rem] lg:text-[4rem]",
							children: "Specialist Pathology Second Opinions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-[1.35rem] font-bold leading-snug text-teal sm:text-3xl",
							children: "Precision in Diagnosis. Confidence in Care."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-semibold tracking-wide text-foreground",
							children: "Histopathology • Cytopathology • Oncopathology • IHC • Molecular & Ancillary Testing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-4 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/pathology-second-opinion-slide-review",
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-navy-soft",
								children: ["Request Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/pathology-second-opinion-slide-review",
								search: { role: "doctor" },
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white",
								children: "Refer a Case"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative animate-scale-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square overflow-hidden rounded-[1.75rem] border border-border bg-navy shadow-lift",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_optics_default,
								width: 1280,
								height: 1280,
								alt: "Abstract scientific visual of microscope optics and histology patterns",
								className: "ambient-drift size-full object-cover",
								fetchPriority: "high"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "absolute inset-0 bg-gradient-to-tr from-navy/70 via-transparent to-transparent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "ambient-spin absolute -top-16 -left-16 size-72 rounded-full border border-white/10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-5 right-5 rounded-full bg-white/90 p-1.5 shadow-soft backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 46 })
							})
						]
					})
				})]
			})
		]
	});
}
var POPULAR_TESTS = [
	"CBC",
	"HbA1c",
	"LFT",
	"RFT",
	"Vitamin D3",
	"Vitamin B12",
	"Thyroid Profile",
	"Lipid Profile",
	"ESR",
	"RA Factor"
];
function TestSearch() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const { data: tests = [] } = useQuery({
		queryKey: ["tests"],
		queryFn: fetchAdminTests
	});
	const results = (0, import_react.useMemo)(() => {
		if (!query.trim()) return [];
		const lowerQuery = query.toLowerCase().trim();
		return tests.filter((test) => {
			const matchName = test.name.toLowerCase().includes(lowerQuery);
			const matchAlias = test.aliases?.some((a) => a.toLowerCase().includes(lowerQuery)) ?? false;
			return matchName || matchAlias;
		}).slice(0, 8);
	}, [query]);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (containerRef.current && !containerRef.current.contains(event.target)) setIsOpen(false);
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			navigate({
				to: "/tests",
				search: { q: query.trim() }
			});
			setIsOpen(false);
		}
	};
	const clearSearch = () => {
		setQuery("");
		setIsOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "test-directory",
		className: "relative bg-surface py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl",
					children: "Looking for a specific laboratory test?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto",
					children: "Search our complete laboratory test menu for routine, clinical and specialized investigations."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20",
				ref: containerRef,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSearch,
						className: "relative group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative flex items-center overflow-hidden rounded-full border border-border bg-background shadow-soft transition-all duration-300", "focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/5", "h-14 sm:h-[68px]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pl-6 pr-3 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 sm:size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: query,
									onChange: (e) => {
										setQuery(e.target.value);
										setIsOpen(true);
									},
									onFocus: () => setIsOpen(true),
									placeholder: "Search tests, profiles or investigations...",
									className: "h-full w-full bg-transparent px-2 text-base outline-none placeholder:text-muted-foreground/70 sm:text-lg"
								}),
								query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: clearSearch,
									className: "px-4 text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "hidden sm:flex h-full items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft",
									children: "Search"
								})
							]
						}), isOpen && query.trim() !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-border bg-background shadow-lift animate-in fade-in slide-in-from-top-2",
							children: results.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "max-h-[300px] overflow-y-auto p-2",
								children: [results.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/tests",
									search: { q: test.name },
									onClick: () => setIsOpen(false),
									className: "flex items-center justify-between rounded-xl px-4 py-3 hover:bg-secondary/50 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-foreground",
										children: test.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium uppercase tracking-wider text-muted-foreground mt-0.5",
										children: test.category
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-right pl-4",
										children: test.priceStatus === "Confirmed" && (test.sheet1Price || test.sheet2MRP) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-foreground",
											children: formatPrice(test.sheet1Price || test.sheet2MRP)
										}) : test.priceStatus === "Sheet 2 Only" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold text-foreground",
											children: [
												formatPrice(test.sheet2MRP),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground block",
													children: "MRP"
												})
											]
										}) : test.priceStatus === "Price confirmation required" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs font-medium text-amber-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirmation Required" })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: "Call"
										})
									})]
								}) }, test.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-border mt-2 p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/tests",
										search: { q: query.trim() },
										className: "flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors",
										children: [
											"View all results for \"",
											query,
											"\"",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
										]
									})
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-8 text-center text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"No tests found matching \"",
									query,
									"\""
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm mt-1",
									children: "Try searching by category or a simpler term."
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4",
							children: "Popular Tests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2.5",
							children: POPULAR_TESTS.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tests",
								search: { q: test },
								className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
								children: test
							}, test))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tests",
							className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-navy-soft transition-colors",
							children: ["View the complete test directory", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
						})
					})
				]
			})]
		})
	});
}
function PackageCard({ pkg, isFlagship }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300", isFlagship ? "bg-navy text-white border-navy-soft lg:col-span-2 md:col-span-2" : "bg-background border-border hover:border-primary/20"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("p-2.5 rounded-xl", isFlagship ? "bg-white/10" : "bg-primary/5"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: cn("size-6", isFlagship ? "text-white" : "text-primary") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-2xl font-bold font-mono tracking-tight", isFlagship ? "text-white" : "text-navy"),
					children: formatPrice(pkg.price)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("text-xl font-bold mb-3 font-display", isFlagship ? "text-white" : "text-foreground"),
				children: pkg.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-sm line-clamp-3 mb-6 leading-relaxed", isFlagship ? "text-slate-300" : "text-muted-foreground"),
				children: pkg.description || pkg.short_description
			}),
			pkg.included_tests && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 mb-8",
				children: [pkg.included_tests.slice(0, 4).map((test, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("mt-1.5 size-1.5 rounded-full shrink-0", isFlagship ? "bg-white/50" : "bg-primary/30") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-sm", isFlagship ? "text-slate-200" : "text-foreground/80"),
						children: test
					})]
				}, idx)), pkg.included_tests.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-medium mt-2 text-teal",
					children: [
						"+ ",
						pkg.included_tests.length - 4,
						" more tests"
					]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: `/packages/${pkg.id}`,
			className: cn("inline-flex items-center justify-between w-full p-4 rounded-xl font-semibold transition-all group-hover:gap-4", isFlagship ? "bg-white text-navy hover:bg-slate-50" : "bg-surface hover:bg-primary/5 text-primary"),
			children: ["View Package Details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
		})]
	});
}
function PathologyPackagesHome() {
	const { data: packages = [] } = useQuery({
		queryKey: ["packages"],
		queryFn: fetchAdminPackages
	});
	const pathologyPkgs = [
		"pkg-cytosure",
		"pkg-histosure",
		"pkg-ihc-expert",
		"pkg-signature-opinion"
	].map((id) => packages.find((p) => p.id === id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "packages",
		className: "bg-surface py-20 lg:py-28 overflow-hidden border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Specialist Review" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-display font-extrabold text-foreground leading-tight",
						children: "Pathology Second Opinion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed",
						children: "Expert review packages for outside slides, blocks, and pathology reports."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: pathologyPkgs.map((pkg, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
					pkg,
					isFlagship: pkg.id === "pkg-signature-opinion"
				}, pkg.id))
			})]
		})
	});
}
function ClinicalPackagesHome() {
	const clinicalPkgs = [
		"pkg-crl-essential",
		"pkg-crl-vital",
		"pkg-crl-complete"
	].map((id) => packages.find((p) => p.id === id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 overflow-hidden border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-14 text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Health & Wellness" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-extrabold text-foreground leading-tight",
							children: "Clinical Health Packages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: "Preventive health screening packages designed for different levels of routine health assessment."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6 mb-12",
					children: clinicalPkgs.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { pkg }, pkg.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/packages",
						className: "group flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-all hover:bg-secondary",
						children: ["Explore All Health Packages", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CancerSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhenToSeekSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagnosticApproachSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialistCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondOpinionSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathologyPackagesHome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalPackagesHome, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestSearch, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	] });
}
//#endregion
export { Home as component };
