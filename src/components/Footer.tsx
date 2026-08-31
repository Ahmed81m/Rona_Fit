import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-plum-900/10 bg-plum-950 text-lavender-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-xl font-bold">{siteConfig.coachNameArabic}</p>
          <p className="mt-3 text-sm leading-relaxed text-lavender-100/70">
            برامج تدريب وتغذية شخصية للبنات — بمتابعة حقيقية ونتايج واقعية.
          </p>
        </div>

        <nav aria-label="روابط الموقع" className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-lavender-100/80 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lavender-100/80 hover:text-white"
          >
            انستجرام {siteConfig.instagramHandle}
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-lavender-100/80 hover:text-white"
          >
            واتساب {siteConfig.whatsappDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-lavender-100/50 sm:px-6">
        © {new Date().getFullYear()} {siteConfig.brandName}. كل الحقوق محفوظة.
      </div>
    </footer>
  );
}
