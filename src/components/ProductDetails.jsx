// src/pages/ProductDetailPage.jsx
// Mina Baie-style product detail page
// Smart: flowers show stem lengths, herbs show 50g/100g pack selector
// Theme: Black & Blue  |  click any product image card → this page opens

import { useState, useEffect } from "react";
import { useCurrency } from "../context/CurrencyContext";

// ─── SAMPLE DATA ─────────────────────────────────────────────────
// Replace with real data from your API / products.js
const SAMPLE_FLOWER = {
  id: 1,
  type: "flower",
  name: "Ever Red Rose",
  crop: "Roses Standard",
  farm: "Azali Farm",
  color: "Red",
  origin: "Limuru highlands, Kenya",
  characteristic: "5.5cm+ head, excellent vase life",
  description:
    "Grown at altitude on the Azali farm in Limuru's cool highlands, Ever Red delivers a deep velvety crimson with a tight spiral head and outstanding post-harvest performance. Perfect for wholesale florists, event designers, and export buyers.",
  care: "Cut 2–3cm from base at an angle. Place in clean water with flower food. Keep away from direct sunlight. Lasts 10–14 days.",
  badge: "Bestseller",
  featured: true,
  images: [null, null, null, null], // replace with real imported images
  emojis: ["🌹", "🌹", "🌹", "🌹"],
  // Stem length variants — each has its own price and pack rate
  variants: [
    { label: "40cm", priceUSD: 0.1725, packrate: 400, char: "4.5cm+ head" },
    { label: "50cm", priceUSD: 0.2300, packrate: 340, char: "5.0cm+ head" },
    { label: "60cm", priceUSD: 0.3220, packrate: 250, char: "5.5cm+ head" },
    { label: "70cm", priceUSD: 0.3565, packrate: 230, char: "5.5cm+ head" },
    { label: "80cm", priceUSD: 0.4025, packrate: 200, char: "5.5cm+ head" },
    { label: "90cm", priceUSD: 0.4600, packrate: 180, char: "5.5cm+ head" },
  ],
  relatedProducts: [
    { id: 2, name: "Athena Rose",       emoji: "🌹", priceUSD: 0.138, type: "flower" },
    { id: 3, name: "Snow Flake Spray",  emoji: "🌸", priceUSD: 0.310, type: "flower" },
    { id: 4, name: "Aurora Delphinium", emoji: "💐", priceUSD: 0.402, type: "flower" },
  ],
};

const SAMPLE_HERB = {
  id: 11,
  type: "herb",
  name: "Fresh Basil",
  subCategory: "Culinary",
  condition: "Fresh",
  origin: "Kenya highlands",
  shelfLife: "5–7 days",
  description:
    "Large-leaf Kenyan basil with an intense, sweet fragrance. Harvested every morning and packed immediately to preserve oils. Ideal for restaurants, gourmet retailers, and specialty food buyers worldwide.",
  care: "Keep refrigerated at 8–12°C. Do not seal airtight. Use within 5–7 days of delivery.",
  badge: "Popular",
  images: [null, null, null],
  emojis: ["🌿", "🌿", "🌿"],
  // Gram-based packs — 50g and 100g only
  packs: [
    { grams: 50,  priceUSD: 2.50, label: "50g",  savingNote: null },
    { grams: 100, priceUSD: 4.50, label: "100g", savingNote: "Save 10% vs 2×50g" },
  ],
  minOrderPacks: 1,
  relatedProducts: [
    { id: 12, name: "Dhania (Coriander)", emoji: "🍃", priceUSD: 1.20, type: "herb" },
    { id: 13, name: "Rosemary",           emoji: "🌱", priceUSD: 2.00, type: "herb" },
    { id: 14, name: "Mint",               emoji: "🌿", priceUSD: 1.80, type: "herb" },
  ],
};

// ─── COMPONENT ───────────────────────────────────────────────────
export default function ProductDetailPage({ productId, productType, onBack, addToCart }) {
  // For demo: swap between flower and herb using productType prop
  const product = productType === "herb" ? SAMPLE_HERB : SAMPLE_FLOWER;
  const isHerb  = product.type === "herb";

  const { formatPrice } = useCurrency();

  // Image gallery
  const [activeImg, setActiveImg] = useState(0);

  // Flower: selected stem length
  const [selectedVariant, setSelectedVariant] = useState(
    isHerb ? null : product.variants?.[2] // default to 60cm
  );

  // Herb: selected pack size (50 or 100)
  const [selectedPack, setSelectedPack] = useState(
    isHerb ? product.packs?.[0] : null
  );

  // Quantity
  const [qty, setQty] = useState(
    isHerb ? 1 : (product.variants?.[2]?.packrate || 250)
  );

  // Toast
  const [toast, setToast] = useState({ show: false, msg: "" });

  // Accordion
  const [openAccordion, setOpenAccordion] = useState("description");

  // When variant changes for flowers, reset qty to that variant's packrate
  function handleVariantSelect(v) {
    setSelectedVariant(v);
    setQty(v.packrate);
  }

  // When pack changes for herbs, keep qty
  function handlePackSelect(p) {
    setSelectedPack(p);
  }

  // Qty stepper
  const minQty = isHerb
    ? product.minOrderPacks
    : (selectedVariant?.packrate || 1);
  const step = isHerb ? 1 : (selectedVariant?.packrate || 1);

  function changeQty(d) {
    setQty(q => Math.max(minQty, q + d * step));
  }

  // Price per unit
  const unitPrice = isHerb
    ? (selectedPack?.priceUSD || 0)
    : (selectedVariant?.priceUSD || 0);

  const lineTotal = unitPrice * qty;

  // Add to cart
  function handleAddToCart() {
    const cartItem = isHerb
      ? {
          ...product,
          variant: selectedPack?.label,
          packGrams: selectedPack?.grams,
          price: unitPrice,
          quantity: qty,
          emoji: product.emojis?.[0],
        }
      : {
          ...product,
          variant: selectedVariant?.label,
          packrate: selectedVariant?.packrate,
          characteristic: selectedVariant?.char,
          price: unitPrice,
          quantity: qty,
          emoji: product.emojis?.[0],
        };

    if (addToCart) addToCart(cartItem);
    setToast({ show: true, msg: `${product.name} added to cart` });
    setTimeout(() => setToast({ show: false, msg: "" }), 2400);
  }

  const canAdd = isHerb ? !!selectedPack : !!selectedVariant;

  return (
    <div style={s.root}>
      <style>{CSS}</style>

      {/* ── BACK BUTTON ── */}
      <button style={s.backBtn} onClick={onBack}>
        ← Back to products
      </button>

      {/* ══════════════════════════════════════════
          MAIN GRID: image left, info right
      ══════════════════════════════════════════ */}
      <div style={s.mainGrid}>

        {/* ─── LEFT: IMAGE GALLERY ─── */}
        <div style={s.galleryCol}>

          {/* Thumbnail strip */}
          <div style={s.thumbStrip}>
            {product.images.map((img, i) => (
              <button
                key={i}
                style={{
                  ...s.thumb,
                  ...(activeImg === i ? s.thumbActive : {}),
                }}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                {img
                  ? <img src={img} alt="" style={s.thumbImg} />
                  : <span style={s.thumbEmoji}>{product.emojis?.[i] || "🌿"}</span>
                }
              </button>
            ))}
          </div>

          {/* Main image */}
          <div style={s.mainImg}>
            {product.images[activeImg]
              ? <img src={product.images[activeImg]} alt={product.name} style={s.mainImgEl} />
              : <span style={s.mainEmoji}>{product.emojis?.[activeImg] || "🌿"}</span>
            }
            {product.badge && (
              <span style={s.imgBadge}>{product.badge}</span>
            )}
          </div>

        </div>

        {/* ─── RIGHT: PRODUCT INFO (sticky) ─── */}
        <div style={s.infoCol}>
          <div style={s.stickyWrap}>

            {/* Breadcrumb */}
            <p style={s.breadcrumb}>
              {isHerb ? "Herbs" : "Flowers"} / {isHerb ? product.subCategory : product.crop}
            </p>

            {/* Name */}
            <h1 style={s.productName}>{product.name}</h1>

            {/* Meta row */}
            <div style={s.metaRow}>
              {!isHerb && (
                <>
                  <span style={s.metaPill}>{product.farm}</span>
                  <span style={s.metaPill}>{product.color}</span>
                </>
              )}
              {isHerb && (
                <>
                  <span style={s.metaPill}>{product.condition}</span>
                  <span style={s.metaPill}>{product.origin}</span>
                  <span style={{...s.metaPill, ...s.metaPillGreen}}>
                    Shelf life: {product.shelfLife}
                  </span>
                </>
              )}
            </div>

            {/* ── FLOWER: Stem length selector ── */}
            {!isHerb && (
              <div style={s.selectorBlock}>
                <p style={s.selectorLabel}>
                  Stem length
                  {selectedVariant && (
                    <span style={s.selectorSub}>
                      &nbsp;— {selectedVariant.char} · {selectedVariant.packrate} stems/box
                    </span>
                  )}
                </p>
                <div style={s.variantGrid}>
                  {product.variants.map(v => (
                    <button
                      key={v.label}
                      style={{
                        ...s.varBtn,
                        ...(selectedVariant?.label === v.label ? s.varBtnActive : {}),
                      }}
                      onClick={() => handleVariantSelect(v)}
                    >
                      <span style={s.varLen}>{v.label}</span>
                      <span style={s.varPrice}>{formatPrice(v.priceUSD)}/stem</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── HERB: Pack size selector ── */}
            {isHerb && (
              <div style={s.selectorBlock}>
                <p style={s.selectorLabel}>Pack size</p>
                <div style={s.packGrid}>
                  {product.packs.map(p => (
                    <button
                      key={p.grams}
                      style={{
                        ...s.packBtn,
                        ...(selectedPack?.grams === p.grams ? s.packBtnActive : {}),
                      }}
                      onClick={() => handlePackSelect(p)}
                    >
                      <span style={s.packGrams}>{p.label}</span>
                      <span style={s.packPrice}>{formatPrice(p.priceUSD)} / pack</span>
                      {p.savingNote && (
                        <span style={s.packSaving}>{p.savingNote}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── SPEC BOX (shows after selection) ── */}
            {(selectedVariant || selectedPack) && (
              <div style={s.specBox}>
                {!isHerb && selectedVariant && (
                  <>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Stem length</span>
                      <span style={s.specVal}>{selectedVariant.label}</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Head size</span>
                      <span style={s.specVal}>{selectedVariant.char}</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Pack rate</span>
                      <span style={s.specVal}>{selectedVariant.packrate} stems / box</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Origin</span>
                      <span style={s.specVal}>{product.origin}</span>
                    </div>
                  </>
                )}
                {isHerb && selectedPack && (
                  <>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Pack size</span>
                      <span style={s.specVal}>{selectedPack.label}</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Condition</span>
                      <span style={s.specVal}>{product.condition}</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Shelf life</span>
                      <span style={s.specVal}>{product.shelfLife}</span>
                    </div>
                    <div style={s.specRow}>
                      <span style={s.specKey}>Origin</span>
                      <span style={s.specVal}>{product.origin}</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ── QUANTITY + PRICE ── */}
            <div style={s.qtyPriceRow}>
              <div style={s.qtyBlock}>
                <p style={s.selectorLabel}>
                  {isHerb ? "Packs" : "Stems"}
                </p>
                <div style={s.qtyStepper}>
                  <button style={s.qtyBtn} onClick={() => changeQty(-1)}>−</button>
                  <span style={s.qtyVal}>{qty}</span>
                  <button style={s.qtyBtn} onClick={() => changeQty(1)}>+</button>
                </div>
                {!isHerb && selectedVariant && (
                  <p style={s.boxNote}>
                    = {(qty / selectedVariant.packrate).toFixed(1)} {
                      qty / selectedVariant.packrate === 1 ? "box" : "boxes"
                    }
                  </p>
                )}
                {isHerb && (
                  <p style={s.boxNote}>
                    = {(qty * (selectedPack?.grams || 50))}g total
                  </p>
                )}
              </div>

              <div style={s.priceBlock}>
                <p style={s.priceLabel}>Total</p>
                <p style={s.priceTotal}>{formatPrice(lineTotal)}</p>
                <p style={s.perUnit}>
                  {formatPrice(unitPrice)}&nbsp;/&nbsp;{isHerb ? "pack" : "stem"}
                </p>
              </div>
            </div>

            {/* ── ADD TO CART ── */}
            <button
              style={{
                ...s.addBtn,
                ...(canAdd ? {} : s.addBtnDisabled),
              }}
              onClick={handleAddToCart}
              disabled={!canAdd}
            >
              {canAdd
                ? `Add to Cart — ${formatPrice(lineTotal)}`
                : `Select ${isHerb ? "a pack size" : "a stem length"} above`
              }
            </button>

            {/* Min order note */}
            <p style={s.minNote}>
              {isHerb
                ? `Minimum order: ${product.minOrderPacks} pack`
                : selectedVariant
                  ? `Minimum order: ${selectedVariant.packrate} stems (1 box)`
                  : "Select a stem length to see minimum order"
              }
            </p>

            {/* ── ACCORDION ── */}
            <div style={s.accordion}>
              {[
                { key: "description", label: "Description",   body: product.description },
                { key: "care",        label: "Care & storage", body: product.care        },
                {
                  key: "shipping",
                  label: "Shipping & delivery",
                  body: "We ship worldwide via refrigerated air freight. FOB Nairobi pricing is standard; CIF pricing is available to JED, LHR, SIN, HND, RUH, DMM, KUL, ACC, and LOS. Delivery lead time: 2–5 business days depending on destination.",
                },
              ].map(item => (
                <div key={item.key} style={s.accordionItem}>
                  <button
                    style={s.accordionBtn}
                    onClick={() => setOpenAccordion(
                      openAccordion === item.key ? null : item.key
                    )}
                  >
                    <span>{item.label}</span>
                    <span style={s.accordionChevron}>
                      {openAccordion === item.key ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordion === item.key && (
                    <p style={s.accordionBody}>{item.body}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          RELATED PRODUCTS
      ══════════════════════════════════════════ */}
      <div style={s.related}>
        <div style={s.relatedHeader}>
          <span style={s.relatedLine} />
          <h2 style={s.relatedTitle}>You may also like</h2>
          <span style={s.relatedLine} />
        </div>
        <div style={s.relatedGrid}>
          {product.relatedProducts.map(p => (
            <div key={p.id} style={s.relatedCard}>
              <div style={s.relatedImg}>
                <span style={s.relatedEmoji}>{p.emoji}</span>
              </div>
              <p style={s.relatedName}>{p.name}</p>
              <p style={s.relatedPrice}>{formatPrice(p.priceUSD)} / {p.type === "herb" ? "50g" : "stem"}</p>
              <button style={s.relatedBtn}>View product</button>
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <div style={{ ...s.toast, ...(toast.show ? s.toastShow : {}) }}>
        ✓ {toast.msg}
      </div>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────
const s = {
  root: {
    background: "#ffffff",
    minHeight: "100vh",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    color: "#0d1117",
    position: "relative",
  },
  backBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "none",
    border: "none",
    color: "#1a6abf",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.04em",
    cursor: "pointer",
    padding: "16px 28px",
    fontFamily: "inherit",
    transition: "color 0.18s",
  },

  // ── MAIN GRID ──
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 28px 80px",
  },

  // ── GALLERY ──
  galleryCol: {
    display: "flex",
    gap: "14px",
    paddingRight: "48px",
    position: "sticky",
    top: "80px",
    alignSelf: "start",
  },
  thumbStrip: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flexShrink: "0",
  },
  thumb: {
    width: "72px",
    height: "86px",
    border: "1px solid #e2eaf4",
    background: "#f5f9ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "4px",
    overflow: "hidden",
    transition: "border-color 0.18s",
    padding: "0",
  },
  thumbActive: {
    borderColor: "#1a6abf",
    borderWidth: "2px",
  },
  thumbImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  thumbEmoji: {
    fontSize: "28px",
  },
  mainImg: {
    flex: "1",
    background: "#f5f9ff",
    aspectRatio: "4/5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    position: "relative",
    overflow: "hidden",
    border: "1px solid #e2eaf4",
  },
  mainImgEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainEmoji: {
    fontSize: "120px",
  },
  imgBadge: {
    position: "absolute",
    top: "16px",
    left: "16px",
    background: "#0d1117",
    color: "white",
    fontSize: "10px",
    fontWeight: "500",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "5px 12px",
    borderRadius: "2px",
  },

  // ── INFO ──
  infoCol: {
    paddingLeft: "48px",
    borderLeft: "1px solid #e2eaf4",
  },
  stickyWrap: {
    position: "sticky",
    top: "80px",
  },
  breadcrumb: {
    fontSize: "11px",
    color: "#8aabcc",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  productName: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "40px",
    fontWeight: "400",
    color: "#0d1117",
    lineHeight: "1.05",
    letterSpacing: "-0.01em",
    marginBottom: "14px",
  },
  metaRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "28px",
  },
  metaPill: {
    fontSize: "11px",
    padding: "4px 12px",
    border: "1px solid #c8dff5",
    color: "#2a4a6a",
    background: "#f0f6ff",
    borderRadius: "99px",
    fontWeight: "500",
  },
  metaPillGreen: {
    background: "#eaf6f0",
    borderColor: "#a8dfc8",
    color: "#1a5a3a",
  },

  // ── SELECTORS ──
  selectorBlock: {
    marginBottom: "22px",
  },
  selectorLabel: {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#0d1117",
    marginBottom: "10px",
  },
  selectorSub: {
    fontWeight: "400",
    textTransform: "none",
    letterSpacing: "0",
    color: "#8aabcc",
    fontSize: "11px",
  },

  // Flower variants
  variantGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
  },
  varBtn: {
    border: "1px solid #e2eaf4",
    background: "#ffffff",
    borderRadius: "6px",
    padding: "10px 8px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3px",
    transition: "border-color 0.18s, background 0.18s",
    fontFamily: "inherit",
  },
  varBtnActive: {
    border: "2px solid #1a6abf",
    background: "#f0f6ff",
  },
  varLen: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#0d1117",
  },
  varPrice: {
    fontSize: "10px",
    color: "#8aabcc",
  },

  // Herb packs
  packGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  packBtn: {
    border: "1px solid #e2eaf4",
    background: "#ffffff",
    borderRadius: "8px",
    padding: "14px 12px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    transition: "border-color 0.18s, background 0.18s",
    fontFamily: "inherit",
  },
  packBtnActive: {
    border: "2px solid #1a6abf",
    background: "#f0f6ff",
  },
  packGrams: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#0d1117",
  },
  packPrice: {
    fontSize: "12px",
    color: "#4a6080",
  },
  packSaving: {
    fontSize: "10px",
    color: "#1a7a3a",
    fontWeight: "600",
    background: "#eaf6f0",
    padding: "2px 8px",
    borderRadius: "99px",
    marginTop: "2px",
  },

  // ── SPEC BOX ──
  specBox: {
    background: "#f8fbff",
    border: "1px solid #deeaf8",
    borderRadius: "8px",
    padding: "14px 16px",
    marginBottom: "22px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  specRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
  },
  specKey: {
    color: "#8aabcc",
    fontWeight: "400",
  },
  specVal: {
    color: "#0d1117",
    fontWeight: "500",
  },

  // ── QTY + PRICE ──
  qtyPriceRow: {
    display: "flex",
    gap: "24px",
    alignItems: "flex-start",
    marginBottom: "20px",
    paddingBottom: "20px",
    borderBottom: "1px solid #e2eaf4",
  },
  qtyBlock: {
    flex: "1",
  },
  qtyStepper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #c8dff5",
    borderRadius: "6px",
    overflow: "hidden",
    width: "fit-content",
    marginBottom: "5px",
  },
  qtyBtn: {
    width: "36px",
    height: "36px",
    border: "none",
    background: "#f0f6ff",
    color: "#1a6abf",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.15s",
  },
  qtyVal: {
    minWidth: "48px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
    color: "#0d1117",
    borderLeft: "1px solid #c8dff5",
    borderRight: "1px solid #c8dff5",
    padding: "8px 0",
    display: "block",
  },
  boxNote: {
    fontSize: "11px",
    color: "#8aabcc",
  },
  priceBlock: {
    textAlign: "right",
    flex: "1",
  },
  priceLabel: {
    fontSize: "10px",
    color: "#8aabcc",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  priceTotal: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "30px",
    fontWeight: "400",
    color: "#0d1117",
    lineHeight: "1",
  },
  perUnit: {
    fontSize: "11px",
    color: "#8aabcc",
    marginTop: "4px",
  },

  // ── ADD BUTTON ──
  addBtn: {
    width: "100%",
    background: "#0d1117",
    color: "white",
    border: "none",
    padding: "15px 24px",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "background 0.2s, transform 0.15s",
    marginBottom: "10px",
  },
  addBtnDisabled: {
    background: "#c8dff5",
    color: "#4a6080",
    cursor: "not-allowed",
  },
  minNote: {
    fontSize: "11px",
    color: "#8aabcc",
    textAlign: "center",
    marginBottom: "24px",
  },

  // ── ACCORDION ──
  accordion: {
    borderTop: "1px solid #e2eaf4",
  },
  accordionItem: {
    borderBottom: "1px solid #e2eaf4",
  },
  accordionBtn: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 0",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    color: "#0d1117",
    fontFamily: "inherit",
    letterSpacing: "0.02em",
  },
  accordionChevron: {
    fontSize: "18px",
    color: "#1a6abf",
    lineHeight: "1",
  },
  accordionBody: {
    fontSize: "13px",
    color: "#4a6080",
    lineHeight: "1.8",
    paddingBottom: "16px",
  },

  // ── RELATED ──
  related: {
    padding: "48px 28px 80px",
    maxWidth: "1300px",
    margin: "0 auto",
    borderTop: "1px solid #e2eaf4",
  },
  relatedHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "32px",
  },
  relatedLine: {
    flex: "1",
    height: "1px",
    background: "#e2eaf4",
    display: "block",
  },
  relatedTitle: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: "24px",
    fontWeight: "400",
    color: "#0d1117",
    whiteSpace: "nowrap",
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
  },
  relatedCard: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  relatedImg: {
    background: "#f0f6ff",
    aspectRatio: "3/4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    border: "1px solid #e2eaf4",
    marginBottom: "4px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "border-color 0.18s",
  },
  relatedEmoji: {
    fontSize: "56px",
  },
  relatedName: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#0d1117",
  },
  relatedPrice: {
    fontSize: "12px",
    color: "#4a6080",
  },
  relatedBtn: {
    background: "none",
    border: "1px solid #c8dff5",
    color: "#1a6abf",
    padding: "7px 0",
    fontSize: "11px",
    fontWeight: "500",
    letterSpacing: "0.06em",
    cursor: "pointer",
    fontFamily: "inherit",
    borderRadius: "4px",
    transition: "background 0.18s, color 0.18s",
  },

  // ── TOAST ──
  toast: {
    position: "fixed",
    bottom: "28px",
    left: "50%",
    transform: "translateX(-50%) translateY(60px)",
    background: "#0d1117",
    color: "white",
    padding: "12px 28px",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.08em",
    borderRadius: "4px",
    opacity: "0",
    transition: "transform 0.32s ease, opacity 0.32s ease",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: "999",
  },
  toastShow: {
    transform: "translateX(-50%) translateY(0)",
    opacity: "1",
  },
};

// Minimal CSS for Cormorant import only
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  .pg-sticky { position: sticky; top: 80px; }
  @media (max-width: 900px) {
    .pdp-main-grid { grid-template-columns: 1fr !important; }
    .pdp-gallery-col { padding-right: 0 !important; position: static !important; }
    .pdp-info-col { padding-left: 0 !important; border-left: none !important; margin-top: 32px; }
    .pdp-variant-grid { grid-template-columns: repeat(3,1fr) !important; }
  }
`;
