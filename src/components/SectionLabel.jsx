import React from "react";

export default function SectionLabel({ prefix = "//", label }) {
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.78rem",
        fontWeight: 500,
        color: "#3454D1",
        letterSpacing: "0.02em",
        display: "inline-block",
        marginBottom: "2rem",
      }}
    >
      {prefix} {label}
    </span>
  );
}
