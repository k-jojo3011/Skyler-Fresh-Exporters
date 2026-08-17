// src/pages/SignatureProductDetail.jsx
// Product detail page for SignatureBlooms items. No cart, no
// checkout — ordering happens via a WhatsApp button pre-filled
// with the product name and spec.

import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/SignatureProductDetail.css";
import PRODUCTS from "../data/signatureBlooms";

const WHATSAPP_NUMBER = "254700000000"; // replace with the real sales line, digits only

export default function SignatureProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="spd-page">
          <div className="spd-notfound">
            <h1>Product not found</h1>
            <p>That item doesn't exist, or the link is out of date.</p>
            <Link to="/" className="spd-order-btn">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const isHerb = product.type === "herb";
  const specLine = isHerb ? `Weight: ${product.weightKg}` : `Stem size: ${product.stemSize}`;

  const waMessage = `Hi Skyler Fresh, I'd like to order ${product.name} (${specLine}). Can you confirm availability and pricing?`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <>
      <Navbar />

      <div className="spd-page">
        <Link to="/" className="spd-back">← Back</Link>

        <div className="spd-grid">
          <div className="spd-media">
            {product.badge && <span className="spd-badge">{product.badge}</span>}
            <img src={product.image} alt={product.name} />
          </div>

          <div className="spd-info">
            <p className="spd-sub">{product.sub}</p>
            <h1 className="spd-name">{product.name}</h1>
            <p className="spd-spec">{specLine}</p>

            <p className="spd-description">{product.description}</p>

            <a href={waHref} target="_blank" rel="noreferrer" className="spd-order-btn">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.61a12.9 12.9 0 0 0 3.96.63C22.6 28.02 28 22.62 28 16S22.64 3 16.02 3zm0 22.9c-1.32 0-2.6-.26-3.79-.77l-.27-.12-4.79.96.98-4.66-.18-.29a10 10 0 0 1-1.53-5.3c0-5.5 4.48-9.98 9.98-9.98s9.98 4.48 9.98 9.98c0 5.5-4.48 10.18-9.98 10.18zm5.47-7.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z"/>
              </svg>
              Order via WhatsApp
            </a>

            <p className="spd-note">
              No cart, no checkout — this sends a pre-filled WhatsApp message straight
              to the export desk with the item and spec attached.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}