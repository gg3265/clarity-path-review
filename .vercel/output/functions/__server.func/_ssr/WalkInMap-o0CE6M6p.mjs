import { i as __toESM } from "../_runtime.mjs";
import { i as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as CircleAlert, j as ChevronRight, m as MapPin, y as House } from "../_libs/lucide-react.mjs";
import { T as cn } from "./router-Y1X9ZrKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WalkInMap-o0CE6M6p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CollectionSelector({ selected, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid sm:grid-cols-2 gap-4 mb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange("HOME"),
			className: cn("flex flex-col items-start text-left p-6 rounded-3xl border-2 transition-all duration-200", selected === "HOME" ? "border-primary bg-primary/5 shadow-md" : "border-border bg-surface hover:border-primary/30"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors", selected === "HOME" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-foreground mb-2",
					children: "Home Collection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-2",
					children: "A sample collection professional visits your preferred location in Pune."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background rounded-lg border border-border p-3 w-full mb-6 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Within 5 km"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-green-600 font-bold",
							children: "FREE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "Beyond 5 km"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-bold",
							children: "₹200"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-auto text-sm font-bold", selected === "HOME" ? "text-primary" : "text-muted-foreground"),
					children: selected === "HOME" ? "Selected" : "Select Home Collection"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onChange("WALK_IN"),
			className: cn("flex flex-col items-start text-left p-6 rounded-3xl border-2 transition-all duration-200", selected === "WALK_IN" ? "border-primary bg-primary/5 shadow-md" : "border-border bg-surface hover:border-primary/30"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors", selected === "WALK_IN" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-foreground mb-2",
					children: "Walk-in Centre"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-6",
					children: "Visit the SECOND OPINION CRL centre in Pune for your test."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("mt-auto text-sm font-bold", selected === "WALK_IN" ? "text-primary" : "text-muted-foreground"),
					children: selected === "WALK_IN" ? "Selected" : "Select Walk-in Centre"
				})
			]
		})]
	});
}
function AddressForm({ value, onChange, title = "Collection Address", showTimeFields = false, date, time, onDateChange, onTimeChange }) {
	const [locationLoading, setLocationLoading] = (0, import_react.useState)(false);
	const isCityValid = value.city.toLowerCase().trim() === "pune" || value.city.trim() === "";
	const isStateValid = value.state.toLowerCase().trim() === "maharashtra" || value.state.trim() === "";
	const handleLocationDetect = () => {
		if (!navigator.geolocation) {
			alert("Geolocation is not supported by your browser.");
			return;
		}
		setLocationLoading(true);
		navigator.geolocation.getCurrentPosition(async (position) => {
			try {
				const data = await (await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`)).json();
				if (data && data.address) onChange({
					...value,
					area: data.address.suburb || data.address.neighbourhood || data.address.residential || value.area,
					city: data.address.city || data.address.town || data.address.state_district || "Pune",
					state: data.address.state || "Maharashtra",
					pincode: data.address.postcode || value.pincode
				});
			} catch (error) {
				console.error("Failed to detect location", error);
			} finally {
				setLocationLoading(false);
			}
		}, (error) => {
			console.error("Geolocation error:", error);
			setLocationLoading(false);
		}, { timeout: 1e4 });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8 animate-in fade-in slide-in-from-top-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold text-foreground",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleLocationDetect,
						disabled: locationLoading,
						className: "hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-navy-soft transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), locationLoading ? "Detecting..." : "Use My Location"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleLocationDetect,
					disabled: locationLoading,
					className: "sm:hidden flex w-full h-10 items-center justify-center gap-1.5 rounded-lg border border-primary/30 bg-primary/5 text-sm font-semibold text-primary transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), locationLoading ? "Detecting..." : "Use My Location"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-sm font-semibold text-foreground",
								children: "House / Flat / Building *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "text",
								value: value.addressLine1,
								onChange: (e) => onChange({
									...value,
									addressLine1: e.target.value
								}),
								className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
								placeholder: "E.g. Flat 402, Sai Residency"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Street / Locality *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									value: value.area,
									onChange: (e) => onChange({
										...value,
										area: e.target.value
									}),
									className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
									placeholder: "E.g. Kothrud"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "Pincode *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									pattern: "[0-9]{6}",
									title: "Please enter a valid 6-digit Pincode",
									value: value.pincode,
									onChange: (e) => onChange({
										...value,
										pincode: e.target.value.replace(/\D/g, "").slice(0, 6)
									}),
									className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all",
									placeholder: "6-digit Pincode"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "City *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									value: value.city,
									onChange: (e) => onChange({
										...value,
										city: e.target.value
									}),
									className: cn("w-full h-12 bg-background border rounded-xl px-4 focus:outline-none focus:ring-4 transition-all", !isCityValid ? "border-destructive focus:border-destructive/50 focus:ring-destructive/10" : "border-border focus:border-primary/50 focus:ring-primary/5")
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-semibold text-foreground",
									children: "State *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "text",
									value: value.state,
									onChange: (e) => onChange({
										...value,
										state: e.target.value
									}),
									className: cn("w-full h-12 bg-background border rounded-xl px-4 focus:outline-none focus:ring-4 transition-all", !isStateValid ? "border-destructive focus:border-destructive/50 focus:ring-destructive/10" : "border-border focus:border-primary/50 focus:ring-primary/5")
								})]
							})]
						})
					]
				}),
				!isCityValid || !isStateValid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 bg-destructive/10 border border-destructive/20 rounded-xl flex gap-3 text-sm text-destructive font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sorry, home collection is currently available only in Pune, Maharashtra. Please enter a Pune address to continue." })]
				}) : value.city.toLowerCase().trim() === "pune" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground bg-green-50 text-green-700 p-3 rounded-xl border border-green-200",
					children: "✓ Pune address entered. Serviceability will be confirmed by our team."
				}) : null
			]
		}), showTimeFields && onDateChange && onTimeChange && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-foreground border-b border-border pb-4",
					children: "Preferred Time"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold text-foreground",
							children: "Date (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: date,
							onChange: (e) => onDateChange(e.target.value),
							className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold text-foreground",
							children: "Time (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: time,
							onChange: (e) => onTimeChange(e.target.value),
							className: "w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all appearance-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Preferred time slot"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Morning (8 AM - 12 PM)",
									children: "Morning (8 AM - 12 PM)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Afternoon (12 PM - 4 PM)",
									children: "Afternoon (12 PM - 4 PM)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "Evening (4 PM - 8 PM)",
									children: "Evening (4 PM - 8 PM)"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-muted-foreground mt-2",
					children: "Note: Our team will call you to confirm the exact appointment time."
				})
			]
		})]
	});
}
function WalkInMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-in fade-in slide-in-from-top-4 space-y-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft flex flex-col-reverse md:flex-row gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold text-foreground mb-4",
						children: "SECOND OPINION CRL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: [
							"557, Vireen Heights, 3rd Floor,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Laxmi Road, Sadashiv Peth,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Pune 411030"
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-foreground",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Phone: 9359777222"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Email: secondopinioncrl@gmail.com"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://maps.google.com/?q=557,+Vireen+Heights,+3rd+Floor,+Laxmi+Road,+Sadashiv+Peth,+Pune+411030",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-11 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/80",
						children: ["Get Directions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 size-4" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full md:w-[300px] h-[200px] md:h-auto bg-background rounded-2xl overflow-hidden border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map to Second Opinion CRL",
					src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.332306899732!2d73.8504975!3d18.5144342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06ff4903327%3A0x6fa769fba75440d9!2sLaxmi%20Rd%2C%20Sadashiv%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682333649931!5m2!1sen!2sin",
					width: "100%",
					height: "100%",
					style: { border: 0 },
					allowFullScreen: false,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		})
	});
}
//#endregion
export { CollectionSelector as n, WalkInMap as r, AddressForm as t };
