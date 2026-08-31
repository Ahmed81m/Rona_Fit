"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

const serviceOptions = [
  "خسارة الوزن",
  "زيادة الوزن",
  "شد وتناسق الجسم",
  "بناء العضلات",
  "برنامج تمارين للجيم",
  "برنامج تمارين للبيت",
  "نظام غذائي",
  "متابعة شخصية",
  "أخرى",
];

type Status = "idle" | "loading" | "ready";

function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) nextErrors.name = "من فضلك اكتبي اسمك.";
    if (!isValidPhone(phone)) nextErrors.phone = "من فضلك اكتبي رقم واتساب صحيح.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");

    const lines = [
      `مرحبًا ${siteConfig.coachNameArabic}،`,
      "",
      "حابة أبدأ معاكِ رحلة التدريب والتغذية.",
      "",
      `الاسم: ${name.trim()}`,
      `رقم الواتساب: ${phone.trim()}`,
      `الهدف / الخدمة: ${service}`,
    ];

    if (message.trim()) {
      lines.push("", "الرسالة:", message.trim());
    }

    const url = whatsappLink(lines.join("\n"));

    // Small delay so the loading state is visible before WhatsApp opens.
    window.setTimeout(() => {
      setStatus("ready");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
          الاسم
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-2xl border border-plum-900/15 bg-white px-4 py-3 text-ink outline-none focus:border-plum-600 focus:ring-2 focus:ring-plum-600/20"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
          رقم الواتساب
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="01xxxxxxxxx"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="w-full rounded-2xl border border-plum-900/15 bg-white px-4 py-3 text-ink outline-none focus:border-plum-600 focus:ring-2 focus:ring-plum-600/20"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold text-ink">
          الهدف / الخدمة
        </label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-2xl border border-plum-900/15 bg-white px-4 py-3 text-ink outline-none focus:border-plum-600 focus:ring-2 focus:ring-plum-600/20"
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
          رسالتك <span className="font-normal text-ink/50">(اختياري)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-2xl border border-plum-900/15 bg-white px-4 py-3 text-ink outline-none focus:border-plum-600 focus:ring-2 focus:ring-plum-600/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-plum-800 px-7 py-3 text-sm font-semibold text-lavender-100 transition-colors duration-200 hover:bg-plum-700 disabled:opacity-70"
      >
        {status === "loading"
          ? "جاري تجهيز رسالتك..."
          : status === "ready"
          ? "بياناتك جاهزة، كمّلي إرسالها على واتساب"
          : "ابدئي رحلتك"}
      </button>

      <p className="text-xs text-ink/50">
        بالضغط على الزر هيتفتح واتساب ومعاه رسالة جاهزة — تقدري تراجعيها قبل ما تبعتيها.
      </p>
    </form>
  );
}
