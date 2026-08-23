const fs = require('fs');

const data = [
  // Oncopathology
  { name: 'AFP', category: 'Oncopathology', sheet1Price: 950 },
  { name: 'CA125', category: 'Oncopathology', sheet1Price: 1000 },
  { name: 'CA19.9', category: 'Oncopathology', sheet1Price: 1000 },
  { name: 'CHROMOGRANIN A', category: 'Oncopathology', sheet1Price: 6500 },
  { name: 'PSA TOTAL', category: 'Oncopathology', sheet1Price: null },
  { name: 'PSA FREE', category: 'Oncopathology', sheet1Price: 900 },

  // Molecular & Ancillary Testing
  { name: 'CHIKNGUNIYA PCR', category: 'Molecular & Ancillary Testing', sheet1Price: 1500 },
  { name: 'NIPT', category: 'Molecular & Ancillary Testing', sheet1Price: 150000 },
  { name: 'ANC PROFILE/ ANTENATAL PLUS', category: 'Molecular & Ancillary Testing', sheet1Price: 2600 },
  { name: 'DUAL MARKER', category: 'Molecular & Ancillary Testing', sheet1Price: 2200 },
  { name: 'QUADRUPLE MARKER', category: 'Molecular & Ancillary Testing', sheet1Price: 3000 },
  { name: 'TB GOLD', category: 'Molecular & Ancillary Testing', sheet1Price: null },
  { name: 'HLAB27', category: 'Molecular & Ancillary Testing', sheet1Price: 2400 },
  { name: 'NMDA', category: 'Molecular & Ancillary Testing', sheet1Price: 6740 },
  { name: 'ANA BY IFA', category: 'Molecular & Ancillary Testing', sheet1Price: 2200 },
  { name: 'PROTEIN ELECTROPHORESIS', category: 'Molecular & Ancillary Testing', sheet1Price: 720 },

  // Haematology
  { name: 'CBC', category: 'Haematology', sheet1Price: 300, sheet2MRP: 300 },
  { name: 'ESR', category: 'Haematology', sheet1Price: 150, sheet2MRP: 150 },
  { name: 'PERIPHERAL SMEAR', category: 'Haematology', sheet1Price: 300 },
  { name: 'G6PD', category: 'Haematology', sheet1Price: 900 },
  { name: 'HB ELECTROPHORESIS', category: 'Haematology', sheet1Price: 1000 },
  { name: 'APTT', category: 'Haematology', sheet1Price: 550 },
  { name: 'COOMBS TEST (DIRECT)', category: 'Haematology', sheet1Price: 700 },
  { name: 'COOMBS TEST (INDIRECT)', category: 'Haematology', sheet1Price: 700 },
  { name: 'D-DIMER', category: 'Haematology', sheet1Price: 1200 },
  { name: 'LUPUS ANTICOAGULANT', category: 'Haematology', sheet1Price: 1800 },
  { name: 'PT INR', category: 'Haematology', sheet1Price: 400 },
  { name: 'BLOOD GROUP', category: 'Haematology', sheet1Price: 200 },
  { name: 'IRON STUDY', category: 'Haematology', sheet1Price: 500 },
  { name: 'FERRITIN', category: 'Haematology', sheet1Price: 650 },
  { name: 'FOLATE SERUM', category: 'Haematology', sheet1Price: 1300 },
  { name: 'VITAMIN B12', category: 'Haematology', sheet1Price: 1000 },

  // Clinical Pathology & Biochemistry
  { name: 'ALBUMIN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'ALLERGY PROFILE', category: 'Clinical Pathology & Biochemistry', sheet1Price: null },
  { name: 'ALP-PHOS (ALKALINE PHOSPHATASE)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 250 },
  { name: 'AMH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1800 },
  { name: 'AMYLASE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'ANA', category: 'Clinical Pathology & Biochemistry', sheet1Price: 900, sheet2MRP: 2200 },
  { name: 'ANTI CCP', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1600 },
  { name: 'ANTI DS-DNA', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1300 },
  { name: 'ANTI TPO', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1450 },
  { name: 'ASO', category: 'Clinical Pathology & Biochemistry', sheet1Price: 650 },
  { name: 'BETA HCG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'BICARBONATE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'BILIRUBIN TOTAL & DIRECT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 250 },
  { name: 'BLOOD CULTURE/SENSITIVITY', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1050 },
  { name: 'BUN(UREA)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'C3', category: 'Clinical Pathology & Biochemistry', sheet1Price: 750 },
  { name: 'C4', category: 'Clinical Pathology & Biochemistry', sheet1Price: 750 },
  { name: 'CALCIUM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'CHIKUNGUNIYA IGM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1000 },
  { name: 'TOTAL CHOLESTEROL', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'CORTISOL MORNING', category: 'Clinical Pathology & Biochemistry', sheet1Price: 650 },
  { name: 'CORTISOL EVENING', category: 'Clinical Pathology & Biochemistry', sheet1Price: 650 },
  { name: 'CORTISOL RANDOM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 650 },
  { name: 'C PEPTIDE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1100 },
  { name: 'CPK MB', category: 'Clinical Pathology & Biochemistry', sheet1Price: 600 },
  { name: 'CPK TOTAL', category: 'Clinical Pathology & Biochemistry', sheet1Price: 400 },
  { name: 'CREATININE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'CRP', category: 'Clinical Pathology & Biochemistry', sheet1Price: 540 },
  { name: 'DENGUE IGG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'DENGUE IGM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'DENGUE NS1 ANTIGEN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 600 },
  { name: 'ANTI DS-DNA ANTIBODY (DOUBLE STANDARD)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1300 },
  { name: 'ELECTROLYTES', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'ESTROGEN (ESTRODIAL) /E2', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'FBS/PPBS/RBS (ANY ONE)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 80 },
  { name: 'FBS AND PPBS', category: 'Clinical Pathology & Biochemistry', sheet1Price: 150 },
  { name: 'FASTING URINE SUGAR/ PP URINE SUGAR', category: 'Clinical Pathology & Biochemistry', sheet1Price: 100 },
  { name: 'FECAL CALPROTECTIN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 3200 },
  { name: 'FEVER PANEL BASIC', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'FEVER PANEL ADVANCE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1250 },
  { name: 'FSH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'GGT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 350 },
  { name: 'HBA1C', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500, sheet2MRP: 500 },
  { name: 'HBSAG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500, sheet2MRP: 500 },
  { name: 'HCV', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500, sheet2MRP: 500 },
  { name: 'HDL CHOLESTEROL', category: 'Clinical Pathology & Biochemistry', sheet1Price: 250 },
  { name: 'HHH (ELISA METHOD)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1550 },
  { name: 'HHH (RAPID CARD)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1200 },
  { name: 'HOMOCYSTEINE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1000 },
  { name: 'HS CRP', category: 'Clinical Pathology & Biochemistry', sheet1Price: 780 },
  { name: 'IONIZED CALCIUM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 600 },
  { name: 'INSULIN FASTING/PP/RANDOM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 900 },
  { name: 'LACTATE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1050 },
  { name: 'LDH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 400 },
  { name: 'LFT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 900, sheet2MRP: 900 },
  { name: 'LH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'LIPASE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 630 },
  { name: 'LIPID PROFILE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 800 },
  { name: 'LIPOPROTEIN A', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1100 },
  { name: 'MAGNESIUM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'MALARIA PARASITE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'MALARIA ANTIGEN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 650 },
  { name: 'NT PRO BNP', category: 'Clinical Pathology & Biochemistry', sheet1Price: 3200 },
  { name: 'PROCALCITONIN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 2000 },
  { name: 'PHOSPHORUS', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'PROLACTIN', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'PROGESTERONE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'PROTEIN', category: 'Clinical Pathology & Biochemistry', sheet1Price: null },
  { name: 'PTH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1600 },
  { name: 'RA FACTOR', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500, sheet2MRP: 500 },
  { name: 'RFT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 850, sheet2MRP: 950 },
  { name: 'RUBELLA IGG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 680 },
  { name: 'RUBELLA IGM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 700 },
  { name: 'SEMEN ANALYSIS', category: 'Clinical Pathology & Biochemistry', sheet1Price: 600 },
  { name: 'SGOT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'SPT', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'STOOL R/M', category: 'Clinical Pathology & Biochemistry', sheet1Price: 150 },
  { name: 'THYROID TOTAL', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'THYROID FREE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 800 },
  { name: 'TESTOSTERONE TOTAL', category: 'Clinical Pathology & Biochemistry', sheet1Price: 750 },
  { name: 'TESTOSTERONE FREE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1700 },
  { name: 'TRIGLYCERIDE', category: 'Clinical Pathology & Biochemistry', sheet1Price: 300 },
  { name: 'TORCH IGG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1500 },
  { name: 'TORCH IGM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1500 },
  { name: 'TROP I', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1750 },
  { name: 'TROP T', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1700 },
  { name: 'TSH', category: 'Clinical Pathology & Biochemistry', sheet1Price: 350 },
  { name: 'TSH ANTIBODY RECEPTOR', category: 'Clinical Pathology & Biochemistry', sheet1Price: 4000 },
  { name: 'TYPHI DOT IGG', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'TYPHI DOT IGM', category: 'Clinical Pathology & Biochemistry', sheet1Price: 450 },
  { name: 'URIC ACID', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'URINE ALBUMIN CREAT RATIO', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'URINE C/S', category: 'Clinical Pathology & Biochemistry', sheet1Price: 900 },
  { name: 'URINE PREGNANCY TEST', category: 'Clinical Pathology & Biochemistry', sheet1Price: 200 },
  { name: 'URINE PROTEIN CREAT RATIO', category: 'Clinical Pathology & Biochemistry', sheet1Price: 500 },
  { name: 'URINE R/M', category: 'Clinical Pathology & Biochemistry', sheet1Price: 150 },
  { name: 'VDRL RPR', category: 'Clinical Pathology & Biochemistry', sheet1Price: 250 },
  { name: 'VITAMIN D3', category: 'Clinical Pathology & Biochemistry', sheet1Price: 1500 },
  { name: 'WIDAL (SLIDE METHOD)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 350 },
  { name: 'WIDAL (TUBE METHOD)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 400 },

  // Additional Sheet 2
  { name: 'GLUCOSE FASTING', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 80 },
  { name: 'GLUCOSE PP', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 80 },
  { name: 'HIV', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 520 },
  { name: 'VIT D', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 1500 },
  { name: 'VIT B', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 1000 },
  { name: 'THYROID PROFILE', category: 'Clinical Pathology & Biochemistry', sheet2MRP: 500 },

  // Promotional Items
  { name: 'BLOOD SUGAR (PROMO)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 49 },
  { name: 'THYROID TEST (PROMO)', category: 'Clinical Pathology & Biochemistry', sheet1Price: 299 },
];

let testsStr = '';
let idCounter = 1;

data.forEach((item) => {
  let priceStatus = '"Confirmed"';
  if (item.sheet1Price === null && item.sheet2MRP === undefined) {
    priceStatus = '"Price confirmation required"';
  } else if (item.sheet1Price !== undefined && item.sheet2MRP !== undefined && item.sheet1Price !== item.sheet2MRP) {
    priceStatus = '"Price confirmation required"';
  } else if (item.sheet1Price === undefined && item.sheet2MRP !== undefined) {
    priceStatus = '"Confirmed"'; // Only in sheet 2 but we display it as confirmed
  }

  const aliases = [];
  const nameL = item.name.toLowerCase();
  if (nameL.includes('glucose') || nameL.includes('sugar')) aliases.push('"glucose"', '"sugar"');
  if (nameL.includes('thyroid')) aliases.push('"thyroid"');
  if (nameL.includes('vitamin b12') || nameL === 'vit b') aliases.push('"b12"', '"vitamin b12"');
  if (nameL.includes('vitamin d3') || nameL === 'vit d') aliases.push('"d3"', '"vit d"', '"vitamin d"');
  if (nameL.includes('cbc')) aliases.push('"complete blood count"');

  const s1 = item.sheet1Price !== undefined && item.sheet1Price !== null ? `sheet1Price: ${item.sheet1Price}, ` : '';
  const s2 = item.sheet2MRP !== undefined && item.sheet2MRP !== null ? `sheet2MRP: ${item.sheet2MRP}, ` : '';

  testsStr += `  { id: "t${idCounter++}", name: "${item.name}", category: "${item.category}", ${s1}${s2}priceStatus: ${priceStatus}, aliases: [${aliases.join(', ')}] },\n`;
});

const output = `export type TestCategory =
  | "Oncopathology"
  | "Molecular & Ancillary Testing"
  | "Haematology"
  | "Clinical Pathology & Biochemistry"
  | "Histopathology"
  | "Cytopathology"
  | "Immunohistochemistry"
  | "Second Opinion & Slide Review";

export type PriceStatus = "Confirmed" | "Price confirmation required" | "Sheet 2 Only" | "Not Available";

export interface DiagnosticTest {
  id: string;
  name: string;
  category: TestCategory;
  sheet1Price?: number;
  sheet2MRP?: number;
  priceStatus: PriceStatus;
  aliases: string[];
}

// Master Test Data
export const tests: DiagnosticTest[] = [
${testsStr}];
`;

fs.writeFileSync('src/data/tests.ts', output);
console.log('tests.ts successfully regenerated.');
