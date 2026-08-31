// @ts-nocheck
import { useState, useMemo } from "react";
import { createFileRoute, useNavigate, Link, Navigate } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { BackButton } from "@/components/BackButton";
import { toast } from "sonner";
import { CheckCircle2, FileUp, X, Upload } from "lucide-react";
import { tests as allTests } from "@/data/tests";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services_/$serviceId")({
  component: ServiceDetail,
});

function ServiceDetail() {
  const { serviceId } = Route.useParams();
  
  const service = useMemo(() => {
    return services.find(
      (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === serviceId
    );
  }, [serviceId]);

  const [step, setStep] = useState<"FORM" | "SUCCESS">("FORM");

  if (!service) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/services" className="mt-4 text-primary hover:underline">
          Return to Services
        </Link>
      </div>
    );
  }

  // Direct routes to test selection or specific flows
  if (service.title === "Clinical Pathology & Biochemistry") {
    return <Navigate to="/tests" search={{ category: service.title }} replace />;
  }
  
  if (service.title === "Oncopathology") {
    return <Navigate to="/#cancer-services" replace />;
  }

  if (service.title === "Haematopathology") {
    return <Navigate to="/cancer-pathology/haematolymphoid-pathology" replace />;
  }

  // Second opinion routing
  if (service.title === "Pathology Second Opinion & Slide Review") {
    // Allows it to render the existing generic form here (which is used as the slide review form)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container-page pt-6 pb-2">
        <BackButton fallbackUrl="/#specialist-services" className="mb-0" />
      </div>

      {step === "SUCCESS" ? (
        <div className="container-page max-w-2xl mt-12 animate-in fade-in slide-in-from-bottom-4">
          <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
              Request Received
            </h2>
            <p className="mt-2 text-muted-foreground">
              Thank you. Your request has been received by SECOND OPINION CRL.
            </p>
            
            <div className="mt-6 inline-block rounded-lg bg-secondary px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Request Reference</span>
              <div className="font-mono text-lg font-bold text-foreground">SOCRL-{Math.floor(100000 + Math.random() * 900000)}</div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Our team will review your request and contact you regarding the next steps.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-border pt-8">
              <a href="tel:+919359777222" className="flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-semibold text-foreground transition-colors hover:bg-secondary/80 sm:w-auto">
                Call Us
              </a>
              <a href="https://wa.me/919359777222" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 sm:w-auto">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-page max-w-3xl mt-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {service.title}
              </h1>
              <div className="mt-3 text-lg text-muted-foreground">
                {service.description.includes("•") ? (
                  <>
                    <p className="mb-2">{service.description.split("•")[0]}</p>
                    <ul className="ml-5 list-disc space-y-1">
                      {service.description.split("•").slice(1).map((part, index) => (
                        <li key={index}>{part.trim()}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>{service.description}</p>
                )}
              </div>
            </div>
          <ServiceForm serviceId={serviceId} serviceTitle={service.title} onSuccess={() => {
            setStep("SUCCESS");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} />
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// FORM COMPONENTS
// ----------------------------------------------------------------------

function ServiceForm({ serviceId, serviceTitle, onSuccess }: { serviceId: string; serviceTitle: string; onSuccess: () => void }) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    doctor: "",
    hospital: "",
  });

  const [formData, setFormData] = useState<any>({
    materialTypes: [],
    selectedTests: [],
  });

  const isSecondOpinion = serviceTitle === "Pathology Second Opinion & Slide Review";
  const isHisto = serviceTitle === "Histopathology";
  const isOnco = serviceTitle === "Oncopathology";
  const isCyto = serviceTitle === "Cytopathology";
  const isIHC = serviceTitle === "Immunohistochemistry";
  const isMolecular = serviceTitle === "Molecular & Ancillary Testing";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [files, setFiles] = useState<{ [label: string]: File | null }>({});

  const handleFileChange = (label: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [label]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!patient.name || (!isSecondOpinion && !patient.age) || (!isSecondOpinion && !patient.gender) || !patient.mobile) {
      toast.error("Please enter required patient details.");
      return;
    }
    
    setIsSubmitting(true);
    let uploadedPaths: string[] = [];
    try {
      const { supabase } = await import("@/lib/supabase");

      const fileEntries = Object.entries(files).filter(([_, f]) => f !== null) as [string, File][];
      const requestId = crypto.randomUUID();
      const fileRecordsToInsert: any[] = [];
      let uploadedUrls: string[] = [];

      for (const [label, file] of fileEntries) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${requestId}_${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `second-opinion/${requestId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('prescriptions')
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        
        uploadedPaths.push(filePath);

        fileRecordsToInsert.push({
          request_id: requestId,
          file_path: filePath,
          file_name: file.name,
          file_type: file.type || 'unknown'
        });

        uploadedUrls.push(`- ${label}: ${file.name}`);
      }
      
      let requestData;
      
      if (isSecondOpinion) {
        const { error } = await supabase.from('second_opinion_requests').insert([{
          id: requestId,
          patient_name: patient.name,
          mobile: patient.mobile,
          email: patient.email || null,
          case_description: `Role: ${role}\nDoctor: ${patient.doctor}\nHospital: ${patient.hospital}\n\nCase Details: ${formData.caseDesc || ''}`,
          status: 'PENDING'
        }]);
        if (error) throw error;
        
        if (fileRecordsToInsert.length > 0) {
          const { error: fileErr } = await supabase.from('second_opinion_files').insert(fileRecordsToInsert);
          if (fileErr) throw fileErr;
        }
        
        requestData = { id: requestId };
      } else {
        const appendedMessage = uploadedUrls.length > 0 ? `\n\nAttachments:\n${uploadedUrls.join('\n')}\n\n_STORAGE_PATHS_: ${uploadedPaths.join(',')}` : '';
        const { error } = await supabase.from('service_requests').insert([{
          id: requestId,
          service_id: serviceId,
          service_name: serviceTitle,
          patient_name: patient.name,
          mobile: patient.mobile,
          email: patient.email || null,
          message: `Age: ${patient.age}, Gender: ${patient.gender}\nDoctor: ${patient.doctor}\nHospital: ${patient.hospital}\n\nCase Details: ${JSON.stringify(formData)}${appendedMessage}`,
          status: 'PENDING'
        }]);
        if (error) throw error;
        requestData = { id: requestId };
      }

      toast.success("Request submitted successfully!");
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit request.");
      // Cleanup files on failure
      if (uploadedPaths.length > 0) {
        import("@/lib/supabase").then(({ supabase }) => {
          supabase.storage.from('prescriptions').remove(uploadedPaths).catch(console.error);
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPatient(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleMaterial = (mat: string) => {
    setFormData((prev: any) => {
      const current = prev.materialTypes || [];
      if (current.includes(mat)) {
        return { ...prev, materialTypes: current.filter((m: string) => m !== mat) };
      } else {
        return { ...prev, materialTypes: [...current, mat] };
      }
    });
  };

  const toggleTest = (testId: string) => {
    setFormData((prev: any) => {
      const current = prev.selectedTests || [];
      if (current.includes(testId)) {
        return { ...prev, selectedTests: current.filter((id: string) => id !== testId) };
      } else {
        return { ...prev, selectedTests: [...current, testId] };
      }
    });
  };

  const molecularTests = useMemo(() => allTests.filter(t => t.category === "Molecular & Ancillary Testing"), []);
  
  const [role, setRole] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("role") === "doctor" ? "Doctor" : "Patient / Family";
    }
    return "Patient / Family";
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-12">
      
      {isSecondOpinion && (
        <section className="space-y-6">
          <div className="border-b border-border pb-4">
            <h3 className="text-2xl font-bold text-foreground">I am a:</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Patient / Family", "Doctor", "Diagnostic Laboratory"].map((r) => (
              <label key={r} className={`flex cursor-pointer items-center justify-center rounded-xl border ${role === r ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-foreground"} px-4 py-4 font-medium transition-colors hover:bg-secondary/50`}>
                <input type="radio" name="role" value={r} checked={role === r} onChange={(e) => setRole(e.target.value)} className="sr-only" />
                <span className="text-sm">{r}</span>
              </label>
            ))}
          </div>
        </section>
      )}

      {/* Patient Details Section */}
      <section className="space-y-6">
        <div className="border-b border-border pb-4">
          <h3 className="text-2xl font-bold text-foreground">{role === "Patient / Family" || !isSecondOpinion ? "Patient Details" : "Patient Information"}</h3>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-foreground">Patient Name <span className="text-destructive">*</span></label>
            <input required type="text" name="name" value={patient.name} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter full name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Age {(!isSecondOpinion) && <span className="text-destructive">*</span>}</label>
            <input required={!isSecondOpinion} type="text" name="age" value={patient.age} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g. 45" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Gender {(!isSecondOpinion) && <span className="text-destructive">*</span>}</label>
            <select required={!isSecondOpinion} name="gender" value={patient.gender} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Mobile Number <span className="text-destructive">*</span></label>
            <input required type="tel" name="mobile" value={patient.mobile} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="10-digit number" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Email Address</label>
            <input type="email" name="email" value={patient.email} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Optional" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Doctor / Referring Physician</label>
            <input type="text" name="doctor" value={patient.doctor} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Optional" />
          </div>
          {!isSecondOpinion && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Hospital / Clinic</label>
              <input type="text" name="hospital" value={patient.hospital} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Optional" />
            </div>
          )}
        </div>
      </section>

      {/* Service-Specific Section */}
      <section className="space-y-8">
        <div className="border-b border-border pb-4">
          <h3 className="text-2xl font-bold text-foreground">
            {isSecondOpinion ? "Case Information" : 
             isOnco ? "Case Details" :
             isCyto ? "Sample Details" :
             isIHC ? "Test / Case Details" : 
             isMolecular ? "Investigation Details" :
             "Specimen Details"}
          </h3>
        </div>

        {isHisto && (
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <select name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select Option</option>
                <option value="Biopsy">Biopsy</option>
                <option value="Surgical Specimen">Surgical Specimen</option>
                <option value="Tissue Sample">Tissue Sample</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Case Description</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Is the specimen already available?" name="specimenAvailable" onChange={handleDataChange} />
            <RadioGroup label="Previous Pathology Report Available?" name="prevReport" onChange={handleDataChange} />
          </div>
        )}

        {isOnco && (
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <input type="text" name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Clinical / Case Information</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Pathology Report?" name="prevReport" onChange={handleDataChange} />
            <RadioGroup label="Previous IHC / Molecular Report?" name="prevIhc" onChange={handleDataChange} />
          </div>
        )}

        {isSecondOpinion && (
          <div className="grid gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">What would you like reviewed?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Outside Slides", "Tissue Blocks", "IHC Reports", "Diagnostic / Pathology Report", "Other"].map(mat => (
                  <label key={mat} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-background cursor-pointer hover:bg-secondary/50 transition-colors">
                    <input type="checkbox" checked={formData.materialTypes?.includes(mat)} onChange={() => toggleMaterial(mat)} className="size-4 text-primary focus:ring-primary" />
                    <span className="text-sm font-medium">{mat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Brief Case Description</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Previous Diagnosis / Impression</label>
              <input type="text" name="prevDiagnosis" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
          </div>
        )}

        {isCyto && (
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Sample Type</label>
              <select name="sampleType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select Option</option>
                <option value="FNAC">FNAC</option>
                <option value="Body Fluid">Body Fluid</option>
                <option value="Cervical / Pap Sample">Cervical / Pap Sample</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Clinical / Case Information</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Cytology Report Available?" name="prevReport" onChange={handleDataChange} />
          </div>
        )}

        {isIHC && (
          <div className="grid gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <input type="text" name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Clinical Information</label>
              <textarea name="purpose" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Histopathology Report Available?" name="prevHisto" onChange={handleDataChange} />
            <RadioGroup label="Previous IHC Performed?" name="prevIhc" onChange={handleDataChange} />
          </div>
        )}

        {isMolecular && (
          <div className="grid gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Test / Investigation</label>
              <div className="grid sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto rounded-xl border border-input p-4 bg-background">
                {molecularTests.map(test => (
                  <label key={test.id} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" checked={formData.selectedTests?.includes(test.id)} onChange={() => toggleTest(test.id)} className="mt-1 size-4 text-primary focus:ring-primary" />
                    <span className="text-sm font-medium leading-snug group-hover:text-primary transition-colors">{test.name}</span>
                  </label>
                ))}
                {molecularTests.length === 0 && <span className="text-sm text-muted-foreground">No specific tests found. Please specify in clinical information.</span>}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen Type</label>
              <input type="text" name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Case Information</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Reports?" name="prevReport" onChange={handleDataChange} />
          </div>
        )}
      </section>

      {/* Documents / Reports Section */}
      <section className="space-y-6 pt-4">
        <div className="border-b border-border pb-4">
          <h3 className="text-2xl font-bold text-foreground">Documents / Reports</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {isSecondOpinion ? (
            <>
              <FileUploadBox label="Upload Report" selectedFile={files["Upload Report"]} onFileChange={(f) => handleFileChange("Upload Report", f)} />
              <FileUploadBox label="Upload IHC Report" selectedFile={files["Upload IHC Report"]} onFileChange={(f) => handleFileChange("Upload IHC Report", f)} />
              <div className="sm:col-span-2">
                <FileUploadBox label="Upload Other Document" selectedFile={files["Upload Other Document"]} onFileChange={(f) => handleFileChange("Upload Other Document", f)} />
              </div>
            </>
          ) : isOnco ? (
            <>
              <FileUploadBox label="Upload Previous Reports" selectedFile={files["Upload Previous Reports"]} onFileChange={(f) => handleFileChange("Upload Previous Reports", f)} />
              <FileUploadBox label="Upload relevant pathology documents" selectedFile={files["Upload relevant pathology documents"]} onFileChange={(f) => handleFileChange("Upload relevant pathology documents", f)} />
            </>
          ) : isIHC ? (
            <>
              {formData.prevHisto === "Yes" && <FileUploadBox label="Upload Histopathology Report" selectedFile={files["Upload Histopathology Report"]} onFileChange={(f) => handleFileChange("Upload Histopathology Report", f)} />}
              {formData.prevIhc === "Yes" && <FileUploadBox label="Upload Previous IHC Report" selectedFile={files["Upload Previous IHC Report"]} onFileChange={(f) => handleFileChange("Upload Previous IHC Report", f)} />}
              {formData.prevHisto !== "Yes" && formData.prevIhc !== "Yes" && <FileUploadBox label="Upload Relevant Reports" selectedFile={files["Upload Relevant Reports"]} onFileChange={(f) => handleFileChange("Upload Relevant Reports", f)} />}
            </>
          ) : (
            <div className="sm:col-span-2">
              <FileUploadBox label="Upload relevant documents" selectedFile={files["Upload relevant documents"]} onFileChange={(f) => handleFileChange("Upload relevant documents", f)} />
            </div>
          )}
        </div>
      </section>

      <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.01] shadow-md hover:bg-navy-soft mt-8 disabled:opacity-70 disabled:hover:scale-100">
        {isSubmitting ? "Submitting..." : (isSecondOpinion ? "Submit Second Opinion Request" : "Continue →")}
      </button>
    </form>
  );
}

// ----------------------------------------------------------------------
// HELPER COMPONENTS
// ----------------------------------------------------------------------

function RadioGroup({ label, name, onChange }: { label: string, name: string, onChange: any }) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <div className="flex gap-4">
        <label className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
          <input type="radio" name={name} value="Yes" onChange={onChange} className="size-4 text-primary focus:ring-primary" />
          <span className="text-sm font-medium">Yes</span>
        </label>
        <label className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-background p-4 cursor-pointer hover:bg-secondary/50 transition-colors">
          <input type="radio" name={name} value="No" onChange={onChange} className="size-4 text-primary focus:ring-primary" />
          <span className="text-sm font-medium">No</span>
        </label>
      </div>
    </div>
  );
}

function FileUploadBox({ label, selectedFile, onFileChange }: { label: string; selectedFile?: File | null; onFileChange?: (f: File | null) => void }) {
  const file = selectedFile;
  
  const handleSetFile = (f: File | null) => {
    if (onFileChange) onFileChange(f);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {file ? (
        <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileUp className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{file.name}</p>
              <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button type="button" onClick={() => handleSetFile(null)} className="p-2 text-muted-foreground hover:text-destructive">
            <X className="size-4" />
          </button>
        </div>
      ) : (
        <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background p-6 transition-colors hover:border-primary/50 hover:bg-secondary/50">
          <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
            <Upload className="size-6" />
          </div>
          <p className="mt-4 text-sm font-medium text-foreground">Click to upload document</p>
          <p className="mt-1 text-xs text-muted-foreground">PDF, JPG, PNG up to 10MB</p>
          <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const f = e.target.files[0];
              if (f.size > 10 * 1024 * 1024) {
                toast.error("File size must be less than 10MB");
                return;
              }
              handleSetFile(f);
            }
          }} />
        </label>
      )}
    </div>
  );
}
