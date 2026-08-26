import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as FileText, E as ClipboardList, I as ArrowRight, N as Box, a as Stethoscope, f as Microscope } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { t as Reveal } from "./Reveal-BFNJgJax.mjs";
import { u as caseMaterials } from "./router-dwDVHqyE.mjs";
import { t as ServiceGrid } from "./ServiceGrid-vhOTlKbA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CIV39WOo.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	slide: Microscope,
	block: Box,
	ihc: ClipboardList,
	report: FileText,
	clinical: Stethoscope
};
function CaseMaterials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Case Materials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl",
						children: "What can be reviewed?"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
					children: caseMaterials.map((material, i) => {
						const Icon = icons[material.icon] ?? FileText;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							as: "li",
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex h-full flex-col gap-5 rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-full bg-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5 text-teal",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base leading-snug font-bold text-foreground",
									children: material.title
								})]
							})
						}, material.title);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground",
						children: "Case requirements may vary depending on the nature of the review. Contact the laboratory to understand what material is required for your case."
					})
				})
			]
		})
	});
}
function ReferringSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 rounded-[1.75rem] border border-border bg-background p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "For referring clinicians"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl leading-tight font-extrabold text-foreground sm:text-3xl lg:text-4xl",
						children: "A focused pathway for pathology review"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "When a case presents diagnostic complexity, SECOND OPINION CRL provides a focused pathway for pathology review and specialized laboratory support."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:justify-self-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft",
						children: ["Discuss a Case", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})
				})]
			}) })
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Our Services",
			title: "Our Services",
			intro: "Specialist pathology review, diagnostic services and ancillary testing.",
			watermark: "PATHOLOGY",
			showBack: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceGrid, { showHeading: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseMaterials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferringSection, {})
	] });
}
//#endregion
export { Services as component };
