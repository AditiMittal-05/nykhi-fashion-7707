import "./App.css";
import brandCard from "./assets/brand-card.jpg";
import instagramQr from "./assets/instagram-qr.jpg";

function App() {
  return (
    <div className="website">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <span className="rainbow">🌈</span>
          <span>NYKHI FASHION 7707</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="eyebrow">
            ✨ A BEAUTIFUL COLLECTION IS COMING ✨
          </p>

          <h1>
            Something Beautiful
            <span>Is Coming Your Way</span>
          </h1>

          <p className="hero-text">
            Discover beautiful fashion, jewellery, handcrafted
            creations and household essentials — all brought together
            under one roof.
          </p>

          <div className="hero-buttons">
            <a href="#collections" className="primary-btn">
              Explore Collections
            </a>

            <a
              href="https://wa.me/917838204842"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img
            src={brandCard}
            alt="NYKHI FASHION 7707"
          />
        </div>
      </section>


      {/* INTRO */}
      <section className="intro-section">
        <p className="section-label">NYKHI FASHION 7707</p>

        <h2>Something for Everyone</h2>

        <p>
          From elegant traditional wear to stylish accessories and
          beautiful household essentials, explore a collection
          carefully selected for you.
        </p>

        <div className="decorative-line">✦</div>
      </section>


      {/* COLLECTIONS */}
      <section className="collections" id="collections">
        <p className="section-label">OUR COLLECTIONS</p>

        <h2>Shop What You Love</h2>

        <div className="collection-grid">

          <div className="collection-card">
            <div className="card-icon">🧶</div>
            <h3>Handloom</h3>
            <p>
              Beautiful handloom products and traditional creations.
            </p>
          </div>

          <div className="collection-card">
            <div className="card-icon">👗</div>
            <h3>Stitched Suits</h3>
            <p>
              Stylish and elegant stitched suits for every occasion.
            </p>
          </div>

          <div className="collection-card">
            <div className="card-icon">✨</div>
            <h3>Unstitched Suits</h3>
            <p>
              Premium unstitched suits ready to be styled your way.
            </p>
          </div>

          <div className="collection-card">
            <div className="card-icon">👜</div>
            <h3>Bags</h3>
            <p>
              Stylish bags that add the perfect finishing touch.
            </p>
          </div>

          <div className="collection-card">
            <div className="card-icon">💎</div>
            <h3>Jewellery</h3>
            <p>
              Traditional, modern and beautiful jewellery collections.
            </p>
          </div>

          <div className="collection-card">
            <div className="card-icon">🏡</div>
            <h3>Household Items</h3>
            <p>
              Beautiful and useful products for your home.
            </p>
          </div>

        </div>
      </section>


      {/* FESTIVAL */}
      <section className="festival-section">

        <div className="festival-decoration">🪷</div>

        <p className="section-label">A SPECIAL BEGINNING</p>

        <h2>Launching This Janmashtami</h2>

        <p>
          New collections, beautiful designs and something special
          for everyone. A new shopping experience is coming soon.
        </p>

        <div className="festival-decoration">🦚</div>

      </section>


      {/* INSTAGRAM */}
      <section className="instagram-section">

        <div className="instagram-text">

          <p className="section-label">STAY CONNECTED</p>

          <h2>Follow Our Journey</h2>

          <p>
            Follow us on Instagram for new arrivals, collections,
            offers and updates.
          </p>

          <p className="instagram-handle">
            @NYKHIFASHION_7707
          </p>

          <a
            href="https://www.instagram.com/nykhifashion_7707/"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Follow on Instagram
          </a>

        </div>

        <div className="qr-card">
          <img
            src={instagramQr}
            alt="Instagram QR Code"
          />
        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <p className="section-label">GET IN TOUCH</p>

        <h2>We'd Love to Hear From You</h2>

        <p>
          Have a question about a product? Contact us directly
          through WhatsApp or email.
        </p>

        <a
          href="https://wa.me/917838204842"
          target="_blank"
          rel="noreferrer"
          className="phone-link"
        >
          📱 +91 78382 04842
        </a>

        <br />

        <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=kashi7707jmd@gmail.com&su=Product%20Enquiry%20-%20NYKHI%20FASHION%207707"
           target="_blank"
           rel="noreferrer"
           className="email-link">
           ✉️ Email Us: kashi7707jmd@gmail.com
        </a>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          🌈 NYKHI FASHION 7707
        </div>

        <p>
          Handloom • Suits • Bags • Jewellery • Household
        </p>

        <a
          href="https://www.instagram.com/nykhifashion_7707/"
          target="_blank"
          rel="noreferrer"
        >
          @NYKHIFASHION_7707
        </a>

        <div className="footer-line"></div>

        <small>
          © 2026 NYKHI FASHION 7707 • Coming Soon
        </small>

      </footer>

    </div>
  );
}

export default App;