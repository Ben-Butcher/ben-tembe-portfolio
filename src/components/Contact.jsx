import React from "react";
import SectionLabel from "./SectionLabel";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "6rem 2rem 8rem",
      }}
    >
      <SectionLabel prefix="$" label="contact" />

      <div style={{ maxWidth: "560px" }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#14181B",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          Let&apos;s work together.
        </h2>
        <p
          style={{
            color: "#6B7280",
            lineHeight: 1.75,
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          I&apos;m actively looking for software engineering internships.
          Whether you have a role, a project, or just want to connect — my inbox
          is open.
        </p>

        <a
          href="mailto:bentembe@email.com"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "#3454D1",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            borderBottom: "1px solid rgba(52,84,209,0.3)",
            paddingBottom: "2px",
            marginBottom: "2.5rem",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3454D1")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(52,84,209,0.3)")
          }
        >
          bentembe@email.com
        </a>

        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {[
            {
              href: "https://github.com",
              label: "GitHub",
              icon: <GithubIcon />,
            },
            {
              href: "https://linkedin.com",
              label: "LinkedIn",
              icon: <LinkedinIcon />,
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
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
                e.currentTarget.style.backgroundColor = "rgba(52,84,209,0.04)";
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
        </div>
      </div>
    </section>
  );
}
