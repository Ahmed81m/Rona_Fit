export type Testimonial = {
  id: string;
  image: string;
  alt: string;
  category: "weight-loss" | "weight-gain" | "toning" | "muscle-building" | "coaching";
};

// IMPORTANT — TESTIMONIAL PRIVACY
// Only fully anonymized screenshots may be listed here. Every image
// referenced below has had all customer names and identifying chat
// header text covered before being placed in /public/images/testimonials.
// Never point this file at a raw, unprocessed screenshot.
//
// To add a new testimonial: anonymize the screenshot first, drop it in
// /public/images/testimonials, then add one object below. To remove
// one: delete the image and its entry. The gallery re-renders on its own.
export const testimonials: Testimonial[] = [
  {
    id: "review-01",
    image: "/images/testimonials/review-01.jpg",
    alt: "محادثة متابعة يومية بين المدربة وعميلة — شهادة عميلة (Privacy Customer)",
    category: "coaching",
  },
  {
    id: "review-02",
    image: "/images/testimonials/review-02.jpg",
    alt: "عميلة بتشارك تحديث وزنها أثناء المتابعة — شهادة عميلة (Privacy Customer)",
    category: "weight-loss",
  },
  {
    id: "review-03",
    image: "/images/testimonials/review-03.jpg",
    alt: "متابعة تقدم الوزن أسبوع بعد أسبوع — شهادة عميلة (Privacy Customer)",
    category: "weight-loss",
  },
  {
    id: "review-04",
    image: "/images/testimonials/review-04.jpg",
    alt: "عميلة بتسأل عن التزامها بالمتابعة — شهادة عميلة (Privacy Customer)",
    category: "coaching",
  },
  {
    id: "review-05",
    image: "/images/testimonials/review-05.jpg",
    alt: "متابعة الأكل اليومي مع المدربة — شهادة عميلة (Privacy Customer)",
    category: "coaching",
  },
  {
    id: "review-06",
    image: "/images/testimonials/review-06.jpg",
    alt: "محادثة ودية أثناء رحلة التمرين — شهادة عميلة (Privacy Customer)",
    category: "coaching",
  },
];
