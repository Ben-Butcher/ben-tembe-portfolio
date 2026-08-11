import React from "react";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2rem" }}
    >
      <SectionLabel label="projects" />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            color: "#14181B",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
          }}
        >
          Selected Work
        </h2>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.72rem",
            color: "#6B7280",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3454D1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
        >
          View all on GitHub{" "}
          <span
            style={{ display: "inline-block", transform: "translateY(-1px)" }}
          >
            ↗
          </span>
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
