
// src/pages/CheckoutPage.jsx
// Mina Baie-style checkout — black & blue theme
// Left: contact + shipping + delivery date | Right: sticky order summary
// Free shipping for Kenya only

import { useState, useMemo } from "react";
import { useCurrency } from "../context/CurrencyContext";
import "../styles/CheckoutPage.css";

const KENYA_COUNTIES = [
  "Nairobi","Mombasa","Kisumu","Nakuru","Eldoret","Thika","Malindi",
  "Kitale","Garissa","Kakamega","Nyeri","Machakos","Meru","Kisii",
  "Kilifi","Bungoma","Homa Bay","Migori","Siaya","Kericho","Bomet",
  "Kajiado","Kiambu","Murang'a","Nyandarua","Laikipia","Samburu",
  "Trans Nzoia","Uasin Gishu","Elgeyo-Marakwet","Nandi","Baringo",
  "Turkana","West Pokot","Marsabit","Isiolo","Tharaka-Nithi","Embu",
  "Kirinyaga","Vihiga","Kwale","Taita-Taveta","Makueni","Narok",
  "Nyamira","Mandera","Wajir","Tana River","Lamu","Pokot",
];

const COUNTRIES = [
  { code: "KE", name: "Kenya" },
  { code: "UG", name: "Uganda" },
  { code: "TZ", name: "Tanzania" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SG", name: "Singapore" },
  { code: "JP", name: "Japan" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "NL", name: "Netherlands" },
  { code: "ZA", name: "South Africa" },
];

// Get today + 1 as min delivery date, format as yyyy-mm-dd
function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

// Get today + 14 as max date for suggestion
function getMaxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split("T")[0];
}

function formatDisplayDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-KE", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

export default function CheckoutPage({ cart = [], onBack }) {
  const { formatPrice } = useCurrency();

  // ── FORM STATE ──────────────────────────────────────────────────
  const [form, setForm] = useState({
    email:       "",
    firstName:   "",
    lastName:    "",
    phone:       "",
    address:     "",
    apartment:   "",
    city:        "",
    county:      "",
    country:     "KE",
    postalCode:  "",
    deliveryDate: "",
    deliveryNote: "",
    saveInfo:    false,
    payMethod:   "mpesa",
    mpesaPhone:  "",
  });

  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [step,      setStep]      = useState(1); // 1=info, 2=delivery, 3=payment

  const isKenya = form.country === "KE";

  // ── SHIPPING CALC ────────────────────────────────────────────────
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const shippingFee = useMemo(() => {
    if (isKenya) return 0;                          // FREE in Kenya
    if (subtotal > 500) return 0;                   // free over $500 international
    return 25;                                      // flat $25 international
  }, [isKenya, subtotal]);

  const total = subtotal + shippingFee;

  // ── VALIDATION ──────────────────────────────────────────────────
  function validate() {
    const e = {};
    if (!form.email || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.firstName.trim()) e.firstName = "First name required";
    if (!form.lastName.trim())  e.lastName  = "Last name required";
    if (!form.phone.trim())     e.phone     = "Phone number required";
    if (!form.address.trim())   e.address   = "Address required";
    if (!form.city.trim())      e.city      = "City required";
    if (!form.country)          e.country   = "Country required";
    if (!form.deliveryDate)     e.deliveryDate = "Please select a delivery date";
    if (form.payMethod === "mpesa" && !form.mpesaPhone.trim())
      e.mpesaPhone = "M-Pesa number required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  // ── FIELD COMPONENT ─────────────────────────────────────────────
  function Field({ label, name, type = "text", placeholder, required, children, half }) {
    return (
      <div className={`co-field${half ? " co-field--half" : ""}${errors[name] ? " co-field--error" : ""}`}>
        <label className="co-label">{label}{required && <span className="co-req">*</span>}</label>
        {children || (
          <input
            className="co-input"
            type={type}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            autoComplete="off"
          />
        )}
        {errors[name] && <p className="co-error-msg">{errors[name]}</p>}
      </div>
    );
  }

  // ── SUCCESS ──────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="co-root">
        <div className="co-success">
          <div className="co-success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you, {form.firstName}. Your order has been received.</p>
          <div className="co-success-details">
            <div className="co-success-row">
              <span>Delivery to</span>
              <strong>{form.address}, {form.city}, {form.country}</strong>
            </div>
            <div className="co-success-row">
              <span>Requested delivery</span>
              <strong>{formatDisplayDate(form.deliveryDate)}</strong>
            </div>
            <div className="co-success-row">
              <span>Order total</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            {form.payMethod === "mpesa" && (
              <div className="co-success-row">
                <span>Payment</span>
                <strong>M-Pesa STK push sent to {form.mpesaPhone}</strong>
              </div>
            )}
          </div>
          <button className="co-submit-btn" onClick={onBack} style={{ marginTop: "24px" }}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="co-root">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');`}</style>

      {/* ── TOP BAR ── */}
      <div className="co-topbar">
        <button className="co-back-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          Back to cart
        </button>
        <div className="co-brand">Skyler<em>Fresh</em></div>
        <div className="co-secure">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Secure checkout
        </div>
      </div>

      {/* ── STEP INDICATOR ── */}
      <div className="co-steps">
        {["Information", "Delivery", "Payment"].map((s, i) => (
          <div key={s} className={`co-step ${step >= i + 1 ? "co-step--done" : ""} ${step === i + 1 ? "co-step--active" : ""}`}>
            <div className="co-step-dot">{step > i + 1 ? "✓" : i + 1}</div>
            <span>{s}</span>
            {i < 2 && <div className="co-step-line" />}
          </div>
        ))}
      </div>

      <form className="co-layout" onSubmit={handleSubmit} noValidate>

        {/* ════════════════════════════════════════
            LEFT — FORM
        ════════════════════════════════════════ */}
        <div className="co-left">

          {/* ── SECTION 1: CONTACT ── */}
          <div className={`co-section ${step !== 1 && step > 1 ? "co-section--done" : ""}`}>
            <div className="co-section-header" onClick={() => setStep(1)}>
              <div className="co-section-num">{step > 1 ? "✓" : "1"}</div>
              <h2 className="co-section-title">Contact information</h2>
              {step > 1 && (
                <button type="button" className="co-edit-btn" onClick={() => setStep(1)}>Edit</button>
              )}
            </div>

            {step === 1 && (
              <div className="co-section-body">
                <Field label="Email address" name="email" type="email" placeholder="you@example.com" required />

                <div className="co-row">
                  <Field label="First name" name="firstName" placeholder="Amina" required half />
                  <Field label="Last name"  name="lastName"  placeholder="Wanjiku" required half />
                </div>

                <Field label="Phone number" name="phone" type="tel" placeholder="+254 700 000 000" required />

                <label className="co-checkbox-label">
                  <input type="checkbox" name="saveInfo" checked={form.saveInfo} onChange={handleChange} />
                  Save this information for next time
                </label>

                <button
                  type="button"
                  className="co-next-btn"
                  onClick={() => {
                    const e = {};
                    if (!form.email || !form.email.includes("@")) e.email = "Valid email required";
                    if (!form.firstName.trim()) e.firstName = "First name required";
                    if (!form.lastName.trim())  e.lastName  = "Last name required";
                    if (!form.phone.trim())     e.phone     = "Phone number required";
                    setErrors(e);
                    if (Object.keys(e).length === 0) setStep(2);
                  }}
                >
                  Continue to delivery
                </button>
              </div>
            )}

            {/* Collapsed summary */}
            {step > 1 && (
              <div className="co-section-summary">
                <span>{form.email}</span>
                <span>{form.firstName} {form.lastName} · {form.phone}</span>
              </div>
            )}
          </div>

          {/* ── SECTION 2: SHIPPING + DELIVERY DATE ── */}
          <div className={`co-section ${step < 2 ? "co-section--locked" : ""}`}>
            <div className="co-section-header" onClick={() => step >= 2 && setStep(2)}>
              <div className={`co-section-num ${step < 2 ? "co-section-num--grey" : ""}`}>{step > 2 ? "✓" : "2"}</div>
              <h2 className="co-section-title">Shipping & delivery</h2>
              {step > 2 && (
                <button type="button" className="co-edit-btn" onClick={() => setStep(2)}>Edit</button>
              )}
            </div>

            {step === 2 && (
              <div className="co-section-body">

                {/* Country */}
                <Field label="Country / Region" name="country" required>
                  <select className="co-input co-select" name="country" value={form.country} onChange={handleChange}>
                    {COUNTRIES.map(c => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Street address" name="address" placeholder="123 Westlands Road" required />
                <Field label="Apartment, suite, building (optional)" name="apartment" placeholder="Apt 4B" />

                <div className="co-row">
                  <Field label="City / Town" name="city" placeholder="Nairobi" required half />
                  {isKenya ? (
                    <Field label="County" name="county" required half>
                      <select className="co-input co-select" name="county" value={form.county} onChange={handleChange}>
                        <option value="">Select county</option>
                        {KENYA_COUNTIES.map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                  ) : (
                    <Field label="State / Region" name="county" placeholder="State" half />
                  )}
                </div>

                <Field label="Postal code (optional)" name="postalCode" placeholder="00100" />

                {/* ── DELIVERY DATE PICKER ── */}
                <div className="co-delivery-block">
                  <div className="co-delivery-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Requested delivery date</span>
                  </div>
                  <p className="co-delivery-hint">
                    Choose when you'd like your order delivered. We'll confirm availability within 2 hours.
                    {isKenya && " Nairobi deliveries available next-day."}
                  </p>
                  <Field label="Preferred delivery date" name="deliveryDate" required>
                    <input
                      className={`co-input ${errors.deliveryDate ? "co-input--error" : ""}`}
                      type="date"
                      name="deliveryDate"
                      value={form.deliveryDate}
                      onChange={handleChange}
                      min={getMinDate()}
                      max={getMaxDate()}
                    />
                  </Field>
                  {form.deliveryDate && (
                    <div className="co-date-confirm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Delivery requested for {formatDisplayDate(form.deliveryDate)}
                    </div>
                  )}
                  <Field label="Delivery instructions (optional)" name="deliveryNote">
                    <textarea
                      className="co-input co-textarea"
                      name="deliveryNote"
                      value={form.deliveryNote}
                      onChange={handleChange}
                      placeholder="Gate code, landmark, preferred time window..."
                      rows={3}
                    />
                  </Field>
                </div>

                {/* Shipping method */}
                <div className="co-shipping-method">
                  <div className="co-shipping-option selected">
                    <div className="co-shipping-left">
                      <div className="co-radio-dot" />
                      <div>
                        <p className="co-shipping-name">
                          {isKenya ? "Standard Delivery — Kenya" : "International Air Freight"}
                        </p>
                        <p className="co-shipping-desc">
                          {isKenya
                            ? "Nairobi: next-day · Other counties: 1–3 days"
                            : `Delivered ${form.deliveryDate ? "by " + formatDisplayDate(form.deliveryDate) : "within 2–5 business days"} · Refrigerated air freight`
                          }
                        </p>
                      </div>
                    </div>
                    <span className="co-shipping-price">
                      {isKenya
                        ? <span className="co-free">FREE</span>
                        : subtotal > 500
                          ? <span className="co-free">FREE</span>
                          : formatPrice(25)
                      }
                    </span>
                  </div>

                  {!isKenya && subtotal <= 500 && (
                    <p className="co-free-note">
                      Add {formatPrice(500 - subtotal)} more to qualify for free international shipping
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  className="co-next-btn"
                  onClick={() => {
                    const e = {};
                    if (!form.address.trim())   e.address = "Address required";
                    if (!form.city.trim())       e.city = "City required";
                    if (!form.country)           e.country = "Country required";
                    if (!form.deliveryDate)      e.deliveryDate = "Please select a delivery date";
                    setErrors(e);
                    if (Object.keys(e).length === 0) setStep(3);
                  }}
                >
                  Continue to payment
                </button>

                <button type="button" className="co-back-link" onClick={() => setStep(1)}>
                  ← Back to contact
                </button>
              </div>
            )}

            {step > 2 && (
              <div className="co-section-summary">
                <span>{form.address}{form.apartment && `, ${form.apartment}`}, {form.city}</span>
                <span>{isKenya ? form.county : ""} · {COUNTRIES.find(c => c.code === form.country)?.name}</span>
                {form.deliveryDate && <span>📅 Delivery: {formatDisplayDate(form.deliveryDate)}</span>}
              </div>
            )}
          </div>

          {/* ── SECTION 3: PAYMENT ── */}
          <div className={`co-section ${step < 3 ? "co-section--locked" : ""}`}>
            <div className="co-section-header">
              <div className={`co-section-num ${step < 3 ? "co-section-num--grey" : ""}`}>3</div>
              <h2 className="co-section-title">Payment</h2>
            </div>

            {step === 3 && (
              <div className="co-section-body">
                <p className="co-section-note">All transactions are encrypted and secure.</p>

                {/* Payment methods */}
                <div className="co-pay-methods">
                  {[
                    { id: "mpesa",    label: "M-Pesa",        icon: "📱" },
                    { id: "card",     label: "Credit / Debit card", icon: "💳" },
                    { id: "bank",     label: "Bank transfer",  icon: "🏦" },
                  ].map(m => (
                    <label
                      key={m.id}
                      className={`co-pay-option ${form.payMethod === m.id ? "co-pay-option--active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        value={m.id}
                        checked={form.payMethod === m.id}
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                      <span className="co-pay-icon">{m.icon}</span>
                      <span className="co-pay-label">{m.label}</span>
                      <div className={`co-pay-radio ${form.payMethod === m.id ? "co-pay-radio--active" : ""}`} />
                    </label>
                  ))}
                </div>

                {/* M-Pesa fields */}
                {form.payMethod === "mpesa" && (
                  <div className="co-mpesa-block">
                    <p className="co-mpesa-info">
                      Enter your M-Pesa registered number. You'll receive an STK push to complete payment.
                    </p>
                    <Field label="M-Pesa phone number" name="mpesaPhone" type="tel" placeholder="+254 700 000 000" required />
                  </div>
                )}

                {/* Card fields */}
                {form.payMethod === "card" && (
                  <div className="co-card-block">
                    <Field label="Card number" name="cardNumber" placeholder="1234 5678 9012 3456" />
                    <div className="co-row">
                      <Field label="Expiry date" name="cardExpiry" placeholder="MM / YY" half />
                      <Field label="Security code" name="cardCvv" placeholder="CVV" half />
                    </div>
                    <Field label="Name on card" name="cardName" placeholder="Amina Wanjiku" />
                  </div>
                )}

                {/* Bank transfer */}
                {form.payMethod === "bank" && (
                  <div className="co-bank-block">
                    <p className="co-mpesa-info">Bank details will be emailed to <strong>{form.email}</strong> after you place the order. Your order will be confirmed once payment is received.</p>
                  </div>
                )}

                {/* Place order */}
                <button type="submit" className="co-submit-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Place order — {formatPrice(total)}
                </button>

                <button type="button" className="co-back-link" onClick={() => setStep(2)}>
                  ← Back to delivery
                </button>

                <p className="co-terms">
                  By placing your order you agree to our{" "}
                  <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </p>
              </div>
            )}
          </div>

        </div>

        {/* ════════════════════════════════════════
            RIGHT — ORDER SUMMARY (sticky)
        ════════════════════════════════════════ */}
        <div className="co-right">
          <div className="co-summary-sticky">
            <h3 className="co-summary-title">Order summary</h3>

            {/* Items */}
            <div className="co-summary-items">
              {cart.length === 0 ? (
                <p className="co-empty-note">No items in cart</p>
              ) : (
                cart.map(item => (
                  <div className="co-summary-item" key={item.id}>
                    <div className="co-summary-thumb">
                      {item.image
                        ? <img src={item.image} alt={item.name} />
                        : <span>{item.emoji || "🌿"}</span>
                      }
                      <span className="co-summary-qty">{item.quantity}</span>
                    </div>
                    <div className="co-summary-info">
                      <p className="co-summary-name">{item.name}</p>
                      {/* Flower details */}
                      {item.type === "flower" && item.variant && (
                        <p className="co-summary-detail">
                          {item.variant}{item.color ? ` · ${item.color}` : ""}
                          {item.characteristic ? ` · ${item.characteristic}` : ""}
                        </p>
                      )}
                      {item.type === "flower" && (
                        <p className="co-summary-detail">
                          {item.quantity} stems · {(item.quantity / (item.packrate || 250)).toFixed(1)} boxes
                        </p>
                      )}
                      {/* Herb details */}
                      {item.type === "herb" && item.variant && (
                        <p className="co-summary-detail">
                          {item.variant} pack · {item.quantity * (item.packGrams || 50)}g total
                        </p>
                      )}
                    </div>
                    <p className="co-summary-line">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))
              )}
            </div>

            <div className="co-summary-divider" />

            {/* Discount code */}
            <div className="co-discount-row">
              <input className="co-discount-input" type="text" placeholder="Discount code or gift card" />
              <button type="button" className="co-discount-btn">Apply</button>
            </div>

            <div className="co-summary-divider" />

            {/* Totals */}
            <div className="co-totals">
              <div className="co-total-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="co-total-row">
                <span>Shipping</span>
                <span>
                  {shippingFee === 0
                    ? <span className="co-free">Free {isKenya ? "(Kenya)" : "(over $500)"}</span>
                    : formatPrice(shippingFee)
                  }
                </span>
              </div>
              {form.deliveryDate && (
                <div className="co-total-row co-total-row--date">
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    &nbsp;Delivery date
                  </span>
                  <span>{formatDisplayDate(form.deliveryDate)}</span>
                </div>
              )}
              <div className="co-total-row co-total-row--total">
                <strong>Total</strong>
                <strong>{formatPrice(total)}</strong>
              </div>
            </div>

            {/* Trust badges */}
            <div className="co-trust">
              <div className="co-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                SSL encrypted
              </div>
              <div className="co-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Secure payment
              </div>
              <div className="co-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 3H8l-2 4h12l-2-4z"/></svg>
                Same-day dispatch
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
