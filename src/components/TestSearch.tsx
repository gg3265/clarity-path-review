import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, ChevronRight, AlertCircle, TestTube2, ArrowRight } from "lucide-react";
import { tests } from "@/data/tests";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";
import { Reveal } from "@/components/Reveal";

const POPULAR_TESTS = ["CBC", "HbA1c", "Lipid Profile", "Vitamin B12", "Liver Function Test"];

export function TestSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Simple client-side search across tests
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase().trim();
    return tests.filter((test) => {
      const matchName = test.name.toLowerCase().includes(lowerQuery);
      const matchAlias = test.aliases.some((a) => a.toLowerCase().includes(lowerQuery));
      return matchName || matchAlias;
    }).slice(0, 6); // Keep it clean and short
  }, [query]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate({ to: "/tests", search: { q: query.trim() } });
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setIsOpen(false);
  };

  return (
    <section id="test-directory" className="relative bg-white py-24 lg:py-32">
      <div className="container-page max-w-4xl">
        <Reveal className="mb-12 text-center">
          <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
            <TestTube2 className="size-6" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
            Find a specific laboratory test
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-muted-foreground">
            Search our complete directory for routine and specialized investigations.
          </p>
        </Reveal>

        <div className="relative z-20" ref={containerRef}>
          <form onSubmit={handleSearch} className="relative group">
            <div className={cn(
              "relative flex items-center overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all duration-300",
              isOpen ? "border-teal/50 shadow-md ring-4 ring-teal/5" : "border-border hover:border-teal/30",
              "h-16 sm:h-[76px]"
            )}>
              <div className="pl-6 pr-3 text-teal">
                <Search className="size-6" strokeWidth={2.5} />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Search tests, packages or services"
                className="h-full w-full bg-transparent px-2 text-lg font-medium text-navy outline-none placeholder:font-normal placeholder:text-muted-foreground/60"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="px-4 text-muted-foreground transition-colors hover:text-navy"
                >
                  <X className="size-5" />
                </button>
              )}
              <button
                type="submit"
                className="hidden h-full items-center justify-center bg-navy px-10 text-sm font-bold text-white transition-colors hover:bg-teal sm:flex"
              >
                Search
              </button>
            </div>

            {/* Dropdown Results */}
            {isOpen && query.trim() !== "" && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-[1.5rem] border border-border bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2">
                {results.length > 0 ? (
                  <ul className="max-h-[350px] overflow-y-auto pr-1">
                    {results.map((test) => (
                      <li key={test.id} className="mb-1">
                        <Link
                          to="/tests"
                          search={{ q: test.name }}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-surface"
                        >
                          <div>
                            <div className="font-semibold text-navy">{test.name}</div>
                            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-teal">
                              {test.category}
                            </div>
                          </div>
                          <div className="pl-4 text-right">
                            {test.priceStatus === "Confirmed" && (test.sheet1Price || test.sheet2MRP) ? (
                              <div className="font-display text-lg font-extrabold text-navy">
                                {formatPrice(test.sheet1Price || test.sheet2MRP)}
                              </div>
                            ) : test.priceStatus === "Sheet 2 Only" ? (
                              <div className="font-display text-lg font-extrabold text-navy">
                                {formatPrice(test.sheet2MRP)} <span className="block text-[10px] font-medium text-muted-foreground">MRP</span>
                              </div>
                            ) : test.priceStatus === "Price confirmation required" ? (
                              <div className="flex items-center gap-1.5 rounded-full bg-amber-100/50 px-2 py-1 text-[10px] font-bold text-amber-700">
                                <AlertCircle className="size-3" />
                                <span>Confirm Price</span>
                              </div>
                            ) : (
                              <div className="text-sm font-medium text-muted-foreground">Call</div>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li className="mt-2 border-t border-border pt-2">
                      <Link
                        to="/tests"
                        search={{ q: query.trim() }}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-surface py-3 text-sm font-bold text-navy transition-colors hover:bg-teal/10 hover:text-teal"
                      >
                        View all results for "{query}"
                        <ChevronRight className="size-4" strokeWidth={2.5} />
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <div className="p-10 text-center">
                    <p className="text-lg font-medium text-navy">No matches found for "{query}"</p>
                    <p className="mt-2 text-sm text-muted-foreground">Try searching by category or a simpler term.</p>
                  </div>
                )}
              </div>
            )}
          </form>
          
          <div className="mt-8 text-center">
             <Link
              to="/tests"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors hover:text-navy"
            >
              View the complete test directory
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
