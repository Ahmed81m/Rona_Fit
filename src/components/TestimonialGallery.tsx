"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { assetPath } from "@/lib/paths";

export default function TestimonialGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = testimonials.find((t) => t.id === activeId) ?? null;

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
        {testimonials.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className="block w-full overflow-hidden rounded-2xl border border-plum-900/10 bg-white transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
          >
            <img
              src={assetPath(item.image)}
              alt={item.alt}
              loading="lazy"
              className="w-full object-cover"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="عرض شهادة العميلة"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            onClick={() => setActiveId(null)}
            aria-label="إغلاق"
            className="absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <img
            src={assetPath(active.image)}
            alt={active.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
