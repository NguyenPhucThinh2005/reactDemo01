import React from "react";
import { Link, NavLink } from "react-router";

export default function HomePage() {
  return (
    <div className="container">
      <Link to="/welcome">Click to welcome</Link>
    </div>
  );
}
