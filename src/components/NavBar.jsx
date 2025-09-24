import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function NavBar() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <nav
      className="navbar d-flex justify-content-between align-items-center px-3"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <ul className="left-nav d-flex mb-0">
        <li>
          <a href="#home" style={{ color: theme.color }}>
            Home
          </a>
        </li>
        <li>
          <a href="#news" style={{ color: theme.color }}>
            News
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: theme.color }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: theme.color }}>
            Contact
          </a>
        </li>
      </ul>

      <button
        className="btn btn-sm btn-outline-light switch-mode"
        onClick={toggle}
      >
        Switch Nav to {!dark ? "Dark" : "Light"} mode
      </button>
    </nav>
  );
}
