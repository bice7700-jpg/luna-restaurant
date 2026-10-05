import { useEffect, useState } from "react";
import "./App.css";

const dishes = [
  {
    name: "Truffle Risotto",
    description: "Wild mushrooms, parmesan and black truffle.",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Atlantic Salmon",
    description: "Roasted salmon, seasonal vegetables and citrus.",
    price: "$34",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Wagyu Steak",
    description: "Premium wagyu, roasted vegetables and signature jus.",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section className="hero" id="home">
        <nav className="navbar">
          <div className="logo">LUNA</div>

          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="reserve-btn">Reserve a Table</button>

          <button
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-icon"></span>
          </button>
        </nav>

        {menuOpen && (
          <div className="mobile-menu-panel">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#menu" onClick={closeMenu}>Menu</a>
            <a href="#story" onClick={closeMenu}>Our Story</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="#contact" className="mobile-reserve" onClick={closeMenu}>
              Reserve a Table
            </a>
          </div>
        )}

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">FINE DINING - LAGOS</p>

          <h1>
            An evening
            <br />
            worth remembering.
          </h1>

          <p className="hero-text">
            Exceptional food, intimate atmosphere and unforgettable
            moments crafted around your table.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="primary-btn">
              Explore Menu
            </a>

            <button className="secondary-btn">Reserve a Table</button>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO DISCOVER</span>
          <span className="scroll-line"></span>
        </div>
      </section>

      <section className="intro reveal" id="story">
        <div className="section-label">01  OUR STORY</div>

        <div className="intro-grid">
          <div>
            <p className="large-copy">
              Luna is where exceptional ingredients meet thoughtful
              cooking, beautiful design and unforgettable evenings.
            </p>
          </div>

          <div>
            <p className="muted-copy">
              Inspired by modern European dining and the energy of
              Lagos, Luna creates an intimate experience built around
              flavour, hospitality and attention to detail.
            </p>

            <a href="#contact" className="text-link">
              Discover our story ?
            </a>
          </div>
        </div>
      </section>

      <section className="menu-section reveal" id="menu">
        <div className="section-heading">
          <div>
            <div className="section-label">02  SIGNATURE MENU</div>
            <h2>Made to be remembered.</h2>
          </div>

          <p>
            A selection of dishes created around seasonal ingredients,
            bold flavours and elegant simplicity.
          </p>
        </div>

        <div className="dish-grid">
          {dishes.map((dish) => (
            <article className="dish-card" key={dish.name}>
              <div className="dish-image">
                <img src={dish.image} alt={dish.name} />
              </div>

              <div className="dish-info">
                <div>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </div>

                <span>{dish.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience reveal" id="experience">
        <div className="experience-image"></div>

        <div className="experience-content">
          <div className="section-label">03  THE EXPERIENCE</div>

          <h2>
            More than
            <br />
            dinner.
          </h2>

          <p>
            From the first welcome to the final course, every detail
            is designed to make your evening feel effortless.
          </p>

          <button className="primary-btn">Reserve Your Evening</button>
        </div>
      </section>

      <section className="cta reveal" id="contact">
        <div className="section-label">04  YOUR TABLE AWAITS</div>

        <h2>
          Make tonight
          <br />
          unforgettable.
        </h2>

        <button className="primary-btn">Book a Table</button>
      </section>

      <footer>
        <div className="logo">LUNA</div>
        <p>FINE DINING - LAGOS</p>
        <p>2026 Luna Restaurant</p>
      </footer>
    </main>
  );
}

export default App;


