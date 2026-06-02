// Single source of truth for contact details.
// WhatsApp number in international format (India +91).
export const WHATSAPP_NUMBER = "917734850427";
export const WHATSAPP_DISPLAY = "+91 77348 50427";

const WHATSAPP_MESSAGE =
  "Hi BookMeStays! I'd like help finding the perfect stay.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Social links
export const INSTAGRAM_URL =
  "https://www.instagram.com/bookmestays?igsh=MTN2ZnFrZW1jaGo3OA==";
