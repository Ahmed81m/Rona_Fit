export type Testimonial = {
  id: string;
  image: string;
  alt: string;
  category: "weight-loss" | "weight-gain" | "toning" | "muscle-building" | "coaching";
};
// Each source image is anonymized before being included in the published site.
export const testimonials: Testimonial[] = [
  { id: "review-01", image: "/images/testimonials/review-01.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-02", image: "/images/testimonials/review-02.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-03", image: "/images/testimonials/review-03.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-04", image: "/images/testimonials/review-04.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-05", image: "/images/testimonials/review-05.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-06", image: "/images/testimonials/review-06.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-07", image: "/images/testimonials/review-07.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-08", image: "/images/testimonials/review-08.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-09", image: "/images/testimonials/review-09.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-10", image: "/images/testimonials/review-10.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
  { id: "review-11", image: "/images/testimonials/review-11.jpg", alt: "رأي عميلة بعد إخفاء بياناتها الشخصية — Rona Customer", category: "coaching" },
];
