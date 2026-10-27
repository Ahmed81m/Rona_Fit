import { assetPath } from "@/lib/paths";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.id}
      className="flex flex-col overflow-hidden rounded-4xl border border-plum-900/10 bg-white"
    >
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-ink">{service.title}</h3>
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-lavender-200">
          <img src={assetPath(service.image)} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
        </div>
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
