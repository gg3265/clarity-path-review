import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, ChevronRight, Upload, X, FileText, ArrowLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cancer-pathology_/$specialtyId")({
  component: CancerPathologyForm,
});

const specialtiesMap: Record<string, { name: string, category: string }> = {
  "breast-pathology": { name: "Breast Pathology", category: "Cancer Pathology" },
  "gi-pathology": { name: "GI Pathology", category: "Cancer Pathology" },
  "head-neck-pathology": { name: "Head & Neck Pathology", category: "Cancer Pathology" },
  "gynaecological-pathology": { name: "Gynaecological Pathology", category: "Cancer Pathology" },
  "genitourinary-pathology": { name: "Genitourinary Pathology", category: "Cancer Pathology" },
  "lung-pathology": { name: "Lung Pathology", category: "Cancer Pathology" },
  "haematolymphoid-pathology": { name: "Haematolymphoid Pathology", category: "Cancer Pathology" },
  "bone-soft-tissue-tumours": { name: "Bone & Soft Tissue Tumours", category: "Cancer Pathology" },
  "skin-pathology": { name: "Skin Pathology", category: "Cancer Pathology" },
  "endocrine-pathology": { name: "Endocrine Pathology", category: "Cancer Pathology" },
  "cns-pathology": { name: "CNS Pathology", category: "Cancer Pathology" },
  "metastatic-malignancies": { name: "Metastatic Malignancies", category: "Cancer Pathology" },
};

function CancerPathologyForm() {
  const { specialtyId } = Route.useParams();
  const navigate = useNavigate();
  const specialty = specialtiesMap[specialtyId];
  
  if (!specialty) {
    return <div className="py-20 text-center">Specialty not found.</div>;
  }

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Form State
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    patientId: ""
  });

  const [caseInfo, setCaseInfo] = useState({
    reason: "",
    history: "",
    knownDiagnosis: "",
    previousReport: "",
    previousTreatment: "",
    imagingInfo: ""
  });

  const [materials, setMaterials] = useState({
    items: [] as string[],
    otherMaterial: "",
    originalsAvailable: ""
  });

  const [specificDetails, setSpecificDetails] = useState<Record<string, string>>({});

  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (step === 1) {
      if (!patient.name || !patient.age || !patient.gender || !patient.mobile) {
        toast.error("Please fill all required patient details.");
        return;
      }
    }
    if (step === 2) {
      if (!caseInfo.reason || !caseInfo.history) {
        toast.error("Please provide the reason for review and clinical history.");
        return;
      }
    }
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep(s => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMaterialToggle = (item: string) => {
    setMaterials(prev => {
      const isSelected = prev.items.includes(item);
      return {
        ...prev,
        items: isSelected ? prev.items.filter(i => i !== item) : [...prev.items, item]
      };
    });
  };

  const handleSpecificChange = (key: string, value: string) => {
    setSpecificDetails(prev => ({ ...prev, [key]: value }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      const valid = selected.filter(f => f.size <= 10 * 1024 * 1024); // 10MB limit
      if (valid.length < selected.length) {
        toast.error("Some files were too large (max 10MB).");
      }
      setFiles(prev => [...prev, ...valid]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const { supabase } = await import("@/lib/supabase");
      
      const referenceNumber = `CRL-CP-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      // Upload files
      const uploadedFileRecords = [];
      const requestId = crypto.randomUUID();

      if (files.length > 0) {
        for (const file of files) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${requestId}/${crypto.randomUUID()}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('second-opinion-documents')
            .upload(fileName, file);
            
          if (uploadError) throw uploadError;
          
          uploadedFileRecords.push({
            id: crypto.randomUUID(),
            request_id: requestId,
            file_path: fileName,
            file_name: file.name,
            file_type: file.type || 'application/octet-stream'
          });
        }
      }

      // Format case description
      let fullDescription = `REFERENCE: ${referenceNumber}\n`;
      fullDescription += `CATEGORY: ${specialty.category} - ${specialty.name}\n\n`;
      fullDescription += `PATIENT: ${patient.name}, ${patient.age}, ${patient.gender}\n`;
      fullDescription += `ID: ${patient.patientId || 'N/A'}\n\n`;
      
      fullDescription += `CASE INFO:\nReason: ${caseInfo.reason}\nHistory: ${caseInfo.history}\n`;
      fullDescription += `Known Dx: ${caseInfo.knownDiagnosis || 'N/A'}\nPrev Report: ${caseInfo.previousReport || 'N/A'}\n`;
      fullDescription += `Prev Treatment: ${caseInfo.previousTreatment || 'N/A'}\nImaging: ${caseInfo.imagingInfo || 'N/A'}\n\n`;

      fullDescription += `MATERIALS:\n${materials.items.join(', ')}\n`;
      if (materials.items.includes('Other')) fullDescription += `Other Material: ${materials.otherMaterial}\n`;
      fullDescription += `Originals available: ${materials.originalsAvailable}\n\n`;

      fullDescription += `SPECIFIC DETAILS:\n`;
      for (const [k, v] of Object.entries(specificDetails)) {
        fullDescription += `${k}: ${v}\n`;
      }

      const { error: reqError } = await supabase.from('second_opinion_requests').insert([{
        id: requestId,
        patient_name: patient.name,
        mobile: patient.mobile,
        email: patient.email || null,
        case_description: fullDescription,
        status: 'PENDING'
      }]);
      
      if (reqError) throw reqError;

      if (uploadedFileRecords.length > 0) {
        const { error: fileError } = await supabase.from('second_opinion_files').insert(uploadedFileRecords);
        if (fileError) throw fileError;
      }

      setSubmittedRef(referenceNumber);
      setStep(7); // Success step
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">Patient Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Full Name *</label>
                <input type="text" value={patient.name} onChange={e => setPatient({...patient, name: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Age *</label>
                  <input type="text" value={patient.age} onChange={e => setPatient({...patient, age: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Gender *</label>
                  <select value={patient.gender} onChange={e => setPatient({...patient, gender: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Mobile Number *</label>
                <input type="tel" value={patient.mobile} onChange={e => setPatient({...patient, mobile: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email *</label>
                <input type="email" value={patient.email} onChange={e => setPatient({...patient, email: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-semibold">Patient ID / Hospital ID (Optional)</label>
                <input type="text" value={patient.patientId} onChange={e => setPatient({...patient, patientId: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">Case Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Reason for requesting review *</label>
                <textarea value={caseInfo.reason} onChange={e => setCaseInfo({...caseInfo, reason: e.target.value})} rows={3} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Clinical history *</label>
                <textarea value={caseInfo.history} onChange={e => setCaseInfo({...caseInfo, history: e.target.value})} rows={3} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Known/suspected diagnosis (if available)</label>
                <input type="text" value={caseInfo.knownDiagnosis} onChange={e => setCaseInfo({...caseInfo, knownDiagnosis: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Previous pathology diagnosis/report</label>
                <textarea value={caseInfo.previousReport} onChange={e => setCaseInfo({...caseInfo, previousReport: e.target.value})} rows={2} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Previous treatment, if relevant</label>
                <input type="text" value={caseInfo.previousTreatment} onChange={e => setCaseInfo({...caseInfo, previousTreatment: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Relevant imaging information</label>
                <input type="text" value={caseInfo.imagingInfo} onChange={e => setCaseInfo({...caseInfo, imagingInfo: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">Pathology Material Available</h3>
            <div className="space-y-4">
              <label className="text-sm font-semibold">Select available materials:</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Histopathology slides", "Paraffin block", "Cytology/FNAC slides", "Cell block", "IHC slides/report", "Molecular/ancillary test reports", "Previous pathology report", "Other"].map(item => (
                  <label key={item} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:bg-surface">
                    <input type="checkbox" checked={materials.items.includes(item)} onChange={() => handleMaterialToggle(item)} className="rounded border-input text-primary focus:ring-primary/20 size-4" />
                    <span className="text-sm font-medium">{item}</span>
                  </label>
                ))}
              </div>
              {materials.items.includes("Other") && (
                <div className="space-y-2 pt-2">
                  <label className="text-sm font-semibold">Please specify</label>
                  <input type="text" value={materials.otherMaterial} onChange={e => setMaterials({...materials, otherMaterial: e.target.value})} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              )}
              <div className="space-y-3 pt-6 border-t border-border mt-6">
                <label className="text-sm font-semibold">Are original slides/blocks available for review?</label>
                <div className="flex gap-4">
                  {["Yes", "No", "Not sure"].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="originals" value={opt} checked={materials.originalsAvailable === opt} onChange={e => setMaterials({...materials, originalsAvailable: e.target.value})} className="text-primary focus:ring-primary/20 size-4" />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">{specialty.name} Specific Details</h3>
            <div className="space-y-6">
              {specialtyId === "breast-pathology" && (
                <>
                  <SelectField label="Case type" options={["Breast biopsy", "Lumpectomy / wide local excision", "Mastectomy", "Lymph node", "Other"]} value={specificDetails.caseType || ""} onChange={v => handleSpecificChange("caseType", v)} />
                  <SelectField label="Known/suspected lesion" options={["Benign lesion", "Atypical lesion", "In situ lesion", "Invasive carcinoma", "Metastatic lesion", "Unknown / not sure"]} value={specificDetails.lesion || ""} onChange={v => handleSpecificChange("lesion", v)} />
                  <InputField label="Tumour type / previous diagnosis (if available)" value={specificDetails.tumourType || ""} onChange={v => handleSpecificChange("tumourType", v)} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField label="ER Status" options={["Positive", "Negative", "Not available", "Not sure"]} value={specificDetails.erStatus || ""} onChange={v => handleSpecificChange("erStatus", v)} />
                    <SelectField label="PR Status" options={["Positive", "Negative", "Not available", "Not sure"]} value={specificDetails.prStatus || ""} onChange={v => handleSpecificChange("prStatus", v)} />
                    <SelectField label="HER2 Status" options={["Positive", "Equivocal", "Negative", "Not available", "Not sure"]} value={specificDetails.her2Status || ""} onChange={v => handleSpecificChange("her2Status", v)} />
                    <SelectField label="Ki-67" options={["Known results", "Not available", "Not sure"]} value={specificDetails.ki67 || ""} onChange={v => handleSpecificChange("ki67", v)} />
                  </div>
                </>
              )}
              {specialtyId === "gi-pathology" && (
                <>
                  <SelectField label="Site" options={["Oesophagus", "Stomach", "Small intestine", "Colon", "Rectum", "Appendix", "Liver", "Pancreas", "Biliary tract", "Other"]} value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen type" options={["Biopsy", "Resection", "Polypectomy", "FNAC/cytology", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if any" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="IHC/molecular information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "head-neck-pathology" && (
                <>
                  <SelectField label="Site" options={["Oral cavity", "Oropharynx", "Nasopharynx", "Larynx", "Salivary gland", "Thyroid", "Lymph node", "Other"]} value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["Biopsy", "Resection", "FNAC", "Cell block", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="Relevant IHC/HPV-related information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "gynaecological-pathology" && (
                <>
                  <SelectField label="Site" options={["Cervix", "Endometrium", "Ovary", "Uterus", "Vulva", "Vagina", "Fallopian tube", "Other"]} value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["Biopsy", "Curettage", "Resection", "Cytology", "FNAC", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="Relevant IHC information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "genitourinary-pathology" && (
                <>
                  <SelectField label="Site" options={["Kidney", "Urinary bladder", "Prostate", "Testis", "Ureter", "Other"]} value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["Biopsy", "Resection", "TURBT", "Prostate biopsy", "FNAC/cytology", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="Relevant IHC information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "lung-pathology" && (
                <>
                  <SelectField label="Specimen" options={["Bronchoscopic biopsy", "Lung biopsy", "Resection", "FNAC", "Cytology", "Cell block", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <SelectField label="Known/suspected diagnosis" options={["Primary lung tumour", "Metastatic tumour", "Unknown", "Other"]} value={specificDetails.diagnosisType || ""} onChange={v => handleSpecificChange("diagnosisType", v)} />
                  <InputField label="Previous pathology diagnosis (if available)" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="IHC results (if available)" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                  <InputField label="Molecular/biomarker results (if available)" value={specificDetails.molecular || ""} onChange={v => handleSpecificChange("molecular", v)} />
                </>
              )}
              {specialtyId === "haematolymphoid-pathology" && (
                <>
                  <SelectField label="Case type" options={["Lymph node", "Bone marrow", "Blood", "Tissue biopsy", "Other"]} value={specificDetails.caseType || ""} onChange={v => handleSpecificChange("caseType", v)} />
                  <SelectField label="Clinical concern" options={["Lymphoma", "Leukaemia", "Other haematolymphoid disorder", "Not sure"]} value={specificDetails.concern || ""} onChange={v => handleSpecificChange("concern", v)} />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Available investigations:</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["Histopathology", "IHC", "Flow cytometry", "Bone marrow report", "Cytogenetics", "Molecular testing", "Other"].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specificDetails.investigations?.includes(item)} onChange={(e) => {
                            const current = specificDetails.investigations ? specificDetails.investigations.split(', ') : [];
                            if (e.target.checked) handleSpecificChange("investigations", [...current, item].join(', '));
                            else handleSpecificChange("investigations", current.filter(i => i !== item).join(', '));
                          }} className="rounded border-input text-primary focus:ring-primary/20 size-4" />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                </>
              )}
              {specialtyId === "bone-soft-tissue-tumours" && (
                <>
                  <InputField label="Site (e.g. Bone, Soft tissue, Muscle, etc.)" value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["Core biopsy", "Excision", "Resection", "FNAC", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Imaging available:</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["MRI", "CT", "X-ray", "PET/CT", "Other"].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specificDetails.imaging?.includes(item)} onChange={(e) => {
                            const current = specificDetails.imaging ? specificDetails.imaging.split(', ') : [];
                            if (e.target.checked) handleSpecificChange("imaging", [...current, item].join(', '));
                            else handleSpecificChange("imaging", current.filter(i => i !== item).join(', '));
                          }} className="rounded border-input text-primary focus:ring-primary/20 size-4" />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {specialtyId === "skin-pathology" && (
                <>
                  <SelectField label="Specimen" options={["Skin biopsy", "Excision", "Re-excision", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Site" value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Clinical concern" options={["Melanocytic lesion", "Carcinoma", "Lymphoid lesion", "Sarcoma", "Other", "Not sure"]} value={specificDetails.concern || ""} onChange={v => handleSpecificChange("concern", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="IHC information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "endocrine-pathology" && (
                <>
                  <SelectField label="Site" options={["Thyroid", "Parathyroid", "Adrenal", "Pancreas/endocrine tumour", "Other"]} value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["FNAC", "Biopsy", "Resection", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <InputField label="Previous diagnosis, if available" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="IHC information if available" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                </>
              )}
              {specialtyId === "cns-pathology" && (
                <>
                  <InputField label="Site" value={specificDetails.site || ""} onChange={v => handleSpecificChange("site", v)} />
                  <SelectField label="Specimen" options={["Biopsy", "Resection", "Other"]} value={specificDetails.specimen || ""} onChange={v => handleSpecificChange("specimen", v)} />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Available information:</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["Histopathology", "IHC", "Molecular testing", "Imaging report", "Previous pathology report"].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specificDetails.info?.includes(item)} onChange={(e) => {
                            const current = specificDetails.info ? specificDetails.info.split(', ') : [];
                            if (e.target.checked) handleSpecificChange("info", [...current, item].join(', '));
                            else handleSpecificChange("info", current.filter(i => i !== item).join(', '));
                          }} className="rounded border-input text-primary focus:ring-primary/20 size-4" />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
              {specialtyId === "metastatic-malignancies" && (
                <>
                  <SelectField label="Known or suspected primary site" options={["Breast", "Lung", "GI", "Gynaecological", "Genitourinary", "Head & neck", "Skin", "CNS", "Other", "Unknown primary"]} value={specificDetails.primary || ""} onChange={v => handleSpecificChange("primary", v)} />
                  <InputField label="Site of metastasis" value={specificDetails.metastasis || ""} onChange={v => handleSpecificChange("metastasis", v)} />
                  <SelectField label="Is the primary site currently uncertain?" options={["Yes", "No", "Not sure"]} value={specificDetails.uncertain || ""} onChange={v => handleSpecificChange("uncertain", v)} />
                  <InputField label="Previous pathology diagnosis" value={specificDetails.diagnosis || ""} onChange={v => handleSpecificChange("diagnosis", v)} />
                  <InputField label="Previous IHC results" value={specificDetails.ihc || ""} onChange={v => handleSpecificChange("ihc", v)} />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Available imaging:</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {["CT", "MRI", "PET/CT", "Other"].map(item => (
                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specificDetails.imaging?.includes(item)} onChange={(e) => {
                            const current = specificDetails.imaging ? specificDetails.imaging.split(', ') : [];
                            if (e.target.checked) handleSpecificChange("imaging", [...current, item].join(', '));
                            else handleSpecificChange("imaging", current.filter(i => i !== item).join(', '));
                          }} className="rounded border-input text-primary focus:ring-primary/20 size-4" />
                          <span className="text-sm">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">Upload Documents</h3>
            <p className="text-sm text-muted-foreground">
              Please upload any relevant pathology reports, IHC reports, molecular reports, or clinical documents. (Max 10MB per file. Allowed: PDF, JPG, PNG).
            </p>
            <div 
              className="border-2 border-dashed border-border hover:border-primary/50 transition-colors rounded-2xl p-10 text-center cursor-pointer bg-surface"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="size-8 text-primary/40 mx-auto mb-4" />
              <p className="text-sm font-semibold">Click to select files</p>
              <p className="text-xs text-muted-foreground mt-1">or drag and drop here</p>
              <input type="file" ref={fileInputRef} className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileSelect} />
            </div>
            {files.length > 0 && (
              <ul className="space-y-3 mt-6">
                {files.map((f, i) => (
                  <li key={i} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <FileText className="size-5 text-primary shrink-0" />
                      <span className="text-sm font-medium truncate">{f.name}</span>
                      <span className="text-xs text-muted-foreground shrink-0">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                    </div>
                    <button onClick={() => removeFile(i)} className="p-2 text-muted-foreground hover:text-destructive transition-colors shrink-0">
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold font-display">Review Request</h3>
            <div className="bg-surface p-6 rounded-2xl border border-border space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Service</h4>
                <p className="font-semibold">{specialty.name}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Patient Details</h4>
                  <p className="text-sm">{patient.name}, {patient.age} ({patient.gender})</p>
                  <p className="text-sm">{patient.mobile}</p>
                  <p className="text-sm">{patient.email}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Case Summary</h4>
                  <p className="text-sm font-medium">Reason: {caseInfo.reason}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{caseInfo.history}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Specific Details</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {Object.entries(specificDetails).filter(([_,v]) => v).map(([k,v]) => (
                    <div key={k} className="text-sm"><span className="font-medium capitalize">{k.replace(/([A-Z])/g, ' $1')}:</span> {v}</div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Documents</h4>
                <p className="text-sm">{files.length} file(s) attached.</p>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center py-12 animate-fade-in">
            <div className="inline-flex size-16 items-center justify-center rounded-full bg-green-100 mb-6">
              <CheckCircle2 className="size-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">Request Submitted</h3>
            <p className="text-lg text-muted-foreground mb-2">Your request for specialist review has been received.</p>
            <p className="text-lg font-mono font-semibold bg-surface inline-block px-4 py-2 rounded-lg border border-border">
              Reference: {submittedRef}
            </p>
            <div className="mt-8">
              <Link to="/" className="text-primary font-semibold hover:underline">Return to Home</Link>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <PageHeader 
        eyebrow="Cancer Pathology Services" 
        title={specialty?.name} 
        intro="Complete the information below to request a specialist review."
        watermark="REQUEST"
      />
      <div className="bg-background py-16 md:py-24">
        <div className="container-page max-w-3xl">
          {step < 7 && (
            <div className="mb-12">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {step} of 6</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {['Patient', 'Case', 'Materials', 'Specifics', 'Documents', 'Review'][step - 1]}
                </span>
              </div>
              <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${(step / 6) * 100}%` }} />
              </div>
            </div>
          )}

          <div className="bg-background sm:bg-surface sm:p-10 sm:rounded-3xl sm:border border-border min-h-[400px]">
            {renderStep()}

            {step < 7 && (
              <div className="mt-12 flex items-center justify-between pt-6 border-t border-border">
                {step > 1 ? (
                  <button onClick={handleBack} disabled={isSubmitting} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50">
                    <ArrowLeft className="size-4" /> Back
                  </button>
                ) : <div />}
                
                {step < 6 ? (
                  <button onClick={handleNext} className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-navy-soft transition-colors">
                    Next <ChevronRight className="size-4" />
                  </button>
                ) : (
                  <button onClick={submitForm} disabled={isSubmitting} className="flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-8 text-sm font-semibold text-white hover:bg-crimson transition-colors disabled:opacity-70">
                    {isSubmitting ? <><Loader2 className="size-4 animate-spin" /> Submitting...</> : "Submit Request"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// Helpers
function InputField({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">{label}</label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function SelectField({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full p-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20">
        <option value="">Select option</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
