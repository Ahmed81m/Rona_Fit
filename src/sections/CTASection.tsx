import Button from "@/components/Button";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CTASection() {
  return (
    <section className="bg-plum-800 py-16 text-lavender-100 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">جاهزة تبدئي؟</h2>
        <p className="max-w-lg text-base text-lavender-100/85 sm:text-lg">
          كل رحلة بتبدأ بخطوة — احجزي استشارتك المجانية مع كابتن روان دلوقتي.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact" variant="outline" className="border-lavender-100 text-lavender-100 hover:bg-white/10">
            ابدئي رحلتك
          </Button>
          <WhatsAppButton label="اسألي روان" />
        </div>
      </div>
    </section>
  );
}
