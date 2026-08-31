import { assetPath } from "@/lib/paths";

export default function About() {
  return (
    <section id="about" className="bg-plum-950 py-16 text-lavender-100 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">عن كابتن روان</h2>
          <p className="mt-5 text-base leading-relaxed text-lavender-100/85 sm:text-lg">
            أنا روان، مدربة مهتمة باللياقة البدنية والتغذية، وهدفي أساعد كل بنت توصل لجسم أقوى
            وصحة أفضل بطريقة واقعية ومناسبة لأسلوب حياتها.
          </p>
          <p className="mt-4 text-base leading-relaxed text-lavender-100/85 sm:text-lg">
            بقدّم برامج تدريب وتغذية مصممة حسب هدف كل عميلة ومستواها وإمكانياتها، سواء كان الهدف
            تخسيس، شد الجسم، زيادة الوزن، أو تحسين اللياقة.
          </p>
          <p className="mt-4 text-sm text-lavender-100/60">
            الشهادات والمؤهلات: تُضاف هنا عند توفرها.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-4xl border border-white/10 bg-plum-800">
            {/* Replace public/images/brand/coach.jpg with a real coach photo */}
            <img
              src={assetPath("/images/brand/coach.jpg")}
              alt="كابتن روان"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
