import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Premium Ganesh Ji Gift",
    category: "Divine Gifts",
    price: "₹1,499",
    image: "/products/ganesh-1.jpg",
  },
  {
    id: 2,
    name: "Lakshmi Ganesh Premium Set",
    category: "Divine Gifts",
    price: "₹1,999",
    image: "/products/lakshmi-ganesh.jpg",
  },
  {
    id: 3,
    name: "Ram Darbar Premium Gift",
    category: "Premium Frames",
    price: "₹2,499",
    image: "/products/ram-darbar.jpg",
  },
  {
    id: 4,
    name: "Premium Krishna Ji",
    category: "Divine Gifts",
    price: "₹1,799",
    image: "/products/krishna.jpg",
  },
  {
    id: 5,
    name: "Designer Ganesh Gift",
    category: "Ganesh",
    price: "₹1,299",
    image: "/products/ganesh-2.jpg",
  },
  {
    id: 6,
    name: "Premium Decorative Gift",
    category: "Corporate Gifting",
    price: "₹2,999",
    image: "/products/premium-gift.jpg",
  },
];

const categories = [
  "All",
  "Divine Gifts",
  "Ganesh",
  "Lakshmi-Ganesh",
  "Ram Darbar",
  "Krishna",
  "Premium Frames",
  "Corporate Gifting",
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBulk, setShowBulk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [bulkForm, setBulkForm] = useState({
    name: "",
    company: "",
    phone: "",
    quantity: "",
    requirement: "",
  });

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const submitOrderEnquiry = (e) => {
    e.preventDefault();

    const message = `
KT GIFTS - ORDER ENQUIRY

Name: ${enquiryForm.name}
Phone: ${enquiryForm.phone}
Product: ${enquiryForm.product}
Quantity: ${enquiryForm.quantity}
Message: ${enquiryForm.message}
    `;

    window.open(
      `https://wa.me/918802448596?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowEnquiry(false);
  };

  const submitBulkOrder = (e) => {
    e.preventDefault();

    const message = `
KT GIFTS - LARGE / BULK ORDER ENQUIRY

Name: ${bulkForm.name}
Company: ${bulkForm.company}
Phone: ${bulkForm.phone}
Quantity: ${bulkForm.quantity}
Requirement: ${bulkForm.requirement}
    `;

    window.open(
      `https://wa.me/918802448596?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setShowBulk(false);
  };

  return (
    <div className="app">

      {/* TOP CONTACT BAR */}
      <div className="top-bar">
        <div className="top-left">
          <span>📞 8802448596</span>
          <span>👤 Owner: Rakesh Gupta</span>
        </div>

        <div className="top-right">
          <span>🛍️ Retail & Wholesale</span>
          <span>✨ Premium Gift Collection</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-symbol">✦</span>
          <div>
            <h1>KT GIFTS</h1>
            <small>Premium Gifts & Divine Collection</small>
          </div>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <button
            className="nav-enquiry"
            onClick={() => setShowEnquiry(true)}
          >
            Order Enquiry
          </button>

          <button
            className="cart-button"
            onClick={() =>
              document
                .getElementById("shop")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🛒 Cart <span>{cart.length}</span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="gold-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>

        <div className="hero-content">

          <div className="hero-text">
            <div className="premium-label">
              ✦ PREMIUM COLLECTION ✦
            </div>

            <h2>
              Gifts That Carry
              <span> Blessings & Beauty</span>
            </h2>

            <p>
              Discover premium divine gifts, decorative idols and
              elegant gifting collections for every special occasion.
            </p>

            <div className="hero-buttons">
              <a href="#shop" className="gold-button">
                Explore Collection
              </a>

              <button
                className="outline-button"
                onClick={() => setShowBulk(true)}
              >
                Large / Bulk Orders
              </button>
            </div>

            <div className="hero-contact">
              <span>📞</span>
              <div>
                <small>Order Enquiry</small>
                <strong>8802448596</strong>
              </div>
            </div>
          </div>

          <div className="hero-product">
            <div className="product-aura"></div>

            <div className="hero-frame">
              <div className="hero-frame-inner">
                <div className="hero-idol">ॐ</div>
                <div className="hero-diya">🪔</div>
                <h3>DIVINE</h3>
                <p>PREMIUM GIFT</p>
              </div>
            </div>

            <div className="floating-gold gold-one">✦</div>
            <div className="floating-gold gold-two">✧</div>
            <div className="floating-gold gold-three">✦</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <span>✦</span>
          <div>
            <h3>Premium Quality</h3>
            <p>Elegant & carefully selected products</p>
          </div>
        </div>

        <div className="feature-card">
          <span>🛍️</span>
          <div>
            <h3>Retail & Wholesale</h3>
            <p>Orders available in all quantities</p>
          </div>
        </div>

        <div className="feature-card">
          <span>📦</span>
          <div>
            <h3>Bulk Orders</h3>
            <p>Special pricing for large requirements</p>
          </div>
        </div>

        <div className="feature-card">
          <span>📞</span>
          <div>
            <h3>Easy Enquiry</h3>
            <p>Call or WhatsApp for your requirement</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section" id="categories">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Explore Our <b>Categories</b></h2>
          <p>Premium gifting collections for every occasion</p>
        </div>

        <div className="category-grid">
          {categories.slice(1).map((category, index) => (
            <button
              key={category}
              className="category-card"
              onClick={() => {
                setSelectedCategory(category);
                document
                  .getElementById("shop")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="category-icon">
                {["🪔", "ॐ", "✨", "🙏", "🦚", "👑", "🎁"][index]}
              </div>

              <h3>{category}</h3>
              <span>View Collection →</span>
            </button>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section className="shop-section" id="shop">
        <div className="section-heading dark-heading">
          <span>PREMIUM PRODUCTS</span>
          <h2>Our <b>Featured Collection</b></h2>
          <p>Elegant products selected specially for KT Gifts</p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "active-filter" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>

              <div className="product-image">
                <div className="product-shine"></div>

                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add(
                      "image-placeholder"
                    );
                  }}
                />

                <span className="premium-badge">PREMIUM</span>

                <button className="wishlist">♡</button>
              </div>

              <div className="product-info">
                <small>{product.category}</small>
                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <strong>{product.price}</strong>

                  <button
                    className="add-cart"
                    onClick={() => addToCart(product)}
                  >
                    + Add
                  </button>
                </div>

                <button
                  className="product-enquiry"
                  onClick={() => {
                    setEnquiryForm({
                      ...enquiryForm,
                      product: product.name,
                    });
                    setShowEnquiry(true);
                  }}
                >
                  📞 Enquire for this product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BULK ORDER BANNER */}
      <section className="bulk-banner">
        <div className="bulk-decoration">✦</div>

        <div className="bulk-content">
          <span>FOR BUSINESS • EVENTS • FUNCTIONS • CORPORATE</span>

          <h2>
            Need a <b>Large / Bulk Order?</b>
          </h2>

          <p>
            Get special pricing and personalized assistance
            for wholesale and bulk requirements.
          </p>

          <button
            className="gold-button"
            onClick={() => setShowBulk(true)}
          >
            Send Bulk Order Enquiry →
          </button>
        </div>

        <div className="bulk-number">
          <small>CALL / WHATSAPP</small>
          <strong>8802448596</strong>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="about-decoration"></div>

        <div className="about-content">
          <span>ABOUT KT GIFTS</span>
          <h2>
            Traditional Elegance.
            <br />
            <b>Premium Gifting.</b>
          </h2>

          <p>
            KT Gifts brings together premium divine gifts, decorative
            collections and elegant gifting products designed for
            festivals, weddings, functions, corporate gifting and
            special occasions.
          </p>

          <p>
            Whether you need a single premium gift or a large quantity
            for an event, function or business requirement, we are
            available for both retail and wholesale orders.
          </p>

          <div className="about-owner">
            <div className="owner-icon">RG</div>
            <div>
              <small>OWNER</small>
              <strong>Rakesh Gupta</strong>
              <span>KT Gifts</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Contact <b>KT Gifts</b></h2>
          <p>For product enquiry, retail orders and bulk requirements</p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>For direct order enquiry</p>
            <a href="tel:+91 8802448596">+91 8802448596</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Send your product requirement</p>
            <a
              href="https://wa.me/918802448596"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🛍️</div>
            <h3>Retail & Wholesale</h3>
            <p>Orders available for all quantities</p>
            <button onClick={() => setShowBulk(true)}>
              Wholesale Enquiry
            </button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Our Location</h3>
            <p>Anand Parbat, Karol Bagh</p>
            <strong>New Delhi – 110005</strong>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">

          <div className="footer-brand">
            <h2>KT GIFTS</h2>
            <p>
              Premium divine gifts, decorative collections
              and elegant gifting solutions.
            </p>

            <div className="footer-owner">
              <span>Owner:</span> Rakesh Gupta
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Order Support</h3>
            <button onClick={() => setShowEnquiry(true)}>
              Order Enquiry
            </button>
            <button onClick={() => setShowBulk(true)}>
              Large / Bulk Order
            </button>
            <a href="tel:8802448596">Call: 8802448596</a>
          </div>

          <div className="footer-contact">
            <h3>Visit / Contact</h3>
            <p>📍 Anand Parbat, Karol Bagh</p>
            <p>New Delhi – 110005</p>
            <p>📞 8802448596</p>
            <p>🛍️ Retail & Wholesale</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 KT Gifts. All Rights Reserved.</span>
          <span>Premium Gifting Collection</span>
        </div>
      </footer>

      {/* ORDER ENQUIRY MODAL */}
      {showEnquiry && (
        <div
          className="modal-overlay"
          onClick={() => setShowEnquiry(false)}
        >
          <div
            className="enquiry-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowEnquiry(false)}
            >
              ×
            </button>

            <div className="modal-icon">📦</div>

            <span>KT GIFTS</span>
            <h2>Order Enquiry</h2>
            <p>
              Tell us what you are looking for and we will
              contact you shortly.
            </p>

            <form onSubmit={submitOrderEnquiry}>

              <input
                type="text"
                placeholder="Your Name *"
                required
                value={enquiryForm.name}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                placeholder="Mobile Number *"
                required
                value={enquiryForm.phone}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Product Name"
                value={enquiryForm.product}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    product: e.target.value,
                  })
                }
              />

              <input
                type="number"
                min="1"
                placeholder="Quantity"
                value={enquiryForm.quantity}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    quantity: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Your requirement / message"
                rows="4"
                value={enquiryForm.message}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    message: e.target.value,
                  })
                }
              ></textarea>

              <button className="submit-enquiry">
                Send Enquiry on WhatsApp →
              </button>
            </form>

            <div className="modal-call">
              Or call directly: <a href="tel:8802448596">+91 8802448596</a>
            </div>
          </div>
        </div>
      )}

      {/* BULK ORDER MODAL */}
      {showBulk && (
        <div
          className="modal-overlay"
          onClick={() => setShowBulk(false)}
        >
          <div
            className="enquiry-modal bulk-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowBulk(false)}
            >
              ×
            </button>

            <div className="modal-icon">🛍️</div>

            <span>RETAIL & WHOLESALE</span>
            <h2>Large / Bulk Order</h2>

            <p>
              For weddings, events, corporate gifting,
              functions and wholesale requirements.
            </p>

            <form onSubmit={submitBulkOrder}>

              <input
                type="text"
                placeholder="Your Name *"
                required
                value={bulkForm.name}
                onChange={(e) =>
                  setBulkForm({
                    ...bulkForm,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Company / Business Name"
                value={bulkForm.company}
                onChange={(e) =>
                  setBulkForm({
                    ...bulkForm,
                    company: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                placeholder="Mobile Number *"
                required
                value={bulkForm.phone}
                onChange={(e) =>
                  setBulkForm({
                    ...bulkForm,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="number"
                min="1"
                placeholder="Approx. Quantity *"
                required
                value={bulkForm.quantity}
                onChange={(e) =>
                  setBulkForm({
                    ...bulkForm,
                    quantity: e.target.value,
                  })
                }
              />

              <textarea
                placeholder="Tell us about your requirement..."
                rows="5"
                required
                value={bulkForm.requirement}
                onChange={(e) =>
                  setBulkForm({
                    ...bulkForm,
                    requirement: e.target.value,
                  })
                }
              ></textarea>

              <button className="submit-enquiry">
                Send Bulk Enquiry on WhatsApp →
              </button>
            </form>

            <div className="bulk-note">
              ✦ Special pricing available for large quantities
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;