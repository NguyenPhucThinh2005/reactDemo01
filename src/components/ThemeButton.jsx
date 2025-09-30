import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <button
      onClick={toggle}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        border: "1px solid black",
        margin: "5px",
        padding: "5px 15px",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
}
