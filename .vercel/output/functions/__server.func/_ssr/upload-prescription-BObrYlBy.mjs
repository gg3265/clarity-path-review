import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as FileText, j as ChevronRight, k as CircleCheck, r as Upload, t as X, v as Image } from "../_libs/lucide-react.mjs";
import { t as BackButton } from "./BackButton-dhPxIJGw.mjs";
import "../_libs/sonner.mjs";
import { T as cn, c as ContactAction } from "./router-Y1X9ZrKJ.mjs";
import { n as CollectionSelector, r as WalkInMap, t as AddressForm } from "./WalkInMap-o0CE6M6p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/upload-prescription-BObrYlBy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function UploadPrescriptionPage() {
	const [step, setStep] = (0, import_react.useState)("UPLOAD");
	const [file, setFile] = (0, import_react.useState)(null);
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	const [patient, setPatient] = (0, import_react.useState)({
		name: "",
		mobile: "",
		email: "",
		notes: ""
	});
	const [collectionMethod, setCollectionMethod] = (0, import_react.useState)(null);
	const [address, setAddress] = (0, import_react.useState)({
		addressLine1: "",
		addressLine2: "",
		area: "",
		city: "Pune",
		state: "Maharashtra",
		pincode: ""
	});
	const handleNext = (nextStep) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setStep(nextStep);
	};
	const processFile = (selectedFile) => {
		if (![
			"image/jpeg",
			"image/png",
			"image/jpg",
			"application/pdf"
		].includes(selectedFile.type)) {
			alert("Please upload a valid JPG, PNG, or PDF file.");
			return;
		}
		setFile(selectedFile);
		if (selectedFile.type.startsWith("image/")) {
			const url = URL.createObjectURL(selectedFile);
			setPreviewUrl(url);
		} else setPreviewUrl(null);
	};
	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
	};
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
	};
	const removeFile = () => {
		setFile(null);
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		setPreviewUrl(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const canProceedToReview = () => {
		if (collectionMethod === "WALK_IN") return true;
		if (collectionMethod === "HOME") return address.city.toLowerCase().trim() === "pune" && address.state.toLowerCase().trim() === "maharashtra" && address.pincode.length === 6 && address.addressLine1.trim() !== "" && address.area.trim() !== "";
		return false;
	};
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	if (step === "SUCCESS") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[80vh] bg-surface flex flex-col items-center justify-center py-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full bg-background rounded-3xl p-8 md:p-10 shadow-xl text-center border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-green-600" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-display font-extrabold text-foreground mb-4",
					children: "Prescription Received"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-lg mb-8 leading-relaxed",
					children: "Our team will manually review your uploaded prescription and assist you with the requested investigations and next steps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex w-full h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold transition-transform hover:scale-[1.02] shadow-sm",
						children: "Back to Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
						type: "call",
						variant: "outline",
						className: "w-full"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-surface border-b border-border sticky top-[64px] lg:top-[76px] z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
						className: "mb-0",
						onClick: () => {
							if (step === "REVIEW") handleNext("COLLECTION");
							else if (step === "COLLECTION") handleNext("UPLOAD");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:hidden text-xs font-bold uppercase tracking-widest text-primary/70",
						children: [
							step === "UPLOAD" && "Step 1 of 3",
							step === "COLLECTION" && "Step 2 of 3",
							step === "REVIEW" && "Step 3 of 3"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "UPLOAD" && "text-primary"),
								children: "01 Upload"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/30",
								children: "â†’"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "COLLECTION" && "text-primary"),
								children: "02 Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/30",
								children: "â†’"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "REVIEW" && "text-primary"),
								children: "03 Review"
							})
						]
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20 bg-background min-h-[70vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-4xl",
			children: [
				step === "UPLOAD" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in space-y-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4",
							children: "Upload Prescription"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-xl mx-auto",
							children: "Upload a clear image or PDF of your prescription and provide your basic details."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1fr_400px] gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-foreground mb-6",
								children: "Prescription Document"
							}), !file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onDragOver: (e) => {
									e.preventDefault();
									setIsDragging(true);
								},
								onDragLeave: (e) => {
									e.preventDefault();
									setIsDragging(false);
								},
								onDrop: handleDrop,
								onClick: () => fileInputRef.current?.click(),
								className: cn("relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200", isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/50"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										ref: fileInputRef,
										onChange: handleFileChange,
										accept: "image/jpeg, image/png, application/pdf",
										className: "hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-16 h-16 bg-background border border-border shadow-sm rounded-full flex items-center justify-center mb-6 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-8" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-lg text-foreground mb-2",
										children: "Tap to choose a file"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground text-sm mb-6 max-w-xs mx-auto",
										children: "or drag and drop your file here."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap justify-center gap-4 w-full md:hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-background border border-border font-medium text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" }), " Photo"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-background border border-border font-medium text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" }), " File"]
										})]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border rounded-2xl overflow-hidden bg-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 border-b border-border flex justify-between items-center bg-surface",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 overflow-hidden",
										children: [file.type.startsWith("image/") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-5 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-sm truncate",
											children: file.name
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: removeFile,
										className: "p-2 hover:bg-background rounded-full transition-colors text-muted-foreground hover:text-destructive",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
									})]
								}), previewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] w-full bg-black/5 flex items-center justify-center overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: previewUrl,
										alt: "Preview",
										className: "object-contain w-full h-full"
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "aspect-[4/3] w-full bg-surface flex flex-col items-center justify-center text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-16 mb-4 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: "PDF Document Selected"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								if (file) handleNext("COLLECTION");
							},
							className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-foreground mb-6",
								children: "Patient Details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-semibold text-foreground",
											children: "Full Name *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "text",
											value: patient.name,
											onChange: (e) => setPatient({
												...patient,
												name: e.target.value
											}),
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-semibold text-foreground",
											children: "Mobile Number *"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "tel",
											pattern: "[0-9]{10}",
											value: patient.mobile,
											onChange: (e) => setPatient({
												...patient,
												mobile: e.target.value.replace(/\D/g, "").slice(0, 10)
											}),
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-semibold text-foreground",
											children: "Email (Optional)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											value: patient.email,
											onChange: (e) => setPatient({
												...patient,
												email: e.target.value
											}),
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: !file,
											className: "w-full h-14 rounded-full font-bold transition-all bg-primary text-primary-foreground hover:bg-navy-soft shadow-md disabled:bg-secondary disabled:text-muted-foreground disabled:shadow-none",
											children: ["Continue to Collection ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "inline size-5 ml-1" })]
										})
									})
								]
							})]
						})]
					})]
				}),
				step === "COLLECTION" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto animate-fade-in slide-in-from-right-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3",
							children: "Sample Collection"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg mb-8",
							children: "How would you like to give your sample?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSelector, {
							selected: collectionMethod,
							onChange: setCollectionMethod
						}),
						collectionMethod === "HOME" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								if (canProceedToReview()) handleNext("REVIEW");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressForm, {
								value: address,
								onChange: setAddress
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !canProceedToReview(),
									className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm disabled:opacity-50",
									children: "Review Request"
								})
							})]
						}),
						collectionMethod === "WALK_IN" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkInMap, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end pt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleNext("REVIEW"),
								className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm",
								children: "Review Request"
							})
						})] })
					]
				}),
				step === "REVIEW" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto animate-fade-in slide-in-from-right-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8",
							children: "Review Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-4 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-foreground",
											children: "Prescription"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleNext("UPLOAD"),
											className: "text-sm font-semibold text-primary hover:underline",
											children: "Edit"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: file?.name
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-4 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-foreground",
											children: "Patient"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleNext("UPLOAD"),
											className: "text-sm font-semibold text-primary hover:underline",
											children: "Edit"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground uppercase text-xs font-bold",
											children: "Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: patient.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-muted-foreground uppercase text-xs font-bold",
											children: "Mobile"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold",
											children: patient.mobile
										})] })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border pb-4 mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold text-foreground",
												children: "Collection Method"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleNext("COLLECTION"),
												className: "text-sm font-semibold text-primary hover:underline",
												children: "Edit"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-6",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "inline-flex items-center gap-2 font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl",
												children: collectionMethod === "HOME" ? "ðŸ\xA0 Home Collection (Pune)" : "ðŸ“ Walk-in Centre (Pune)"
											})
										}),
										collectionMethod === "HOME" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm space-y-1 bg-background p-4 rounded-xl border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-foreground",
													children: address.addressLine1
												}),
												address.addressLine2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground",
													children: address.addressLine2
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-muted-foreground",
													children: [
														address.area,
														", ",
														address.city
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-muted-foreground",
													children: [
														address.state,
														" - ",
														address.pincode
													]
												})
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm space-y-1 bg-background p-4 rounded-xl border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-foreground",
													children: "SECOND OPINION CRL"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground",
													children: "557, Vireen Heights, 3rd Floor,"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-muted-foreground",
													children: "Laxmi Road, Sadashiv Peth, Pune 411030"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-4",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: "https://maps.google.com/?q=557,+Vireen+Heights,+3rd+Floor,+Laxmi+Road,+Sadashiv+Peth,+Pune+411030",
														target: "_blank",
														rel: "noreferrer",
														className: "text-primary font-semibold hover:underline",
														children: "Get Directions â†’"
													})
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-primary/5 rounded-3xl p-6 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-bold text-foreground text-center sm:text-left",
										children: "Need help?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center sm:text-left",
										children: "Our team is ready to assist you."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
											context: "prescription",
											type: "call",
											variant: "outline",
											className: "flex-1 sm:flex-none"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
											context: "prescription",
											type: "whatsapp",
											variant: "solid",
											className: "flex-1 sm:flex-none"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleNext("SUCCESS"),
								className: "w-full flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-navy-soft transition-transform hover:scale-[1.01] shadow-md",
								children: isSubmitting ? "Submitting..." : "Submit Prescription Request"
							})
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { UploadPrescriptionPage as component };
