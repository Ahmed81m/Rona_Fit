import Button from "@/components/Button";
import WhatsAppButton from "@/components/WhatsAppButton";
import { assetPath } from "@/lib/paths";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-lavender-100">
      <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-plum-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -start-16 h-72 w-72 rounded-full bg-ember-400/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center md:py-28">
        <div className="relative z-10 flex flex-col items-start gap-6 text-start">
          <span className="rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-plum-800">
            كوتش لياقة وتغذية للبنات
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            ابدئي رحلة جسم أقوى وصحة أفضل
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-ink/75">
            برامج تدريب وتغذية مصممة حسب هدفك ومستواك وأسلوب حياتك — مش برنامج واحد لكل الناس.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact">ابدئي رحلتك</Button>
            <WhatsAppButton label="تواصلي مع روان" variant="outline" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-4xl border border-white/60 bg-plum-200 shadow-xl shadow-plum-900/10">
            {/* Replace public/images/hero/hero.jpg with a real coach photo */}
            <img
              src={assetPath("/images/hero/hero.jpg")}
              alt="كابتن روان أثناء تدريب إحدى العميلات"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
