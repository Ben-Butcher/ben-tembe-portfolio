import React from "react";

export default function Nav({
  navLinks,
  scrolled,
  activeSection,
  setActiveSection,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E4E4E1" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#14181B",
            textDecoration: "none",
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: "30px",
              height: "30px",
              border: "1.5px solid #3454D1",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.78rem",
              color: "#3454D1",
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 500,
            }}
          >
            BT
          </span>
        </a>

        <nav
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.78rem",
                color:
                  activeSection === link.href.slice(1) ? "#3454D1" : "#6B7280",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3454D1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  activeSection === link.href.slice(1) ? "#3454D1" : "#6B7280")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:bentembe@email.com"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.72rem",
              color: "#3454D1",
              border: "1px solid rgba(52,84,209,0.35)",
              borderRadius: "3px",
              padding: "6px 14px",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(52,84,209,0.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Hire me
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            color: "#14181B",
            display: "none",
          }}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            backgroundColor: "#FAFAF8",
            borderTop: "1px solid #E4E4E1",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.85rem",
                color: "#14181B",
                textDecoration: "none",
                padding: "0.6rem 0",
                borderBottom: "1px solid #E4E4E1",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
