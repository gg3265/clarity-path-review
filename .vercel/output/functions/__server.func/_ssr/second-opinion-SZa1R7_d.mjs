import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, M as ChevronDown, O as CircleDot, T as Dna, f as Microscope, w as Droplet, x as FlaskConical } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { t as Reveal } from "./Reveal-BFNJgJax.mjs";
import { T as cn } from "./router-Y1X9ZrKJ.mjs";
import { n as WhyUs, t as SecondOpinionSection } from "./WhyUs-d50Fqqj6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/second-opinion-SZa1R7_d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	{
		id: "histopathology",
		title: "Histopathology",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "size-5 text-teal mb-3" }),
		items: [
			"H&E slides",
			"Special stains",
			"Paraffin blocks",
			"Previous pathology reports"
		]
	},
	{
		id: "ihc",
		title: "IHC",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-5 text-teal mb-3" }),
		items: [
			"IHC slides",
			"IHC reports",
			"Unstained slides",
			"Tissue blocks for additional IHC, where appropriate"
		]
	},
	{
		id: "cytology",
		title: "Cytology",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "size-5 text-teal mb-3" }),
		items: [
			"FNAC smears",
			"Cytology slides",
			"Cell blocks",
			"Fluid cytology"
		]
	},
	{
		id: "haematopathology",
		title: "Haematopathology",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplet, { className: "size-5 text-teal mb-3" }),
		items: [
			"Peripheral blood smears",
			"Bone marrow slides",
			"Lymph-node material",
			"IHC/flow-cytometry reports"
		]
	},
	{
		id: "ancillary",
		title: "Ancillary Investigations",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dna, { className: "size-5 text-teal mb-3" }),
		items: [
			"FISH",
			"PCR",
			"Molecular reports",
			"NGS reports"
		]
	}
];
function WhatWeReview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-20 lg:py-28 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl",
						children: "What can we review?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground leading-relaxed",
						children: "Pathology material and diagnostic information can be reviewed according to the requirements of the case and the material available."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mb-20",
					children: categories.map((category, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 50,
						className: "rounded-2xl border border-border bg-background p-8 shadow-sm flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [category.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-foreground mb-4",
							children: category.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 mt-auto",
							children: category.items.map((item, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-relaxed",
									children: item
								})]
							}, j))
						})]
					}, category.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "rounded-2xl bg-navy p-8 md:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "lab-grid-dark absolute inset-0 opacity-40"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4",
							children: "Have a challenging pathology case?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/pathology-second-opinion-slide-review",
								className: "w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]",
								children: ["Request a Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-teal" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/pathology-second-opinion-slide-review",
								className: "w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10",
								children: "Refer a Case"
							})]
						})]
					})]
				})
			]
		})
	});
}
var faqs = [
	{
		question: "What is a pathology second opinion?",
		answer: "A pathology second opinion is an independent assessment of your pathology material and diagnostic reports by a specialist pathologist. It provides a fresh evaluation to ensure accuracy and clarity for your diagnosis."
	},
	{
		question: "When should I seek one?",
		answer: "A second opinion may be considered for new cancer diagnoses, rare or unusual tumours, difficult or borderline diagnoses, discordant pathology and imaging, unexpected recurrences, or before major cancer treatment."
	},
	{
		question: "Can I send slides from another laboratory?",
		answer: "Pathology material prepared by another laboratory may be considered for review, subject to assessment of the material available and the requirements of the case."
	},
	{
		question: "Do you review paraffin blocks?",
		answer: "Yes, paraffin blocks can be reviewed and are often preferred as they allow for additional sectioning and ancillary testing if required."
	},
	{
		question: "Can additional IHC be performed?",
		answer: "Additional IHC may be recommended when clinically appropriate and will depend on the diagnostic question and available material."
	},
	{
		question: "Can you review cytology?",
		answer: "Yes, we review cytology specimens including FNAC smears, fluid cytology, and cell blocks."
	},
	{
		question: "Can you review lymphoma and sarcoma cases?",
		answer: "Yes, our specialist pathology review covers complex oncopathology cases including lymphoma and sarcoma work-ups."
	},
	{
		question: "Do I need the original pathology report?",
		answer: "Yes, the original pathology report, along with relevant clinical information and imaging findings, is essential for a comprehensive review."
	},
	{
		question: "How long does review take?",
		answer: "Review timelines depend on the complexity of the case, the material available and whether additional assessment or testing is required. The expected process can be discussed when the case is submitted."
	},
	{
		question: "How will I receive the report?",
		answer: "The final opinion is communicated through the agreed process for the case."
	},
	{
		question: "Can my treating doctor discuss the case with the reviewing pathologist?",
		answer: "Yes, we encourage multidisciplinary communication. Your treating doctor can discuss the findings with our specialist pathologist."
	},
	{
		question: "What happens if the second opinion differs from the original diagnosis?",
		answer: "A second opinion may confirm the original interpretation or provide a different assessment. Where the interpretations differ, the findings should be discussed in the context of the available clinical, radiological and pathological information, and further review or investigation may be recommended where appropriate."
	}
];
function FAQ() {
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold text-navy sm:text-4xl",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-muted-foreground",
					children: "Information regarding our specialist pathology review process."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: faqs.map((faq, index) => {
					const isOpen = openIndex === index;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-teal/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenIndex(isOpen ? null : index),
							className: "flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground pr-8",
								children: faq.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 shrink-0 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180 text-teal") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-6 pb-6 text-muted-foreground leading-relaxed",
									children: faq.answer
								})
							})
						})]
					}, index);
				})
			})]
		})
	});
}
function SecondOpinion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Specialist Pathology Review",
			title: "Pathology Second Opinion",
			intro: "Independent specialist review for diagnostically challenging cases. Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing",
			watermark: "EXPERT REVIEW",
			showBack: true,
			backFallback: "/"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeReview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SecondOpinionSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {})
	] });
}
//#endregion
export { SecondOpinion as component };
