import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as BackButton } from "./BackButton-dhPxIJGw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-BZXfVBGb.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ eyebrow, title, intro, watermark, showBack = false, backFallback = "/", onBackClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "lab-grid absolute inset-0 opacity-70"
			}),
			watermark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -bottom-6 right-4 hidden font-display text-8xl font-extrabold text-foreground/[0.04] lg:block",
				children: watermark
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative container-page py-16 md:py-24",
				children: [
					showBack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackButton, {
						fallbackUrl: backFallback,
						onClick: onBackClick,
						className: "mb-6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow animate-fade-in",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 max-w-3xl font-display text-[2.25rem] leading-[1.06] font-extrabold text-foreground sm:text-5xl lg:text-[3.5rem]",
						children: title
					}),
					intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: intro
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHeader as t };
