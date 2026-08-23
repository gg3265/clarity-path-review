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
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Second Opinion", to: "/second-opinion" as const },
  { label: "Contact", to: "/contact" as const },
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
    description: "Share pathology reports, slides, blocks, IHC or relevant diagnostic material.",
  },
  {
    step: "02",
    title: "Specialist Review",
    description:
      "The available pathology material and clinical information are reviewed.",
  },
  {
    step: "03",
    title: "Integrated Assessment",
    description:
      "Histopathology, cytopathology, IHC and ancillary findings are considered where appropriate.",
  },
  {
    step: "04",
    title: "Structured Opinion",
    description:
      "Receive a clear, clinically relevant second-opinion report.",
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
