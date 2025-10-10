import React, { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "./ThemeContext";

export default function NavBar() {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: "#6a0dad", // nền tím cố định
        padding: "10px 20px",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <ul className="navbar-nav flex-row gap-4 mb-0">
          <li>
            <NavLink
              to="/homePage"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "black" : dark ? "white" : "white",
                backgroundColor: isActive ? "#f8b400" : "transparent",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
              })}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "black" : dark ? "white" : "white",
                backgroundColor: isActive ? "#f8b400" : "transparent",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
              })}
            >
              Orchids
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "black" : dark ? "white" : "white",
                backgroundColor: isActive ? "#f8b400" : "transparent",
                padding: "6px 12px",
                borderRadius: "6px",
                textDecoration: "none",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          onClick={toggle}
          style={{
            backgroundColor: dark ? "white" : "black",
            color: dark ? "black" : "white",
            border: "none",
            borderRadius: "6px",
            padding: "6px 12px",
          }}
        >
          Switch Nav to {dark ? "Light" : "Dark"} mode
        </button>
      </div>
    </nav>
  );
}
