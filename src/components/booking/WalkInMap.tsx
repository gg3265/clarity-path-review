import { ChevronRight } from "lucide-react";
import { mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

export function WalkInMap() {
  if (import.meta.env.DEV) {
    console.log("Map Destination Coordinates:", site.coordinates);
    console.log("Directions URL:", mapsDirectionsUrl);
  }

  return (
    <div className="animate-in fade-in slide-in-from-top-4 space-y-8">
      <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft flex flex-col-reverse md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">SECOND OPINION CRL</h3>
            <p className="text-muted-foreground leading-relaxed">
              557, Veeren Heights, 3rd Floor,<br/>
              Laxmi Road, Sadashiv Peth,<br/>
              Pune 411030
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="font-semibold text-foreground">Contact</div>
            <p className="text-muted-foreground">Phone: 9359777222</p>
            <p className="text-muted-foreground">Email: secondopinioncrl@gmail.com</p>
          </div>

          <a 
            href={mapsDirectionsUrl}
            target="_blank" 
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-secondary px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/80"
          >
            Get Directions <ChevronRight className="ml-1 size-4" />
          </a>
        </div>
        <div className="w-full md:w-[300px] h-[200px] md:h-auto bg-background rounded-2xl overflow-hidden border border-border">
          <iframe
            title="Map to Second Opinion CRL"
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
