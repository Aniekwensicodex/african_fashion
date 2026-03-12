import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/2348000000000?text=Hello%20ÀṢÀ%20Lagos!%20I'm%20interested%20in%20your%20collection."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-600 text-primary-foreground p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
