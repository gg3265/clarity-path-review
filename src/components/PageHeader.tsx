import { BackButton } from "@/components/BackButton";

export function PageHeader({
  eyebrow,
  title,
  intro,
  watermark,
  showBack = false,
  backFallback = "/",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  watermark?: string;
  showBack?: boolean;
  backFallback?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden="true" className="lab-grid absolute inset-0 opacity-70" />
      {watermark ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-4 hidden font-display text-8xl font-extrabold text-foreground/[0.04] lg:block"
        >
          {watermark}
        </span>
      ) : null}
      <div className="relative container-page py-16 md:py-24">
        {showBack && (
          <BackButton fallbackUrl={backFallback} className="mb-6" />
        )}
        <p className="eyebrow animate-fade-in">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.25rem] leading-[1.06] font-extrabold text-foreground sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
