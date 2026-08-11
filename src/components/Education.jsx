import React from "react";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}
    >
      <SectionLabel label="education" />

      <div style={{ maxWidth: "680px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "0 2rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                border: "1.5px solid #3454D1",
                borderRadius: "50%",
                backgroundColor: "#FAFAF8",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                width: "1px",
                flexGrow: 1,
                minHeight: "60px",
                background: "linear-gradient(to bottom, #3454D1, transparent)",
                marginTop: "6px",
                opacity: 0.3,
              }}
            />
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#14181B",
                  letterSpacing: "-0.02em",
                }}
              >
                Bachelor of Technology — Computer Science
              </h3>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#3454D1",
                  border: "1px solid rgba(52,84,209,0.25)",
                  borderRadius: "3px",
                  padding: "2px 8px",
                  backgroundColor: "rgba(52,84,209,0.04)",
                  whiteSpace: "nowrap",
                }}
              >
                Final Year · 2026
              </span>
            </div>

            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "0.95rem",
                color: "#6B7280",
                marginBottom: "0.35rem",
              }}
            >
              Tshwane University of Technology
            </p>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.72rem",
                color: "#6B7280",
                opacity: 0.7,
              }}
            >
              Pretoria, South Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
