import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as CircleUserRound, I as ArrowRight, P as Beaker, a as Stethoscope, h as Mail, m as MapPin } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BFNJgJax.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as site, c as ContactAction, d as mapsDirectionsUrl, f as mapsEmbedUrl, h as reviewTypes } from "./router-Y1X9ZrKJ.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactSection-Bzq-zo54.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(100),
	mobile: stringType().trim().regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid mobile number"),
	email: stringType().trim().email("Please enter a valid email").max(255),
	caseRef: stringType().trim().max(120).optional().or(literalType("")),
	referrer: stringType().trim().max(160).optional().or(literalType("")),
	reviewType: stringType().min(1, "Please select a type of review"),
	message: stringType().trim().max(1500).optional().or(literalType("")),
	consent: literalType(true, { errorMap: () => ({ message: "Please provide your consent to proceed" }) })
});
var fieldClass = "mt-2 block min-h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none";
function ContactForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const parsed = schema.safeParse({
			name: String(data.get("name") ?? ""),
			mobile: String(data.get("mobile") ?? ""),
			email: String(data.get("email") ?? ""),
			caseRef: String(data.get("caseRef") ?? ""),
			referrer: String(data.get("referrer") ?? ""),
			reviewType: String(data.get("reviewType") ?? ""),
			message: String(data.get("message") ?? ""),
			consent: data.get("consent") === "on"
		});
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = String(issue.path[0]);
				if (!next[key]) next[key] = issue.message;
			}
			setErrors(next);
			toast.error("Please check the highlighted fields.");
			return;
		}
		setErrors({});
		const v = parsed.data;
		const body = [
			`Full Name: ${v.name}`,
			`Mobile: ${v.mobile}`,
			`Email: ${v.email}`,
			`Patient / Case Reference: ${v.caseRef || "-"}`,
			`Referring Doctor / Hospital: ${v.referrer || "-"}`,
			`Type of Review: ${v.reviewType}`,
			"",
			"Message:",
			v.message || "-",
			"",
			"Consent: Provided"
		].join("\n");
		window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Second Opinion enquiry — ${v.name}`)}&body=${encodeURIComponent(body)}`;
		toast.success("Your enquiry is ready to send from your email app. Attach documents there if needed.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name",
						name: "name",
						error: errors["name"],
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							name: "name",
							autoComplete: "name",
							className: fieldClass,
							placeholder: "Your name"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mobile Number",
						name: "mobile",
						error: errors["mobile"],
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "mobile",
							name: "mobile",
							type: "tel",
							inputMode: "tel",
							autoComplete: "tel",
							className: fieldClass,
							placeholder: "10-digit mobile number"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						name: "email",
						error: errors["email"],
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							autoComplete: "email",
							className: fieldClass,
							placeholder: "you@example.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Patient / Case Reference",
						name: "caseRef",
						error: errors["caseRef"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "caseRef",
							name: "caseRef",
							className: fieldClass,
							placeholder: "Optional reference"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Referring Doctor / Hospital",
						name: "referrer",
						error: errors["referrer"],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "referrer",
							name: "referrer",
							className: fieldClass,
							placeholder: "Optional"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Type of Review",
						name: "reviewType",
						error: errors["reviewType"],
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "reviewType",
							name: "reviewType",
							defaultValue: "",
							className: fieldClass,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a review type"
							}), reviewTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: type,
								children: type
							}, type))]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Message",
				name: "message",
				error: errors["message"],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "message",
					name: "message",
					rows: 4,
					className: `${fieldClass} py-3`,
					placeholder: "Briefly describe your pathology review requirement"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "documents",
					className: "block text-sm font-medium text-foreground",
					children: "Upload Case Documents (optional)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "documents",
					name: "documents",
					type: "file",
					multiple: true,
					accept: ".pdf,.jpg,.jpeg,.png",
					className: "mt-2 block w-full rounded-lg border border-dashed border-input bg-surface px-4 py-3 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-muted-foreground",
					children: "For patient confidentiality and secure handling of diagnostic material, case documents should be submitted only through the designated CRL referral process. Please contact us before sending patient-identifiable documents."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 text-sm leading-relaxed text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					name: "consent",
					className: "mt-1 size-4 rounded border-input accent-teal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I consent to SECOND OPINION CRL contacting me regarding this enquiry. I understand this form is for enquiries only and is not a medical consultation or an emergency service." })]
			}), errors["consent"] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-destructive",
				children: errors["consent"]
			}) : null] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] hover:bg-navy-soft sm:w-auto",
				children: "Submit Case Enquiry"
			})
		]
	});
}
function Field({ label, name, error, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: name,
			className: "block text-sm font-medium text-foreground",
			children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-teal",
				children: " *"
			}) : null]
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-destructive",
			children: error
		}) : null
	] });
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "max-w-4xl text-center mx-auto mb-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: "Pune"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "font-medium text-foreground hover:text-teal",
									children: site.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
									context: "general",
									type: "call",
									variant: "outline",
									className: "h-10 px-4 text-xs bg-transparent"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
									context: "general",
									type: "whatsapp",
									variant: "solid",
									className: "h-10 px-4 text-xs"
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3 mb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUserRound, { className: "size-6 text-teal" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3",
										children: "For Patients"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-foreground",
										children: "Pathology Second Opinion"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/pathology-second-opinion-slide-review",
									className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105",
									children: ["Request a Second Opinion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-6 text-teal" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3",
										children: "For Doctors / Laboratories"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-foreground",
										children: "Specialist Consultation"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/pathology-second-opinion-slide-review",
									search: { role: "doctor" },
									className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-transform hover:scale-105 hover:bg-navy hover:text-white",
									children: ["Refer a Case", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full rounded-2xl border border-border bg-surface p-8 text-center flex flex-col justify-between hover:shadow-soft transition-shadow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beaker, { className: "size-6 text-teal" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3",
										children: "Routine Investigations"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold text-foreground",
										children: "Clinical & Pathology Tests"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/tests",
									className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105 hover:border-foreground/20",
									children: ["Book a Test", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "max-w-2xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.5rem] border border-border bg-surface p-6 shadow-soft sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold text-center text-foreground mb-2",
								children: "Send an Enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm leading-relaxed text-muted-foreground mb-8",
								children: "For general questions or additional information, please fill out the form below."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-extrabold text-foreground sm:text-3xl",
						children: "Visit SECOND OPINION CRL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
						className: "mt-4 max-w-sm text-base leading-relaxed text-muted-foreground not-italic",
						children: site.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: mapsDirectionsUrl,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-input bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary",
						children: "Get Directions"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border shadow-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `Map showing ${site.name} in Pune`,
							src: mapsEmbedUrl,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							className: "h-64 w-full border-0 sm:h-72"
						})
					})
				})]
			})
		})]
	});
}
//#endregion
export { ContactSection as t };
