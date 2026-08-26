import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { k as CircleCheck, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quality-standards-CDO5HPDy.js
var import_jsx_runtime = require_jsx_runtime();
var standardsList = [
	"WHO Classification of Tumours",
	"CAP protocols",
	"ICC/WHO haematolymphoid classifications",
	"AJCC TNM",
	"ASCO/CAP biomarker guidelines",
	"International cytology reporting systems",
	"Relevant specialty guidelines"
];
function QualityStandards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Commitment to Excellence",
		title: "Quality & Diagnostic Standards",
		intro: "Evidence-based pathology practices for clearer diagnostic decisions.",
		showBack: true,
		backFallback: "/about"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-20 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-surface rounded-3xl p-8 sm:p-14 border border-border shadow-soft relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "absolute -top-24 -right-24 size-[24rem] bg-teal/5 rounded-full blur-3xl pointer-events-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-14 rounded-full bg-teal/10 flex items-center justify-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-7 text-teal" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl sm:text-3xl font-extrabold text-navy",
								children: "Quality & Diagnostic Standards"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-foreground font-medium leading-relaxed mb-10 border-l-2 border-teal/30 pl-5",
							children: "Our diagnostic approach follows current evidence and professional standards, with references to appropriate:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-4 sm:gap-6",
							children: standardsList.map((standard, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-teal/30 transition-colors shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-teal shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: standard
								})]
							}, i))
						})
					]
				})]
			})
		})
	})] });
}
//#endregion
export { QualityStandards as component };
