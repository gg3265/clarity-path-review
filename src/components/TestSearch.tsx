import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X, ChevronRight, AlertCircle } from "lucide-react";
import { tests } from "@/data/tests";
import { cn } from "@/lib/utils";

const POPULAR_TESTS = [
  "CBC",
  "HbA1c",
  "LFT",
  "RFT",
  "Vitamin D3",
  "Vitamin B12",
  "Thyroid Profile",
  "Lipid Profile",
  "ESR",
  "RA Factor",
];

export function TestSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase().trim();
    return tests.filter((test) => {
      const matchName = test.name.toLowerCase().includes(lowerQuery);
      const matchAlias = test.aliases.some((a) => a.toLowerCase().includes(lowerQuery));
      return matchName || matchAlias;
    }).slice(0, 8); // limit results in dropdown
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
    <section id="test-directory" className="relative bg-surface py-16 md:py-24">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            Looking for a specific laboratory test?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            Search our complete laboratory test menu for routine, clinical and specialized investigations.
          </p>
        </div>

        <div className="relative z-20" ref={containerRef}>
          <form onSubmit={handleSearch} className="relative group">
            <div className={cn(
              "relative flex items-center overflow-hidden rounded-full border border-border bg-background shadow-soft transition-all duration-300",
              "focus-within:border-primary/30 focus-within:ring-4 focus-within:ring-primary/5",
              "h-14 sm:h-[68px]"
            )}>
              <div className="pl-6 pr-3 text-muted-foreground">
                <Search className="size-5 sm:size-6" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Search tests, profiles or investigations..."
                className="h-full w-full bg-transparent px-2 text-base outline-none placeholder:text-muted-foreground/70 sm:text-lg"
              />
              {query && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="px-4 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              )}
              <button
                type="submit"
                className="hidden sm:flex h-full items-center justify-center bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
              >
                Search
              </button>
            </div>

            {/* Dropdown Results */}
            {isOpen && query.trim() !== "" && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-border bg-background shadow-lift animate-in fade-in slide-in-from-top-2">
                {results.length > 0 ? (
                  <ul className="max-h-[300px] overflow-y-auto p-2">
                    {results.map((test) => (
                      <li key={test.id}>
                        <Link
                          to="/tests"
                          search={{ q: test.name }}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-secondary/50 transition-colors"
                        >
                          <div>
                            <div className="font-semibold text-foreground">{test.name}</div>
                            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mt-0.5">
                              {test.category}
                            </div>
                          </div>
                          <div className="text-right pl-4">
                            {test.priceStatus === "Confirmed" && (test.sheet1Price || test.sheet2MRP) ? (
                              <div className="font-semibold text-foreground">
                                ₹{test.sheet1Price || test.sheet2MRP}
                              </div>
                            ) : test.priceStatus === "Sheet 2 Only" ? (
                              <div className="font-semibold text-foreground">
                                ₹{test.sheet2MRP} <span className="text-[10px] text-muted-foreground block">MRP</span>
                              </div>
                            ) : test.priceStatus === "Price confirmation required" ? (
                              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600">
                                <AlertCircle className="size-3.5" />
                                <span>Confirmation Required</span>
                              </div>
                            ) : (
                              <div className="text-sm text-muted-foreground">Call</div>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-border mt-2 p-2">
                      <Link
                        to="/tests"
                        search={{ q: query.trim() }}
                        className="flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                      >
                        View all results for "{query}"
                        <ChevronRight className="size-4" />
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>No tests found matching "{query}"</p>
                    <p className="text-sm mt-1">Try searching by category or a simpler term.</p>
                  </div>
                )}
              </div>
            )}
          </form>

          {/* Popular Tests - immediately below search bar */}
          <div className="mt-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Popular Tests
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {POPULAR_TESTS.map((test) => (
                <Link
                  key={test}
                  to="/tests"
                  search={{ q: test }}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  {test}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <Link
              to="/tests"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-navy-soft transition-colors"
            >
              View the complete test directory
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
