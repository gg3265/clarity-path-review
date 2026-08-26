import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as FileText, L as ArrowLeft, g as LoaderCircle, j as ChevronRight, k as CircleCheck, r as Upload, t as X } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Route$2 } from "./router-dwDVHqyE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cancer-pathology_._specialtyId-DtihSY6l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var specialtiesMap = {
	"breast-pathology": {
		name: "Breast Pathology",
		category: "Cancer Pathology"
	},
	"gi-pathology": {
		name: "GI Pathology",
		category: "Cancer Pathology"
	},
	"head-neck-pathology": {
		name: "Head & Neck Pathology",
		category: "Cancer Pathology"
	},
	"gynaecological-pathology": {
		name: "Gynaecological Pathology",
		category: "Cancer Pathology"
	},
	"genitourinary-pathology": {
		name: "Genitourinary Pathology",
		category: "Cancer Pathology"
	},
	"lung-pathology": {
		name: "Lung Pathology",
		category: "Cancer Pathology"
	},
	"haematolymphoid-pathology": {
		name: "Haematolymphoid Pathology",
		category: "Cancer Pathology"
	},
	"bone-soft-tissue-tumours": {
		name: "Bone & Soft Tissue Tumours",
		category: "Cancer Pathology"
	},
	"skin-pathology": {
		name: "Skin Pathology",
		category: "Cancer Pathology"
	},
	"endocrine-pathology": {
		name: "Endocrine Pathology",
		category: "Cancer Pathology"
	},
	"cns-pathology": {
		name: "CNS Pathology",
		category: "Cancer Pathology"
	},
	"metastatic-malignancies": {
		name: "Metastatic Malignancies",
		category: "Cancer Pathology"
	}
};
function CancerPathologyForm() {
	const { specialtyId } = Route$2.useParams();
	useNavigate();
	const specialty = specialtiesMap[specialtyId];
	if (!specialty) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-20 text-center",
		children: "Specialty not found."
	});
	const [step, setStep] = (0, import_react.useState)(1);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [submittedRef, setSubmittedRef] = (0, import_react.useState)(null);
	const [patient, setPatient] = (0, import_react.useState)({
		name: "",
		age: "",
		gender: "",
		mobile: "",
		email: "",
		patientId: ""
	});
	const [caseInfo, setCaseInfo] = (0, import_react.useState)({
		reason: "",
		history: "",
		knownDiagnosis: "",
		previousReport: "",
		previousTreatment: "",
		imagingInfo: ""
	});
	const [materials, setMaterials] = (0, import_react.useState)({
		items: [],
		otherMaterial: "",
		originalsAvailable: ""
	});
	const [specificDetails, setSpecificDetails] = (0, import_react.useState)({});
	const [files, setFiles] = (0, import_react.useState)([]);
	const fileInputRef = (0, import_react.useRef)(null);
	const handleNext = () => {
		if (step === 1) {
			if (!patient.name || !patient.age || !patient.gender || !patient.mobile) {
				toast.error("Please fill all required patient details.");
				return;
			}
		}
		if (step === 2) {
			if (!caseInfo.reason || !caseInfo.history) {
				toast.error("Please provide the reason for review and clinical history.");
				return;
			}
		}
		setStep((s) => s + 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleBack = () => {
		setStep((s) => Math.max(1, s - 1));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleMaterialToggle = (item) => {
		setMaterials((prev) => {
			const isSelected = prev.items.includes(item);
			return {
				...prev,
				items: isSelected ? prev.items.filter((i) => i !== item) : [...prev.items, item]
			};
		});
	};
	const handleSpecificChange = (key, value) => {
		setSpecificDetails((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const handleFileSelect = (e) => {
		if (e.target.files) {
			const selected = Array.from(e.target.files);
			const valid = selected.filter((f) => f.size <= 10485760);
			if (valid.length < selected.length) toast.error("Some files were too large (max 10MB).");
			setFiles((prev) => [...prev, ...valid]);
		}
	};
	const removeFile = (index) => {
		setFiles((prev) => prev.filter((_, i) => i !== index));
	};
	const submitForm = async () => {
		setIsSubmitting(true);
		try {
			const { supabase } = await import("../_libs/_.mjs").then((n) => n.n);
			const referenceNumber = `CRL-CP-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(1e3 + Math.random() * 9e3)}`;
			const uploadedFileRecords = [];
			const requestId = crypto.randomUUID();
			if (files.length > 0) for (const file of files) {
				const fileExt = file.name.split(".").pop();
				const fileName = `${requestId}/${crypto.randomUUID()}.${fileExt}`;
				const { error: uploadError } = await supabase.storage.from("second-opinion-documents").upload(fileName, file);
				if (uploadError) throw uploadError;
				uploadedFileRecords.push({
					id: crypto.randomUUID(),
					request_id: requestId,
					file_path: fileName,
					file_name: file.name,
					file_type: file.type || "application/octet-stream"
				});
			}
			let fullDescription = `REFERENCE: ${referenceNumber}\n`;
			fullDescription += `CATEGORY: ${specialty.category} - ${specialty.name}\n\n`;
			fullDescription += `PATIENT: ${patient.name}, ${patient.age}, ${patient.gender}\n`;
			fullDescription += `ID: ${patient.patientId || "N/A"}\n\n`;
			fullDescription += `CASE INFO:\nReason: ${caseInfo.reason}\nHistory: ${caseInfo.history}\n`;
			fullDescription += `Known Dx: ${caseInfo.knownDiagnosis || "N/A"}\nPrev Report: ${caseInfo.previousReport || "N/A"}\n`;
			fullDescription += `Prev Treatment: ${caseInfo.previousTreatment || "N/A"}\nImaging: ${caseInfo.imagingInfo || "N/A"}\n\n`;
			fullDescription += `MATERIALS:\n${materials.items.join(", ")}\n`;
			if (materials.items.includes("Other")) fullDescription += `Other Material: ${materials.otherMaterial}\n`;
			fullDescription += `Originals available: ${materials.originalsAvailable}\n\n`;
			fullDescription += `SPECIFIC DETAILS:\n`;
			for (const [k, v] of Object.entries(specificDetails)) fullDescription += `${k}: ${v}\n`;
			const { error: reqError } = await supabase.from("second_opinion_requests").insert([{
				id: requestId,
				patient_name: patient.name,
				mobile: patient.mobile,
				email: patient.email || null,
				case_description: fullDescription,
				status: "PENDING"
			}]);
			if (reqError) throw reqError;
			if (uploadedFileRecords.length > 0) {
				const { error: fileError } = await supabase.from("second_opinion_files").insert(uploadedFileRecords);
				if (fileError) throw fileError;
			}
			setSubmittedRef(referenceNumber);
			setStep(7);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} catch (error) {
			console.error(error);
			toast.error("An error occurred while submitting your request.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const renderStep = () => {
		switch (step) {
			case 1: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold font-display",
					children: "Patient Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Full Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: patient.name,
								onChange: (e) => setPatient({
									...patient,
									name: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Age *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: patient.age,
									onChange: (e) => setPatient({
										...patient,
										age: e.target.value
									}),
									className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Gender *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: patient.gender,
									onChange: (e) => setPatient({
										...patient,
										gender: e.target.value
									}),
									className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select"
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
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Mobile Number *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								value: patient.mobile,
								onChange: (e) => setPatient({
									...patient,
									mobile: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Email *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: patient.email,
								onChange: (e) => setPatient({
									...patient,
									email: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Patient ID / Hospital ID (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: patient.patientId,
								onChange: (e) => setPatient({
									...patient,
									patientId: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						})
					]
				})]
			});
			case 2: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold font-display",
					children: "Case Information"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Reason for requesting review *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: caseInfo.reason,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									reason: e.target.value
								}),
								rows: 3,
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Clinical history *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: caseInfo.history,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									history: e.target.value
								}),
								rows: 3,
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Known/suspected diagnosis (if available)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: caseInfo.knownDiagnosis,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									knownDiagnosis: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Previous pathology diagnosis/report"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: caseInfo.previousReport,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									previousReport: e.target.value
								}),
								rows: 2,
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Previous treatment, if relevant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: caseInfo.previousTreatment,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									previousTreatment: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Relevant imaging information"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: caseInfo.imagingInfo,
								onChange: (e) => setCaseInfo({
									...caseInfo,
									imagingInfo: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						})
					]
				})]
			});
			case 3: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold font-display",
					children: "Pathology Material Available"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold",
							children: "Select available materials:"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-3",
							children: [
								"Histopathology slides",
								"Paraffin block",
								"Cytology/FNAC slides",
								"Cell block",
								"IHC slides/report",
								"Molecular/ancillary test reports",
								"Previous pathology report",
								"Other"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: materials.items.includes(item),
									onChange: () => handleMaterialToggle(item),
									className: "rounded border-input text-primary focus:ring-primary/20 size-4"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: item
								})]
							}, item))
						}),
						materials.items.includes("Other") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Please specify"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: materials.otherMaterial,
								onChange: (e) => setMaterials({
									...materials,
									otherMaterial: e.target.value
								}),
								className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 pt-6 border-t border-border mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold",
								children: "Are original slides/blocks available for review?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-4",
								children: [
									"Yes",
									"No",
									"Not sure"
								].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "originals",
										value: opt,
										checked: materials.originalsAvailable === opt,
										onChange: (e) => setMaterials({
											...materials,
											originalsAvailable: e.target.value
										}),
										className: "text-primary focus:ring-primary/20 size-4"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: opt
									})]
								}, opt))
							})]
						})
					]
				})]
			});
			case 4: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-2xl font-bold font-display",
					children: [specialty.name, " Specific Details"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						specialtyId === "breast-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Case type",
								options: [
									"Breast biopsy",
									"Lumpectomy / wide local excision",
									"Mastectomy",
									"Lymph node",
									"Other"
								],
								value: specificDetails.caseType || "",
								onChange: (v) => handleSpecificChange("caseType", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Known/suspected lesion",
								options: [
									"Benign lesion",
									"Atypical lesion",
									"In situ lesion",
									"Invasive carcinoma",
									"Metastatic lesion",
									"Unknown / not sure"
								],
								value: specificDetails.lesion || "",
								onChange: (v) => handleSpecificChange("lesion", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Tumour type / previous diagnosis (if available)",
								value: specificDetails.tumourType || "",
								onChange: (v) => handleSpecificChange("tumourType", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "ER Status",
										options: [
											"Positive",
											"Negative",
											"Not available",
											"Not sure"
										],
										value: specificDetails.erStatus || "",
										onChange: (v) => handleSpecificChange("erStatus", v)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "PR Status",
										options: [
											"Positive",
											"Negative",
											"Not available",
											"Not sure"
										],
										value: specificDetails.prStatus || "",
										onChange: (v) => handleSpecificChange("prStatus", v)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "HER2 Status",
										options: [
											"Positive",
											"Equivocal",
											"Negative",
											"Not available",
											"Not sure"
										],
										value: specificDetails.her2Status || "",
										onChange: (v) => handleSpecificChange("her2Status", v)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
										label: "Ki-67",
										options: [
											"Known results",
											"Not available",
											"Not sure"
										],
										value: specificDetails.ki67 || "",
										onChange: (v) => handleSpecificChange("ki67", v)
									})
								]
							})
						] }),
						specialtyId === "gi-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Site",
								options: [
									"Oesophagus",
									"Stomach",
									"Small intestine",
									"Colon",
									"Rectum",
									"Appendix",
									"Liver",
									"Pancreas",
									"Biliary tract",
									"Other"
								],
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen type",
								options: [
									"Biopsy",
									"Resection",
									"Polypectomy",
									"FNAC/cytology",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if any",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "IHC/molecular information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "head-neck-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Site",
								options: [
									"Oral cavity",
									"Oropharynx",
									"Nasopharynx",
									"Larynx",
									"Salivary gland",
									"Thyroid",
									"Lymph node",
									"Other"
								],
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Biopsy",
									"Resection",
									"FNAC",
									"Cell block",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Relevant IHC/HPV-related information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "gynaecological-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Site",
								options: [
									"Cervix",
									"Endometrium",
									"Ovary",
									"Uterus",
									"Vulva",
									"Vagina",
									"Fallopian tube",
									"Other"
								],
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Biopsy",
									"Curettage",
									"Resection",
									"Cytology",
									"FNAC",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Relevant IHC information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "genitourinary-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Site",
								options: [
									"Kidney",
									"Urinary bladder",
									"Prostate",
									"Testis",
									"Ureter",
									"Other"
								],
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Biopsy",
									"Resection",
									"TURBT",
									"Prostate biopsy",
									"FNAC/cytology",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Relevant IHC information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "lung-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Bronchoscopic biopsy",
									"Lung biopsy",
									"Resection",
									"FNAC",
									"Cytology",
									"Cell block",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Known/suspected diagnosis",
								options: [
									"Primary lung tumour",
									"Metastatic tumour",
									"Unknown",
									"Other"
								],
								value: specificDetails.diagnosisType || "",
								onChange: (v) => handleSpecificChange("diagnosisType", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous pathology diagnosis (if available)",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "IHC results (if available)",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Molecular/biomarker results (if available)",
								value: specificDetails.molecular || "",
								onChange: (v) => handleSpecificChange("molecular", v)
							})
						] }),
						specialtyId === "haematolymphoid-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Case type",
								options: [
									"Lymph node",
									"Bone marrow",
									"Blood",
									"Tissue biopsy",
									"Other"
								],
								value: specificDetails.caseType || "",
								onChange: (v) => handleSpecificChange("caseType", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Clinical concern",
								options: [
									"Lymphoma",
									"Leukaemia",
									"Other haematolymphoid disorder",
									"Not sure"
								],
								value: specificDetails.concern || "",
								onChange: (v) => handleSpecificChange("concern", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Available investigations:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										"Histopathology",
										"IHC",
										"Flow cytometry",
										"Bone marrow report",
										"Cytogenetics",
										"Molecular testing",
										"Other"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: specificDetails.investigations?.includes(item),
											onChange: (e) => {
												const current = specificDetails.investigations ? specificDetails.investigations.split(", ") : [];
												if (e.target.checked) handleSpecificChange("investigations", [...current, item].join(", "));
												else handleSpecificChange("investigations", current.filter((i) => i !== item).join(", "));
											},
											className: "rounded border-input text-primary focus:ring-primary/20 size-4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: item
										})]
									}, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							})
						] }),
						specialtyId === "bone-soft-tissue-tumours" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Site (e.g. Bone, Soft tissue, Muscle, etc.)",
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Core biopsy",
									"Excision",
									"Resection",
									"FNAC",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Imaging available:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										"MRI",
										"CT",
										"X-ray",
										"PET/CT",
										"Other"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: specificDetails.imaging?.includes(item),
											onChange: (e) => {
												const current = specificDetails.imaging ? specificDetails.imaging.split(", ") : [];
												if (e.target.checked) handleSpecificChange("imaging", [...current, item].join(", "));
												else handleSpecificChange("imaging", current.filter((i) => i !== item).join(", "));
											},
											className: "rounded border-input text-primary focus:ring-primary/20 size-4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: item
										})]
									}, item))
								})]
							})
						] }),
						specialtyId === "skin-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Skin biopsy",
									"Excision",
									"Re-excision",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Site",
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Clinical concern",
								options: [
									"Melanocytic lesion",
									"Carcinoma",
									"Lymphoid lesion",
									"Sarcoma",
									"Other",
									"Not sure"
								],
								value: specificDetails.concern || "",
								onChange: (v) => handleSpecificChange("concern", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "IHC information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "endocrine-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Site",
								options: [
									"Thyroid",
									"Parathyroid",
									"Adrenal",
									"Pancreas/endocrine tumour",
									"Other"
								],
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"FNAC",
									"Biopsy",
									"Resection",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous diagnosis, if available",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "IHC information if available",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							})
						] }),
						specialtyId === "cns-pathology" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Site",
								value: specificDetails.site || "",
								onChange: (v) => handleSpecificChange("site", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Specimen",
								options: [
									"Biopsy",
									"Resection",
									"Other"
								],
								value: specificDetails.specimen || "",
								onChange: (v) => handleSpecificChange("specimen", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Available information:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										"Histopathology",
										"IHC",
										"Molecular testing",
										"Imaging report",
										"Previous pathology report"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: specificDetails.info?.includes(item),
											onChange: (e) => {
												const current = specificDetails.info ? specificDetails.info.split(", ") : [];
												if (e.target.checked) handleSpecificChange("info", [...current, item].join(", "));
												else handleSpecificChange("info", current.filter((i) => i !== item).join(", "));
											},
											className: "rounded border-input text-primary focus:ring-primary/20 size-4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: item
										})]
									}, item))
								})]
							})
						] }),
						specialtyId === "metastatic-malignancies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Known or suspected primary site",
								options: [
									"Breast",
									"Lung",
									"GI",
									"Gynaecological",
									"Genitourinary",
									"Head & neck",
									"Skin",
									"CNS",
									"Other",
									"Unknown primary"
								],
								value: specificDetails.primary || "",
								onChange: (v) => handleSpecificChange("primary", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Site of metastasis",
								value: specificDetails.metastasis || "",
								onChange: (v) => handleSpecificChange("metastasis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Is the primary site currently uncertain?",
								options: [
									"Yes",
									"No",
									"Not sure"
								],
								value: specificDetails.uncertain || "",
								onChange: (v) => handleSpecificChange("uncertain", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous pathology diagnosis",
								value: specificDetails.diagnosis || "",
								onChange: (v) => handleSpecificChange("diagnosis", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputField, {
								label: "Previous IHC results",
								value: specificDetails.ihc || "",
								onChange: (v) => handleSpecificChange("ihc", v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold",
									children: "Available imaging:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid sm:grid-cols-2 gap-2",
									children: [
										"CT",
										"MRI",
										"PET/CT",
										"Other"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: specificDetails.imaging?.includes(item),
											onChange: (e) => {
												const current = specificDetails.imaging ? specificDetails.imaging.split(", ") : [];
												if (e.target.checked) handleSpecificChange("imaging", [...current, item].join(", "));
												else handleSpecificChange("imaging", current.filter((i) => i !== item).join(", "));
											},
											className: "rounded border-input text-primary focus:ring-primary/20 size-4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: item
										})]
									}, item))
								})]
							})
						] })
					]
				})]
			});
			case 5: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-bold font-display",
						children: "Upload Documents"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Please upload any relevant pathology reports, IHC reports, molecular reports, or clinical documents. (Max 10MB per file. Allowed: PDF, JPG, PNG)."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-2 border-dashed border-border hover:border-primary/50 transition-colors rounded-2xl p-10 text-center cursor-pointer bg-surface",
						onClick: () => fileInputRef.current?.click(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-8 text-primary/40 mx-auto mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: "Click to select files"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: "or drag and drop here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								ref: fileInputRef,
								className: "hidden",
								multiple: true,
								accept: ".pdf,.jpg,.jpeg,.png",
								onChange: handleFileSelect
							})
						]
					}),
					files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 mt-6",
						children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between p-3 rounded-xl bg-background border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 text-primary shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium truncate",
										children: f.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground shrink-0",
										children: [(f.size / 1024 / 1024).toFixed(2), " MB"]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => removeFile(i),
								className: "p-2 text-muted-foreground hover:text-destructive transition-colors shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}, i))
					})
				]
			});
			case 6: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 animate-fade-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-bold font-display",
					children: "Review Request"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface p-6 rounded-2xl border border-border space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
							children: "Service"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: specialty.name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-6 pt-4 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Patient Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm",
									children: [
										patient.name,
										", ",
										patient.age,
										" (",
										patient.gender,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: patient.mobile
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: patient.email
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
									children: "Case Summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium",
									children: ["Reason: ", caseInfo.reason]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground line-clamp-2 mt-1",
									children: caseInfo.history
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Specific Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-2 gap-2",
								children: Object.entries(specificDetails).filter(([_, v]) => v).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium capitalize",
											children: [k.replace(/([A-Z])/g, " $1"), ":"]
										}),
										" ",
										v
									]
								}, k))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2",
								children: "Documents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [files.length, " file(s) attached."]
							})]
						})
					]
				})]
			});
			case 7: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-12 animate-fade-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex size-16 items-center justify-center rounded-full bg-green-100 mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8 text-green-600" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl font-display font-bold mb-4",
						children: "Request Submitted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-muted-foreground mb-2",
						children: "Your request for specialist review has been received."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-mono font-semibold bg-surface inline-block px-4 py-2 rounded-lg border border-border",
						children: ["Reference: ", submittedRef]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-primary font-semibold hover:underline",
							children: "Return to Home"
						})
					})
				]
			});
			default: return null;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Cancer Pathology Services",
		title: specialty?.name,
		intro: "Complete the information below to request a specialist review.",
		watermark: "REQUEST",
		showBack: true,
		backFallback: "/#cancer-services",
		onBackClick: () => {
			if (step > 1 && step < 7) {
				setStep((s) => s - 1);
				window.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return true;
			}
			return false;
		}
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [step < 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
						children: [
							"Step ",
							step,
							" of 6"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-primary uppercase tracking-wider",
						children: [
							"Patient",
							"Case",
							"Materials",
							"Specifics",
							"Documents",
							"Review"
						][step - 1]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 w-full bg-surface rounded-full overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-primary transition-all duration-300",
						style: { width: `${step / 6 * 100}%` }
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-background sm:bg-surface sm:p-10 sm:rounded-3xl sm:border border-border min-h-[400px]",
				children: [renderStep(), step < 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center justify-between pt-6 border-t border-border",
					children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleBack,
						disabled: isSubmitting,
						className: "flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), step < 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleNext,
						className: "flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-navy-soft transition-colors",
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: submitForm,
						disabled: isSubmitting,
						className: "flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white hover:bg-teal transition-colors disabled:opacity-70",
						children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Submitting..."] }) : "Submit Request"
					})]
				})]
			})]
		})
	})] });
}
function InputField({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
		})]
	});
}
function SelectField({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Select option"
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o,
				children: o
			}, o))]
		})]
	});
}
//#endregion
export { CancerPathologyForm as component };
