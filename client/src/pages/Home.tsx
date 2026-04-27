/*
 * BOSCO RESTAURANT — HOME PAGE
 * Design: Dark Luxury / Cinematic Fine Dining
 * Sections: Navbar, Hero, About, Menu Highlights, Gallery, Reviews, Reservations, Contact, Footer
 * Colors: Deep espresso bg, burnished gold accents, warm cream text
 * Fonts: Playfair Display (headings), Lato (body), Cinzel (labels/accents)
 */

import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Star, ChevronDown, Instagram, Facebook, Twitter, Menu, X, ExternalLink } from "lucide-react";

// ─── Asset URLs ────────────────────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604991818/9MhZpn8FgaQZbnMXdEdVkE/bosco-hero-ADRZDjQFxdKBwYKzqrjFEX.webp";
const SEAFOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604991818/9MhZpn8FgaQZbnMXdEdVkE/bosco-seafood-Bxguc7rwKbhYsUADiZ34nr.webp";
const SUSHI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604991818/9MhZpn8FgaQZbnMXdEdVkE/bosco-sushi-kVmkE9RhXYxQZW9FypXtNX.webp";
const MEAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663604991818/9MhZpn8FgaQZbnMXdEdVkE/bosco-meat-XGLqrWvLzfzp9JNdPq7B9G.webp";
const INTERIOR_1 = "/manus-storage/bosco-interior-1_057b4358.jpg";
const FOOD_1 = "/manus-storage/bosco-food-1_6a694cac.jpg";
const FOOD_2 = "/manus-storage/bosco-food-2_bce879ac.jpg";
const INTERIOR_3 = "/manus-storage/bosco-interior-3_18cc393e.jpg";
const FOOD_4 = "/manus-storage/bosco-food-4_118e5343.jpg";
const FOOD_5 = "/manus-storage/bosco-food-5_3a6124ef.jpg";

// ─── Scroll Animation Hook ─────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Components ───────────────────────────────────────────────────────────────

function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`h-px w-full ${className}`} style={{
      background: "linear-gradient(90deg, transparent, oklch(0.76 0.16 75), transparent)"
    }} />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="cinzel text-xs tracking-widest mb-4" style={{ color: "oklch(0.76 0.16 75)", fontFamily: "'Cinzel', serif", letterSpacing: "0.2em", textTransform: "uppercase" }}>
      {children}
    </p>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "oklch(0.14 0.015 45 / 96%)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 8%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "oklch(0.76 0.16 75)",
            letterSpacing: "0.18em",
            lineHeight: 1,
          }}>BOSCO</span>
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "oklch(0.65 0.020 75)",
            textTransform: "uppercase",
            marginTop: "2px",
          }}>RESTAURANT</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.80 0.015 85)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.76 0.16 75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.80 0.015 85)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve Button */}
        <a
          href="https://seatme.al"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-gold"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "linear-gradient(135deg, oklch(0.76 0.16 75), oklch(0.68 0.14 68))",
            color: "oklch(0.14 0.015 45)",
            padding: "0.6rem 1.4rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.76 0.16 75 / 35%)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Reserve a Table
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.76 0.16 75)", background: "none", border: "none" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "oklch(0.14 0.015 45 / 98%)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid oklch(1 0 0 / 8%)",
          padding: "1.5rem",
        }}>
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.80 0.015 85)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://seatme.al"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "linear-gradient(135deg, oklch(0.76 0.16 75), oklch(0.68 0.14 68))",
                  color: "oklch(0.14 0.015 45)",
                  padding: "0.7rem 1.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Reserve a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Bosco Restaurant interior"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55)" }}
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.14 0.015 45 / 70%) 100%)"
        }} />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: "linear-gradient(to top, oklch(0.14 0.015 45), transparent)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="cinzel text-xs tracking-widest mb-6 animate-fade-in" style={{
          color: "oklch(0.76 0.16 75)",
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          Fine Dining · Tirana, Albania
        </p>

        <h1 className="animate-letter-expand" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          fontWeight: 400,
          color: "oklch(0.93 0.015 85)",
          lineHeight: 1.05,
          letterSpacing: "0.02em",
          marginBottom: "1.5rem",
          opacity: 0,
          animationDelay: "0.4s",
          animationFillMode: "forwards",
        }}>
          Bosco
        </h1>

        <p className="animate-fade-in-up" style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "oklch(0.76 0.16 75)",
          marginBottom: "2.5rem",
          opacity: 0,
          animationDelay: "0.8s",
          animationFillMode: "forwards",
        }}>
          Eat, enjoy, repeat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{
          opacity: 0,
          animationDelay: "1.1s",
          animationFillMode: "forwards",
        }}>
          <a
            href="https://seatme.al"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, oklch(0.76 0.16 75), oklch(0.68 0.14 68))",
              color: "oklch(0.14 0.015 45)",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "transparent",
              color: "oklch(0.76 0.16 75)",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              display: "inline-block",
              border: "1px solid oklch(0.76 0.16 75 / 60%)",
              transition: "all 0.3s ease",
            }}
          >
            Explore Menu
          </a>
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 animate-fade-in" style={{
          opacity: 0,
          animationDelay: "1.4s",
          animationFillMode: "forwards",
        }}>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={12} fill={i <= 4 ? "oklch(0.76 0.16 75)" : "none"} color="oklch(0.76 0.16 75)" />
            ))}
          </div>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.65 0.020 75)", letterSpacing: "0.05em" }}>
            4.7 · 216 Google Reviews
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "oklch(0.76 0.16 75 / 60%)" }}>
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "oklch(0.14 0.015 45)" }}>
      <div className="container">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s ease-out",
          }}
        >
          {/* Text */}
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.93 0.015 85)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              A Culinary Journey<br />
              <em style={{ color: "oklch(0.76 0.16 75)" }}>in the Heart of Don Bosko</em>
            </h2>
            <GoldDivider className="mb-6 max-w-xs" />
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "oklch(0.70 0.015 75)",
              marginBottom: "1.2rem",
            }}>
              Bosco Restaurant invites you to discover the culinary delights nestled in the heart of Don Bosko, Tirana. Our establishment offers a diverse and tantalizing menu featuring a wide selection of the freshest seafood, succulent cuts of meat, artisan pasta, and exquisite sushi.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "oklch(0.70 0.015 75)",
              marginBottom: "2rem",
            }}>
              Each dish is prepared with great care and quality, ensuring that every course is a pleasure for the senses. From the warm glow of our bamboo pendant lamps to the lush greenery that frames our dining room, every detail is crafted to create an unforgettable experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "4.7★", label: "Google Rating" },
                { value: "216+", label: "Reviews" },
                { value: "9.6", label: "Wolt Score" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "oklch(0.76 0.16 75)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}>{stat.value}</p>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.55 0.015 75)",
                  }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src={INTERIOR_1}
                alt="Bosco Restaurant interior"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85)" }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to bottom, transparent 60%, oklch(0.14 0.015 45 / 40%))"
              }} />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 p-5" style={{
              background: "oklch(0.18 0.012 45)",
              border: "1px solid oklch(0.76 0.16 75 / 30%)",
              maxWidth: "200px",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "oklch(0.76 0.16 75)",
                lineHeight: 1.5,
              }}>
                "A restaurant that never disappoints."
              </p>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.015 75)",
                marginTop: "0.5rem",
              }}>— TripAdvisor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Menu Highlights ──────────────────────────────────────────────────────────
const menuCategories = [
  {
    id: "sea",
    label: "From the Sea",
    description: "The freshest catch, prepared with Mediterranean mastery. Our seafood selection celebrates the bounty of the Adriatic and beyond.",
    image: SEAFOOD_IMG,
    items: ["Grilled Sea Bass", "Octopus Carpaccio", "Prawn Risotto", "Salmon Tartare", "Seafood Linguine"],
  },
  {
    id: "earth",
    label: "From the Earth",
    description: "Premium cuts and artisan preparations that honour the finest meats. Each dish is a testament to our commitment to quality.",
    image: MEAT_IMG,
    items: ["Beef Tenderloin", "Lamb Chops", "Veal Milanese", "Grilled Chicken", "Mixed Grill"],
  },
  {
    id: "sushi",
    label: "Sushi & Specialities",
    description: "Our sushi selection brings Japanese precision to the Albanian table. Fresh, elegant, and crafted with the finest ingredients.",
    image: SUSHI_IMG,
    items: ["Salmon Nigiri", "Tuna Maki", "Dragon Roll", "Prawn Tempura Roll", "Sashimi Platter"],
  },
];

function MenuSection() {
  const [activeTab, setActiveTab] = useState("sea");
  const { ref, inView } = useInView();
  const active = menuCategories.find(c => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 md:py-32" style={{ background: "oklch(0.17 0.013 45)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel>Our Cuisine</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.93 0.015 85)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              A Menu for Every Palate
            </h2>
            <GoldDivider className="max-w-xs mx-auto" />
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-0 mb-12 flex-wrap">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.75rem 1.8rem",
                  background: activeTab === cat.id
                    ? "linear-gradient(135deg, oklch(0.76 0.16 75), oklch(0.68 0.14 68))"
                    : "transparent",
                  color: activeTab === cat.id ? "oklch(0.14 0.015 45)" : "oklch(0.65 0.020 75)",
                  border: "1px solid oklch(0.76 0.16 75 / 30%)",
                  borderRight: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== cat.id) {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.76 0.16 75)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 60%)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== cat.id) {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.020 75)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 30%)";
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
            <div style={{ borderRight: "1px solid oklch(0.76 0.16 75 / 30%)" }} />
          </div>

          {/* Active Category Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                key={active.id}
                src={active.image}
                alt={active.label}
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(0.85)",
                  transition: "opacity 0.5s ease",
                }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, oklch(0.14 0.015 45 / 30%), transparent)"
              }} />
            </div>

            {/* Menu Items */}
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "oklch(0.93 0.015 85)",
                marginBottom: "0.75rem",
              }}>{active.label}</h3>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "oklch(0.65 0.015 75)",
                marginBottom: "2rem",
              }}>{active.description}</p>

              <GoldDivider className="mb-6" />

              <ul className="space-y-3">
                {active.items.map((item, i) => (
                  <li key={item} className="flex items-center justify-between py-2" style={{
                    borderBottom: i < active.items.length - 1 ? "1px solid oklch(1 0 0 / 6%)" : "none",
                  }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      color: "oklch(0.85 0.015 85)",
                    }}>{item}</span>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "oklch(0.76 0.16 75)",
                      textTransform: "uppercase",
                    }}>Seasonal</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://wolt.com/en/alb/tirana/restaurant/bosco-restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    background: "transparent",
                    color: "oklch(0.76 0.16 75)",
                    padding: "0.75rem 1.8rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    border: "1px solid oklch(0.76 0.16 75 / 50%)",
                    transition: "all 0.3s ease",
                  }}
                >
                  View Full Menu <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {["Salads", "Pasta & Risotto", "Desserts", "Soups & Sauces"].map((cat) => (
              <div key={cat} className="text-center p-5" style={{
                border: "1px solid oklch(0.76 0.16 75 / 20%)",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 50%)";
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.76 0.16 75 / 5%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 20%)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.76 0.16 75)",
                }}>{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery Section ──────────────────────────────────────────────────────────
function GallerySection() {
  const { ref, inView } = useInView();
  const galleryImages = [
    { src: INTERIOR_1, alt: "Restaurant interior", span: "col-span-2 row-span-2" },
    { src: FOOD_1, alt: "Food dish", span: "" },
    { src: FOOD_2, alt: "Pasta dish", span: "" },
    { src: INTERIOR_3, alt: "Outdoor seating", span: "" },
    { src: FOOD_4, alt: "Sushi platter", span: "" },
    { src: FOOD_5, alt: "Meat dish", span: "" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32" style={{ background: "oklch(0.14 0.015 45)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="text-center mb-14">
            <SectionLabel>Gallery</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.93 0.015 85)",
              lineHeight: 1.2,
            }}>
              Moments at Bosco
            </h2>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-3" style={{ height: "clamp(400px, 60vh, 600px)" }}>
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${img.span}`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "brightness(0.8)" }}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{
                  background: "oklch(0.76 0.16 75 / 15%)"
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Maria K.",
    rating: 5,
    text: "A restaurant that never disappoints. From fish to meat dishes, to sushi, everything is prepared with great care and quality. Each course is a pleasure for the senses.",
    source: "TripAdvisor",
  },
  {
    name: "Alessandro R.",
    rating: 5,
    text: "The ambiance is stunning — warm candlelight, beautiful greenery, and impeccable service. The seafood pasta was the best I've had in Tirana. Highly recommended.",
    source: "Google",
  },
  {
    name: "Elena M.",
    rating: 5,
    text: "Bosco is our go-to for special occasions. The sushi is surprisingly excellent for an Albanian restaurant, and the meat dishes are cooked to perfection. A true gem.",
    source: "Google",
  },
];

function ReviewsSection() {
  const { ref, inView } = useInView();
  return (
    <section id="reviews" className="py-24 md:py-32" style={{ background: "oklch(0.17 0.013 45)" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="text-center mb-14">
            <SectionLabel>What Our Guests Say</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.93 0.015 85)",
              lineHeight: 1.2,
            }}>
              Guest Experiences
            </h2>
            <GoldDivider className="max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  background: "oklch(0.14 0.015 45)",
                  border: "1px solid oklch(0.76 0.16 75 / 20%)",
                  transition: "all 0.3s ease",
                  animationDelay: `${i * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 50%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px oklch(0.76 0.16 75 / 10%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 20%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Quote mark */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4rem",
                  color: "oklch(0.76 0.16 75 / 30%)",
                  lineHeight: 0.8,
                  marginBottom: "1rem",
                }}>"</div>

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "oklch(0.70 0.015 75)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}>{review.text}</p>

                <GoldDivider className="mb-4" />

                <div className="flex items-center justify-between">
                  <div>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.95rem",
                      color: "oklch(0.85 0.015 85)",
                    }}>{review.name}</p>
                    <p style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "oklch(0.55 0.015 75)",
                    }}>{review.source}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={11} fill="oklch(0.76 0.16 75)" color="oklch(0.76 0.16 75)" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall rating */}
          <div className="text-center mt-12">
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5rem",
              fontWeight: 400,
              color: "oklch(0.76 0.16 75)",
              lineHeight: 1,
            }}>4.7</p>
            <div className="flex justify-center gap-1 my-2">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} fill={s <= 4 ? "oklch(0.76 0.16 75)" : "none"} color="oklch(0.76 0.16 75)" />
              ))}
            </div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "oklch(0.55 0.015 75)",
            }}>Based on 216 Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reservation CTA ──────────────────────────────────────────────────────────
function ReservationSection() {
  const { ref, inView } = useInView();
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={INTERIOR_3}
          alt="Bosco Restaurant ambiance"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, oklch(0.14 0.015 45 / 80%), oklch(0.14 0.015 45 / 50%))"
        }} />
      </div>

      <div className="relative z-10 container text-center">
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.9s ease-out",
          }}
        >
          <SectionLabel>Reservations</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "oklch(0.93 0.015 85)",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}>
            Reserve Your Table
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem",
            color: "oklch(0.70 0.015 75)",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}>
            Join us for an unforgettable dining experience. Book your table through our reservation partner or call us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://seatme.al"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, oklch(0.76 0.16 75), oklch(0.68 0.14 68))",
                color: "oklch(0.14 0.015 45)",
                padding: "0.9rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Book via SeatMe
            </a>
            <a
              href="tel:+355692033241"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "transparent",
                color: "oklch(0.76 0.16 75)",
                padding: "0.9rem 2.5rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid oklch(0.76 0.16 75 / 60%)",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={13} /> +355 69 203 3241
            </a>
          </div>

          {/* Hours */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { day: "Monday – Sunday", hours: "Open All Day · Closes 11:30 PM" },
              { day: "Outdoor Seating", hours: "Available" },
              { day: "Order Delivery", hours: "Via Wolt" },
            ].map((item) => (
              <div key={item.day} className="text-center">
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.76 0.16 75)",
                  marginBottom: "0.3rem",
                }}>{item.day}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  color: "oklch(0.65 0.015 75)",
                }}>{item.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const { ref, inView } = useInView();
  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "oklch(0.14 0.015 45)" }}>
      <div className="container">
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Info */}
          <div>
            <SectionLabel>Find Us</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "oklch(0.93 0.015 85)",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}>
              Visit Bosco Restaurant
            </h2>
            <GoldDivider className="mb-8 max-w-xs" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={18} style={{ color: "oklch(0.76 0.16 75)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.015 75)", marginBottom: "0.3rem" }}>Address</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.80 0.015 85)", lineHeight: 1.6 }}>
                    Rruga Don Bosko<br />Tiranë, Albania
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={18} style={{ color: "oklch(0.76 0.16 75)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.015 75)", marginBottom: "0.3rem" }}>Phone</p>
                  <a href="tel:+355692033241" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.80 0.015 85)", textDecoration: "none" }}>
                    +355 69 203 3241
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={18} style={{ color: "oklch(0.76 0.16 75)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.015 75)", marginBottom: "0.3rem" }}>Hours</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.80 0.015 85)", lineHeight: 1.6 }}>
                    Monday – Sunday<br />Open All Day · Closes 11:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.015 75)", marginBottom: "1rem" }}>Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
                  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
                  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    style={{
                      color: "oklch(0.65 0.020 75)",
                      padding: "0.6rem",
                      border: "1px solid oklch(0.76 0.16 75 / 25%)",
                      display: "inline-flex",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.76 0.16 75)";
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 60%)";
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.76 0.16 75 / 8%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.65 0.020 75)";
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.76 0.16 75 / 25%)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d19.8187!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310c5b0a0001%3A0x0!2sBosco+Restaurant!5e0!3m2!1sen!2sal!4v1"
              width="100%"
              height="100%"
              style={{
                border: "none",
                filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)",
                minHeight: "400px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosco Restaurant Location"
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              border: "1px solid oklch(0.76 0.16 75 / 25%)"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "oklch(0.11 0.012 45)", borderTop: "1px solid oklch(0.76 0.16 75 / 15%)" }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "oklch(0.76 0.16 75)",
              letterSpacing: "0.18em",
              marginBottom: "0.3rem",
            }}>BOSCO</p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "oklch(0.55 0.015 75)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>RESTAURANT · TIRANA</p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "oklch(0.55 0.015 75)",
            }}>Eat, enjoy, repeat.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.76 0.16 75)", marginBottom: "1rem" }}>Quick Links</p>
            <ul className="space-y-2">
              {["About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.55 0.015 75)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.76 0.16 75)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.015 75)")}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.76 0.16 75)", marginBottom: "1rem" }}>Contact</p>
            <div className="space-y-2">
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.015 75)" }}>Rruga Don Bosko, Tiranë</p>
              <a href="tel:+355692033241" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.015 75)", textDecoration: "none", display: "block" }}>+355 69 203 3241</a>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.015 75)" }}>Open Daily · Closes 11:30 PM</p>
            </div>
          </div>
        </div>

        <GoldDivider className="mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.40 0.010 75)" }}>
            © {new Date().getFullYear()} Bosco Restaurant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://seatme.al" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.76 0.16 75)", textDecoration: "none" }}>
              Reserve a Table
            </a>
            <span style={{ color: "oklch(0.40 0.010 75)" }}>·</span>
            <a href="https://wolt.com/en/alb/tirana/restaurant/bosco-restaurant" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.76 0.16 75)", textDecoration: "none" }}>
              Order Delivery
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.14 0.015 45)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
