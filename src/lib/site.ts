// Central content file — edit brand details, services and copy here.

export const site = {
  name: "SECOND OPINION CRL",
  descriptor: "Clinical Reference Laboratory",
  phone: "9359777222",
  phoneHref: "tel:+919359777222",
  email: "secondopinioncrl@gmail.com",
  address:
    "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth, Pune 411030",
  city: "Pune",
  mapsQuery:
    "557, Vireen Heights, 3rd Floor, Laxmi Road, Sadashiv Peth, Pune 411030",
};

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsQuery,
)}&output=embed`;

export const nav = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Second Opinion", to: "/second-opinion" as const },
  { label: "Cancer Pathology", to: "/#cancer-services" as const },
  { label: "Test Directory", to: "/tests" as const },
  { label: "Health Packages", to: "/packages" as const },
  { label: "For Doctors", to: "/second-opinion" as const },
  { label: "Contact", to: "/contact" as const },
];

export const footerNav = [
  { label: "Privacy & Confidentiality", to: "/privacy-confidentiality" as const },
  { label: "Quality & Standards", to: "/quality-standards" as const },
  { label: "Contact", to: "/contact" as const },
  { label: "Services", to: "/services" as const },
];

export const focusAreas = [
  {
    title: "Clinical Pathology",
    description: "Diagnostic laboratory evaluation",
  },
  {
    title: "Histopathology",
    description: "Detailed tissue-based evaluation",
  },
  {
    title: "Oncopathology",
    description: "Specialized pathology support for cancer-related cases",
  },
  {
    title: "Second Opinion",
    description: "Expert review of challenging pathology cases",
  },
];

export const services = [
  {
    number: "01",
    title: "Pathology Second Opinion & Slide Review",
    description:
      "Independent specialist review of diagnostically challenging pathology cases. Areas include: • Histopathology • Cytopathology • IHC • Oncopathology • Ancillary Testing",
    icon: "search",
  },
  {
    number: "02",
    title: "Histopathology",
    description:
      "Comprehensive examination of biopsy and surgical specimens, including: • Biopsies • Resection specimens • Margin assessment • Lymph-node evaluation • Tumour grading • Treatment-response assessment • Special stains • Synoptic/structured cancer reporting where applicable",
    icon: "layers",
  },
  {
    number: "03",
    title: "Oncopathology",
    description:
      "Specialized service for cancer-related and tumour pathology cases.",
    icon: "target",
  },
  {
    number: "04",
    title: "Cytopathology",
    description:
      "Cytology services including: • FNAC • Body fluids • Effusion cytology • Cell blocks • Cervical cytology • Thyroid cytology • Lymph-node cytology • Other diagnostic cytology specimens",
    icon: "circle",
  },
  {
    number: "05",
    title: "Immunohistochemistry",
    description:
      "IHC services for: • Diagnostic confirmation • Differential diagnosis • Tumour classification • Site-of-origin evaluation • Prognostic markers • Predictive biomarkers",
    icon: "flask",
  },
  {
    number: "06",
    title: "Haematopathology",
    description:
      "Specialist pathology service supporting blood and bone marrow diagnostic evaluation.",
    icon: "droplet",
  },
  {
    number: "07",
    title: "Molecular & Ancillary Testing",
    description:
      "Molecular and ancillary investigations may be recommended for selected cases where clinically appropriate.",
    icon: "dna",
  },
  {
    number: "08",
    title: "Clinical Pathology & Biochemistry",
    description:
      "Routine laboratory investigations supporting clinical assessment.",
    icon: "beaker",
  },
] as const;

export const secondOpinionStatement =
  "Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports.";

export const process = [
  {
    step: "01",
    title: "Submit Your Case",
    description: "Provide the pathology report, slides/blocks and relevant clinical information.",
  },
  {
    step: "02",
    title: "Case Assessment",
    description: "The available material is assessed to determine the scope of review and whether additional material/testing may be required.",
  },
  {
    step: "03",
    title: "Specialist Pathology Review",
    description: "The case is independently reviewed with correlation of morphology, IHC and relevant clinical information.",
  },
  {
    step: "04",
    title: "Additional Testing, If Required",
    description: "Additional IHC, special stains or ancillary/molecular testing may be recommended when appropriate.",
  },
  {
    step: "05",
    title: "Final Opinion",
    description: "A structured pathology opinion is issued and communicated through the agreed process.",
  },
];

export const caseMaterials = [
  { title: "Outside Slides", icon: "slide" },
  { title: "Tissue Blocks", icon: "block" },
  { title: "IHC Reports", icon: "ihc" },
  { title: "Diagnostic Reports", icon: "report" },
  { title: "Relevant Clinical Information", icon: "clinical" },
];

export const principles = [
  {
    title: "Specialist Review",
    description: "Focused review of diagnostically challenging pathology cases.",
  },
  {
    title: "Independent Assessment",
    description:
      "A fresh evaluation of the available pathology material and clinical information.",
  },
  {
    title: "Integrated IHC & Ancillary Testing",
    description:
      "Additional investigations when clinically appropriate.",
  },
  {
    title: "Structured Reporting",
    description: "Clear, clinically relevant diagnostic interpretation.",
  },
  {
    title: "Confidentiality",
    description: "Responsible handling of patient and diagnostic information.",
  },
];

export const reviewTypes = [
  "Histopathology",
  "Oncopathology",
  "Slide Review",
  "IHC Review",
  "Diagnostic Report Review",
  "Other",
];
