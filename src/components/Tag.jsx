import React from "react";

export default function Tag({ label }) {
  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "0.72rem",
        color: "#3454D1",
        border: "1px solid rgba(52, 84, 209, 0.3)",
        borderRadius: "3px",
        padding: "3px 9px",
        display: "inline-block",
        backgroundColor: "rgba(52, 84, 209, 0.04)",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}
