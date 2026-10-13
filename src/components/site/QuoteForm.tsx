import { useState, type FormEvent } from "react";
import { MessageSquare, PhoneCall, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { company, services } from "@/data/site";

// ============================================================================
// BACKEND INTEGRATION POINT
// ----------------------------------------------------------------------------
// Wire this function to your production API route (e.g., POST /api/quote-requests)
// or CRM webhook (e.g. HubSpot / Salesforce / Webhook).
//
// In the current decoupled environment, all fields are strictly validated on the
// client, and users can dispatch directly to the official 24/7 Shaheen WhatsApp
// coordination line (+92 326 7775000) or submit for local desk review.
// ============================================================================

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name (at least 2 characters)").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact number (at least 7 digits)")
    .max(24),
  email: z
    .string()
    .trim()
    .max(160)
    .refine((val) => val === "" || z.string().email().safeParse(val).success, {
      message: "Please enter a valid email address or leave blank",
    }),
  service: z.string().trim().min(1, "Please select the service required"),
  propertyType: z.string().trim().min(1, "Please select your property type"),
  message: z
    .string()
    .trim()
    .min(5, "Please provide a brief description of the job (at least 5 characters)")
    .max(1000),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
type Errors = Partial<Record<keyof QuoteFormData, string>>;

const propertyTypes = [
  "Residential Apartment / Flat",
  "Residential Villa / House",
  "Commercial Office",
  "Retail Store / Showroom",
  "Industrial Warehouse / Factory",
  "Full Commercial / Residential Building",
  "Other / Mixed Use",
];

export function QuoteForm({
  compact = false,
  preselectedService = "",
}: {
  compact?: boolean;
  preselectedService?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService || "",
    propertyType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    type: "info" | "success";
    title: string;
    description: string;
    whatsappUrl?: string;
  } | null>(null);

  const validate = (): QuoteFormData | null => {
    const result = quoteSchema.safeParse(formData);
    if (!result.success) {
      const nextErrors: Errors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof QuoteFormData;
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      });
      setErrors(nextErrors);
      return null;
    }
    setErrors({});
    return result.data;
  };

  const generateWhatsAppUrl = (data: QuoteFormData) => {
    const text =
      `*New Service Enquiry — Shaheen Services*\n` +
      `• *Name:* ${data.name}\n` +
      `• *Phone:* ${data.phone}\n` +
      (data.email ? `• *Email:* ${data.email}\n` : "") +
      `• *Service:* ${data.service}\n` +
      `• *Property Type:* ${data.propertyType}\n` +
      `• *Message / Scope:* ${data.message}\n\n` +
      `_Sent via Shaheen Services Official Portal_`;
    return `https://wa.me/923267775000?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.preventDefault();
    const valid = validate();
    if (!valid) return;

    const url = generateWhatsAppUrl(valid);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmissionFeedback({
      type: "success",
      title: "Opening Official WhatsApp (+92 326 7775000)",
      description:
        "Your verified details have been prefilled. Send the message on WhatsApp to initiate immediate live coordination with our technical dispatch team.",
      whatsappUrl: url,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = validate();
    if (!valid) return;

    // Integration Point Execution:
    // Log the valid payload for developers / backend integrations:
    console.info("[Shaheen Services Enquiry Form] Validated Payload Ready:", valid);

    const waUrl = generateWhatsAppUrl(valid);

    // In this frontend deployment without an active backend server,
    // we clearly document the integration point and offer instantaneous WhatsApp dispatch:
    setSubmissionFeedback({
      type: "info",
      title: "Enquiry Form Validated",
      description:
        "Your enquiry details have been verified according to Shaheen Services requirements. Because this frontend is deployed in standalone mode, please click below to send your structured enquiry straight to our 24/7 WhatsApp dispatch desk or speak directly with our team at +92 326 7775000.",
      whatsappUrl: waUrl,
    });
  };

  const fieldClasses =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
      <div className="border-b border-border pb-5">
        <h3 className="font-display text-xl font-bold text-foreground">
          Get a Free Inspection & Quote
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fixed written pricing within 24 hours. Call{" "}
          <a
            href={company.phoneHref}
            className="font-semibold text-primary underline underline-offset-2"
          >
            {company.phone}
          </a>{" "}
          or send your job details below.
        </p>
      </div>

      {submissionFeedback && (
        <div
          className={`mt-6 rounded-2xl border p-5 ${
            submissionFeedback.type === "success"
              ? "border-emerald-300 bg-emerald-50/80 text-emerald-950"
              : "border-primary/30 bg-primary/5 text-foreground"
          }`}
        >
          <div className="flex items-start gap-3">
            {submissionFeedback.type === "success" ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            )}
            <div>
              <h4 className="font-display text-base font-bold">{submissionFeedback.title}</h4>
              <p className="mt-1 text-xs leading-relaxed opacity-90">
                {submissionFeedback.description}
              </p>
              {submissionFeedback.whatsappUrl && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={submissionFeedback.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
                  >
                    <MessageSquare className="h-4 w-4" /> Open WhatsApp With Prefilled Details
                  </a>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground transition hover:bg-secondary"
                  >
                    <PhoneCall className="h-4 w-4 text-primary" /> Call {company.phone}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={80}
              placeholder="e.g. Tariq Mehmood"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`mt-2 ${fieldClasses} ${errors.name ? "border-destructive ring-1 ring-destructive" : ""}`}
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Phone Number <span className="text-primary">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={24}
              placeholder="e.g. +92 326 7775000"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: undefined });
              }}
              className={`mt-2 ${fieldClasses} ${errors.phone ? "border-destructive ring-1 ring-destructive" : ""}`}
            />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Email Address{" "}
              <span className="text-muted-foreground font-normal lowercase">(optional)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={160}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              className={`mt-2 ${fieldClasses} ${errors.email ? "border-destructive ring-1 ring-destructive" : ""}`}
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor="propertyType"
              className="block text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              Property Type <span className="text-primary">*</span>
            </label>
            <select
              id="propertyType"
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={(e) => {
                setFormData({ ...formData, propertyType: e.target.value });
                if (errors.propertyType) setErrors({ ...errors, propertyType: undefined });
              }}
              className={`mt-2 ${fieldClasses} ${errors.propertyType ? "border-destructive ring-1 ring-destructive" : ""}`}
            >
              <option value="">Select Property Type</option>
              {propertyTypes.map((pt) => (
                <option key={pt} value={pt}>
                  {pt}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p className="mt-1 text-xs text-destructive">{errors.propertyType}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Service Required <span className="text-primary">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={(e) => {
              setFormData({ ...formData, service: e.target.value });
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            className={`mt-2 ${fieldClasses} ${errors.service ? "border-destructive ring-1 ring-destructive" : ""}`}
          >
            <option value="">Select a Service Division (13 Available)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple Services / Annual Maintenance AMC">
              Multiple Services / Annual Maintenance Contract (AMC)
            </option>
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
          >
            Message & Scope Details <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            maxLength={1000}
            placeholder="Describe the issue, property size, location in Karachi / Pakistan, or preferred inspection time…"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            className={`mt-2 ${fieldClasses} ${errors.message ? "border-destructive ring-1 ring-destructive" : ""}`}
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1EBE5D] active:scale-[0.99]"
          >
            <MessageSquare className="h-4 w-4" /> Send via WhatsApp (+92 326 7775000)
          </button>
          <button
            type="submit"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 active:scale-[0.99]"
          >
            <Send className="h-4 w-4" /> Request Inspection Quote
          </button>
        </div>

        <p className="text-center text-[0.75rem] text-muted-foreground">
          Free site inspection · Fixed written quotation within 24 hours · No obligation
        </p>
      </form>
    </div>
  );
}
