import { Reveal } from "@/components/Reveal";
import { process as processSteps } from "@/lib/site";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-page max-w-5xl">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            How it works
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical central line for desktop */}
          <div className="absolute top-0 bottom-0 left-[2.25rem] hidden w-px bg-border md:block md:left-1/2 md:-ml-px" />
          
          {/* Vertical left line for mobile */}
          <div className="absolute top-0 bottom-0 left-[2.25rem] w-px bg-border md:hidden" />

          <div className="grid gap-12 sm:gap-16">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal 
                  key={step.step} 
                  delay={i * 100}
                  className="group relative flex items-center md:justify-center"
                >
                  <div className={`flex w-full flex-col md:w-[calc(50%-3rem)] \${isEven ? 'md:mr-auto md:items-end md:text-right' : 'md:ml-auto md:items-start md:text-left'} pl-20 md:pl-0`} >
                    <h3 className="mb-3 font-display text-xl font-bold text-navy sm:text-2xl">
                      <span className="mb-2 block text-sm font-extrabold tracking-widest text-teal/60 uppercase">Step {step.step}</span>
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="absolute left-0 flex size-[4.5rem] items-center justify-center rounded-full border-4 border-white bg-surface text-xl font-bold text-teal shadow-sm transition-colors group-hover:bg-navy group-hover:text-white md:left-1/2 md:-ml-[2.25rem]">
                    {step.step}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
