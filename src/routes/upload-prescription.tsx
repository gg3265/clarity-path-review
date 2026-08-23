import { useState, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Upload, FileText, X, Image as ImageIcon, ArrowLeft, ChevronRight } from "lucide-react";
import { CollectionSelector, CollectionMethod } from "@/components/booking/CollectionSelector";
import { AddressForm, AddressData } from "@/components/booking/AddressForm";
import { WalkInMap } from "@/components/booking/WalkInMap";
import { ContactAction } from "@/components/ContactAction";
import { BackButton } from "@/components/BackButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/upload-prescription")({
  head: () => ({
    meta: [
      { title: "Upload Prescription | Second Opinion CRL" },
      { name: "description", content: "Upload your prescription for expert laboratory assistance." },
    ],
  }),
  component: UploadPrescriptionPage,
});

type Step = "UPLOAD" | "COLLECTION" | "REVIEW" | "SUCCESS";

function UploadPrescriptionPage() {
  const [step, setStep] = useState<Step>("UPLOAD");
  
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [patient, setPatient] = useState({
    name: "",
    mobile: "",
    email: "",
    notes: ""
  });

  const [collectionMethod, setCollectionMethod] = useState<CollectionMethod>(null);
  const [address, setAddress] = useState<AddressData>({
    addressLine1: "",
    addressLine2: "",
    area: "",
    city: "Pune",
    state: "Maharashtra",
    pincode: "",
  });

  const handleNext = (nextStep: Step) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep(nextStep);
  };

  const processFile = (selectedFile: File) => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Please upload a valid JPG, PNG, or PDF file.");
      return;
    }
    
    setFile(selectedFile);
    if (selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) processFile(e.target.files[0]);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
  };
  const removeFile = () => {
    setFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const canProceedToReview = () => {
    if (collectionMethod === "WALK_IN") return true;
    if (collectionMethod === "HOME") {
      return address.city.toLowerCase().trim() === "pune" && 
             address.state.toLowerCase().trim() === "maharashtra" &&
             address.pincode.length === 6 &&
             address.addressLine1.trim() !== "" &&
             address.area.trim() !== "";
    }
    return false;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting || !file) return;
    setIsSubmitting(true);

    try {
      const { supabase } = await import("@/lib/supabase");
      
      const requestId = crypto.randomUUID();
      const { error: requestError } = await supabase
        .from('prescription_requests')
        .insert([{
          id: requestId,
          patient_name: patient.name,
          mobile: patient.mobile,
          status: 'PENDING'
        }]);

      if (requestError) throw requestError;

      const fileExt = file.name.split('.').pop();
      const fileName = `${requestId}_${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('prescriptions')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { error: fileRecordError } = await supabase
        .from('prescription_files')
        .insert([{
          request_id: requestId,
          file_path: filePath,
          file_name: file.name,
          file_type: file.type
        }]);

      if (fileRecordError) throw fileRecordError;

      handleNext("SUCCESS");
    } catch (error) {
      console.error("Prescription upload error:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === "SUCCESS") {
    return (
      <div className="min-h-[80vh] bg-surface flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-background rounded-3xl p-8 md:p-10 shadow-xl text-center border border-border">
          <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="size-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-display font-extrabold text-foreground mb-4">
            Prescription Received
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Our team will manually review your uploaded prescription and assist you with the requested investigations and next steps.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="flex w-full h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-semibold transition-transform hover:scale-[1.02] shadow-sm">
              Back to Home
            </Link>
            <ContactAction type="call" variant="outline" className="w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-surface border-b border-border sticky top-[64px] lg:top-[76px] z-40">
        <div className="container-page py-4">
          <div className="flex items-center justify-between">
            <BackButton
              className="mb-0" 
              onClick={() => {
                if (step === "REVIEW") handleNext("COLLECTION");
                else if (step === "COLLECTION") handleNext("UPLOAD");
                else return false;
              }}
            />
            
            {/* Mobile Progress */}
            <div className="md:hidden text-xs font-bold uppercase tracking-widest text-primary/70">
              {step === "UPLOAD" && "Step 1 of 3"}
              {step === "COLLECTION" && "Step 2 of 3"}
              {step === "REVIEW" && "Step 3 of 3"}
            </div>

            {/* Desktop Progress */}
            <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className={cn(step === "UPLOAD" && "text-primary")}>01 Upload</span>
              <span className="text-muted-foreground/30">â†’</span>
              <span className={cn(step === "COLLECTION" && "text-primary")}>02 Collection</span>
              <span className="text-muted-foreground/30">â†’</span>
              <span className={cn(step === "REVIEW" && "text-primary")}>03 Review</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-background min-h-[70vh]">
        <div className="container-page max-w-4xl">
          
          {step === "UPLOAD" && (
            <div className="animate-fade-in space-y-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">Upload Prescription</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Upload a clear image or PDF of your prescription and provide your basic details.</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">
                {/* Upload Area */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-foreground mb-6">Prescription Document</h3>
                  
                  {!file ? (
                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={cn(
                        "relative flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200",
                        isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/50"
                      )}
                    >
                      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg, image/png, application/pdf" className="hidden" />
                      <div className="w-16 h-16 bg-background border border-border shadow-sm rounded-full flex items-center justify-center mb-6 text-primary">
                        <Upload className="size-8" />
                      </div>
                      <div className="font-semibold text-lg text-foreground mb-2">Tap to choose a file</div>
                      <div className="text-muted-foreground text-sm mb-6 max-w-xs mx-auto">or drag and drop your file here.</div>
                      <div className="flex flex-wrap justify-center gap-4 w-full md:hidden">
                        <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-background border border-border font-medium text-sm"><ImageIcon className="size-4" /> Photo</button>
                        <button className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-background border border-border font-medium text-sm"><FileText className="size-4" /> File</button>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-border rounded-2xl overflow-hidden bg-background">
                      <div className="p-4 border-b border-border flex justify-between items-center bg-surface">
                        <div className="flex items-center gap-3 overflow-hidden">
                          {file.type.startsWith("image/") ? <ImageIcon className="size-5 shrink-0 text-primary" /> : <FileText className="size-5 shrink-0 text-primary" />}
                          <span className="font-medium text-sm truncate">{file.name}</span>
                        </div>
                        <button onClick={removeFile} className="p-2 hover:bg-background rounded-full transition-colors text-muted-foreground hover:text-destructive"><X className="size-5" /></button>
                      </div>
                      {previewUrl ? (
                        <div className="aspect-[4/3] w-full bg-black/5 flex items-center justify-center overflow-hidden">
                          <img src={previewUrl} alt="Preview" className="object-contain w-full h-full" />
                        </div>
                      ) : (
                        <div className="aspect-[4/3] w-full bg-surface flex flex-col items-center justify-center text-muted-foreground">
                          <FileText className="size-16 mb-4 opacity-20" />
                          <p className="font-medium">PDF Document Selected</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Details Form */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (file) handleNext("COLLECTION");
                  }} 
                  className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft"
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">Patient Details</h3>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input required type="text" value={patient.name} onChange={e => setPatient({...patient, name: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Mobile Number *</label>
                      <input required type="tel" pattern="[0-9]{10}" value={patient.mobile} onChange={e => setPatient({...patient, mobile: e.target.value.replace(/\D/g, '').slice(0,10)})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email (Optional)</label>
                      <input type="email" value={patient.email} onChange={e => setPatient({...patient, email: e.target.value})} className="w-full h-12 bg-background border border-border rounded-xl px-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all" />
                    </div>
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={!file}
                        className="w-full h-14 rounded-full font-bold transition-all bg-primary text-primary-foreground hover:bg-navy-soft shadow-md disabled:bg-secondary disabled:text-muted-foreground disabled:shadow-none"
                      >
                        Continue to Collection <ChevronRight className="inline size-5 ml-1" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* STEP 2: COLLECTION */}
          {step === "COLLECTION" && (
            <div className="max-w-3xl mx-auto animate-fade-in slide-in-from-right-8">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">Sample Collection</h2>
              <p className="text-muted-foreground text-lg mb-8">How would you like to give your sample?</p>

              <CollectionSelector selected={collectionMethod} onChange={setCollectionMethod} />

              {collectionMethod === "HOME" && (
                <form onSubmit={(e) => { e.preventDefault(); if(canProceedToReview()) handleNext("REVIEW"); }}>
                  <AddressForm value={address} onChange={setAddress} />
                  <div className="flex justify-end pt-8">
                    <button type="submit" disabled={!canProceedToReview()} className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm disabled:opacity-50">
                      Review Request
                    </button>
                  </div>
                </form>
              )}

              {collectionMethod === "WALK_IN" && (
                <>
                  <WalkInMap />
                  <div className="flex justify-end pt-8">
                    <button onClick={() => handleNext("REVIEW")} className="w-full sm:w-auto flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground hover:bg-navy-soft transition-colors shadow-sm">
                      Review Request
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === "REVIEW" && (
            <div className="max-w-3xl mx-auto animate-fade-in slide-in-from-right-8">
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-8">Review Request</h2>

              <div className="space-y-6">
                
                {/* Prescription Document */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Prescription</h3>
                    <button onClick={() => handleNext("UPLOAD")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="size-6 text-primary" />
                    <span className="font-semibold text-foreground">{file?.name}</span>
                  </div>
                </div>

                {/* Patient Details */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Patient</h3>
                    <button onClick={() => handleNext("UPLOAD")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><div className="text-muted-foreground uppercase text-xs font-bold">Name</div><div className="font-semibold">{patient.name}</div></div>
                    <div><div className="text-muted-foreground uppercase text-xs font-bold">Mobile</div><div className="font-semibold">{patient.mobile}</div></div>
                  </div>
                </div>

                {/* Collection Method */}
                <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft">
                  <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground">Collection Method</h3>
                    <button onClick={() => handleNext("COLLECTION")} className="text-sm font-semibold text-primary hover:underline">Edit</button>
                  </div>
                  
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl">
                      {collectionMethod === "HOME" ? "ðŸ  Home Collection (Pune)" : "ðŸ“ Walk-in Centre (Pune)"}
                    </div>
                  </div>

                  {collectionMethod === "HOME" ? (
                    <div className="text-sm space-y-1 bg-background p-4 rounded-xl border border-border">
                      <div className="font-semibold text-foreground">{address.addressLine1}</div>
                      {address.addressLine2 && <div className="text-muted-foreground">{address.addressLine2}</div>}
                      <div className="text-muted-foreground">{address.area}, {address.city}</div>
                      <div className="text-muted-foreground">{address.state} - {address.pincode}</div>
                    </div>
                  ) : (
                    <div className="text-sm space-y-1 bg-background p-4 rounded-xl border border-border">
                      <div className="font-semibold text-foreground">SECOND OPINION CRL</div>
                      <div className="text-muted-foreground">557, Vireen Heights, 3rd Floor,</div>
                      <div className="text-muted-foreground">Laxmi Road, Sadashiv Peth, Pune 411030</div>
                      <div className="mt-4">
                        <a href="https://maps.google.com/?q=557,+Vireen+Heights,+3rd+Floor,+Laxmi+Road,+Sadashiv+Peth,+Pune+411030" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Get Directions â†’</a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Support Shortcut */}
                <div className="bg-primary/5 rounded-3xl p-6 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-foreground text-center sm:text-left">Need help?</h4>
                    <p className="text-sm text-muted-foreground text-center sm:text-left">Our team is ready to assist you.</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <ContactAction context="prescription" type="call" variant="outline" className="flex-1 sm:flex-none" />
                    <ContactAction context="prescription" type="whatsapp" variant="solid" className="flex-1 sm:flex-none" />
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <button 
                  onClick={() => handleNext("SUCCESS")}
                  className="w-full flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-navy-soft transition-transform hover:scale-[1.01] shadow-md"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Prescription Request'}
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

