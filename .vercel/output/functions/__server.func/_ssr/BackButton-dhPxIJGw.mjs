import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { S as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as ArrowLeft } from "../_libs/lucide-react.mjs";
import { T as cn } from "./router-dwDVHqyE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BackButton-dhPxIJGw.js
var import_jsx_runtime = require_jsx_runtime();
function BackButton({ fallbackUrl = "/", className, label = "Back", onClick }) {
	const router = useRouter();
	const handleBack = () => {
		if (onClick) {
			if (onClick() !== false) return;
		}
		if (typeof document !== "undefined" && document.referrer.includes(window.location.host) && window.history.length > 1) router.history.back();
		else router.navigate({
			to: fallbackUrl,
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: handleBack,
		className: cn("group flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-2 mb-2", className),
		"aria-label": "Go back",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 mr-2 transition-transform group-hover:-translate-x-1" }), label]
	});
}
//#endregion
export { BackButton as t };
