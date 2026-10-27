import SectionHeading from "@/components/SectionHeading";
import TestimonialGallery from "@/components/TestimonialGallery";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-lavender-100/60 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          title="آراء العميلات"
          subtitle="لقطات حقيقية من محادثات المتابعة مع عميلات روان — بياناتهم الشخصية تم إخفاؤها بالكامل."
        />
        <TestimonialGallery />
      </div>
    </section>
  );
}
