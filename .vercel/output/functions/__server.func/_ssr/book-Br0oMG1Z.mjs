import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, j as ChevronRight, s as Search } from "../_libs/lucide-react.mjs";
import { t as BackButton } from "./BackButton-dhPxIJGw.mjs";
import { t as PageHeader } from "./PageHeader-BZXfVBGb.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as supabase, T as cn, c as ContactAction, s as useCart } from "./router-Y1X9ZrKJ.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
import { n as CollectionSelector, r as WalkInMap, t as AddressForm } from "./WalkInMap-o0CE6M6p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-Br0oMG1Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookPage() {
	const { selectedTests, selectedPackages, isLoaded, removeTest, removePackage, totalEstimatedPrice, hasConflict, clearCart } = useCart();
	const navigate = useNavigate();
	const totalItems = (selectedTests?.length || 0) + (selectedPackages?.length || 0);
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, []);
	const handleRemoveTest = (id) => {
		removeTest(id);
		if (totalItems === 1 && selectedTests.length === 1 && selectedTests[0]?.id === id) setStep("TESTS");
	};
	const handleRemovePackage = (id) => {
		removePackage(id);
		if (totalItems === 1 && selectedPackages.length === 1 && selectedPackages[0]?.id === id) setStep("TESTS");
	};
	const [step, setStep] = (0, import_react.useState)("DETAILS");
	const [patient, setPatient] = (0, import_react.useState)({
		name: "",
		age: "",
		gender: "",
		mobile: "",
		email: "",
		notes: ""
	});
	const [address, setAddress] = (0, import_react.useState)({
		addressLine1: "",
		addressLine2: "",
		area: "",
		city: "Pune",
		state: "Maharashtra",
		pincode: ""
	});
	const [collectionMethod, setCollectionMethod] = (0, import_react.useState)(null);
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("");
	const [bookingRef, setBookingRef] = (0, import_react.useState)("");
	const handleNext = (nextStep) => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setStep(nextStep);
	};
	const [isConfirming, setIsConfirming] = (0, import_react.useState)(false);
	const handleConfirm = async () => {
		if (isConfirming) return;
		setIsConfirming(true);
		try {
			const ref = `SOCRL-2026-${Math.floor(1e3 + Math.random() * 9e3)}`;
			const { data: patientData, error: patientError } = await supabase.from("patients").insert({
				name: patient.name,
				age: patient.age,
				gender: patient.gender,
				mobile: patient.mobile,
				email: patient.email
			}).select().single();
			if (patientError) throw patientError;
			const { data: bookingDataDB, error: bookingError } = await supabase.from("bookings").insert({
				ref_id: ref,
				patient_id: patientData.id,
				collection_method: collectionMethod,
				address_line1: address.addressLine1,
				address_line2: address.addressLine2,
				area: address.area,
				city: address.city,
				state: address.state,
				pincode: address.pincode,
				appointment_date: date,
				appointment_time: time,
				notes: "",
				total_price: totalEstimatedPrice,
				status: "PENDING"
			}).select().single();
			if (bookingError) throw bookingError;
			if (selectedTests.length > 0) {
				const testsToInsert = selectedTests.map((t) => ({
					booking_id: bookingDataDB.id,
					test_id: t.id,
					price_at_booking: t.price || t.sheet1Price || 0
				}));
				const { error: testsError } = await supabase.from("booking_tests").insert(testsToInsert);
				if (testsError) throw testsError;
			}
			if (selectedPackages.length > 0) {
				const pkgsToInsert = selectedPackages.map((p) => ({
					booking_id: bookingDataDB.id,
					package_id: p.id,
					price_at_booking: p.price
				}));
				const { error: pkgsError } = await supabase.from("booking_packages").insert(pkgsToInsert);
				if (pkgsError) throw pkgsError;
			}
			const bookingDataLocal = {
				ref,
				patient,
				selectedTests,
				selectedPackages,
				totalEstimatedPrice,
				collectionMethod,
				address: collectionMethod === "HOME" ? address : void 0,
				appointment: date || time ? {
					date,
					time
				} : void 0,
				notes: ""
			};
			sessionStorage.setItem("lastBookingConfirmation", JSON.stringify(bookingDataLocal));
			clearCart();
			navigate({ to: "/confirmation" });
		} catch (e) {
			console.error(e);
			toast.error("Failed to submit booking: " + e.message);
			setIsConfirming(false);
		}
	};
	const canProceedToReview = () => {
		if (collectionMethod === "WALK_IN") return true;
		if (collectionMethod === "HOME") return address.city.toLowerCase().trim() === "pune" && address.state.toLowerCase().trim() === "maharashtra" && address.pincode.length === 6 && address.addressLine1.trim() !== "" && address.area.trim() !== "";
		return false;
	};
	if (!isLoaded) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground font-medium",
			children: "Loading booking securely..."
		})]
	});
	if (totalItems === 0 && !isConfirming) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Booking",
		eyebrow: "Checkout",
		intro: "Secure checkout"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20 min-h-[60vh] bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-16 bg-surface rounded-3xl border border-border shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 text-muted-foreground shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-display font-extrabold text-foreground mb-4",
						children: "Start a Booking"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-8 text-lg",
						children: "Select a test or package to continue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tests",
							className: "inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm",
							children: "Find a Test"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/packages",
							className: "inline-flex h-12 items-center justify-center rounded-xl bg-secondary px-8 text-base font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors shadow-sm",
							children: "View Packages"
						})]
					})
				]
			})
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-surface border-b border-border sticky top-[64px] lg:top-[76px] z-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
						className: "mb-0",
						fallbackUrl: "/tests",
						onClick: () => {
							if (step === "REVIEW") handleNext("COLLECTION");
							else if (step === "COLLECTION") handleNext("DETAILS");
							else if (step === "DETAILS") handleNext("TESTS");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:hidden text-xs font-bold uppercase tracking-widest text-primary/70",
						children: [
							step === "TESTS" && "Step 1 of 4",
							step === "DETAILS" && "Step 2 of 4",
							step === "COLLECTION" && "Step 3 of 4",
							step === "REVIEW" && "Step 4 of 4"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "TESTS" && "text-primary"),
								children: "01 Tests"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/30",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "DETAILS" && "text-primary"),
								children: "02 Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/30",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "COLLECTION" && "text-primary"),
								children: "03 Collection"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/30",
								children: "→"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn(step === "REVIEW" && "text-primary"),
								children: "04 Review"
							})
						]
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-20 min-h-[70vh] bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [
				step === "TESTS" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8",
						children: "Your Tests"
					}), totalItems === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-16 bg-surface rounded-3xl border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4 text-muted-foreground shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-foreground mb-2",
								children: "No items selected"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-6",
								children: "Please select at least one test or package to continue with your booking."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/packages",
									className: "inline-flex h-11 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors",
									children: "View Packages"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tests",
									className: "inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-navy-soft transition-colors",
									children: "Find a Test"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 mb-8",
							children: [selectedPackages?.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-5 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pr-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-foreground",
										children: pkg?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-primary mt-1 uppercase tracking-wider font-bold",
										children: "Package"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0 flex flex-col items-end gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display font-bold text-lg text-foreground",
										children: formatPrice(pkg?.price)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleRemovePackage(pkg.id),
										className: "text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors",
										children: "Remove"
									})]
								})]
							}, pkg.id)), selectedTests.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-5 bg-surface rounded-2xl border border-border shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pr-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-foreground",
										children: test.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mt-1 uppercase tracking-wider font-bold",
										children: test.category
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0 flex flex-col items-end gap-2",
									children: [test.priceStatus === "Confirmed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display font-bold text-lg text-foreground",
										children: formatPrice(test.sheet1Price || test.sheet2MRP)
									}) : test.priceStatus === "Sheet 2 Only" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-display font-bold text-lg text-foreground",
										children: [
											formatPrice(test.sheet2MRP),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground uppercase block",
												children: "MRP"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), " Confirm"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleRemoveTest(test.id),
										className: "text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors",
										children: "Remove"
									})]
								})]
							}, test.id))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground font-medium",
									children: "Total Items"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-foreground",
									children: totalItems
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-6 flex justify-between items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold text-foreground",
									children: "Estimated Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-right",
									children: hasConflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-bold text-amber-600",
										children: "Price confirmation required"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl font-display font-extrabold text-foreground",
										children: formatPrice(totalEstimatedPrice)
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tests",
								className: "text-primary font-semibold text-sm hover:underline hidden sm:block",
								children: "+ Add more tests"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleNext("DETAILS"),
								className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm",
								children: ["Continue to Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5 ml-1" })]
							})]
						})
					] })]
				}),
				step === "DETAILS" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in slide-in-from-right-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8",
						children: "Your Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleNext("COLLECTION");
						},
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-foreground border-b border-border pb-4",
										children: "Patient Details"
									}),
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
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
											placeholder: "Enter patient's full name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-semibold text-foreground",
												children: "Age"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: patient.age,
												onChange: (e) => setPatient({
													...patient,
													age: e.target.value
												}),
												className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
												placeholder: "e.g. 34 Years"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-sm font-semibold text-foreground",
												children: "Gender"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: patient.gender,
												onChange: (e) => setPatient({
													...patient,
													gender: e.target.value
												}),
												className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none",
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
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-foreground border-b border-border pb-4",
										children: "Contact Details"
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
											title: "Please enter a valid 10-digit mobile number",
											value: patient.mobile,
											onChange: (e) => setPatient({
												...patient,
												mobile: e.target.value.replace(/\D/g, "").slice(0, 10)
											}),
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
											placeholder: "10-digit mobile number"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-sm font-semibold text-foreground",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											value: patient.email,
											onChange: (e) => setPatient({
												...patient,
												email: e.target.value
											}),
											className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
											placeholder: "For receiving reports (optional)"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold text-foreground border-b border-border pb-4",
									children: "Additional Info"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-sm font-semibold text-foreground",
										children: "Doctor / Hospital Name (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: patient.notes,
										onChange: (e) => setPatient({
											...patient,
											notes: e.target.value
										}),
										className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
										placeholder: "Referring doctor"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm",
									children: "Continue to Collection"
								})
							})
						]
					})]
				}),
				step === "COLLECTION" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in slide-in-from-right-8",
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
								onChange: setAddress,
								showTimeFields: true,
								date,
								time,
								onDateChange: setDate,
								onTimeChange: setTime
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end pt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: !canProceedToReview(),
									className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
									children: "Review Booking"
								})
							})]
						}),
						collectionMethod === "WALK_IN" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalkInMap, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end pt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleNext("REVIEW"),
								className: "w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm",
								children: "Review Booking"
							})
						})] })
					]
				}),
				step === "REVIEW" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in slide-in-from-right-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8",
							children: "Review Your Booking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border pb-4 mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-bold text-foreground",
												children: "Booking Items"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleNext("TESTS"),
												className: "text-sm font-semibold text-primary hover:underline",
												children: "Edit"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 mb-6",
											children: [selectedPackages.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-start text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground pr-4",
													children: pkg.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold shrink-0",
													children: formatPrice(pkg.price)
												})]
											}, pkg.id)), selectedTests.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-start text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground pr-4",
													children: test.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-bold shrink-0",
													children: test.priceStatus === "Confirmed" ? formatPrice(test.sheet1Price || test.sheet2MRP) : test.priceStatus === "Sheet 2 Only" ? formatPrice(test.sheet2MRP) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-amber-600",
														children: "Confirmation Required"
													})
												})]
											}, test.id))]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-border pt-4 flex justify-between items-center font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Estimated Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xl",
												children: hasConflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-amber-600 text-sm",
													children: "Price TBA"
												}) : formatPrice(totalEstimatedPrice)
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-4 mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-foreground",
											children: "Patient Details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => handleNext("DETAILS"),
											className: "text-sm font-semibold text-primary hover:underline",
											children: "Edit"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-y-4 gap-x-8 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1",
												children: "Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: patient.name
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1",
												children: "Mobile"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: patient.mobile
											})] }),
											patient.age && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1",
												children: "Age"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: patient.age
											})] }),
											patient.gender && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1",
												children: "Gender"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-foreground",
												children: patient.gender
											})] })
										]
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
												children: collectionMethod === "HOME" ? "🏠 Home Collection (Pune)" : "📍 Walk-in Centre (Pune)"
											})
										}),
										collectionMethod === "HOME" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm space-y-3 bg-background p-4 rounded-xl border border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
													children: "Collection Charge"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "font-semibold text-foreground",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-green-600",
															children: "FREE"
														}),
														" within 5 km • ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold",
															children: "₹200"
														}),
														" beyond 5 km"
													]
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "pt-3 border-t border-border",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
															children: "Address"
														}),
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
												}),
												(date || time) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 pt-4 border-t border-border",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-muted-foreground uppercase tracking-wider font-bold text-xs mb-1",
														children: "Preferred Time"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "font-semibold text-foreground",
														children: [
															date,
															" ",
															time
														]
													})]
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
														children: "Get Directions →"
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
										children: "Need help with your booking?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground text-center sm:text-left",
										children: "Our team is ready to assist you."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
											context: "book",
											type: "call",
											variant: "outline",
											className: "flex-1 sm:flex-none"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
											context: "book",
											type: "whatsapp",
											variant: "solid",
											className: "flex-1 sm:flex-none"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: handleConfirm,
								disabled: isConfirming,
								className: "w-full flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-navy-soft transition-transform hover:scale-[1.01] shadow-md disabled:opacity-70 disabled:hover:scale-100",
								children: isConfirming ? "Confirming..." : "Confirm Booking Request"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs text-muted-foreground mt-4 max-w-md mx-auto",
								children: "Your booking request will be reviewed by SECOND OPINION CRL. Our team may contact you to confirm the appointment and applicable charges."
							})]
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { BookPage as component };
