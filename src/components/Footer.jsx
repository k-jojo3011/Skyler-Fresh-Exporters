
import fb from "../assets/images/FB.png";
import ig from "../assets/images/IGicon-rb.png";
import lk from "../assets/images/lkd.png";
import "../styles/Footer.css";


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              Skyler<em>Fresh</em>
            </div>

            <p>
              Fresh flowers, vegetables, fruits & herbs grown with care in Kenya.
              Delivered globally with quality and reliability.
            </p>

            {/* SOCIAL MEDIA (UPDATED FROM YOUR HTML) */}
            <div className="footer-socials">

              <a
                href="https://web.facebook.com/profile.php?id=61583462456131"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={fb} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/skyler_fel/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={ig} alt="Instagram" />
              </a>

              <a
                href="https://www.linkedin.com/company/skyler-fresh/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={lk} alt="LinkedIn" />
              </a>

            </div>


               <div className="footer-col">
            <h4>Downloads</h4>

            <ul>
              <li>
                <a
                  href="/downloads/Company Profile Skyler-Fel.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  📄 Company Profile
                </a>
              </li>

              <li>
                <a
                  href="/downloads/Skyler Fresh Full Catalog.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  📦 Product Catalogue
                </a>
              </li>
            </ul>
          </div>

          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#flowers">Flowers</a></li>
              <li><a href="#vegetables">Vegetables</a></li>
              <li><a href="#fruits">Fruits</a></li>
              <li><a href="#herbs">Herbs</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#journey">Our Farmers</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#locations">Locations</a></li>
            </ul>
          </div>
     
       

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>📞 +254 721 427 329</li>
              <li>✉️ marketing@skyler-fel.com</li>
              <li>
                📍 Airport North Road, Sphinx Godowns, Embakasi District, Kenya
              </li>
            </ul>

            <h4 style={{ marginTop: "20px" }}>Hours</h4>
            <ul>
              <li>Mon–Sat: 7:00 AM – 6:00 PM</li>
              <li>Sun: 8:00 AM – 2:00 PM</li>
            </ul>
          </div>



        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2025 Skyler Fresh Exporters. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}