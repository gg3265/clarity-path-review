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
    title: "Second Opinion & Slide Review",
    description:
      "Expert review of outside slides, blocks, IHC and diagnostic reports.",
    icon: "search",
  },
  {
    number: "04",
    title: "Cytopathology",
    description:
      "Cell-based evaluation of cytology samples and aspiration material.",
    icon: "circle",
  },
  {
    number: "05",
    title: "Immunohistochemistry",
    description:
      "Marker-based studies used to support histopathological interpretation.",
    icon: "flask",
  },
  {
    number: "06",
    title: "Clinical Pathology & Biochemistry",
    description:
      "Routine laboratory investigations supporting clinical assessment.",
    icon: "beaker",
  },
  {
    number: "07",
    title: "Haematology",
    description:
      "Blood-based laboratory evaluation and peripheral smear examination.",
    icon: "droplet",
  },
  {
    number: "08",
    title: "Molecular & Ancillary Testing",
    description:
      "Ancillary and molecular investigations available for select cases.",
    icon: "dna",
  },
] as const;

export const secondOpinionStatement =
  "Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports.";

export const process = [
  {
    step: "01",
    title: "Submit Your Case",
    description: "Share the relevant pathology material and reports.",
  },
  {
    step: "02",
    title: "Expert Review",
    description:
      "The case is reviewed with attention to the available diagnostic information.",
  },
  {
    step: "03",
    title: "Detailed Assessment",
    description:
      "Slides, blocks, IHC findings and reports can be considered where applicable.",
  },
  {
    step: "04",
    title: "Second Opinion",
    description:
      "Receive the reviewed opinion through the laboratory's process.",
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
    title: "Expertise",
    description: "Focused pathology and specialist diagnostic review.",
  },
  {
    title: "Precision",
    description:
      "Careful attention to diagnostic details and available case material.",
  },
  {
    title: "Clarity",
    description:
      "Helping patients and referring clinicians better understand complex pathology findings.",
  },
  {
    title: "Confidentiality",
    description: "Respectful handling of patient and diagnostic information.",
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
