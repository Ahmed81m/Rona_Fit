import WhatsAppButton from "./WhatsAppButton";

export default function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:hidden">
      <WhatsAppButton
        label="تواصلي على واتساب"
        className="w-full max-w-xs shadow-lg shadow-plum-900/20"
      />
    </div>
  );
}
