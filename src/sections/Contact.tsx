import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <SectionHeading
          title="تواصلي معانا"
          subtitle="املي بياناتك وهيتفتح واتساب برسالة جاهزة تقدري تراجعيها قبل الإرسال."
        />
        <div className="rounded-4xl border border-plum-900/10 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
