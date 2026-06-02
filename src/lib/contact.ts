// Single source of truth for contact details.
// WhatsApp number in international format (India +91).
export const WHATSAPP_NUMBER = "917859032488";
export const WHATSAPP_DISPLAY = "+91 78590 32488";

const WHATSAPP_MESSAGE =
  "Hi BookMeStays! I'd like help finding the perfect stay.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
