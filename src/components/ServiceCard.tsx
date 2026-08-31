import { assetPath } from "@/lib/paths";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.id}
      className="flex flex-col overflow-hidden rounded-4xl border border-plum-900/10 bg-white"
    >
      <div className="relative h-44 w-full overflow-hidden bg-lavender-200">
        {/* Replace this file to update the service image — no code change needed */}
        <img
          src={assetPath(service.image)}
          alt=""
          role="presentation"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink/70">{service.description}</p>
        <ul className="mt-2 flex flex-col gap-2">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-ink/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-600" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
