// Central place for every reusable piece of brand information.
// Change a value here once — it updates everywhere it's used on the site.

export const siteConfig = {
  brandName: "Home Fit with Rona",
  brandNameArabic: "هوم فيت مع روان",
  coachName: "Captain Rona",
  coachNameArabic: "كابتن روان",

  // WhatsApp number in international format, no plus sign or spaces —
  // this is the exact format required by the wa.me deep-link.
  whatsappNumber: "201203951013",
  whatsappDisplay: "+20 12 03951013",

  instagramHandle: "@home_fit_with_ronaa",
  instagramUrl: "https://www.instagram.com/home_fit_with_ronaa/",

  // Used to build canonical URLs, sitemap.xml, robots.txt and Open Graph
  // tags. Must match the GitHub Pages deployment URL exactly (with the
  // trailing slash), including the repository name in the path.
  siteUrl: "https://ahmed81m.github.io/Rona_Fit",

  defaultTitle: "Home Fit with Rona | مدربة لياقة بدنية وتغذية للبنات",
  defaultDescription:
    "برامج تدريب وتغذية شخصية مع كابتن روان — خسارة وزن، زيادة وزن، شد وتناسق الجسم، وبناء العضلات، بمتابعة مستمرة تناسب هدفك وأسلوب حياتك.",

  locale: "ar_EG",
} as const;

export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
