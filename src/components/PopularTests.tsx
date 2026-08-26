import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Activity, MapPin } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";
import { Reveal } from "@/components/Reveal";

const popularTests = [
  {
    id: "blood-sugar-f",
    name: "Blood Sugar (Fasting)",
    price: 49,
    icon: Droplets,
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    price: 299,
    icon: Activity,
  }
];

export function PopularTests() {
  return (
    <section className="bg-surface py-20 border-y border-border">
      <div className="container-page max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_350px] lg:gap-16">
          
          {/* Popular Tests */}
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-navy mb-8">
                Frequently Requested Tests
              </h3>
            </Reveal>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {popularTests.map((test, i) => (
                <Reveal key={test.id} delay={i * 100}>
                  <div className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-border hover:border-teal/30 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                        <test.icon className="size-5" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="font-bold text-navy text-sm sm:text-base leading-tight mb-1">
                          {test.name}
                        </div>
                        <div className="font-display text-lg font-extrabold text-teal">
                          {formatPrice(test.price)}
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/book"
                      search={{ tests: [test.id] }}
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-navy group-hover:bg-navy group-hover:text-white transition-colors"
                      aria-label={`Book ${test.name}`}
                    >
                      <ArrowRight className="size-4" strokeWidth={2.5} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Home Collection Info */}
          <Reveal delay={150}>
            <div className="h-full bg-navy rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col justify-center">
              <div aria-hidden="true" className="absolute -top-12 -right-12 size-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-white/10 text-teal-soft backdrop-blur-sm">
                <MapPin className="size-6" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3">
                Home Collection
              </h3>
              
              <div className="space-y-2 text-sm font-medium text-white/80">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Within 5 km</span>
                  <span className="font-bold text-teal-soft uppercase tracking-wider">Free</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span>Beyond 5 km</span>
                  <span className="font-bold text-white">{formatPrice(200)}</span>
                </div>
              </div>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}
