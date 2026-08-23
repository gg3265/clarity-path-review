import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { reviewTypes, site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  mobile: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid mobile number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  caseRef: z.string().trim().max(120).optional().or(z.literal("")),
  referrer: z.string().trim().max(160).optional().or(z.literal("")),
  reviewType: z.string().min(1, "Please select a type of review"),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please provide your consent to proceed" }),
  }),
});

const fieldClass =
  "mt-2 block min-h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none";

export function ContactForm() {
  type FieldName =
    | "name"
    | "mobile"
    | "email"
    | "caseRef"
    | "referrer"
    | "reviewType"
    | "message"
    | "consent";
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      name: String(data.get("name") ?? ""),
      mobile: String(data.get("mobile") ?? ""),
      email: String(data.get("email") ?? ""),
      caseRef: String(data.get("caseRef") ?? ""),
      referrer: String(data.get("referrer") ?? ""),
      reviewType: String(data.get("reviewType") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    });

    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]) as FieldName;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const v = parsed.data;
    const body = [
      `Full Name: ${v.name}`,
      `Mobile: ${v.mobile}`,
      `Email: ${v.email}`,
      `Patient / Case Reference: ${v.caseRef || "-"}`,
      `Referring Doctor / Hospital: ${v.referrer || "-"}`,
      `Type of Review: ${v.reviewType}`,
      "",
      "Message:",
      v.message || "-",
      "",
      "Consent: Provided",
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Second Opinion enquiry — ${v.name}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success(
      "Your enquiry is ready to send from your email app. Attach documents there if needed.",
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" error={errors["name"]} required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Mobile Number" name="mobile" error={errors["mobile"]} required>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
          />
        </Field>
        <Field label="Email" name="email" error={errors["email"]} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </Field>
        <Field
          label="Patient / Case Reference"
          name="caseRef"
          error={errors["caseRef"]}
        >
          <input
            id="caseRef"
            name="caseRef"
            className={fieldClass}
            placeholder="Optional reference"
          />
        </Field>
        <Field
          label="Referring Doctor / Hospital"
          name="referrer"
          error={errors["referrer"]}
        >
          <input
            id="referrer"
            name="referrer"
            className={fieldClass}
            placeholder="Optional"
          />
        </Field>
        <Field
          label="Type of Review"
          name="reviewType"
          error={errors["reviewType"]}
          required
        >
          <select
            id="reviewType"
            name="reviewType"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a review type
            </option>
            {reviewTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" name="message" error={errors["message"]}>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${fieldClass} py-3`}
          placeholder="Briefly describe your pathology review requirement"
        />
      </Field>

      <div>
        <label
          htmlFor="documents"
          className="block text-sm font-medium text-foreground"
        >
          Upload Case Documents (optional)
        </label>
        <input
          id="documents"
          name="documents"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="mt-2 block w-full rounded-lg border border-dashed border-input bg-surface px-4 py-3 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground"
        />
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          For patient confidentiality and secure handling of diagnostic material, case documents should be submitted only through the designated CRL referral process. Please contact us before sending patient-identifiable documents.
        </p>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 rounded border-input accent-teal"
          />
          <span>
            I consent to SECOND OPINION CRL contacting me regarding this
            enquiry. I understand this form is for enquiries only and is not a
            medical consultation or an emergency service.
          </span>
        </label>
        {errors["consent"] ? (
          <p className="mt-2 text-sm text-destructive">{errors["consent"]}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02] hover:bg-navy-soft sm:w-auto"
      >
        Submit Case Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required ? <span className="text-teal"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-destructive">{error}</p>
      ) : null}
    </div>
  );
}

