import { useState, useMemo } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { services } from "@/lib/site";
import { BackButton } from "@/components/BackButton";
import { toast } from "sonner";
import { CheckCircle2, FileUp, X, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services_/$serviceId")({
  component: ServiceDetail,
});

function ServiceDetail() {
  const { serviceId } = Route.useParams();
  const navigate = useNavigate();
  
  const service = useMemo(() => {
    return services.find(
      (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === serviceId
    );
  }, [serviceId]);

  const [step, setStep] = useState<"INTRO" | "FORM" | "SUCCESS">("INTRO");

  // Determine service logic
  const isTestBased = service 
    ? ["Clinical Pathology & Biochemistry", "Haematology", "Molecular & Ancillary Testing"].includes(service.title)
    : false;

  const handleRequestClick = () => {
    if (isTestBased && service) {
      // Test-based services route to /tests to use existing Find Test -> Select Tests -> Booking flow
      navigate({ to: "/tests", search: { category: service.title } });
    } else {
      // Specialist enquiry services show the patient details form
      setStep("FORM");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Smart Back Navigation */}
      <div className="container-page pt-6 pb-2">
        <BackButton fallbackUrl="/services" className="mb-0" />
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
      ) : step === "FORM" ? (
        <div className="container-page max-w-2xl mt-8 animate-in fade-in slide-in-from-right-4 duration-300">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Service Request</h2>
          <ServiceForm serviceTitle={service.title} onSuccess={() => {
            setStep("SUCCESS");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} />
        </div>
      ) : (
        <div className="container-page max-w-4xl mt-6">
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="bg-navy p-10 md:p-16 text-primary-foreground">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-bold tracking-widest text-primary/70">{service.number}</span>
                <span className="h-px flex-1 bg-white/10"></span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold">{service.title}</h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="p-10 md:p-16 bg-background">
              <h3 className="font-display text-2xl font-bold text-foreground">Request This Service</h3>
              <p className="mt-3 text-muted-foreground text-lg">
                Tell us a few details and our team will assist you with the next steps.
              </p>
              
              <button
                onClick={handleRequestClick}
                className="mt-8 inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02] shadow-sm"
              >
                Request This Service →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// FORM COMPONENTS
// ----------------------------------------------------------------------

function ServiceForm({ serviceTitle, onSuccess }: { serviceTitle: string; onSuccess: () => void }) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    doctor: "",
    hospital: "",
    notes: ""
  });

  const [formData, setFormData] = useState<any>({
    materialTypes: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patient.name || !patient.age || !patient.gender || !patient.mobile) {
      toast.error("Please enter required patient details.");
      return;
    }
    
    // In a real app, send data to backend here.
    onSuccess();
  };

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setPatient(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleMaterial = (mat: string) => {
    setFormData(prev => {
      const current = prev.materialTypes || [];
      if (current.includes(mat)) {
        return { ...prev, materialTypes: current.filter((m: string) => m !== mat) };
      } else {
        return { ...prev, materialTypes: [...current, mat] };
      }
    });
  };

  const isSecondOpinion = serviceTitle === "Second Opinion & Slide Review";
  const isHisto = serviceTitle === "Histopathology";
  const isOnco = serviceTitle === "Oncopathology";
  const isCyto = serviceTitle === "Cytopathology";
  const isIHC = serviceTitle === "Immunohistochemistry";

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-12">
      {/* Patient Details Section */}
      <section className="space-y-6">
        <div className="border-b border-border pb-4">
          <h3 className="text-xl font-bold text-foreground">Patient Details</h3>
        </div>
        
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-semibold text-foreground">Patient Full Name <span className="text-destructive">*</span></label>
            <input required type="text" name="name" value={patient.name} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter full name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Age <span className="text-destructive">*</span></label>
            <input required type="text" name="age" value={patient.age} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g. 45" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Gender <span className="text-destructive">*</span></label>
            <select required name="gender" value={patient.gender} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
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
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Hospital / Clinic</label>
            <input type="text" name="hospital" value={patient.hospital} onChange={handlePatientChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Optional" />
          </div>
          
          {!isSecondOpinion && (
            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm font-semibold text-foreground">Additional Notes</label>
              <textarea name="notes" value={patient.notes} onChange={handlePatientChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Any additional information..." />
            </div>
          )}
        </div>
      </section>

      {/* Service-Specific Section */}
      <section className="space-y-6">
        <div className="border-b border-border pb-4">
          <h3 className="text-xl font-bold text-foreground">
            {isSecondOpinion ? "Second Opinion & Slide Review" : `${serviceTitle} Details`}
          </h3>
          {isSecondOpinion && (
            <p className="mt-2 text-sm text-muted-foreground">Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports.</p>
          )}
        </div>

        {isHisto && (
          <div className="grid gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <select name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select Option</option>
                <option value="Biopsy">Biopsy</option>
                <option value="Surgical specimen">Surgical specimen</option>
                <option value="Tissue sample">Tissue sample</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Case Description</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Is the specimen already available?" name="specimenAvailable" onChange={handleDataChange} />
            <RadioGroup label="Any previous pathology report?" name="prevReport" onChange={handleDataChange} />
            {formData.prevReport === "Yes" && <FileUploadBox label="Upload Previous Report" />}
          </div>
        )}

        {isOnco && (
          <div className="grid gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <input type="text" name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Clinical / Case Information</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Pathology Report Available?" name="prevReport" onChange={handleDataChange} />
            <RadioGroup label="Previous IHC / Molecular Reports Available?" name="prevIhc" onChange={handleDataChange} />
            <div className="grid sm:grid-cols-2 gap-4">
              <FileUploadBox label="Upload Previous Reports" />
              <FileUploadBox label="Upload relevant pathology documents" />
            </div>
          </div>
        )}

        {isSecondOpinion && (
          <div className="grid gap-5">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Type of Material Available</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Outside Slides", "Tissue Blocks", "IHC Reports", "Pathology Reports", "Other"].map(mat => (
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
            <div className="grid sm:grid-cols-2 gap-4">
              <FileUploadBox label="Upload Pathology Report" />
              <FileUploadBox label="Upload IHC Report" />
              <div className="sm:col-span-2">
                <FileUploadBox label="Upload Relevant Documents" />
              </div>
            </div>
          </div>
        )}

        {isCyto && (
          <div className="grid gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Sample Type</label>
              <select name="sampleType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">Select Option</option>
                <option value="FNAC">FNAC</option>
                <option value="Body Fluid">Body Fluid</option>
                <option value="Cervical / Pap sample">Cervical / Pap sample</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Clinical / Case Information</label>
              <textarea name="caseDesc" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Cytology Report Available?" name="prevReport" onChange={handleDataChange} />
            {formData.prevReport === "Yes" && <FileUploadBox label="Upload Previous Report" />}
          </div>
        )}

        {isIHC && (
          <div className="grid gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Specimen / Tissue Type</label>
              <input type="text" name="specimenType" onChange={handleDataChange} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Purpose / Clinical Information</label>
              <textarea name="purpose" onChange={handleDataChange} rows={3} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <RadioGroup label="Previous Histopathology Report Available?" name="prevHisto" onChange={handleDataChange} />
            <RadioGroup label="Previous IHC Performed?" name="prevIhc" onChange={handleDataChange} />
            <div className="grid sm:grid-cols-2 gap-4">
              {formData.prevHisto === "Yes" && <FileUploadBox label="Upload Histopathology Report" />}
              {formData.prevIhc === "Yes" && <FileUploadBox label="Upload Previous IHC Report" />}
            </div>
          </div>
        )}
      </section>

      <button type="submit" className="w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.01] shadow-md hover:bg-navy-soft">
        {isSecondOpinion ? "Request Expert Review" :
         isIHC ? "Request IHC Testing" :
         isOnco ? "Submit Oncopathology Request" :
         isCyto ? "Submit Cytopathology Request" :
         `Submit ${serviceTitle} Request`}
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

function FileUploadBox({ label }: { label: string }) {
  const [file, setFile] = useState<File | null>(null);

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
          <button type="button" onClick={() => setFile(null)} className="p-2 text-muted-foreground hover:text-destructive">
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
            if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
          }} />
        </label>
      )}
    </div>
  );
}