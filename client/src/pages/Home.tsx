/*
 * BOSCO RESTAURANT — HOME PAGE (ALBANIAN)
 * Design: Bright Elegant Fine Dining
 * Sections: Navbar, Hero, About, Menu Highlights, Gallery, Reviews, Reservations, Contact, Footer
 * Colors: Cream bg, deep burgundy accents, warm brown text
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

function BurgundyDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`h-0.5 w-full ${className}`} style={{
      background: "linear-gradient(90deg, transparent, oklch(0.52 0.18 15), transparent)"
    }} />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="cinzel text-xs tracking-widest mb-4" style={{ color: "oklch(0.52 0.18 15)", fontFamily: "'Cinzel', serif", letterSpacing: "0.2em", textTransform: "uppercase" }}>
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
    { label: "Rreth Nesh", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Galeria", href: "#gallery" },
    { label: "Komente", href: "#reviews" },
    { label: "Kontakti", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "oklch(0.97 0.01 90 / 96%)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.52 0.18 15 / 15%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "oklch(0.52 0.18 15)",
            letterSpacing: "0.18em",
            lineHeight: 1,
          }}>BOSCO</span>
          <span style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "oklch(0.55 0.06 40)",
            textTransform: "uppercase",
            marginTop: "2px",
          }}>RESTORANT</span>
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
                  color: "oklch(0.35 0.08 40)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.52 0.18 15)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.35 0.08 40)")}
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
          className="hidden md:block btn-burgundy"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "linear-gradient(135deg, oklch(0.52 0.18 15), oklch(0.45 0.16 12))",
            color: "oklch(0.97 0.01 90)",
            padding: "0.6rem 1.4rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.52 0.18 15 / 30%)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Rezervo Tavolë
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.52 0.18 15)", background: "none", border: "none" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "oklch(0.97 0.01 90 / 98%)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid oklch(0.52 0.18 15 / 15%)",
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
                    color: "oklch(0.35 0.08 40)",
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
                  background: "linear-gradient(135deg, oklch(0.52 0.18 15), oklch(0.45 0.16 12))",
                  color: "oklch(0.97 0.01 90)",
                  padding: "0.7rem 1.5rem",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Rezervo Tavolë
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
          style={{ filter: "brightness(0.75) contrast(1.1)" }}
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.97 0.01 90 / 50%) 100%)"
        }} />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: "linear-gradient(to top, oklch(0.97 0.01 90), transparent)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="cinzel text-xs tracking-widest mb-6 animate-fade-in" style={{
          color: "oklch(0.52 0.18 15)",
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          animationDelay: "0.2s",
          opacity: 0,
          animationFillMode: "forwards",
        }}>
          Restorant i Imët · Tiranë, Shqipëri
        </p>

        <h1 className="animate-letter-expand" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          fontWeight: 400,
          color: "oklch(0.35 0.08 40)",
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
          color: "oklch(0.52 0.18 15)",
          marginBottom: "2.5rem",
          opacity: 0,
          animationDelay: "0.8s",
          animationFillMode: "forwards",
        }}>
          Hani, shijoni, përsëritni.
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
              background: "linear-gradient(135deg, oklch(0.52 0.18 15), oklch(0.45 0.16 12))",
              color: "oklch(0.97 0.01 90)",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            Rezervo Tavolë
          </a>
          <a
            href="#menu"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "transparent",
              color: "oklch(0.52 0.18 15)",
              padding: "0.85rem 2.2rem",
              textDecoration: "none",
              display: "inline-block",
              border: "2px solid oklch(0.52 0.18 15)",
              transition: "all 0.3s ease",
            }}
          >
            Shfletoni Menynë
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
              <Star key={i} size={12} fill={i <= 4 ? "oklch(0.52 0.18 15)" : "none"} color="oklch(0.52 0.18 15)" />
            ))}
          </div>
          <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.06 40)", letterSpacing: "0.05em" }}>
            4.7 · 216 Komente në Google
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "oklch(0.52 0.18 15 / 70%)" }}>
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
    <section id="about" className="py-24 md:py-32" style={{ background: "oklch(0.97 0.01 90)" }}>
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
            <SectionLabel>Historia Jonë</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.35 0.08 40)",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              Një Udhëtim<br />
              <em style={{ color: "oklch(0.52 0.18 15)" }}>në Zemrën e Don Bosko</em>
            </h2>
            <BurgundyDivider className="mb-6 max-w-xs" />
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "oklch(0.35 0.08 40)",
              marginBottom: "1.2rem",
            }}>
              Restorant Bosco ju fton të zbuloni kënaqësitë kulinare të vendosura në zemrën e Don Bosko, Tiranë. Vendimi ynë ofron një menu të larmishme dhe tërheqëse me një përzgjedhje të gjerë të peshkut më të freskët, mishit të shquar, paste artizanale dhe sushi ekzotik.
            </p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "oklch(0.35 0.08 40)",
              marginBottom: "2rem",
            }}>
              Çdo pjatë përgatitet me kujdes të madh dhe cilësi, duke siguruar që çdo kurs të jetë një kënaqësi për shqisat. Nga ndriçimi i ngrohtë i llambave të bambuut deri në jeshilinë e bollshme që rrethon sallën tonë të ngrënies, çdo detaj është hartuar për të krijuar një përvojë të paharrueshme.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "4.7★", label: "Vlerësim Google" },
                { value: "216+", label: "Komente" },
                { value: "9.6", label: "Rezultat Wolt" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 600,
                    color: "oklch(0.52 0.18 15)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}>{stat.value}</p>
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.55 0.06 40)",
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
                style={{ filter: "brightness(0.95)" }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to bottom, transparent 60%, oklch(0.97 0.01 90 / 30%))"
              }} />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 p-5" style={{
              background: "oklch(1 0 0)",
              border: "2px solid oklch(0.52 0.18 15 / 30%)",
              maxWidth: "200px",
              boxShadow: "0 8px 32px oklch(0 0 0 / 12%)",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "0.9rem",
                color: "oklch(0.52 0.18 15)",
                lineHeight: 1.5,
              }}>
                "Një restorant që nuk zhgënjen kurrë."
              </p>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.55rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.06 40)",
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
    label: "Nga Deti",
    description: "Peshku më i freskët, i përpunuar me mjeshtëri mesdhetare. Përzgjedhja jonë e peshkut gëzon bollëkun e Adriatikut dhe përtej.",
    image: SEAFOOD_IMG,
    items: ["Branzin i Pjekur", "Kalamarit Carpaccio", "Risoto me Karkaleca", "Tartare Salmoni", "Linguine me Fruta Deti"],
  },
  {
    id: "earth",
    label: "Nga Toka",
    description: "Prerjet e para dhe përgatitjet artizanale që nderojnë mishin më të mirë. Çdo pjatë është dëshmi e përkushtimit tonë ndaj cilësisë.",
    image: MEAT_IMG,
    items: ["Tenderloin Viçi", "Costoleta Qingjali", "Vici Milanese", "Pula e Pjekur", "Grile i Përzier"],
  },
  {
    id: "sushi",
    label: "Sushi & Specialitete",
    description: "Përzgjedhja jonë e sushi sjell precizionin japonez në tryezën shqiptare. E freskët, elegante dhe e përpunuar me përbërësit më të mirë.",
    image: SUSHI_IMG,
    items: ["Nigiri Salmoni", "Maki Tunë", "Dragon Roll", "Rrotull Karkalecash", "Pjatë Sashimi"],
  },
];

function MenuSection() {
  const [activeTab, setActiveTab] = useState("sea");
  const { ref, inView } = useInView();
  const active = menuCategories.find(c => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 md:py-32" style={{ background: "oklch(0.99 0.005 90)" }}>
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
            <SectionLabel>Kuizina Jonë</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.35 0.08 40)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}>
              Një Menu për Çdo Shije
            </h2>
            <BurgundyDivider className="max-w-xs mx-auto" />
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
                    ? "linear-gradient(135deg, oklch(0.52 0.18 15), oklch(0.45 0.16 12))"
                    : "transparent",
                  color: activeTab === cat.id ? "oklch(0.97 0.01 90)" : "oklch(0.55 0.06 40)",
                  border: "2px solid oklch(0.52 0.18 15 / 40%)",
                  borderRight: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== cat.id) {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.18 15)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== cat.id) {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.06 40)";
                    (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 40%)";
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
            <div style={{ borderRight: "2px solid oklch(0.52 0.18 15 / 40%)" }} />
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
                  filter: "brightness(0.95)",
                  transition: "opacity 0.5s ease",
                }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, oklch(0.97 0.01 90 / 20%), transparent)"
              }} />
            </div>

            {/* Menu Items */}
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "oklch(0.35 0.08 40)",
                marginBottom: "0.75rem",
              }}>{active.label}</h3>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "oklch(0.35 0.08 40)",
                marginBottom: "2rem",
              }}>{active.description}</p>

              <BurgundyDivider className="mb-6" />

              <ul className="space-y-3">
                {active.items.map((item, i) => (
                  <li key={item} className="flex items-center justify-between py-2" style={{
                    borderBottom: i < active.items.length - 1 ? "1px solid oklch(0.52 0.18 15 / 12%)" : "none",
                  }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      color: "oklch(0.35 0.08 40)",
                    }}>{item}</span>
                    <span style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "oklch(0.52 0.18 15)",
                      textTransform: "uppercase",
                    }}>Sezonale</span>
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
                    color: "oklch(0.52 0.18 15)",
                    padding: "0.75rem 1.8rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    border: "2px solid oklch(0.52 0.18 15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Shfletoni Menynë Të Plotë <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Menu Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {["Sallatat", "Pasta & Risoto", "Ëmbëlsira", "Supat & Sosje"].map((cat) => (
              <div key={cat} className="text-center p-5" style={{
                border: "2px solid oklch(0.52 0.18 15 / 20%)",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 60%)";
                  (e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.18 15 / 5%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 20%)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.52 0.18 15)",
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
    <section id="gallery" className="py-24 md:py-32" style={{ background: "oklch(0.97 0.01 90)" }}>
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
            <SectionLabel>Galeria</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.35 0.08 40)",
              lineHeight: 1.2,
            }}>
              Momente në Bosco
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
                  style={{ filter: "brightness(0.9)" }}
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{
                  background: "oklch(0.52 0.18 15 / 12%)"
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
    text: "Një restorant që nuk zhgënjen kurrë. Nga peshku në pjata mishi, deri te sushi, gjithçka përgatitet me kujdes të madh dhe cilësi. Çdo kurs është një kënaqësi për shqisat.",
    source: "TripAdvisor",
  },
  {
    name: "Alessandro R.",
    rating: 5,
    text: "Ambienti është mahnitës — drita e ngrohtë e qirinjve, jeshila e bukur, dhe shërbim i përsosur. Pasta me fruta deti ishte më e mira që kam ngrënë në Tiranë. Shumë e rekomanduar.",
    source: "Google",
  },
  {
    name: "Elena M.",
    rating: 5,
    text: "Bosco është zgjedhja jonë për rastet e veçanta. Sushi është befasisht i shkëlqyer për një restorant shqiptar, dhe pjata mishi janë të gatuar në përfeksion. Një gjem i vërtetë.",
    source: "Google",
  },
];

function ReviewsSection() {
  const { ref, inView } = useInView();
  return (
    <section id="reviews" className="py-24 md:py-32" style={{ background: "oklch(0.99 0.005 90)" }}>
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
            <SectionLabel>Çfarë Thonë Mysafirët Tanë</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "oklch(0.35 0.08 40)",
              lineHeight: 1.2,
            }}>
              Përvojat e Mysafirëve
            </h2>
            <BurgundyDivider className="max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-8 relative"
                style={{
                  background: "oklch(1 0 0)",
                  border: "2px solid oklch(0.52 0.18 15 / 20%)",
                  transition: "all 0.3s ease",
                  animationDelay: `${i * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 50%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px oklch(0.52 0.18 15 / 12%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 20%)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Quote mark */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4rem",
                  color: "oklch(0.52 0.18 15 / 25%)",
                  lineHeight: 0.8,
                  marginBottom: "1rem",
                }}>"</div>

                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "oklch(0.35 0.08 40)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}>{review.text}</p>

                <BurgundyDivider className="mb-4" />

                <div className="flex items-center justify-between">
                  <div>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.95rem",
                      color: "oklch(0.35 0.08 40)",
                    }}>{review.name}</p>
                    <p style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "oklch(0.55 0.06 40)",
                    }}>{review.source}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={11} fill="oklch(0.52 0.18 15)" color="oklch(0.52 0.18 15)" />
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
              color: "oklch(0.52 0.18 15)",
              lineHeight: 1,
            }}>4.7</p>
            <div className="flex justify-center gap-1 my-2">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} fill={s <= 4 ? "oklch(0.52 0.18 15)" : "none"} color="oklch(0.52 0.18 15)" />
              ))}
            </div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "oklch(0.55 0.06 40)",
            }}>Bazuar në 216 Komente Google</p>
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
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, oklch(0.97 0.01 90 / 70%), oklch(0.97 0.01 90 / 40%))"
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
          <SectionLabel>Rezervime</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "oklch(0.35 0.08 40)",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}>
            Rezervo Tavolën Tuaj
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "1rem",
            color: "oklch(0.35 0.08 40)",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.8,
          }}>
            Bashkohuni me ne për një përvojë ngrënie të paharrueshme. Rezervoni tavolën tuaj përmes partnerit tonë të rezervimeve ose na telefononi drejtpërdrejt.
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
                background: "linear-gradient(135deg, oklch(0.52 0.18 15), oklch(0.45 0.16 12))",
                color: "oklch(0.97 0.01 90)",
                padding: "0.9rem 2.5rem",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
            >
              Rezervo përmes SeatMe
            </a>
            <a
              href="tel:+355692033241"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "transparent",
                color: "oklch(0.52 0.18 15)",
                padding: "0.9rem 2.5rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "2px solid oklch(0.52 0.18 15)",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={13} /> +355 69 203 3241
            </a>
          </div>

          {/* Hours */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { day: "E Hënë – E Diel", hours: "Hapje Gjithë Ditën · Mbyllet 23:30" },
              { day: "Ulëse në Jashtë", hours: "Në Dispozicion" },
              { day: "Porosit Ushqim", hours: "Përmes Wolt" },
            ].map((item) => (
              <div key={item.day} className="text-center">
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.52 0.18 15)",
                  marginBottom: "0.3rem",
                }}>{item.day}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.85rem",
                  color: "oklch(0.35 0.08 40)",
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
    <section id="contact" className="py-24 md:py-32" style={{ background: "oklch(0.97 0.01 90)" }}>
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
            <SectionLabel>Na Gjeni</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 400,
              color: "oklch(0.35 0.08 40)",
              lineHeight: 1.2,
              marginBottom: "2rem",
            }}>
              Vizitoni Bosco
            </h2>
            <BurgundyDivider className="mb-8 max-w-xs" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={18} style={{ color: "oklch(0.52 0.18 15)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.06 40)", marginBottom: "0.3rem" }}>Adresa</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.08 40)", lineHeight: 1.6 }}>
                    Rruga Don Bosko<br />Tiranë, Shqipëri
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={18} style={{ color: "oklch(0.52 0.18 15)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.06 40)", marginBottom: "0.3rem" }}>Telefon</p>
                  <a href="tel:+355692033241" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.08 40)", textDecoration: "none" }}>
                    +355 69 203 3241
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={18} style={{ color: "oklch(0.52 0.18 15)", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.06 40)", marginBottom: "0.3rem" }}>Orari</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", color: "oklch(0.35 0.08 40)", lineHeight: 1.6 }}>
                    E Hënë – E Diel<br />Hapje Gjithë Ditën · Mbyllet 23:30
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.55 0.06 40)", marginBottom: "1rem" }}>Ndiqni Ne</p>
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
                      color: "oklch(0.55 0.06 40)",
                      padding: "0.6rem",
                      border: "2px solid oklch(0.52 0.18 15 / 25%)",
                      display: "inline-flex",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.52 0.18 15)";
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 60%)";
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.52 0.18 15 / 8%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "oklch(0.55 0.06 40)";
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.52 0.18 15 / 25%)";
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
                minHeight: "400px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bosco Restaurant Location"
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              border: "2px solid oklch(0.52 0.18 15 / 25%)"
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
    <footer style={{ background: "oklch(0.92 0.01 85)", borderTop: "2px solid oklch(0.52 0.18 15 / 15%)" }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "oklch(0.52 0.18 15)",
              letterSpacing: "0.18em",
              marginBottom: "0.3rem",
            }}>BOSCO</p>
            <p style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              color: "oklch(0.55 0.06 40)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>RESTORANT · TIRANË</p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "oklch(0.55 0.06 40)",
            }}>Hani, shijoni, përsëritni.</p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.52 0.18 15)", marginBottom: "1rem" }}>Lidhje të Shpejta</p>
            <ul className="space-y-2">
              {["Rreth Nesh", "Menu", "Galeria", "Komente", "Kontakti"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.55 0.06 40)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.52 0.18 15)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.55 0.06 40)")}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "oklch(0.52 0.18 15)", marginBottom: "1rem" }}>Kontakti</p>
            <div className="space-y-2">
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.06 40)" }}>Rruga Don Bosko, Tiranë</p>
              <a href="tel:+355692033241" style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.06 40)", textDecoration: "none", display: "block" }}>+355 69 203 3241</a>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.85rem", color: "oklch(0.55 0.06 40)" }}>Hapje Çdo Ditë · Mbyllet 23:30</p>
            </div>
          </div>
        </div>

        <BurgundyDivider className="mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.06 40)" }}>
            © {new Date().getFullYear()} Bosco Restaurant. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="flex gap-4">
            <a href="https://seatme.al" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.52 0.18 15)", textDecoration: "none" }}>
              Rezervo Tavolë
            </a>
            <span style={{ color: "oklch(0.55 0.06 40)" }}>·</span>
            <a href="https://wolt.com/en/alb/tirana/restaurant/bosco-restaurant" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.52 0.18 15)", textDecoration: "none" }}>
              Porosit Ushqim
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
    <div className="min-h-screen" style={{ background: "oklch(0.97 0.01 90)" }}>
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
