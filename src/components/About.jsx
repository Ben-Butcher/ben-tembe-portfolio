import React from "react";
import SectionLabel from "./SectionLabel";
import Tag from "./Tag";

export default function About({ skills }) {
  return (
    <section
      id="about"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}
    >
      <SectionLabel label="about" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "2rem",
              fontWeight: 600,
              color: "#14181B",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Building things that matter, one commit at a time.
          </h2>
          <p
            style={{
              color: "#6B7280",
              lineHeight: 1.75,
              marginBottom: "1rem",
              fontSize: "0.95rem",
            }}
          >
            I&apos;m a final-year Computer Science student at Tshwane University
            of Technology with a passion for building full-stack applications
            that are fast, accessible, and genuinely useful. I care about clean
            code and thoughtful UX in equal measure.
          </p>
          <p
            style={{ color: "#6B7280", lineHeight: 1.75, fontSize: "0.95rem" }}
          >
            Currently seeking software engineering internship opportunities
            where I can contribute meaningful work, learn from experienced
            engineers, and grow into a well-rounded developer.
          </p>
        </div>

        <div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#6B7280",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {items.map((skill) => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
