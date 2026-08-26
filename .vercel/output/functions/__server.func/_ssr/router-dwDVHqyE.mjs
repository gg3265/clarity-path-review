import { i as __toESM } from "../_runtime.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as require_react, n as QueryClientProvider, r as require_jsx_runtime, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { S as useRouter, _ as createRootRouteWithContext, c as HeadContent, d as ScrollRestoration, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, s as Scripts, u as useRouterState, v as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, l as Phone, p as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-Cxbs9mIO.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var supabase_exports = /* @__PURE__ */ __exportAll({ supabase: () => supabase });
var supabase = createClient("https://hijudhszlgmpgvymwaoh.supabase.co", "sb_publishable_Hhc2vwiozmdP_TIQVcGCzQ_OgMU9cy6");
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/tests-x77fbMOM.js
var tests = [
	{
		"id": "t17",
		"crlCode": "CRL-001",
		"name": "CBC / Complete Hemogram",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": ["complete blood count"]
	},
	{
		"id": "t18",
		"crlCode": "CRL-002",
		"name": "ESR",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 50,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl003",
		"crlCode": "CRL-003",
		"name": "Peripheral Blood Smear",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl004",
		"crlCode": "CRL-004",
		"name": "Reticulocyte Count",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl005",
		"crlCode": "CRL-005",
		"name": "Absolute Eosinophil Count",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl006",
		"crlCode": "CRL-006",
		"name": "Platelet Count",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl007",
		"crlCode": "CRL-007",
		"name": "PT / INR",
		"category": "Clinical - Hematology",
		"specimen": "Citrated plasma",
		"sheet1Price": 350,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t22",
		"crlCode": "CRL-008",
		"name": "aPTT",
		"category": "Clinical - Hematology",
		"specimen": "Citrated plasma",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t25",
		"crlCode": "CRL-009",
		"name": "D-Dimer",
		"category": "Clinical - Hematology",
		"specimen": "Citrated plasma",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl010",
		"crlCode": "CRL-010",
		"name": "Fibrinogen",
		"category": "Clinical - Hematology",
		"specimen": "Citrated plasma",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl011",
		"crlCode": "CRL-011",
		"name": "Blood Group & Rh",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl012",
		"crlCode": "CRL-012",
		"name": "Sickling Screen",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 250,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl013",
		"crlCode": "CRL-013",
		"name": "Hb Electrophoresis / HPLC",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t20",
		"crlCode": "CRL-014",
		"name": "G6PD",
		"category": "Clinical - Hematology",
		"specimen": "EDTA blood",
		"sheet1Price": 1100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t133",
		"crlCode": "CRL-015",
		"name": "Fasting Blood Sugar",
		"category": "Clinical - Biochemistry",
		"specimen": "Fluoride plasma",
		"sheet1Price": 50,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": ["glucose", "sugar"]
	},
	{
		"id": "t134",
		"crlCode": "CRL-016",
		"name": "PP Blood Sugar",
		"category": "Clinical - Biochemistry",
		"specimen": "Fluoride plasma",
		"sheet1Price": 50,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": ["glucose", "sugar"]
	},
	{
		"id": "crl017",
		"crlCode": "CRL-017",
		"name": "Random Blood Sugar",
		"category": "Clinical - Biochemistry",
		"specimen": "Fluoride plasma",
		"sheet1Price": 50,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t75",
		"crlCode": "CRL-018",
		"name": "HbA1c",
		"category": "Clinical - Biochemistry",
		"specimen": "EDTA blood",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t90",
		"crlCode": "CRL-019",
		"name": "Lipid Profile",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 550,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t87",
		"crlCode": "CRL-020",
		"name": "Liver Function Test",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t103",
		"crlCode": "CRL-021",
		"name": "Kidney Function Test",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 350,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t123",
		"crlCode": "CRL-022",
		"name": "Uric Acid",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t50",
		"crlCode": "CRL-023",
		"name": "Calcium",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t92",
		"crlCode": "CRL-024",
		"name": "Magnesium",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t97",
		"crlCode": "CRL-025",
		"name": "Phosphorus",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl026",
		"crlCode": "CRL-026",
		"name": "Sodium",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl027",
		"crlCode": "CRL-027",
		"name": "Potassium",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl028",
		"crlCode": "CRL-028",
		"name": "Chloride",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t74",
		"crlCode": "CRL-029",
		"name": "GGT",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t86",
		"crlCode": "CRL-030",
		"name": "LDH",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl031",
		"crlCode": "CRL-031",
		"name": "CK Total",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t37",
		"crlCode": "CRL-032",
		"name": "Amylase",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t89",
		"crlCode": "CRL-033",
		"name": "Lipase",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl034",
		"crlCode": "CRL-034",
		"name": "Total Protein",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t33",
		"crlCode": "CRL-035",
		"name": "Albumin",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl036",
		"crlCode": "CRL-036",
		"name": "Globulin",
		"category": "Clinical - Biochemistry",
		"specimen": "Calculated",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t30",
		"crlCode": "CRL-037",
		"name": "Ferritin",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl038",
		"crlCode": "CRL-038",
		"name": "Iron",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl039",
		"crlCode": "CRL-039",
		"name": "TIBC",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 350,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl040",
		"crlCode": "CRL-040",
		"name": "Iron Profile",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t60",
		"crlCode": "CRL-041",
		"name": "CRP",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl042",
		"crlCode": "CRL-042",
		"name": "hs-CRP",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t81",
		"crlCode": "CRL-043",
		"name": "Homocysteine",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl044",
		"crlCode": "CRL-044",
		"name": "Apo A1",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl045",
		"crlCode": "CRL-045",
		"name": "Apo B",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl046",
		"crlCode": "CRL-046",
		"name": "Lipoprotein(a)",
		"category": "Clinical - Biochemistry",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl047",
		"crlCode": "CRL-047",
		"name": "Urine Microalbumin",
		"category": "Clinical - Biochemistry",
		"specimen": "Urine",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl048",
		"crlCode": "CRL-048",
		"name": "Urine ACR",
		"category": "Clinical - Biochemistry",
		"specimen": "Urine",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl049",
		"crlCode": "CRL-049",
		"name": "eGFR",
		"category": "Clinical - Biochemistry",
		"specimen": "Calculated",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t119",
		"crlCode": "CRL-050",
		"name": "TSH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 250,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl051",
		"crlCode": "CRL-051",
		"name": "Free T3",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl052",
		"crlCode": "CRL-052",
		"name": "Free T4",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl053",
		"crlCode": "CRL-053",
		"name": "T3",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl054",
		"crlCode": "CRL-054",
		"name": "T4",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl055",
		"crlCode": "CRL-055",
		"name": "Thyroid Profile T3/T4/TSH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl056",
		"crlCode": "CRL-056",
		"name": "FT3/FT4/TSH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl057",
		"crlCode": "CRL-057",
		"name": "Anti-TPO",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl058",
		"crlCode": "CRL-058",
		"name": "Anti-Thyroglobulin",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t5",
		"crlCode": "CRL-059",
		"name": "PSA Total",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl060",
		"crlCode": "CRL-060",
		"name": "Free PSA",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t112",
		"crlCode": "CRL-061",
		"name": "Testosterone Total",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl062",
		"crlCode": "CRL-062",
		"name": "Estradiol",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t99",
		"crlCode": "CRL-063",
		"name": "Progesterone",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t73",
		"crlCode": "CRL-064",
		"name": "FSH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t88",
		"crlCode": "CRL-065",
		"name": "LH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t98",
		"crlCode": "CRL-066",
		"name": "Prolactin",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t36",
		"crlCode": "CRL-067",
		"name": "AMH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 1800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl068",
		"crlCode": "CRL-068",
		"name": "Beta-hCG",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl069",
		"crlCode": "CRL-069",
		"name": "DHEAS",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl070",
		"crlCode": "CRL-070",
		"name": "Cortisol",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl071",
		"crlCode": "CRL-071",
		"name": "Insulin",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl072",
		"crlCode": "CRL-072",
		"name": "C-Peptide",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t101",
		"crlCode": "CRL-073",
		"name": "PTH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl074",
		"crlCode": "CRL-074",
		"name": "ACTH",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "EDTA plasma",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl075",
		"crlCode": "CRL-075",
		"name": "Vitamin D, 25-OH",
		"category": "Clinical - Vitamins / Trace Elements",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t32",
		"crlCode": "CRL-076",
		"name": "Vitamin B12",
		"category": "Clinical - Vitamins / Trace Elements",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": ["b12", "vitamin b12"]
	},
	{
		"id": "crl077",
		"crlCode": "CRL-077",
		"name": "Folate",
		"category": "Clinical - Vitamins / Trace Elements",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl078",
		"crlCode": "CRL-078",
		"name": "Zinc",
		"category": "Clinical - Vitamins / Trace Elements",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl079",
		"crlCode": "CRL-079",
		"name": "Copper",
		"category": "Clinical - Vitamins / Trace Elements",
		"specimen": "Serum",
		"sheet1Price": 1600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl080",
		"crlCode": "CRL-080",
		"name": "Rheumatoid Factor",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl081",
		"crlCode": "CRL-081",
		"name": "Anti-CCP",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t15",
		"crlCode": "CRL-082",
		"name": "ANA by IFA",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl083",
		"crlCode": "CRL-083",
		"name": "ANA Profile",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 2600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl084",
		"crlCode": "CRL-084",
		"name": "Anti-dsDNA",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t48",
		"crlCode": "CRL-085",
		"name": "C3",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t49",
		"crlCode": "CRL-086",
		"name": "C4",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl087",
		"crlCode": "CRL-087",
		"name": "Anticardiolipin IgG",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl088",
		"crlCode": "CRL-088",
		"name": "Anticardiolipin IgM",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl089",
		"crlCode": "CRL-089",
		"name": "Beta-2 Glycoprotein I IgG",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl090",
		"crlCode": "CRL-090",
		"name": "Beta-2 Glycoprotein I IgM",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl091",
		"crlCode": "CRL-091",
		"name": "ANCA",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 1400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl092",
		"crlCode": "CRL-092",
		"name": "IgG",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl093",
		"crlCode": "CRL-093",
		"name": "IgA",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl094",
		"crlCode": "CRL-094",
		"name": "IgM",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl095",
		"crlCode": "CRL-095",
		"name": "IgE Total",
		"category": "Clinical - Immunology / Autoimmune",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t76",
		"crlCode": "CRL-096",
		"name": "HBsAg",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 350,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl097",
		"crlCode": "CRL-097",
		"name": "Anti-HCV",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl098",
		"crlCode": "CRL-098",
		"name": "HIV 1/2 Ag/Ab",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl099",
		"crlCode": "CRL-099",
		"name": "VDRL / RPR",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 250,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl100",
		"crlCode": "CRL-100",
		"name": "Dengue NS1",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl101",
		"crlCode": "CRL-101",
		"name": "Dengue IgM/IgG",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t94",
		"crlCode": "CRL-102",
		"name": "Malaria Antigen",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Blood",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl103",
		"crlCode": "CRL-103",
		"name": "Widal",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl104",
		"crlCode": "CRL-104",
		"name": "Typhoid IgM",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl105",
		"crlCode": "CRL-105",
		"name": "Hepatitis A IgM",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl106",
		"crlCode": "CRL-106",
		"name": "Hepatitis E IgM",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl107",
		"crlCode": "CRL-107",
		"name": "H. pylori IgG",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl108",
		"crlCode": "CRL-108",
		"name": "CMV IgM",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl109",
		"crlCode": "CRL-109",
		"name": "EBV VCA IgM",
		"category": "Clinical - Serology / Infectious Diseases",
		"specimen": "Serum",
		"sheet1Price": 1600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl110",
		"crlCode": "CRL-110",
		"name": "Urine Routine & Microscopy",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Urine",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl111",
		"crlCode": "CRL-111",
		"name": "Urine Protein",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Urine",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl112",
		"crlCode": "CRL-112",
		"name": "Urine Glucose",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Urine",
		"sheet1Price": 100,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl113",
		"crlCode": "CRL-113",
		"name": "Urine Culture & Sensitivity",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Urine",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl114",
		"crlCode": "CRL-114",
		"name": "Stool Routine Examination",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Stool",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl115",
		"crlCode": "CRL-115",
		"name": "Stool Occult Blood",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Stool",
		"sheet1Price": 150,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl116",
		"crlCode": "CRL-116",
		"name": "FIT",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Stool",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl117",
		"crlCode": "CRL-117",
		"name": "H. pylori Stool Antigen",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Stool",
		"sheet1Price": 1900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t106",
		"crlCode": "CRL-118",
		"name": "Semen Analysis",
		"category": "Clinical - Clinical Pathology",
		"specimen": "Semen",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl119",
		"crlCode": "CRL-119",
		"name": "Gram Stain",
		"category": "Clinical - Microbiology",
		"specimen": "Clinical specimen",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl120",
		"crlCode": "CRL-120",
		"name": "KOH Mount",
		"category": "Clinical - Microbiology",
		"specimen": "Clinical specimen",
		"sheet1Price": 300,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl121",
		"crlCode": "CRL-121",
		"name": "AFB / ZN Stain",
		"category": "Clinical - Microbiology",
		"specimen": "Clinical specimen",
		"sheet1Price": 200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl122",
		"crlCode": "CRL-122",
		"name": "Bacterial Culture & Sensitivity",
		"category": "Clinical - Microbiology",
		"specimen": "Clinical specimen",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl123",
		"crlCode": "CRL-123",
		"name": "Fungal Culture",
		"category": "Clinical - Microbiology",
		"specimen": "Clinical specimen",
		"sheet1Price": 1600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl124",
		"crlCode": "CRL-124",
		"name": "Blood Culture",
		"category": "Clinical - Microbiology",
		"specimen": "Blood",
		"sheet1Price": 1600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl125",
		"crlCode": "CRL-125",
		"name": "Urine Culture",
		"category": "Clinical - Microbiology",
		"specimen": "Urine",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl126",
		"crlCode": "CRL-126",
		"name": "Pus/Wound Culture",
		"category": "Clinical - Microbiology",
		"specimen": "Swab/aspirate",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl127",
		"crlCode": "CRL-127",
		"name": "Serum Protein Electrophoresis",
		"category": "Clinical - Protein Studies",
		"specimen": "Serum",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl128",
		"crlCode": "CRL-128",
		"name": "Immunofixation Electrophoresis",
		"category": "Clinical - Protein Studies",
		"specimen": "Serum",
		"sheet1Price": 6200,
		"priceStatus": "Confirmed",
		"notes": "Referral/availability dependent; Case complexity based",
		"aliases": []
	},
	{
		"id": "crl129",
		"crlCode": "CRL-129",
		"name": "Urine Protein Electrophoresis",
		"category": "Clinical - Protein Studies",
		"specimen": "Urine",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl130",
		"crlCode": "CRL-130",
		"name": "Serum Free Light Chains Kappa/Lambda",
		"category": "Clinical - Protein Studies",
		"specimen": "Serum",
		"sheet1Price": 4500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t1",
		"crlCode": "CRL-131",
		"name": "AFP",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl132",
		"crlCode": "CRL-132",
		"name": "CEA",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl133",
		"crlCode": "CRL-133",
		"name": "CA 19-9",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl134",
		"crlCode": "CRL-134",
		"name": "CA 15-3",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl135",
		"crlCode": "CRL-135",
		"name": "CA-125",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl136",
		"crlCode": "CRL-136",
		"name": "Beta-hCG",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl137",
		"crlCode": "CRL-137",
		"name": "PSA Total",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl138",
		"crlCode": "CRL-138",
		"name": "Free PSA",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 900,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "t4",
		"crlCode": "CRL-139",
		"name": "Chromogranin A",
		"category": "Clinical - Cancer-related Serum Markers",
		"specimen": "Serum",
		"sheet1Price": 6500,
		"priceStatus": "Confirmed",
		"notes": "Referral/availability dependent; Case complexity based",
		"aliases": []
	},
	{
		"id": "crl140",
		"crlCode": "CRL-140",
		"name": "Routine biopsy histopathology – small biopsy",
		"category": "Histopathology",
		"specimen": "Formalin-fixed tissue",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl141",
		"crlCode": "CRL-141",
		"name": "Large surgical specimen histopathology",
		"category": "Histopathology",
		"specimen": "Formalin-fixed tissue",
		"sheet1Price": 2100,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl142",
		"crlCode": "CRL-142",
		"name": "Core needle biopsy review",
		"category": "Histopathology",
		"specimen": "FFPE block/slides",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl143",
		"crlCode": "CRL-143",
		"name": "Paraffin block + H&E second opinion",
		"category": "Histopathology",
		"specimen": "FFPE block",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl144",
		"crlCode": "CRL-144",
		"name": "Outside H&E slide second opinion",
		"category": "Histopathology",
		"specimen": "H&E slides",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl145",
		"crlCode": "CRL-145",
		"name": "Outside unstained slides sectioning",
		"category": "Histopathology",
		"specimen": "FFPE block",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl146",
		"crlCode": "CRL-146",
		"name": "Histopathology second opinion – complex oncology",
		"category": "Histopathology",
		"specimen": "Slides/blocks",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl147",
		"crlCode": "CRL-147",
		"name": "Frozen section",
		"category": "Histopathology",
		"specimen": "Fresh tissue",
		"sheet1Price": 2e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl148",
		"crlCode": "CRL-148",
		"name": "Margin assessment / re-cut",
		"category": "Histopathology",
		"specimen": "Tissue/block",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl149",
		"crlCode": "CRL-149",
		"name": "Decalcification",
		"category": "Histopathology",
		"specimen": "Bone/tissue",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl150",
		"crlCode": "CRL-150",
		"name": "Special stain – PAS",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl151",
		"crlCode": "CRL-151",
		"name": "Special stain – GMS",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl152",
		"crlCode": "CRL-152",
		"name": "Special stain – AFB/Ziehl-Neelsen",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 400,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl153",
		"crlCode": "CRL-153",
		"name": "Special stain – Reticulin",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl154",
		"crlCode": "CRL-154",
		"name": "Special stain – Masson Trichrome",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl155",
		"crlCode": "CRL-155",
		"name": "Special stain – Congo Red",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl156",
		"crlCode": "CRL-156",
		"name": "Special stain – Alcian Blue",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 500,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl157",
		"crlCode": "CRL-157",
		"name": "Special stain – Mucin (mucicarmine/AB-PAS)",
		"category": "Histopathology",
		"specimen": "Slides/block",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "Per stain",
		"aliases": []
	},
	{
		"id": "crl158",
		"crlCode": "CRL-158",
		"name": "FNAC cytology – smear review",
		"category": "Cytology",
		"specimen": "Smears",
		"sheet1Price": 999,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl159",
		"crlCode": "CRL-159",
		"name": "FNAC – procedure + cytology",
		"category": "Cytology",
		"specimen": "Aspirate/smears",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl160",
		"crlCode": "CRL-160",
		"name": "Body fluid cytology",
		"category": "Cytology",
		"specimen": "Fluid",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl161",
		"crlCode": "CRL-161",
		"name": "CSF cytology",
		"category": "Cytology",
		"specimen": "CSF",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl162",
		"crlCode": "CRL-162",
		"name": "Pleural fluid cytology",
		"category": "Cytology",
		"specimen": "Fluid",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl163",
		"crlCode": "CRL-163",
		"name": "Ascitic/peritoneal fluid cytology",
		"category": "Cytology",
		"specimen": "Fluid",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl164",
		"crlCode": "CRL-164",
		"name": "Synovial fluid cytology",
		"category": "Cytology",
		"specimen": "Fluid",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl165",
		"crlCode": "CRL-165",
		"name": "BAL / bronchial cytology",
		"category": "Cytology",
		"specimen": "BAL/brushings",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl166",
		"crlCode": "CRL-166",
		"name": "Urine cytology",
		"category": "Cytology",
		"specimen": "Urine",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl167",
		"crlCode": "CRL-167",
		"name": "Conventional Pap smear",
		"category": "Cytology",
		"specimen": "Cervical smear",
		"sheet1Price": 600,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl168",
		"crlCode": "CRL-168",
		"name": "Liquid-based cytology (LBC)",
		"category": "Cytology",
		"specimen": "Cervical sample",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl169",
		"crlCode": "CRL-169",
		"name": "HPV high-risk testing",
		"category": "Cytology",
		"specimen": "Cervical sample",
		"sheet1Price": 1800,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl170",
		"crlCode": "CRL-170",
		"name": "Cell block preparation",
		"category": "Cytology",
		"specimen": "Fluid/aspirate",
		"sheet1Price": 700,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl171",
		"crlCode": "CRL-171",
		"name": "Cell block + IHC",
		"category": "Cytology",
		"specimen": "Cell block",
		"sheet1Price": 1200,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl172",
		"crlCode": "CRL-172",
		"name": "Cytology second opinion – complex",
		"category": "Cytology",
		"specimen": "Smears/cell block",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl173",
		"crlCode": "CRL-173",
		"name": "IHC single marker – standard",
		"category": "IHC",
		"specimen": "FFPE block/slide",
		"sheet1Price": 1e3,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl174",
		"crlCode": "CRL-174",
		"name": "IHC 3-marker panel",
		"category": "IHC",
		"specimen": "FFPE block/slide",
		"sheet1Price": 2700,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl175",
		"crlCode": "CRL-175",
		"name": "IHC 5-marker panel",
		"category": "IHC",
		"specimen": "FFPE block/slide",
		"sheet1Price": 4250,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl176",
		"crlCode": "CRL-176",
		"name": "IHC 8-marker panel",
		"category": "IHC",
		"specimen": "FFPE block/slide",
		"sheet1Price": 6400,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl177",
		"crlCode": "CRL-177",
		"name": "IHC 10-marker panel",
		"category": "IHC",
		"specimen": "FFPE block/slide",
		"sheet1Price": 7500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl178",
		"crlCode": "CRL-178",
		"name": "IHC interpretation – existing slides",
		"category": "IHC",
		"specimen": "IHC slides",
		"sheet1Price": 1499,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl179",
		"crlCode": "CRL-179",
		"name": "IHC + integrated pathology opinion",
		"category": "IHC",
		"specimen": "Block/slides",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl180",
		"crlCode": "CRL-180",
		"name": "ER / PR / HER2 / Ki-67 breast panel",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 3500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl181",
		"crlCode": "CRL-181",
		"name": "PD-L1 IHC",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl182",
		"crlCode": "CRL-182",
		"name": "MMR IHC panel MLH1/MSH2/MSH6/PMS2",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 4500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl183",
		"crlCode": "CRL-183",
		"name": "ALK IHC",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 1800,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl184",
		"crlCode": "CRL-184",
		"name": "ROS1 IHC",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 1800,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl185",
		"crlCode": "CRL-185",
		"name": "EBER-ISH",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl186",
		"crlCode": "CRL-186",
		"name": "ISH – HER2",
		"category": "IHC",
		"specimen": "FFPE block",
		"sheet1Price": 4500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl187",
		"crlCode": "CRL-187",
		"name": "EGFR mutation testing",
		"category": "Molecular / Referral",
		"specimen": "FFPE tissue",
		"sheet1Price": 6e3,
		"priceStatus": "Confirmed",
		"notes": "Logistics dependent",
		"aliases": []
	},
	{
		"id": "crl188",
		"crlCode": "CRL-188",
		"name": "KRAS/NRAS mutation testing",
		"category": "Molecular / Referral",
		"specimen": "FFPE tissue",
		"sheet1Price": 7e3,
		"priceStatus": "Confirmed",
		"notes": "Logistics dependent",
		"aliases": []
	},
	{
		"id": "crl189",
		"crlCode": "CRL-189",
		"name": "BRAF V600 mutation",
		"category": "Molecular / Referral",
		"specimen": "FFPE tissue",
		"sheet1Price": 5e3,
		"priceStatus": "Confirmed",
		"notes": "Logistics dependent",
		"aliases": []
	},
	{
		"id": "crl190",
		"crlCode": "CRL-190",
		"name": "HPV DNA high-risk",
		"category": "Molecular / Referral",
		"specimen": "Cervical sample",
		"sheet1Price": 1800,
		"priceStatus": "Confirmed",
		"notes": "Logistics dependent",
		"aliases": []
	},
	{
		"id": "crl191",
		"crlCode": "CRL-191",
		"name": "EBV viral load PCR",
		"category": "Molecular / Referral",
		"specimen": "Blood",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "Logistics dependent",
		"aliases": []
	},
	{
		"id": "crl192",
		"crlCode": "CRL-192",
		"name": "Bone marrow aspirate smear review",
		"category": "Hematopathology",
		"specimen": "Bone marrow",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl193",
		"crlCode": "CRL-193",
		"name": "Bone marrow trephine biopsy review",
		"category": "Hematopathology",
		"specimen": "FFPE block/slides",
		"sheet1Price": 2e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl194",
		"crlCode": "CRL-194",
		"name": "Bone marrow biopsy + IHC",
		"category": "Hematopathology",
		"specimen": "FFPE block",
		"sheet1Price": 3500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl195",
		"crlCode": "CRL-195",
		"name": "Flow cytometry – basic lymphoma/leukemia panel",
		"category": "Hematopathology",
		"specimen": "Fresh EDTA/heparin sample",
		"sheet1Price": 5e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl196",
		"crlCode": "CRL-196",
		"name": "Lymphoma IHC panel",
		"category": "Hematopathology",
		"specimen": "FFPE block",
		"sheet1Price": 5e3,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl197",
		"crlCode": "CRL-197",
		"name": "Renal biopsy light microscopy + IF",
		"category": "Renal / Liver / Breast",
		"specimen": "Fresh/FFPE tissue",
		"sheet1Price": 4e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl198",
		"crlCode": "CRL-198",
		"name": "Renal biopsy IF panel",
		"category": "Renal / Liver / Breast",
		"specimen": "Fresh tissue",
		"sheet1Price": 3e3,
		"priceStatus": "Confirmed",
		"notes": "",
		"aliases": []
	},
	{
		"id": "crl199",
		"crlCode": "CRL-199",
		"name": "Liver biopsy second opinion",
		"category": "Renal / Liver / Breast",
		"specimen": "Slides/block",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl200",
		"crlCode": "CRL-200",
		"name": "Breast biopsy second opinion",
		"category": "Renal / Liver / Breast",
		"specimen": "Slides/block",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl201",
		"crlCode": "CRL-201",
		"name": "Breast carcinoma IHC profile",
		"category": "Renal / Liver / Breast",
		"specimen": "FFPE block",
		"sheet1Price": 3500,
		"priceStatus": "Confirmed",
		"notes": "Additional IHC charged separately",
		"aliases": []
	},
	{
		"id": "crl202",
		"crlCode": "CRL-202",
		"name": "Prostate biopsy second opinion",
		"category": "Renal / Liver / Breast",
		"specimen": "Slides/block",
		"sheet1Price": 1500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "crl203",
		"crlCode": "CRL-203",
		"name": "Prostatectomy second opinion",
		"category": "Renal / Liver / Breast",
		"specimen": "Slides/block",
		"sheet1Price": 2500,
		"priceStatus": "Confirmed",
		"notes": "Quote based on specimen complexity",
		"aliases": []
	},
	{
		"id": "t139",
		"crlCode": "PROMO-SUGAR",
		"name": "Blood Sugar (Promo)",
		"category": "Clinical - Biochemistry",
		"specimen": "Fluoride plasma",
		"sheet1Price": 49,
		"priceStatus": "Confirmed",
		"notes": "Promotional price for online booking",
		"aliases": ["glucose", "sugar"]
	},
	{
		"id": "t140",
		"crlCode": "PROMO-THYROID",
		"name": "Thyroid Test (Promo)",
		"category": "Clinical - Endocrinology / Hormones",
		"specimen": "Serum",
		"sheet1Price": 299,
		"priceStatus": "Confirmed",
		"notes": "Promotional price for online booking",
		"aliases": ["thyroid"]
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/api-DcvF5-qb.js
var packages = [
	{
		id: "pkg-crl-essential",
		name: "CRL Essential",
		category: "Clinical Health Packages",
		price: 999,
		badge: "Essential",
		shortDescription: "Basic annual health screening for routine preventive assessment.",
		description: "Basic annual health screening for routine preventive assessment. Best for: Healthy adults / young working population.",
		includedTests: [
			"CBC",
			"Fasting Blood Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Urine Routine",
			"TSH"
		],
		ctaText: "Book Package",
		bookingType: "booking"
	},
	{
		id: "pkg-crl-vital",
		name: "CRL Vital",
		category: "Clinical Health Packages",
		price: 1499,
		badge: "Popular",
		shortDescription: "Essential screening with additional metabolic and nutritional markers.",
		description: "Essential screening with additional metabolic and nutritional markers.",
		includedTests: [
			"CBC",
			"Fasting Blood Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Urine Routine",
			"TSH",
			"Vitamin B12",
			"Vitamin D",
			"Calcium",
			"Uric Acid",
			"ESR"
		],
		ctaText: "Book Package",
		bookingType: "booking"
	},
	{
		id: "pkg-crl-complete",
		name: "CRL Complete",
		category: "Clinical Health Packages",
		price: 2499,
		badge: "Comprehensive",
		shortDescription: "Comprehensive preventive health screening covering metabolic, nutritional and routine health markers.",
		description: "Comprehensive preventive health screening covering metabolic, nutritional and routine health markers.",
		includedTests: [
			"CBC",
			"ESR",
			"Fasting Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Sodium & Potassium",
			"Calcium",
			"Uric Acid",
			"TSH",
			"Vitamin B12",
			"Vitamin D",
			"Iron Profile",
			"Ferritin",
			"Urine Routine",
			"Stool Occult Blood / FIT"
		],
		ctaText: "Book Package",
		bookingType: "booking"
	},
	{
		id: "pkg-crl-prime",
		name: "CRL Prime",
		category: "Clinical Health Packages",
		price: 3499,
		badge: "Advanced",
		shortDescription: "Advanced health and metabolic screening with additional cardiovascular and inflammatory markers.",
		description: "Advanced health and metabolic screening with additional cardiovascular and inflammatory markers.",
		includedTests: [
			"CBC",
			"ESR",
			"Fasting Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Sodium & Potassium",
			"Calcium",
			"Uric Acid",
			"TSH",
			"Vitamin B12",
			"Vitamin D",
			"Iron Profile",
			"Ferritin",
			"Urine Routine",
			"Stool Occult Blood / FIT",
			"Free T4",
			"ApoB",
			"Lipoprotein(a)",
			"hs-CRP",
			"Homocysteine",
			"Urine Microalbumin"
		],
		ctaText: "Book Package",
		bookingType: "booking"
	},
	{
		id: "pkg-crl-signature-health",
		name: "CRL Signature Health",
		category: "Clinical Health Packages",
		price: 4999,
		badge: "Premium",
		shortDescription: "Premium executive health screening with advanced cardiovascular, metabolic, nutritional and inflammatory assessment.",
		description: "Premium executive health screening with advanced cardiovascular, metabolic, nutritional and inflammatory assessment.",
		includedTests: [
			"CBC + ESR",
			"HbA1c + Fasting Glucose",
			"Complete Lipid Profile",
			"ApoB",
			"Lipoprotein(a)",
			"Liver Function Test",
			"Kidney Function Test + Electrolytes",
			"Thyroid Profile",
			"Vitamin B12",
			"Vitamin D",
			"Calcium",
			"Iron + TIBC + Ferritin",
			"hs-CRP",
			"Homocysteine",
			"Urine Routine",
			"Urine Microalbumin",
			"Physician Consultation / Report Discussion"
		],
		ctaText: "Book Package",
		bookingType: "booking"
	},
	{
		id: "pkg-breast-womens",
		name: "CRL Breast & Women's Health",
		category: "Cancer Screening Series",
		price: 2499,
		shortDescription: "Focused preventive screening for women's health.",
		description: "Focused preventive screening for women's health, including breast and cervical screening components where appropriate.",
		includedTests: [
			"CBC",
			"Fasting Blood Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Urine Routine",
			"TSH",
			"Clinical Breast Examination",
			"Cervical Screening (HPV Testing ± Pap Cytology)"
		],
		notes: "Cervical screening method and timing may vary according to age and applicable clinical recommendations.",
		ctaText: "Book Screening",
		bookingType: "booking"
	},
	{
		id: "pkg-mens-health",
		name: "CRL Men's Health",
		category: "Cancer Screening Series",
		price: 2499,
		shortDescription: "Preventive health screening for men's health with age- and risk-appropriate PSA assessment.",
		description: "Preventive health screening for men's health with age- and risk-appropriate PSA assessment.",
		includedTests: [
			"CBC",
			"Fasting Blood Glucose",
			"HbA1c",
			"Lipid Profile",
			"Liver Function Test",
			"Kidney Function Test",
			"Urine Routine",
			"PSA — age/risk appropriate",
			"Clinical Examination / Physician Review"
		],
		notes: "PSA testing should be considered according to age, individual risk and clinical guidance.",
		ctaText: "Book Screening",
		bookingType: "booking"
	},
	{
		id: "pkg-gi-cancer",
		name: "CRL GI Cancer Screening",
		category: "Cancer Screening Series",
		price: 1999,
		shortDescription: "Focused gastrointestinal health screening with blood and stool-based assessment and clinical risk evaluation.",
		description: "Focused gastrointestinal health screening with blood and stool-based assessment and clinical risk evaluation.",
		includedTests: [
			"CBC",
			"Iron Profile",
			"Ferritin",
			"Stool Occult Blood / preferably FIT",
			"Liver Function Test",
			"Clinical Risk Assessment"
		],
		notes: "Screening recommendations may vary according to age, symptoms, personal history and individual risk.",
		ctaText: "Book Screening",
		bookingType: "booking"
	},
	{
		id: "pkg-cytosure",
		name: "CRL CytoSure",
		category: "Pathology Second Opinion",
		price: 999,
		shortDescription: "Cytology & FNA Expert Review",
		description: "Cytology & FNA Expert Review",
		includedTests: [
			"FNAC smear review",
			"Exfoliative cytology",
			"Body-fluid cytology",
			"Cell-block review, if available",
			"Adequacy assessment",
			"Morphological interpretation",
			"Final second-opinion report"
		],
		additionalCharges: "Additional slides/specimens: ₹300–₹500 depending on complexity",
		ctaText: "Request Cytology Review",
		bookingType: "enquiry"
	},
	{
		id: "pkg-histosure",
		name: "CRL HistoSure",
		category: "Pathology Second Opinion",
		price: 1499,
		shortDescription: "Histopathology & Paraffin Block Second Opinion",
		description: "Histopathology & Paraffin Block Second Opinion",
		includedTests: [
			"H&E slide review",
			"Paraffin block review",
			"Histological diagnosis",
			"Tumour typing/subtyping",
			"Grade, where applicable",
			"Margin assessment",
			"Lymph-node assessment",
			"Clinicoradiological correlation",
			"Revised / final opinion"
		],
		ctaText: "Request Histopathology Review",
		bookingType: "enquiry"
	},
	{
		id: "pkg-ihc-expert",
		name: "CRL IHC Expert",
		category: "Pathology Second Opinion",
		price: 1499,
		shortDescription: "IHC Interpretation / Second Opinion",
		description: "IHC Interpretation / Second Opinion",
		includedTests: [
			"Review of existing IHC slides",
			"Staining-pattern interpretation",
			"Positive / negative interpretation",
			"Panel interpretation",
			"Differential diagnosis",
			"Integrated IHC conclusion",
			"Recommendation for additional markers if required"
		],
		additionalCharges: "Additional IHC: Approximately ₹800–₹1,200 per marker, depending on actual cost and antibody.",
		ctaText: "Request IHC Review",
		bookingType: "enquiry"
	},
	{
		id: "pkg-signature-opinion",
		name: "CRL Signature Opinion",
		category: "Pathology Second Opinion",
		price: 2999,
		badge: "Flagship",
		shortDescription: "Complete Integrated Pathology Second Opinion",
		description: "A comprehensive integrated review combining histopathology, cytology and immunohistochemistry for complex pathology cases.",
		groups: [
			{
				name: "Histopathology",
				items: [
					"H&E review",
					"Paraffin block review",
					"Tumour classification",
					"Grade",
					"Margins",
					"Lymph nodes"
				]
			},
			{
				name: "Cytology",
				items: [
					"FNAC",
					"Smears",
					"Fluid cytology",
					"Cell block"
				]
			},
			{
				name: "IHC",
				items: [
					"Review of existing IHC",
					"Integrated interpretation",
					"Differential diagnosis",
					"Recommendation for additional IHC where clinically appropriate"
				]
			},
			{
				name: "Integrated Review",
				items: [
					"Final integrated pathology opinion",
					"Clinicoradiological correlation",
					"TNM-related pathological parameters, where applicable",
					"Recommendation for additional investigations / molecular tests when indicated",
					"Formal signed second-opinion report"
				]
			}
		],
		ctaText: "Request Signature Opinion",
		bookingType: "enquiry"
	}
];
async function fetchTests() {
	try {
		const { data, error } = await supabase.from("tests").select("*").eq("is_active", true);
		if (error) throw error;
		if (data && data.length > 0) return data.map((t) => ({
			id: t.id,
			crlCode: t.crl_code,
			name: t.name,
			category: t.category,
			specimen: t.specimen,
			sheet1Price: t.price,
			priceStatus: t.price_status || "Confirmed",
			notes: t.notes || t.description,
			aliases: t.aliases || []
		}));
	} catch (err) {
		console.error("Failed to fetch tests from Supabase, falling back to local data", err);
	}
	return tests;
}
async function fetchPackages() {
	try {
		const { data, error } = await supabase.from("packages").select("*").eq("is_active", true);
		if (error) throw error;
		if (data && data.length > 0) return data.map((p) => ({
			id: p.id,
			name: p.name,
			category: p.category,
			price: p.price,
			shortDescription: p.short_description || p.description,
			description: p.description,
			badge: p.badge,
			includedTests: p.included_tests || [],
			ctaText: "Book Package",
			bookingType: "booking"
		}));
	} catch (err) {
		console.error("Failed to fetch packages from Supabase, falling back to local data", err);
	}
	return packages;
}
async function fetchAdminTests() {
	const { data, error } = await supabase.from("tests").select("*").order("name");
	if (error) throw error;
	return data;
}
async function fetchAdminPackages() {
	const { data, error } = await supabase.from("packages").select("*").order("category").order("name");
	if (error) throw error;
	return data;
}
async function fetchAdminSettings() {
	const { data, error } = await supabase.from("app_settings").select("*");
	if (error) throw error;
	return data;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-DFWWmsi9.js
var site = {
	name: "SECOND OPINION CRL",
	descriptor: "Clinical Reference Laboratory",
	phone: "9359777222",
	phoneHref: "tel:+919359777222",
	email: "secondopinioncrl@gmail.com",
	address: "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth, Pune 411030",
	city: "Pune",
	mapsQuery: "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth, Pune 411030"
};
var mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`;
var mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
var nav = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Second Opinion",
		to: "/second-opinion"
	},
	{
		label: "For Doctors",
		to: "/doctors"
	},
	{
		label: "Test Directory",
		to: "/tests"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var footerNav = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Second Opinion",
		to: "/second-opinion"
	},
	{
		label: "For Doctors",
		to: "/doctors"
	},
	{
		label: "Test Directory",
		to: "/tests"
	},
	{
		label: "Contact",
		to: "/contact"
	},
	{
		label: "Privacy & Confidentiality",
		to: "/privacy-confidentiality"
	},
	{
		label: "Quality & Standards",
		to: "/quality-standards"
	}
];
var services = [
	{
		number: "01",
		title: "Pathology Second Opinion & Slide Review",
		description: "Independent specialist review of diagnostically challenging pathology cases. Areas include: • Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing",
		icon: "search"
	},
	{
		number: "02",
		title: "Histopathology",
		description: "Comprehensive examination of biopsy and surgical specimens, including: • Biopsies • Resection specimens • Margin assessment • Lymph-node evaluation • Tumour grading • Treatment-response assessment • Special stains • Synoptic/structured cancer reporting where applicable",
		icon: "layers"
	},
	{
		number: "03",
		title: "Oncopathology",
		description: "Specialized service for cancer-related and tumour pathology cases.",
		icon: "target"
	},
	{
		number: "04",
		title: "Cytopathology",
		description: "Cytology services including: • FNAC • Body fluids • Effusion cytology • Cell blocks • Cervical cytology • Thyroid cytology • Lymph-node cytology • Other diagnostic cytology specimens",
		icon: "circle"
	},
	{
		number: "05",
		title: "Immunohistochemistry",
		description: "IHC services for: • Diagnostic confirmation • Differential diagnosis • Tumour classification • Site-of-origin evaluation • Prognostic markers • Predictive biomarkers",
		icon: "flask"
	},
	{
		number: "06",
		title: "Haematopathology",
		description: "Specialist pathology service supporting blood and bone marrow diagnostic evaluation.",
		icon: "droplet"
	},
	{
		number: "07",
		title: "Molecular & Ancillary Testing",
		description: "Molecular and ancillary investigations may be recommended for selected cases where clinically appropriate.",
		icon: "dna"
	},
	{
		number: "08",
		title: "Clinical Pathology & Biochemistry",
		description: "Routine laboratory investigations supporting clinical assessment.",
		icon: "beaker"
	}
];
var process = [
	{
		step: "01",
		title: "Submit Your Case",
		description: "Provide the pathology report, slides/blocks and relevant clinical information."
	},
	{
		step: "02",
		title: "Case Assessment",
		description: "The available material is assessed to determine the scope of review and whether additional material/testing may be required."
	},
	{
		step: "03",
		title: "Specialist Pathology Review",
		description: "The case is independently reviewed with correlation of morphology, IHC and relevant clinical information."
	},
	{
		step: "04",
		title: "Additional Testing, If Required",
		description: "Additional IHC, special stains or ancillary/molecular testing may be recommended when appropriate."
	},
	{
		step: "05",
		title: "Final Opinion",
		description: "A structured pathology opinion is issued and communicated through the agreed process."
	}
];
var caseMaterials = [
	{
		title: "Outside Slides",
		icon: "slide"
	},
	{
		title: "Tissue Blocks",
		icon: "block"
	},
	{
		title: "IHC Reports",
		icon: "ihc"
	},
	{
		title: "Diagnostic Reports",
		icon: "report"
	},
	{
		title: "Relevant Clinical Information",
		icon: "clinical"
	}
];
var principles = [
	{
		title: "Specialist Review",
		description: "Focused review of diagnostically challenging pathology cases."
	},
	{
		title: "Independent Assessment",
		description: "A fresh evaluation of the available pathology material and clinical information."
	},
	{
		title: "Integrated IHC & Ancillary Testing",
		description: "Additional investigations when clinically appropriate."
	},
	{
		title: "Structured Reporting",
		description: "Clear, clinically relevant diagnostic interpretation."
	},
	{
		title: "Confidentiality",
		description: "Responsible handling of patient and diagnostic information."
	}
];
var reviewTypes = [
	"Histopathology",
	"Oncopathology",
	"Slide Review",
	"IHC Review",
	"Diagnostic Report Review",
	"Other"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-dwDVHqyE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CkGPhrgB.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function LogoMark({ className, size = 44 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.png",
		width: size,
		height: size,
		alt: `${site.name} — ${site.descriptor} logo`,
		className: cn("shrink-0 rounded-full bg-white object-contain", className),
		onError: (e) => {
			e.currentTarget.style.display = "none";
			e.currentTarget.nextElementSibling?.classList.remove("hidden");
		}
	});
}
function LogoLockup({ className, invert = false, size = 44 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("group flex min-w-0 items-center gap-3", className),
		"aria-label": `${site.name} home`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-center justify-center p-0.5 shadow-soft shrink-0 rounded-full bg-white",
			style: {
				width: size,
				height: size
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {
				size,
				className: "absolute inset-0 size-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-[0.6rem] font-bold text-slate-400",
				children: "LOGO"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block truncate font-display text-[0.95rem] font-extrabold tracking-tight sm:text-base", invert ? "text-primary-foreground" : "text-foreground"),
				children: "SECOND OPINION CRL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block truncate text-[0.625rem] font-medium tracking-[0.16em] uppercase", invert ? "text-primary-foreground/65" : "text-muted-foreground"),
				children: site.descriptor
			})]
		})]
	});
}
var MESSAGES = {
	general: "Hello, I would like to know more about the tests and services available at SECOND OPINION CRL.",
	book: "Hello, I would like to book a test at SECOND OPINION CRL. Please guide me through the booking process.",
	prescription: "Hello, I would like to enquire about uploading my prescription and the next steps for testing at SECOND OPINION CRL.",
	"second-opinion": "Hello, I would like to enquire about Second Opinion & Slide Review services at SECOND OPINION CRL."
};
var PHONE_NUMBER = "919359777222";
var DISPLAY_PHONE = "9359777222";
function ContactAction({ context = "general", type, variant = "solid", className, showText = true }) {
	const getHref = () => {
		if (type === "call") return `tel:${DISPLAY_PHONE}`;
		return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGES[context])}`;
	};
	const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all";
	const variants = {
		solid: type === "whatsapp" ? "bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-6 h-12" : "bg-primary hover:bg-navy-soft text-primary-foreground rounded-full px-6 h-12",
		outline: type === "whatsapp" ? "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 rounded-full px-6 h-12" : "border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-6 h-12",
		icon: type === "whatsapp" ? "bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full size-12" : "bg-primary hover:bg-navy-soft text-primary-foreground rounded-full size-12",
		minimal: type === "whatsapp" ? "text-[#25D366] hover:opacity-80" : "text-primary hover:opacity-80"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: getHref(),
		target: type === "whatsapp" ? "_blank" : void 0,
		rel: type === "whatsapp" ? "noreferrer" : void 0,
		className: cn(baseClasses, variants[variant], className),
		children: [type === "whatsapp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			stroke: "none",
			className: "shrink-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: cn("shrink-0", variant === "icon" ? "size-5" : "size-4") }), showText && variant !== "icon" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: type === "whatsapp" ? "WhatsApp Us" : "Call Us" })]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b transition-all duration-300", scrolled ? "border-border bg-background/85 shadow-soft backdrop-blur-xl" : "border-transparent bg-background/70 backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLockup, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Main",
						className: "hidden lg:flex lg:items-center",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							className: "accent-rule relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground",
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-1 hidden md:flex items-center gap-2 mr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
							type: "whatsapp",
							variant: "icon",
							className: "size-10 md:size-11"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
							type: "call",
							variant: "icon",
							className: "size-10 md:size-11"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/pathology-second-opinion-slide-review",
						className: "hidden rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-soft lg:inline-flex",
						children: "Request Second Opinion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/tests",
						className: "hidden rounded-full border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary xl:inline-flex",
						children: "Book a Test"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						"aria-label": open ? "Close menu" : "Open menu",
						className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden ml-2",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			hidden: !open,
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "container-page py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: nav.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "animate-fade-in border-b border-border/70 last:border-0",
						style: { animationDelay: `${i * 45}ms` },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							activeOptions: { exact: item.to === "/" },
							className: "flex min-h-12 items-center justify-between text-base font-medium text-foreground data-[status=active]:text-teal",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: "h-px w-6 bg-teal/50"
							})]
						})
					}, item.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/pathology-second-opinion-slide-review",
							className: "flex min-h-12 items-center justify-center rounded-full bg-navy px-5 text-base font-semibold text-white",
							children: "Request Second Opinion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tests",
							className: "flex min-h-12 items-center justify-center rounded-full border border-input bg-background px-5 text-base font-semibold text-foreground",
							children: "Book a Test"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
								type: "whatsapp",
								variant: "solid",
								className: "w-full",
								showText: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
								type: "call",
								variant: "outline",
								className: "w-full",
								showText: true
							})]
						})
					]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-navy text-primary-foreground mb-16 md:mb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "lab-grid-dark absolute inset-0 opacity-60"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative container-page py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {
								size: 52,
								className: "p-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-extrabold",
								children: "SECOND OPINION CRL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.16em] uppercase text-primary-foreground/60",
								children: site.descriptor
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70",
							children: "Specialist Pathology Second Opinion & Diagnostic Consultation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
								type: "whatsapp",
								variant: "solid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
								type: "call",
								variant: "outline",
								className: "text-white border-white/20 hover:bg-white/10"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/50",
							children: "Navigation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: footerNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-primary-foreground/80 transition-colors hover:text-primary-foreground",
								children: item.label
							}) }, item.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-semibold tracking-[0.18em] uppercase text-primary-foreground/50",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-sm text-primary-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "break-all transition-colors hover:text-primary-foreground",
							children: site.email
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "max-w-xs leading-relaxed text-primary-foreground/70",
							children: site.address
						})]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 SECOND OPINION CRL. All rights reserved." })
			})]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var CartContext = (0, import_react.createContext)(void 0);
function CartProvider({ children }) {
	const [selectedTests, setSelectedTests] = (0, import_react.useState)([]);
	const [selectedPackages, setSelectedPackages] = (0, import_react.useState)([]);
	const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
	import_react.useEffect(() => {
		try {
			const storedTests = localStorage.getItem("crl_cart_tests");
			const storedPackages = localStorage.getItem("crl_cart_packages");
			if (storedTests) setSelectedTests(JSON.parse(storedTests));
			if (storedPackages) setSelectedPackages(JSON.parse(storedPackages));
		} catch (e) {
			console.error("Failed to load cart from localStorage", e);
		} finally {
			setIsLoaded(true);
		}
	}, []);
	import_react.useEffect(() => {
		if (!isLoaded) return;
		try {
			localStorage.setItem("crl_cart_tests", JSON.stringify(selectedTests));
			localStorage.setItem("crl_cart_packages", JSON.stringify(selectedPackages));
		} catch (e) {
			console.error("Failed to save cart to localStorage", e);
		}
	}, [
		selectedTests,
		selectedPackages,
		isLoaded
	]);
	const addTest = (test) => {
		setSelectedTests((prev) => {
			if (prev.some((t) => t.id === test.id)) return prev;
			return [...prev, test];
		});
	};
	const removeTest = (testId) => {
		setSelectedTests((prev) => prev.filter((t) => t.id !== testId));
	};
	const addPackage = (pkg) => {
		setSelectedPackages((prev) => {
			if (prev.some((p) => p.id === pkg.id)) return prev;
			return [...prev, pkg];
		});
	};
	const removePackage = (pkgId) => {
		setSelectedPackages((prev) => prev.filter((p) => p.id !== pkgId));
	};
	const clearCart = () => {
		setSelectedTests([]);
		setSelectedPackages([]);
		try {
			localStorage.removeItem("crl_cart_tests");
			localStorage.removeItem("crl_cart_packages");
		} catch (e) {}
	};
	const hasConflict = selectedTests.some((t) => t.priceStatus === "Price confirmation required");
	const totalEstimatedPrice = (selectedTests || []).reduce((acc, test) => {
		if (test?.priceStatus === "Confirmed" && test?.sheet1Price) return acc + test.sheet1Price;
		if (test?.priceStatus === "Confirmed" && !test?.sheet1Price && test?.sheet2MRP) return acc + test.sheet2MRP;
		if (test?.priceStatus === "Sheet 2 Only" && test?.sheet2MRP) return acc + test.sheet2MRP;
		return acc;
	}, 0) + (selectedPackages || []).reduce((acc, pkg) => acc + (pkg?.price || 0), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			selectedTests,
			selectedPackages,
			isLoaded,
			addTest,
			removeTest,
			addPackage,
			removePackage,
			clearCart,
			hasConflict,
			totalEstimatedPrice
		},
		children
	});
}
function useCart() {
	const context = (0, import_react.useContext)(CartContext);
	if (context === void 0) throw new Error("useCart must be used within a CartProvider");
	return context;
}
function EntryPopup() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [isRendered, setIsRendered] = (0, import_react.useState)(false);
	const { addTest } = useCart();
	const navigate = useNavigate();
	const { data: tests = [] } = useQuery({
		queryKey: ["tests"],
		queryFn: fetchAdminTests
	});
	const { data: settings = [] } = useQuery({
		queryKey: ["settings"],
		queryFn: fetchAdminSettings
	});
	const homeCollection = settings.find((s) => s.key === "home_collection")?.value || {
		freeRadiusKm: 5,
		fee: 200
	};
	const promos = settings.find((s) => s.key === "promos")?.value || {
		bloodSugarPrice: 49,
		thyroidPrice: 299
	};
	(0, import_react.useEffect)(() => {
		if (!sessionStorage.getItem("hasSeenEntryPopup")) {
			const timer = setTimeout(() => {
				setIsRendered(true);
				setTimeout(() => setIsOpen(true), 50);
				sessionStorage.setItem("hasSeenEntryPopup", "true");
			}, 700);
			return () => clearTimeout(timer);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && isOpen) closePopup();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);
	const closePopup = () => {
		setIsOpen(false);
		setTimeout(() => setIsRendered(false), 300);
	};
	const handleBook = (testId) => {
		const test = tests.find((t) => t.id === testId);
		if (test) {
			addTest(test);
			toast.success(`Added ${test.name} to booking`);
			navigate({ to: "/tests" });
		}
	};
	if (!isRendered) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute inset-0 bg-navy/40 backdrop-blur-sm transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0"),
			onClick: closePopup
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative bg-white w-full max-w-[650px] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-all duration-300 ease-out", isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.97]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: closePopup,
				className: "absolute top-4 right-4 sm:top-6 sm:right-6 size-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-10",
				"aria-label": "Close",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto p-6 sm:p-10 pt-10 sm:pt-12 hide-scrollbar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {
							size: 64,
							className: "mx-auto shadow-soft mb-5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-display font-extrabold text-navy tracking-tight",
							children: "SECOND OPINION CRL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted-foreground mt-1 mb-8",
							children: "Clinical Reference Laboratory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xl sm:text-2xl font-display font-bold text-teal mb-3 leading-tight max-w-md mx-auto",
							children: [
								"Specialist Pathology Second Opinion ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" & Diagnostic Consultation"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base text-muted-foreground font-medium mb-10 max-w-[420px] mx-auto leading-relaxed",
							children: "Specialist pathology review for diagnostically challenging, complex and cancer-related cases."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4 mb-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/pathology-second-opinion-slide-review",
								onClick: closePopup,
								className: "inline-flex items-center justify-center min-h-12 sm:min-h-14 px-8 rounded-full bg-navy text-white text-sm sm:text-base font-semibold shadow-soft hover:-translate-y-0.5 hover:shadow-md transition-all w-full sm:w-auto",
								children: "Request a Second Opinion"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tests",
								onClick: closePopup,
								className: "inline-flex items-center justify-center min-h-12 sm:min-h-14 px-8 rounded-full bg-teal/10 text-teal hover:bg-teal/20 text-sm sm:text-base font-semibold transition-all w-full sm:w-auto",
								children: "Book a Test"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full pt-8 sm:pt-10 border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[0.65rem] font-bold tracking-[0.15em] text-muted-foreground uppercase mb-5",
									children: "Popular Tests"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											handleBook("t139");
											closePopup();
										},
										className: "group flex items-center justify-between sm:justify-center gap-4 bg-surface border border-border hover:border-teal/50 hover:bg-teal/5 rounded-2xl px-5 py-3.5 transition-all w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground text-sm",
											children: "Blood Sugar"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-navy text-sm",
												children: ["₹", promos.bloodSugarPrice]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground group-hover:text-teal transition-colors" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											handleBook("t136");
											closePopup();
										},
										className: "group flex items-center justify-between sm:justify-center gap-4 bg-surface border border-border hover:border-teal/50 hover:bg-teal/5 rounded-2xl px-5 py-3.5 transition-all w-full sm:w-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground text-sm",
											children: "Thyroid Test"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-bold text-navy text-sm",
												children: ["₹", promos.thyroidPrice]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted-foreground group-hover:text-teal transition-colors" })]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-teal/5 rounded-2xl p-4 sm:p-3 flex flex-col items-center justify-center border border-teal/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[0.65rem] font-bold tracking-widest text-teal uppercase mb-1.5",
										children: "Home Collection"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-medium text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-green-600 font-bold",
												children: [
													"Free within ",
													homeCollection.freeRadiusKm,
													" km"
												]
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mx-1",
												children: "•"
											}),
											" ₹",
											homeCollection.fee,
											" beyond ",
											homeCollection.freeRadiusKm,
											" km"
										]
									})]
								})
							]
						})
					]
				})
			})]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 p-4 bg-red-50 text-red-900 rounded-md text-left text-xs font-mono overflow-auto max-w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Error:" }),
						" ",
						error?.message || "Unknown error"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=1"
			},
			{ title: "Second Opinion CRL | Clinical Reference Laboratory in Pune" },
			{
				name: "description",
				content: "SECOND OPINION CRL is a Clinical Reference Laboratory in Pune offering clinical pathology, histopathology, oncopathology, cytopathology, immunohistochemistry, molecular testing and expert second-opinion pathology review."
			},
			{
				property: "og:site_name",
				content: "SECOND OPINION CRL"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#ffffff"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function MobileContactBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border p-2 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
				context: "general",
				type: "call",
				variant: "outline",
				className: "flex-1 rounded-xl h-12"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactAction, {
				context: "general",
				type: "whatsapp",
				variant: "solid",
				className: "flex-1 rounded-xl h-12"
			})]
		})
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "pb-16 md:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileContactBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		] })
	});
}
var $$splitComponentImporter$17 = () => import("./routes-DFYgfxqP.mjs");
var title$4 = "Second Opinion CRL | Pathology Second Opinion in Pune";
var description$4 = "Second Opinion CRL is a Clinical Reference Laboratory in Pune providing specialist pathology second opinions, histopathology, cytopathology, oncopathology, IHC, molecular and ancillary testing.";
var Route$17 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "MedicalClinic",
				name: "SECOND OPINION CRL",
				alternateName: "Second Opinion CRL â€” Clinical Reference Laboratory",
				description: description$4,
				telephone: "+919359777222",
				email: "secondopinioncrl@gmail.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth",
					addressLocality: "Pune",
					addressRegion: "Maharashtra",
					postalCode: "411030",
					addressCountry: "IN"
				},
				medicalSpecialty: "Pathology"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./about-Di8mNSYt.mjs");
var title$3 = "About Second Opinion CRL | Clinical Reference Laboratory";
var description$3 = "Learn about our specialist pathology review, our expert pathologists, and our commitment to diagnostic clarity.";
var Route$16 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: title$3 }, {
		name: "description",
		content: description$3
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./admin-dZ_6Ok-Y.mjs");
var Route$15 = createFileRoute("/admin")({
	beforeLoad: async () => {},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./book-BRSxsSNY.mjs");
var Route$14 = createFileRoute("/book")({
	head: () => ({ meta: [{ title: "Book a Test | Second Opinion CRL" }, {
		name: "description",
		content: "Book your diagnostic tests online with Second Opinion CRL."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./confirmation-Cv0dkFy-.mjs");
var Route$13 = createFileRoute("/confirmation")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./contact-CzA4A_6q.mjs");
var title$2 = "Contact | Second Opinion CRL â€” Pathology Laboratory in Pune";
var description$2 = "Contact SECOND OPINION CRL, Clinical Reference Laboratory in Sadashiv Peth, Pune â€” call 9359777222 or email secondopinioncrl@gmail.com to discuss a pathology review.";
var Route$12 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./doctors-DGUDus88.mjs");
var Route$11 = createFileRoute("/doctors")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./packages-Bp8XpzrO.mjs");
var Route$10 = createFileRoute("/packages")({
	loader: async () => {
		return { packages: await fetchPackages() };
	},
	head: () => ({ meta: [{ title: "Health & Pathology Packages | Second Opinion CRL" }, {
		name: "description",
		content: "Explore our thoughtfully designed health screening and pathology second opinion packages."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./privacy-confidentiality-MJWk2ot4.mjs");
var Route$9 = createFileRoute("/privacy-confidentiality")({
	head: () => ({ meta: [{ title: "Patient Confidentiality | Second Opinion CRL" }, {
		name: "description",
		content: "Information handling and patient confidentiality at SECOND OPINION CRL."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./quality-standards-CDO5HPDy.mjs");
var Route$8 = createFileRoute("/quality-standards")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./second-opinion-SZa1R7_d.mjs");
var title$1 = "Specialist Pathology Second Opinion | Second Opinion CRL";
var description$1 = "Independent specialist review for diagnostically challenging pathology cases.";
var Route$7 = createFileRoute("/second-opinion")({
	head: () => ({ meta: [{ title: title$1 }, {
		name: "description",
		content: description$1
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./services-CIV39WOo.mjs");
var title = "Services | Histopathology, Oncopathology & IHC in Pune â€” Second Opinion CRL";
var description = "Pathology services at SECOND OPINION CRL Pune: histopathology, oncopathology, cytopathology, immunohistochemistry, clinical pathology, haematology and molecular testing.";
var Route$6 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./tests-DNR3ZDf2.mjs");
var Route$5 = createFileRoute("/tests")({
	validateSearch: (search) => {
		return {
			q: typeof search.q === "string" ? search.q : void 0,
			category: typeof search.category === "string" ? search.category : void 0
		};
	},
	loader: async () => {
		const [fetchedTests, fetchedPackages] = await Promise.all([fetchTests(), fetchPackages()]);
		return {
			tests: fetchedTests,
			packages: fetchedPackages
		};
	},
	head: () => ({ meta: [{ title: "Test Directory & Booking | Second Opinion CRL" }, {
		name: "description",
		content: "Search and book diagnostic tests online."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./upload-prescription-xSZXOpj-.mjs");
var Route$4 = createFileRoute("/upload-prescription")({
	head: () => ({ meta: [{ title: "Upload Prescription | Second Opinion CRL" }, {
		name: "description",
		content: "Upload your prescription for expert laboratory assistance."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin-0jHxvsSg.mjs");
var Route$3 = createFileRoute("/admin/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./cancer-pathology_._specialtyId-DtihSY6l.mjs");
var Route$2 = createFileRoute("/cancer-pathology_/$specialtyId")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./packages_._packageId-BDFcgWAt.mjs");
var Route$1 = createFileRoute("/packages_/$packageId")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: async ({ params }) => {
		const pkg = (await fetchPackages()).find((p) => p.id === params.packageId);
		if (!pkg) throw new Error("Package not found");
		return pkg;
	}
});
var $$splitComponentImporter = () => import("./services_._serviceId-Bvd3akIz.mjs");
var Route = createFileRoute("/services_/$serviceId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var AdminRoute = Route$15.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$18
});
var BookRoute = Route$14.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$18
});
var ConfirmationRoute = Route$13.update({
	id: "/confirmation",
	path: "/confirmation",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var DoctorsRoute = Route$11.update({
	id: "/doctors",
	path: "/doctors",
	getParentRoute: () => Route$18
});
var PackagesRoute = Route$10.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$18
});
var PrivacyConfidentialityRoute = Route$9.update({
	id: "/privacy-confidentiality",
	path: "/privacy-confidentiality",
	getParentRoute: () => Route$18
});
var QualityStandardsRoute = Route$8.update({
	id: "/quality-standards",
	path: "/quality-standards",
	getParentRoute: () => Route$18
});
var SecondOpinionRoute = Route$7.update({
	id: "/second-opinion",
	path: "/second-opinion",
	getParentRoute: () => Route$18
});
var ServicesRoute = Route$6.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$18
});
var TestsRoute = Route$5.update({
	id: "/tests",
	path: "/tests",
	getParentRoute: () => Route$18
});
var UploadPrescriptionRoute = Route$4.update({
	id: "/upload-prescription",
	path: "/upload-prescription",
	getParentRoute: () => Route$18
});
var AdminIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var CancerPathologySpecialtyIdRoute = Route$2.update({
	id: "/cancer-pathology_/$specialtyId",
	path: "/cancer-pathology/$specialtyId",
	getParentRoute: () => Route$18
});
var PackagesPackageIdRoute = Route$1.update({
	id: "/packages_/$packageId",
	path: "/packages/$packageId",
	getParentRoute: () => Route$18
});
var ServicesServiceIdRoute = Route.update({
	id: "/services_/$serviceId",
	path: "/services/$serviceId",
	getParentRoute: () => Route$18
});
var AdminRouteChildren = { AdminIndexRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	BookRoute,
	ConfirmationRoute,
	ContactRoute,
	DoctorsRoute,
	PackagesRoute,
	PrivacyConfidentialityRoute,
	QualityStandardsRoute,
	SecondOpinionRoute,
	ServicesRoute,
	TestsRoute,
	UploadPrescriptionRoute,
	CancerPathologySpecialtyIdRoute,
	PackagesPackageIdRoute,
	ServicesServiceIdRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { supabase as C, __exportAll as S, cn as T, site as _, Route$5 as a, fetchAdminTests as b, ContactAction as c, mapsDirectionsUrl as d, mapsEmbedUrl as f, services as g, reviewTypes as h, Route$2 as i, LogoMark as l, process as m, Route as n, Route$10 as o, principles as p, Route$1 as r, useCart as s, router_exports as t, caseMaterials as u, fetchAdminPackages as v, supabase_exports as w, tests as x, fetchAdminSettings as y };
