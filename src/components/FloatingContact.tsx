import { Phone, Instagram, Facebook } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingContact() {
  return (
    <div className="fixed z-[40] flex flex-col gap-3 transition-all duration-300
      md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:left-auto md:flex-col
      right-4 bottom-[calc(env(safe-area-inset-bottom)+100px)] flex-col
    ">
      
      {/* Phone */}
      <a
        href={site.phoneHref}
        aria-label="Call SECOND OPINION CRL"
        className="group relative flex size-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <Phone className="size-5" />
        <span className="absolute right-full mr-4 hidden items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:flex">
          Call SECOND OPINION CRL
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900"></span>
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SECOND OPINION CRL on WhatsApp"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-4 hidden items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:flex">
          Chat with SECOND OPINION CRL on WhatsApp
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900"></span>
        </span>
      </a>

      {/* Instagram */}
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow SECOND OPINION CRL on Instagram"
        className="group relative flex size-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <Instagram className="size-5" />
        <span className="absolute right-full mr-4 hidden items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:flex">
          Follow SECOND OPINION CRL on Instagram
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900"></span>
        </span>
      </a>

      {/* Facebook */}
      <a
        href={site.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook - SECOND OPINION CRL"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      >
        <Facebook className="size-5 fill-current" />
        <span className="absolute right-full mr-4 hidden items-center whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 md:flex">
          Facebook - SECOND OPINION CRL
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent border-l-gray-900"></span>
        </span>
      </a>

    </div>
  );
}