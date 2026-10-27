import SectionHeading from "@/components/SectionHeading";

const steps = [
  { title: "اختاري هدفك", description: "حددي إيه اللي عايزة توصلي له." },
  { title: "سجلي بياناتك", description: "املي الفورم ببياناتك الأساسية." },
  { title: "تواصلي مع روان", description: "هتوصل رسالتك جاهزة على واتساب." },
  { title: "ابدئي رحلتك", description: "استلمي برنامجك وابدئي المتابعة." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading title="إزاي بنشتغل" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-3xl border border-plum-900/10 bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-plum-800 font-display text-sm font-bold text-lavender-100">
                {index + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-sm text-ink/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
