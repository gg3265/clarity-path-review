import { Link } from "@tanstack/react-router";
import { ArrowRight, Activity, ShieldCheck, Microscope } from "lucide-react";

export function PackagesHomeSection() {
  return (
    <section className="bg-surface py-20 lg:py-24 border-b border-border">
      <div className="container-page max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">
            CRL Health & Pathology Packages
          </h2>
          <p className="text-lg text-muted-foreground">
            Thoughtfully designed screening and expert pathology packages for preventive health, early risk assessment and specialist second opinions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Clinical Health Packages */}
          <Link 
            to="/packages"
            className="group flex flex-col justify-between bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Clinical Health Packages
              </h3>
              <p className="text-muted-foreground mb-8">
                Preventive health screening packages designed for different levels of health assessment.
              </p>
            </div>
            <div className="flex items-center text-sm font-semibold text-primary group-hover:text-navy-soft transition-colors">
              Explore Packages <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Cancer Screening Series */}
          <Link 
            to="/packages"
            className="group flex flex-col justify-between bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="size-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Cancer Screening Series
              </h3>
              <p className="text-muted-foreground mb-8">
                Focused screening for women's health, men's health, and GI cancer risk assessment.
              </p>
            </div>
            <div className="flex items-center text-sm font-semibold text-amber-600 group-hover:text-amber-700 transition-colors">
              Explore Screening <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pathology Second Opinion */}
          <Link 
            to="/packages"
            className="group flex flex-col justify-between bg-navy-900 p-8 rounded-3xl border border-navy-800 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Microscope className="size-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Pathology Second Opinion
              </h3>
              <p className="text-blue-100/80 mb-8">
                Expert review of pathology, cytology and IHC cases by specialized pathologists.
              </p>
            </div>
            <div className="flex items-center text-sm font-semibold text-blue-300 group-hover:text-white transition-colors">
              Explore Second Opinion <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="text-center text-xs text-muted-foreground max-w-4xl mx-auto">
          Package contents and screening recommendations may vary based on age, medical history, clinical indication and applicable guidelines. Please consult a qualified healthcare professional where appropriate.
        </div>
      </div>
    </section>
  );
}
