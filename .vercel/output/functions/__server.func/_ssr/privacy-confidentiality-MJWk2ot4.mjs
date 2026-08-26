import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-confidentiality-MJWk2ot4.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyConfidentiality() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Privacy & Confidentiality",
		title: "Patient Confidentiality",
		intro: "Patient information and diagnostic material are handled with appropriate confidentiality and access controls.",
		showBack: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prose prose-slate prose-lg max-w-none text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead text-xl text-foreground font-medium mb-12",
						children: "Patient information and diagnostic material are handled with appropriate confidentiality and access controls. Please submit only information necessary for case review and use the designated secure submission pathway for patient-identifiable documents."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground mt-12 mb-4",
						children: "Information Handling"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We prioritize the responsible handling of patient and diagnostic information. All submitted clinical details and reports are treated as strictly confidential and are used solely for the purpose of specialist pathology review and related diagnostic recommendations." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground mt-12 mb-4",
						children: "Diagnostic Material"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Physical materials such as tissue blocks and glass slides are handled with the utmost care during the review process. They are appropriately logged, reviewed, and returned through the designated referral pathway upon completion of the assessment." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground mt-12 mb-4",
						children: "Secure Submission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To maintain patient confidentiality, we require all patient-identifiable documents and sensitive medical records to be submitted only through our designated secure referral workflows. We strongly advise against sending unencrypted medical records via standard public email." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground mt-12 mb-4",
						children: "Access Controls"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Access to patient cases and diagnostic materials is restricted to the reviewing specialists and necessary laboratory personnel involved directly in the case assessment and reporting process." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold text-foreground mt-12 mb-4",
						children: "Responsible Information Sharing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Final structured pathology opinions are communicated directly to the referring physician, laboratory, or the patient as per the agreed communication process established during the case submission. We do not share patient data with unauthorized third parties." })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 rounded-2xl bg-surface border border-border p-8 text-center sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-bold text-foreground",
					children: "Need to submit a pathology case?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/pathology-second-opinion-slide-review",
						className: "w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white transition-transform hover:scale-105",
						children: ["Request a Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/pathology-second-opinion-slide-review",
						search: { role: "doctor" },
						className: "w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-navy/20 bg-transparent px-8 text-sm font-semibold text-navy transition-colors hover:bg-navy/5",
						children: "Refer a Case"
					})]
				})]
			})]
		})
	})] });
}
//#endregion
export { PrivacyConfidentiality as component };
