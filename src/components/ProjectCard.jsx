import React, { useState } from "react";
import Tag from "./Tag";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export default function ProjectCard({
  title,
  subtitle,
  description,
  stack,
  liveUrl,
  repoUrl,
  featured = false,
  imageBg,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(52,84,209,0.4)" : "#E4E4E1"}`,
        borderRadius: "6px",
        overflow: "hidden",
        backgroundColor: "#FAFAF8",
        transition:
          "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 32px rgba(52, 84, 209, 0.1), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          height: featured ? "220px" : "160px",
          background: imageBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(52,84,209,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(52,84,209,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: featured ? "1.8rem" : "1.4rem",
            fontWeight: 500,
            color: "rgba(52,84,209,0.5)",
            position: "relative",
            zIndex: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {title
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: featured ? "1.3rem" : "1.1rem",
            fontWeight: 600,
            color: "#14181B",
            marginBottom: "0.25rem",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.72rem",
            color: "#3454D1",
            marginBottom: "0.75rem",
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6B7280",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.25rem",
          }}
        >
          {stack.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.72rem",
                color: "#3454D1",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              <ExternalLinkIcon /> Live
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.72rem",
                color: "#6B7280",
                textDecoration: "none",
              }}
            >
              <GithubIcon /> Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
