import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as CircleAlert, j as ChevronRight } from "../_libs/lucide-react.mjs";
import { s as useCart } from "./router-dwDVHqyE.mjs";
import { t as formatPrice } from "./formatPrice-DmNd5paV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BookingBar-DOCTJe6g.js
var import_jsx_runtime = require_jsx_runtime();
function BookingBar() {
	const { selectedTests, selectedPackages, totalEstimatedPrice, hasConflict } = useCart();
	const navigate = useNavigate();
	const totalItems = (selectedTests?.length || 0) + (selectedPackages?.length || 0);
	if (totalItems === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-[64px] left-0 right-0 z-[60] border-t border-border bg-background/95 p-4 shadow-lift backdrop-blur-xl md:hidden animate-fade-in slide-in-from-bottom-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm font-bold text-foreground",
				children: [
					totalItems,
					" ",
					totalItems === 1 ? "Item" : "Items",
					" Selected"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: hasConflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1 text-amber-600 font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), " Confirmation Required"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-foreground",
					children: formatPrice(totalEstimatedPrice)
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: (e) => {
					e.preventDefault();
					navigate({ to: "/book" });
					window.scrollTo(0, 0);
				},
				className: "inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft",
				children: ["View Booking", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 size-4" })]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden md:block fixed bottom-8 right-8 z-[60] animate-scale-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[340px] rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 font-display text-lg font-bold text-foreground",
					children: "Your Booking"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[300px] overflow-y-auto pr-2 space-y-3 mb-4",
					children: [selectedPackages?.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground pr-2 truncate",
							children: pkg?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold shrink-0",
							children: formatPrice(pkg?.price)
						})]
					}, pkg.id)), selectedTests?.map((test) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-start text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground pr-2 truncate",
							children: test?.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold shrink-0",
							children: test?.priceStatus === "Confirmed" ? formatPrice(test?.sheet1Price || test?.sheet2MRP) : test?.priceStatus === "Sheet 2 Only" ? formatPrice(test?.sheet2MRP) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-amber-600 inline" })
						})]
					}, test.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border pt-4 mb-5 flex justify-between items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-bold text-muted-foreground",
						children: "Total Items"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-bold text-foreground",
						children: totalItems
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-right",
						children: hasConflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-amber-600",
							children: "Price TBA"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-display font-extrabold text-foreground",
							children: formatPrice(totalEstimatedPrice)
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.preventDefault();
						navigate({ to: "/book" });
						window.scrollTo(0, 0);
					},
					className: "flex w-full h-12 items-center justify-center rounded-xl bg-primary px-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:bg-navy-soft",
					children: "Continue to Booking"
				})
			]
		})
	})] });
}
//#endregion
export { BookingBar as t };
