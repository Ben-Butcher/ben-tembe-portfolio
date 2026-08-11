import React from "react";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRightIcon } from "./Icons";
import { SOCIAL_LINKS } from "../config/constants";

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "9rem 2rem 7rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "6rem",
          left: "1rem",
          width: "520px",
          height: "180px",
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(52,84,209,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          className="glow-line"
          style={{
            width: "48px",
            height: "2px",
            background: "linear-gradient(90deg, #3454D1, transparent)",
            marginBottom: "2.5rem",
          }}
        />

        <div className="animate-fade-in-up" style={{ opacity: 0 }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.78rem",
              color: "#3454D1",
              marginBottom: "1rem",
              letterSpacing: "0.04em",
            }}
          >
            // hello world
          </p>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 700,
              color: "#14181B",
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              marginBottom: "0.75rem",
            }}
          >
            Ben Tembe
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 500,
                color: "#3454D1",
                letterSpacing: "-0.02em",
              }}
            >
              Full Stack Developer
            </h2>
            <span
              className="cursor-blink"
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.4em",
                backgroundColor: "#3454D1",
                verticalAlign: "middle",
                opacity: 0.8,
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1rem",
              color: "#6B7280",
              maxWidth: "520px",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
            }}
          >
            Final-year CS student at TUT building purposeful software — from
            AI-powered platforms to developer tools that quietly make things
            better.
          </p>

          <div
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            {[
              {
                href: SOCIAL_LINKS.github,
                label: "GitHub",
                icon: <GithubIcon />,
              },
              {
                href: SOCIAL_LINKS.linkedin,
                label: "LinkedIn",
                icon: <LinkedinIcon />,
              },
              {
                href: `mailto:${SOCIAL_LINKS.email}`,
                label: "Email",
                icon: <MailIcon />,
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #E4E4E1",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6B7280",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3454D1";
                  e.currentTarget.style.color = "#3454D1";
                  e.currentTarget.style.backgroundColor =
                    "rgba(52,84,209,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E4E4E1";
                  e.currentTarget.style.color = "#6B7280";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {icon}
              </a>
            ))}

            <div
              style={{
                width: "1px",
                height: "24px",
                backgroundColor: "#E4E4E1",
                margin: "0 0.25rem",
              }}
            />

            <a
              href="../../public/docs/ben_tembe_resume_v2.pdf"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.72rem",
                color: "#14181B",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "0 0.5rem",
                height: "40px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3454D1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#14181B")}
            >
              Resume <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
