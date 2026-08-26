import { formatPrice } from "@/utils/formatPrice";
import { useState, useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, AlertCircle, X, CheckCircle2 } from "lucide-react";
import { tests, TestCategory, DiagnosticTest } from "@/data/tests";
import { packages, HealthPackage } from "@/data/packages";
import { PageHeader } from "@/components/PageHeader";
import { BookingBar } from "@/components/BookingBar";
import { BackButton } from "@/components/BackButton";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

// Validate search params for TanStack Router
export const Route = createFileRoute("/tests")({
  validateSearch: (search: Record<string, unknown>): { q?: string; category?: string } => {
    return {
      q: typeof search.q === "string" ? search.q : undefined,
      category: typeof search.category === "string" ? search.category : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Test Directory & Booking | Second Opinion CRL" },
      { name: "description", content: "Search and book diagnostic tests online." },
    ],
  }),
  component: TestsPage,
});

const ALL_CATEGORIES = [
  "All",
  "Clinical - Hematology",
  "Clinical - Biochemistry",
  "Clinical - Endocrinology / Hormones",
  "Clinical - Vitamins / Trace Elements",
  "Clinical - Immunology / Autoimmune",
  "Clinical - Serology / Infectious Diseases",
  "Clinical - Clinical Pathology",
  "Clinical - Microbiology",
  "Clinical - Protein Studies",
  "Clinical - Cancer-related Serum Markers",
  "Histopathology",
  "Cytology",
  "IHC",
  "Molecular / Referral",
  "Hematopathology",
  "Renal / Liver / Breast"
];

// Service descriptions for categories without raw tests
const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Histopathology": "Routine and specialized histopathology services for biopsy and surgical resections.",
  "Cytopathology": "Expert cytopathology services for gynecological and non-gynecological specimens.",
  "Immunohistochemistry": "Advanced immunohistochemistry markers for precise tumor typing and prognostic assessment.",
  "Second Opinion & Slide Review": "Expert review of challenging, complex and cancer-related pathology cases, including outside slides, blocks, IHC and diagnostic reports."
};

function TestsPage() {
  const searchParams = Route.useSearch();
  const navigate = useNavigate({ from: "/tests" });
  
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.category || "All");
  const [localQuery, setLocalQuery] = useState(searchParams.q || "");

  const { selectedTests, selectedPackages, addTest, removeTest, addPackage, removePackage } = useCart();

  // Sync url param to local state
  const handleSearch = (val: string) => {
    setLocalQuery(val);
    navigate({ search: { q: val || undefined } });
  };

  const filteredTests = useMemo(() => {
    let result = tests;
    
    if (activeCategory !== "All") {
      result = result.filter(t => t.category === activeCategory || t.category?.includes(activeCategory));
    }

    const q = (searchParams.q || "").toLowerCase().trim();
    if (q) {
      result = result.filter(test => {
        const matchName = test.name.toLowerCase().includes(q);
        const matchAlias = (test.aliases || []).some(a => a.toLowerCase().includes(q));
        const matchCrl = test.crlCode?.toLowerCase().includes(q) || false;
        const matchCategory = test.category?.toLowerCase().includes(q) || false;
        return matchName || matchAlias || matchCrl || matchCategory;
      });
    }
    return result.sort((a, b) => a.name.localeCompare(b.name));
  }, [activeCategory, searchParams.q]);

  const filteredPackages = useMemo(() => {
    let result = packages;
    
    // Only show packages if "All" is selected, or if the search query is active
    // Alternatively, if we don't have package categories in ALL_CATEGORIES, we might skip them when a specific test category is active
    if (activeCategory !== "All") {
      return [];
    }

    const q = (searchParams.q || "").toLowerCase().trim();
    if (q) {
      result = result.filter(pkg => {
        return pkg.name.toLowerCase().includes(q) || pkg.category.toLowerCase().includes(q);
      });
    } else {
      result = []; // Only show packages when searching, or show them all when in 'All'? Prompt implies search results should be grouped.
    }
    return result;
  }, [activeCategory, searchParams.q]);

  const showServiceDescription = activeCategory !== "All" && CATEGORY_DESCRIPTIONS[activeCategory] && filteredTests.length === 0;

  const isTestSelected = (testId: string) => selectedTests.some(t => t.id === testId);
  const isPackageSelected = (pkgId: string) => selectedPackages?.some(p => p.id === pkgId);

  return (
    <>
      <PageHeader
        eyebrow="Test Directory"
        title="Diagnostic Test Menu"
        intro="Browse our comprehensive menu of pathology and clinical investigations."
        watermark="DIRECTORY"
        showBack={true}
        backFallback="/#test-directory"
      />
      
      <section className="bg-surface py-12 md:py-20 min-h-[60vh] pb-32">
        <div className="container-page max-w-6xl">
          
          {/* Search & Filters */}
          <div className="mb-10 space-y-6">
            <div className="relative max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
                <Search className="size-5" />
              </div>
              <input
                type="text"
                value={localQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search tests, packages or services..."
                className="w-full pl-12 pr-10 py-4 bg-background border border-border rounded-xl shadow-sm focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 text-foreground text-lg transition-all"
              />
              {localQuery && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              )}
            </div>

            <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap gap-2">
              {ALL_CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    if (searchParams.q) handleSearch(""); // clear search on category switch for better UX
                  }}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-primary/30 hover:bg-primary/5"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Area */}
          <div className="space-y-8">
            {showServiceDescription && (
              <div className="p-10 text-center bg-background border border-border rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold text-foreground mb-3">{activeCategory}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{CATEGORY_DESCRIPTIONS[activeCategory]}</p>
                <div className="mt-6">
                  <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-navy-soft">
                    Enquire about this service
                  </a>
                </div>
              </div>
            )}

            {filteredPackages.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Health & Screening Packages</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPackages.map(pkg => {
                    const selected = isPackageSelected(pkg.id);
                    return (
                      <div key={pkg.id} className={cn("group relative flex flex-col justify-between p-5 bg-background border rounded-2xl transition-all duration-300", selected ? "border-primary shadow-md" : "border-border shadow-sm hover:shadow-md hover:border-primary/20")}>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                              {pkg.category}
                            </div>
                            {pkg.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-secondary text-primary px-1.5 py-0.5 rounded-sm">
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          <h4 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                            {pkg.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{pkg.shortDescription}</p>
                        </div>
                        
                        <div className="mt-5 pt-4 border-t border-border/50 flex flex-col gap-4">
                          <div className="flex items-end justify-between">
                            <div className="font-display font-bold text-lg text-foreground">
                              {formatPrice(pkg.price)}
                            </div>
                            <div className="text-xs font-semibold text-primary hover:underline cursor-pointer" onClick={() => navigate({ to: `/packages/${pkg.id}` })}>
                              View Details
                            </div>
                          </div>
                          
                          {selected ? (
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-sm font-bold text-primary">
                                <CheckCircle2 className="size-4" /> Added
                              </span>
                              <button onClick={() => removePackage(pkg.id)} className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors px-2 py-1">
                                Remove
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => {
                                if (pkg.bookingType === "booking") {
                                  addPackage(pkg);
                                } else {
                                  navigate({ to: `/packages/${pkg.id}` });
                                }
                              }}
                              className="w-full h-10 rounded-lg bg-secondary text-sm font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {pkg.ctaText}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredTests.length > 0 && (
              <div>
                {(searchParams.q || activeCategory === "All") && filteredPackages.length > 0 && (
                  <h3 className="text-lg font-bold text-foreground mb-4">Diagnostic Tests</h3>
                )}
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredTests.map(test => {
                    const selected = isTestSelected(test.id);
                    return (
                      <div key={test.id} className={cn("group relative flex flex-col justify-between p-5 bg-background border rounded-2xl transition-all duration-300", selected ? "border-primary shadow-md" : "border-border shadow-sm hover:shadow-md hover:border-primary/20")}>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-2">
                            {test.category}
                          </div>
                          <h4 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                            {test.name}
                          </h4>
                          {test.specimen && (
                            <p className="text-xs text-muted-foreground mt-2 font-medium flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block"></span>
                              Sample: {test.specimen}
                            </p>
                          )}
                          {test.notes && (
                            <div className="mt-3 inline-flex items-start gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-md border border-amber-200">
                              <AlertCircle className="size-4 shrink-0 mt-0.5" />
                              <span>{test.notes}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-5 pt-4 border-t border-border/50 flex flex-col gap-4">
                          <div className="flex items-end justify-between">
                            {test.priceStatus === "Confirmed" && (test.sheet1Price || test.sheet2MRP) ? (
                              <div className="font-display font-bold text-lg text-foreground">
                                {formatPrice(test.sheet1Price || test.sheet2MRP)}
                              </div>
                            ) : test.priceStatus === "Sheet 2 Only" ? (
                              <div>
                                <div className="font-display font-bold text-lg text-foreground">
                                  {formatPrice(test.sheet2MRP)}
                                </div>
                                <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                                  MRP Source
                                </div>
                              </div>
                            ) : test.priceStatus === "Price confirmation required" ? (
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1.5 rounded-md border border-amber-200">
                                <AlertCircle className="size-4" />
                                <span>Confirmation Required</span>
                              </div>
                            ) : (
                              <div className="text-sm font-medium text-muted-foreground">Call for pricing</div>
                            )}
                          </div>
                          
                          {selected ? (
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-sm font-bold text-primary">
                                <CheckCircle2 className="size-4" /> Added
                              </span>
                              <button onClick={() => removeTest(test.id)} className="text-xs font-semibold text-muted-foreground hover:text-destructive transition-colors px-2 py-1">
                                Remove
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => addTest(test)} 
                              className="w-full h-10 rounded-lg bg-secondary text-sm font-bold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              Book This Test
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {!showServiceDescription && filteredTests.length === 0 && filteredPackages.length === 0 && (
              <div className="py-20 text-center">
                <div className="mx-auto w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4 text-muted-foreground">
                  <Search className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any tests or packages matching "{searchParams.q}". Try checking the spelling or use a different search term.
                </p>
                <button
                  onClick={() => handleSearch("")}
                  className="mt-6 inline-flex font-medium text-primary hover:text-navy-soft transition-colors"
                >
                  Clear search and view all tests
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
      
      <BookingBar />
    </>
  );
}

