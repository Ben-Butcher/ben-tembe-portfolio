import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E4E4E1",
        padding: "1.5rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.7rem",
          color: "#6B7280",
        }}
      >
        © 2025 Ben Tembe
      </span>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.7rem",
          color: "#6B7280",
          opacity: 0.7,
        }}
      >
        Built with React + Vite
      </span>
    </footer>
  );
}
