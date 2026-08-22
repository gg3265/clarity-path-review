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
    title: "Histopathology",
    description:
      "Tissue-based diagnostic evaluation of surgical and biopsy specimens.",
    icon: "layers",
  },
  {
    number: "02",
    title: "Oncopathology",
    description:
      "Specialized pathology support for cancer-related diagnostic cases.",
    icon: "target",
  },
  {
    number: "03",
    title: "Cytopathology",
    description:
      "Cell-based evaluation of cytology samples and aspiration material.",
    icon: "circle",
  },
  {
    number: "04",
    title: "Immunohistochemistry",
    description:
      "Marker-based studies used to support histopathological interpretation.",
    icon: "flask",
  },
  {
    number: "05",
    title: "Second Opinion & Slide Review",
    description:
      "Expert review of outside slides, blocks, IHC and diagnostic reports.",
    icon: "search",
  },
  {
    number: "06",
    title: "Molecular & Ancillary Testing",
    description:
      "Ancillary and molecular investigations available for select cases.",
    icon: "dna",
  },
  {
    number: "07",
    title: "Clinical Pathology & Biochemistry",
    description:
      "Routine laboratory investigations supporting clinical assessment.",
    icon: "beaker",
  },
  {
    number: "08",
    title: "Haematology",
    description:
      "Blood-based laboratory evaluation and peripheral smear examination.",
    icon: "droplet",
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
