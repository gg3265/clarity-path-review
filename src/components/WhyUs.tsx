import { Reveal } from "@/components/Reveal";
import { principles } from "@/lib/site";
import { Search, Eye, FlaskConical, FileText, Lock } from "lucide-react";

const icons = [
  Search,
  Eye,
  FlaskConical,
  FileText,
  Lock,
];

export function WhyUs() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="mb-16 max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Why choose Second Opinion CRL?
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {principles.map((principle, i) => {
            const Icon = icons[i] || Search;
            return (
              <Reveal as="div" key={principle.title} delay={i * 70}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-md">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon strokeWidth={1.5} className="size-6" />
                  </div>
                  
                  <div className="mb-4 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    0{i + 1}
                  </div>
                  
                  <h3 className="mb-3 font-display text-lg font-bold leading-snug text-navy">
                    {principle.title}
                  </h3>
                  
                  <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
