export type PackageCategory = "Clinical Health Packages" | "Cancer Screening Series" | "Pathology Second Opinion";

export interface PackageGroup {
  name: string;
  items: string[];
}

export interface HealthPackage {
  id: string;
  name: string;
  category: PackageCategory;
  price: number;
  shortDescription: string;
  description: string;
  badge?: string;
  groups?: PackageGroup[]; // e.g. "Blood Tests": ["CBC", "HbA1c"]
  includedTests?: string[]; // Fallback flat list if not grouped
  notes?: string;
  ctaText?: string;
  bookingType: "booking" | "enquiry"; // Standard book vs specialist enquiry
  additionalCharges?: string;
}

export const packages: HealthPackage[] = [
  // CLINICAL HEALTH PACKAGES
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

  // CANCER SCREENING SERIES
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

  // PATHOLOGY SECOND OPINION
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