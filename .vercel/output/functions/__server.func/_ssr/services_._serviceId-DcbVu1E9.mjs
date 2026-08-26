import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Navigate, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as FileUp, k as CircleCheck, r as Upload, t as X } from "../_libs/lucide-react.mjs";
import { t as BackButton } from "./BackButton-dhPxIJGw.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { g as services, n as Route, x as tests } from "./router-Y1X9ZrKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services_._serviceId-DcbVu1E9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { serviceId } = Route.useParams();
	const service = (0, import_react.useMemo)(() => {
		return services.find((s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === serviceId);
	}, [serviceId]);
	const [step, setStep] = (0, import_react.useState)("FORM");
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[50vh] flex-col items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold",
			children: "Service not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/services",
			className: "mt-4 text-primary hover:underline",
			children: "Return to Services"
		})]
	});
	if (service.title === "Clinical Pathology & Biochemistry") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/tests",
		search: { category: service.title },
		replace: true
	});
	if (service.title === "Oncopathology") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/#cancer-services",
		replace: true
	});
	if (service.title === "Haematopathology") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/cancer-pathology/haematolymphoid-pathology",
		replace: true
	});
	if (service.title === "Pathology Second Opinion & Slide Review") {}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page pt-6 pb-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
				fallbackUrl: "/#specialist-services",
				className: "mb-0"
			})
		}), step === "SUCCESS" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page max-w-2xl mt-12 animate-in fade-in slide-in-from-bottom-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-10 text-center shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-2xl font-bold text-foreground",
						children: "Request Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Thank you. Your request has been received by SECOND OPINION CRL."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 inline-block rounded-lg bg-secondary px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Request Reference"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-lg font-bold text-foreground",
							children: ["SOCRL-", Math.floor(1e5 + Math.random() * 9e5)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Our team will review your request and contact you regarding the next steps."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-border pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+919359777222",
							className: "flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary/80 sm:w-auto",
							children: "Call Us"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919359777222",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto",
							children: "WhatsApp Us"
						})]
					})
				]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl mt-4 animate-in fade-in slide-in-from-right-4 duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl font-bold text-foreground",
					children: service.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-lg text-muted-foreground",
					children: service.description.includes("•") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2",
						children: service.description.split("•")[0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "ml-5 list-disc space-y-1",
						children: service.description.split("•").slice(1).map((part, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: part.trim() }, index))
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: service.description })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceForm, {
				serviceId,
				serviceTitle: service.title,
				onSuccess: () => {
					setStep("SUCCESS");
					window.scrollTo({
						top: 0,
						behavior: "smooth"
					});
				}
			})]
		})]
	});
}
function ServiceForm({ serviceId, serviceTitle, onSuccess }) {
	const [patient, setPatient] = (0, import_react.useState)({
		name: "",
		age: "",
		gender: "",
		mobile: "",
		email: "",
		doctor: "",
		hospital: ""
	});
	const [formData, setFormData] = (0, import_react.useState)({
		materialTypes: [],
		selectedTests: []
	});
	const isSecondOpinion = serviceTitle === "Pathology Second Opinion & Slide Review";
	const isHisto = serviceTitle === "Histopathology";
	const isOnco = serviceTitle === "Oncopathology";
	const isCyto = serviceTitle === "Cytopathology";
	const isIHC = serviceTitle === "Immunohistochemistry";
	const isMolecular = serviceTitle === "Molecular & Ancillary Testing";
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isSubmitting) return;
		if (!patient.name || !isSecondOpinion && !patient.age || !isSecondOpinion && !patient.gender || !patient.mobile) {
			toast.error("Please enter required patient details.");
			return;
		}
		setIsSubmitting(true);
		try {
			const { supabase } = await import("../_libs/_.mjs").then((n) => n.n);
			if (isSecondOpinion) {
				const requestId = crypto.randomUUID();
				const { error } = await supabase.from("second_opinion_requests").insert([{
					id: requestId,
					patient_name: patient.name,
					mobile: patient.mobile,
					email: patient.email || null,
					case_description: `Role: ${role}\nDoctor: ${patient.doctor}\nHospital: ${patient.hospital}\n\nCase Details: ${formData.caseDesc || ""}`,
					status: "PENDING"
				}]);
				if (error) throw error;
			} else {
				const requestId = crypto.randomUUID();
				const { error } = await supabase.from("service_requests").insert([{
					id: requestId,
					service_id: serviceId,
					service_name: serviceTitle,
					patient_name: patient.name,
					mobile: patient.mobile,
					email: patient.email || null,
					message: `Age: ${patient.age}, Gender: ${patient.gender}\nDoctor: ${patient.doctor}\nHospital: ${patient.hospital}\n\nCase Details: ${JSON.stringify(formData)}`,
					status: "PENDING"
				}]);
				if (error) throw error;
			}
			toast.success("Request submitted successfully!");
			onSuccess();
		} catch (err) {
			console.error(err);
			toast.error("Failed to submit request.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const handlePatientChange = (e) => {
		setPatient((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	const handleDataChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	const toggleMaterial = (mat) => {
		setFormData((prev) => {
			const current = prev.materialTypes || [];
			if (current.includes(mat)) return {
				...prev,
				materialTypes: current.filter((m) => m !== mat)
			};
			else return {
				...prev,
				materialTypes: [...current, mat]
			};
		});
	};
	const toggleTest = (testId) => {
		setFormData((prev) => {
			const current = prev.selectedTests || [];
			if (current.includes(testId)) return {
				...prev,
				selectedTests: current.filter((id) => id !== testId)
			};
			else return {
				...prev,
				selectedTests: [...current, testId]
			};
		});
	};
	const molecularTests = (0, import_react.useMemo)(() => tests.filter((t) => t.category === "Molecular & Ancillary Testing"), []);
	const [role, setRole] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") return new URLSearchParams(window.location.search).get("role") === "doctor" ? "Doctor" : "Patient / Family";
		return "Patient / Family";
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-12 pb-12",
		children: [
			isSecondOpinion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold text-foreground",
						children: "I am a:"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						"Patient / Family",
						"Doctor",
						"Diagnostic Laboratory"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex cursor-pointer items-center justify-center rounded-xl border ${role === r ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-foreground"} px-4 py-4 font-medium transition-colors hover:bg-secondary/50`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "role",
							value: r,
							checked: role === r,
							onChange: (e) => setRole(e.target.value),
							className: "sr-only"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: r
						})]
					}, r))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold text-foreground",
						children: role === "Patient / Family" || !isSecondOpinion ? "Patient Details" : "Patient Information"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-foreground",
								children: ["Patient Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "text",
								name: "name",
								value: patient.name,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "Enter full name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-foreground",
								children: ["Age ", !isSecondOpinion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: !isSecondOpinion,
								type: "text",
								name: "age",
								value: patient.age,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "e.g. 45"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-foreground",
								children: ["Gender ", !isSecondOpinion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								required: !isSecondOpinion,
								name: "gender",
								value: patient.gender,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select Gender"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Male",
										children: "Male"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Female",
										children: "Female"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Other",
										children: "Other"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-foreground",
								children: ["Mobile Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "tel",
								name: "mobile",
								value: patient.mobile,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "10-digit number"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold text-foreground",
								children: "Email Address"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								name: "email",
								value: patient.email,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "Optional"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold text-foreground",
								children: "Doctor / Referring Physician"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								name: "doctor",
								value: patient.doctor,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "Optional"
							})]
						}),
						!isSecondOpinion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold text-foreground",
								children: "Hospital / Clinic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								name: "hospital",
								value: patient.hospital,
								onChange: handlePatientChange,
								className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
								placeholder: "Optional"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b border-border pb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold text-foreground",
							children: isSecondOpinion ? "Case Information" : isOnco ? "Case Details" : isCyto ? "Sample Details" : isIHC ? "Test / Case Details" : isMolecular ? "Investigation Details" : "Specimen Details"
						})
					}),
					isHisto && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Specimen / Tissue Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "specimenType",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select Option"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Biopsy",
											children: "Biopsy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Surgical Specimen",
											children: "Surgical Specimen"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Tissue Sample",
											children: "Tissue Sample"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Other",
											children: "Other"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Specimen / Case Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "caseDesc",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Is the specimen already available?",
								name: "specimenAvailable",
								onChange: handleDataChange
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous Pathology Report Available?",
								name: "prevReport",
								onChange: handleDataChange
							})
						]
					}),
					isOnco && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Specimen / Tissue Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "specimenType",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Clinical / Case Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "caseDesc",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous Pathology Report?",
								name: "prevReport",
								onChange: handleDataChange
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous IHC / Molecular Report?",
								name: "prevIhc",
								onChange: handleDataChange
							})
						]
					}),
					isSecondOpinion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "What would you like reviewed?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
									children: [
										"Outside Slides",
										"Tissue Blocks",
										"IHC Reports",
										"Diagnostic / Pathology Report",
										"Other"
									].map((mat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:bg-secondary/50 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: formData.materialTypes?.includes(mat),
											onChange: () => toggleMaterial(mat),
											className: "size-4 text-primary focus:ring-primary"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: mat
										})]
									}, mat))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Brief Case Description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "caseDesc",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Previous Diagnosis / Impression"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "prevDiagnosis",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							})
						]
					}),
					isCyto && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Sample Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									name: "sampleType",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select Option"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "FNAC",
											children: "FNAC"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Body Fluid",
											children: "Body Fluid"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Cervical / Pap Sample",
											children: "Cervical / Pap Sample"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Other",
											children: "Other"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Clinical / Case Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "caseDesc",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous Cytology Report Available?",
								name: "prevReport",
								onChange: handleDataChange
							})
						]
					}),
					isIHC && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Specimen / Tissue Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "specimenType",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Clinical Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "purpose",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous Histopathology Report Available?",
								name: "prevHisto",
								onChange: handleDataChange
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous IHC Performed?",
								name: "prevIhc",
								onChange: handleDataChange
							})
						]
					}),
					isMolecular && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Test / Investigation"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto rounded-xl border border-input p-4 bg-background",
									children: [molecularTests.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-start gap-3 cursor-pointer group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: formData.selectedTests?.includes(test.id),
											onChange: () => toggleTest(test.id),
											className: "mt-1 size-4 text-primary focus:ring-primary"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium leading-snug group-hover:text-primary transition-colors",
											children: test.name
										})]
									}, test.id)), molecularTests.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "No specific tests found. Please specify in clinical information."
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Specimen Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "specimenType",
									onChange: handleDataChange,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Case Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "caseDesc",
									onChange: handleDataChange,
									rows: 3,
									className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
								label: "Previous Reports?",
								name: "prevReport",
								onChange: handleDataChange
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-6 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold text-foreground",
						children: "Documents / Reports"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: isSecondOpinion ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Report" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload IHC Report" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Other Document" })
						})
					] }) : isOnco ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Previous Reports" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload relevant pathology documents" })] }) : isIHC ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						formData.prevHisto === "Yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Histopathology Report" }),
						formData.prevIhc === "Yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Previous IHC Report" }),
						formData.prevHisto !== "Yes" && formData.prevIhc !== "Yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload Relevant Reports" })
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUploadBox, { label: "Upload relevant documents" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: isSubmitting,
				className: "w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.01] shadow-md hover:bg-navy-soft mt-8 disabled:opacity-70 disabled:hover:scale-100",
				children: isSubmitting ? "Submitting..." : isSecondOpinion ? "Submit Second Opinion Request" : "Continue →"
			})
		]
	});
}
function RadioGroup({ label, name, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-1 items-center gap-3 rounded-xl border border-border bg-background p-4 cursor-pointer hover:bg-secondary/50 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					name,
					value: "Yes",
					onChange,
					className: "size-4 text-primary focus:ring-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "Yes"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex flex-1 items-center gap-3 rounded-xl border border-border bg-background p-4 cursor-pointer hover:bg-secondary/50 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					name,
					value: "No",
					onChange,
					className: "size-4 text-primary focus:ring-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium",
					children: "No"
				})]
			})]
		})]
	});
}
function FileUploadBox({ label }) {
	const [file, setFile] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold text-foreground",
			children: label
		}), file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileUp, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-medium text-foreground",
						children: file.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [(file.size / 1024 / 1024).toFixed(2), " MB"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFile(null),
				className: "p-2 text-muted-foreground hover:text-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background p-6 transition-colors hover:border-primary/50 hover:bg-secondary/50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-12 items-center justify-center rounded-full bg-secondary text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-medium text-foreground",
					children: "Click to upload document"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "PDF, JPG, PNG up to 10MB"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					className: "hidden",
					accept: ".pdf,.jpg,.jpeg,.png",
					onChange: (e) => {
						if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
					}
				})
			]
		})]
	});
}
//#endregion
export { ServiceDetail as component };
