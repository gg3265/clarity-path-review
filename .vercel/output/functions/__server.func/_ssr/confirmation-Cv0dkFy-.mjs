import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, k as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmation-Cv0dkFy-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConfirmationPage() {
	const [bookingData, setBookingData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	useNavigate();
	(0, import_react.useEffect)(() => {
		try {
			const stored = sessionStorage.getItem("lastBookingConfirmation");
			if (stored) setBookingData(JSON.parse(stored));
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-surface flex items-center justify-center",
		children: "Loading..."
	});
	if (!bookingData) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-surface flex flex-col items-center justify-center py-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md w-full bg-background rounded-3xl p-8 shadow-xl text-center border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-8 text-red-600" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-foreground mb-3",
					children: "Booking information is unavailable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8 text-sm",
					children: "We couldn't find your recent booking details, or the session has expired."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tests",
						className: "flex w-full h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold transition-colors hover:bg-navy-soft",
						children: "Start a New Booking →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex w-full h-12 items-center justify-center rounded-xl border border-border text-foreground font-semibold transition-colors hover:bg-surface",
						children: "Back to Home"
					})]
				})
			]
		})
	});
	const { ref, patient, selectedTests, selectedPackages, totalEstimatedPrice, collectionMethod, address } = bookingData;
	const hasConflict = selectedTests?.some((t) => t.priceStatus === "Price confirmation required");
	const itemNames = [...(selectedPackages || []).map((p) => p.name), ...(selectedTests || []).map((t) => t.name)].join(", ");
	const whatsappMessage = `Hello SECOND OPINION CRL, I have submitted a booking request.

Booking ID: ${ref}
Patient: ${patient.name}
Items: ${itemNames}
Collection: ${collectionMethod === "HOME" ? "Home Collection" : "Walk-in Centre"}
Amount: ${hasConflict ? "TBA (Price confirmation required)" : formatPrice(totalEstimatedPrice)} ${collectionMethod === "HOME" ? "(+ ₹200 if beyond 5km)" : ""}

Please confirm my booking.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-surface flex flex-col items-center justify-center py-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl w-full bg-background rounded-3xl p-6 sm:p-10 shadow-xl border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-green-600" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-display font-extrabold text-foreground mb-3",
							children: "Booking Confirmed"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Thank you. Your booking request has been received."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-surface rounded-2xl p-6 sm:p-8 mb-8 border border-border/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
								children: "Booking ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-mono font-bold text-foreground",
								children: ref
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
								children: "Patient Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-semibold text-foreground",
								children: patient.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-2",
									children: "Selected Items"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [selectedPackages?.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold text-primary",
											children: [pkg.name, " (Package)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: formatPrice(pkg.price)
										})]
									}, pkg.id)), selectedTests?.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: test.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: test.priceStatus === "Confirmed" ? formatPrice(test.sheet1Price || test.sheet2MRP) : test.priceStatus === "Sheet 2 Only" ? formatPrice(test.sheet2MRP) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-amber-600 text-sm",
												children: "Confirmation Required"
											})
										})]
									}, test.id))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
									children: "Total Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xl font-bold text-foreground",
									children: hasConflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-amber-600 text-lg",
										children: "TBA (Confirmation Required)"
									}) : formatPrice(totalEstimatedPrice)
								}),
								collectionMethod === "HOME" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1 font-medium",
									children: "+ ₹200 (if beyond 5 km)"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
								children: "Collection Method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-base font-semibold text-foreground",
								children: collectionMethod === "HOME" ? "Home Collection" : "Walk-in"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider font-bold text-muted-foreground mb-1",
									children: collectionMethod === "HOME" ? "Home Address" : "Centre Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-foreground",
									children: collectionMethod === "HOME" ? `${address.addressLine1}, ${address.addressLine2 ? address.addressLine2 + ", " : ""}${address.area}, ${address.city}, ${address.state} ${address.pincode}` : "SECOND OPINION CRL, 557, Vireen Heights, 3rd floor, Laxmi Road, Sadashiv Peth, Pune 411030"
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `https://wa.me/919359777222?text=${encodeURIComponent(whatsappMessage)}`,
						target: "_blank",
						rel: "noreferrer",
						className: "flex-1 w-full h-12 inline-flex items-center justify-center rounded-xl font-semibold text-white transition-colors bg-[#25D366] hover:bg-[#20bd5a]",
						children: "Send Details on WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:9359777222",
						className: "flex-1 w-full h-12 inline-flex items-center justify-center rounded-xl font-semibold text-primary border border-primary transition-colors hover:bg-primary/5",
						children: "Call 9359777222"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors",
						children: "Back to Home"
					})
				})
			]
		})
	});
}
//#endregion
export { ConfirmationPage as component };
