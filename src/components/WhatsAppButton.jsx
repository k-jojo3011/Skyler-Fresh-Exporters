import "../styles/WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "254719166196"; // replace with your number (no +)

  const message = "Hello Skyler Fresh, I would like to place an order.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path
          d="M19.11 17.205c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.205-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.073.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.711.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.124-.272-.198-.57-.347z"
          fill="currentColor"
        />
        <path
          d="M16.004 2.003C8.835 2.003 3.002 7.837 3.002 15.006c0 2.293.6 4.53 1.74 6.507L3 30l8.72-1.705a13.003 13.003 0 004.284.726c7.17 0 13.003-5.833 13.003-13.002S23.174 2.003 16.004 2.003z"
          fill="currentColor"
          opacity="0.2"
        />
      </svg>
    </a>
  );
}