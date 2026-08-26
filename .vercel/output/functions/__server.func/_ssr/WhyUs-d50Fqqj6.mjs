import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BFNJgJax.mjs";
import { m as process, p as principles } from "./router-dwDVHqyE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhyUs-d50Fqqj6.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessTimeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-5",
		children: process.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "li",
			delay: i * 90,
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-bold text-teal-soft",
						children: item.step
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "h-px flex-1 bg-white/15"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-lg font-bold text-primary-foreground",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-primary-foreground/70",
					children: item.description
				})
			]
		}, item.step))
	});
}
function SecondOpinionSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "second-opinion",
		className: "relative overflow-hidden bg-navy text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "lab-grid-dark absolute inset-0 opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute -bottom-40 -left-32 size-[34rem] rounded-full bg-teal/10 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute top-10 right-6 hidden font-display text-8xl font-extrabold text-white/[0.035] lg:block",
				children: "EXPERT REVIEW"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-teal-soft",
								children: "Pathology Second Opinion"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-5xl",
								children: "Independent specialist review for diagnostically challenging cases"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-lg font-medium text-teal-soft",
								children: "Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						className: "mt-8 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "border-l-2 border-teal-soft pl-6 font-display text-lg leading-relaxed text-primary-foreground/90 sm:text-xl",
							children: "A second opinion provides an additional specialist assessment of the available pathology material and clinical information, particularly when the diagnosis is complex, unusual, uncertain or clinically consequential."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 border-t border-white/10 pt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTimeline, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "mt-14 flex gap-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/pathology-second-opinion-slide-review",
							className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-[1.03]",
							children: ["Request a Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4 text-teal",
								"aria-hidden": "true"
							})]
						})
					})
				]
			})
		]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-14 py-20 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Why Choose Second Opinion CRL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-3xl leading-[1.1] font-extrabold text-foreground sm:text-4xl lg:text-[2.75rem]",
				children: "Built around diagnostic clarity."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border border-t border-border",
				children: principles.map((principle, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group grid gap-3 py-7 transition-colors sm:grid-cols-[10rem_1fr] sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "accent-rule inline-block pb-1",
								children: principle.title
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: principle.description
						})]
					})
				}, principle.title))
			})]
		})
	});
}
//#endregion
export { WhyUs as n, SecondOpinionSection as t };
