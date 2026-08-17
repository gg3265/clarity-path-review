import { ChevronRight } from "lucide-react";

export function WalkInMap() {
  return (
    <div className="animate-in fade-in slide-in-from-top-4 space-y-8">
      <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border shadow-soft flex flex-col-reverse md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">SECOND OPINION CRL</h3>
            <p className="text-muted-foreground leading-relaxed">
              557, Vireen Heights, 3rd Floor,<br/>
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
            href="https://maps.google.com/?q=557,+Vireen+Heights,+3rd+Floor,+Laxmi+Road,+Sadashiv+Peth,+Pune+411030" 
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.332306899732!2d73.8504975!3d18.5144342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06ff4903327%3A0x6fa769fba75440d9!2sLaxmi%20Rd%2C%20Sadashiv%20Peth%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682333649931!5m2!1sen!2sin"
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
