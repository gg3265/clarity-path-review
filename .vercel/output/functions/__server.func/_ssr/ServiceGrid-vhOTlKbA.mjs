import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ArrowUpRight, O as CircleDot, P as Beaker, T as Dna, _ as Layers, i as Target, s as Search, w as Droplet, x as FlaskConical } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-BFNJgJax.mjs";
import { T as cn, g as services } from "./router-Y1X9ZrKJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceGrid-vhOTlKbA.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	layers: Layers,
	target: Target,
	search: Search,
	circle: CircleDot,
	flask: FlaskConical,
	beaker: Beaker,
	droplet: Droplet,
	dna: Dna
};
function ServiceCard({ number, title, description, icon, className, featured = false }) {
	const Icon = icons[icon] ?? Layers;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex h-full flex-col justify-between overflow-hidden border border-border bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift", featured && "bg-navy text-primary-foreground", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-500 group-hover:scale-x-100"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-display text-xs font-bold tracking-[0.18em]", featured ? "text-primary-foreground/50" : "text-muted-foreground"),
					children: number
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: cn("size-6 transition-transform duration-500 group-hover:scale-110", featured ? "text-teal-soft" : "text-teal"),
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: cn("font-display text-lg font-bold", featured ? "text-primary-foreground" : "text-foreground"),
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2 text-sm leading-relaxed", featured ? "text-primary-foreground/70" : "text-muted-foreground"),
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						"aria-hidden": "true",
						className: cn("mt-6 size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1", featured ? "text-primary-foreground/60" : "text-foreground/40")
					})
				]
			})
		]
	});
}
function ServiceGrid({ showHeading = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "specialist-services",
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-20 md:py-28",
			children: [
				showHeading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Capabilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl leading-tight font-extrabold text-foreground sm:text-4xl lg:text-5xl",
							children: "Specialist Pathology Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: "Specialized pathology and laboratory services for routine, complex and diagnostically challenging cases."
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-px overflow-hidden rounded-2xl bg-border",
					children: [services.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/services/${services[0].title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
							className: "block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								...services[0],
								featured: true,
								className: "w-full border-0 sm:flex-row sm:items-center sm:gap-10 sm:p-12"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px sm:grid-cols-2 lg:grid-cols-3",
						children: services.slice(1).map((service, i) => {
							const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: (i + 1) % 3 * 70,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: `/services/${slug}`,
									className: "block h-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
										...service,
										featured: false,
										className: "h-full border-0"
									})
								})
							}, service.number);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs leading-relaxed text-muted-foreground",
					children: "Service descriptions are indicative. Detailed test availability can be confirmed with the laboratory."
				})
			]
		})
	});
}
//#endregion
export { ServiceGrid as t };
