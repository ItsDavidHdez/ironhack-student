import React from "react";
import "../styles/app.css";

export default function Button({ action, backgroundColor, title }) {
  return (
    <button
      className="button"
      onClick={action}
      style={{ backgroundColor: backgroundColor }}
    >
      {title}
    </button>
  );
}
