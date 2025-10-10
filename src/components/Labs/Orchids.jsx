import React from "react";
import { NavLink } from "react-router";

export default function Orchids({ o, onDetail }) {
  const imgBox = {
    height: 220,
    overflow: "hidden",
    borderBottom: "1px solid #ddd",
  };
  const imgFit = { width: "100%", height: "100%", objectFit: "cover" };
  const nameBox = {
    textAlign: "center",
    fontWeight: 600,
    padding: "10px 8px",
    borderBottom: "1px solid #eee",
    background: "#f7f7f7",
  };
  const line = { margin: "6px 0" };
  const tagBase = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    marginRight: 8,
  };
  const tagTrue = { ...tagBase, background: "#16a34a" };
  const tagFalse = { ...tagBase, background: "#dc2626" };

  return (
    <div className="card" style={{ borderRadius: 10, overflow: "hidden" }}>
      <div style={imgBox}>
        <img src={o.image} alt={o.name} style={imgFit} />
      </div>
      <div style={nameBox}>{o.name}</div>

      <div style={{ padding: 12 }}>
        <div style={line}>Category: {o.category}</div>
        <div style={line}>Origin: {o.origin}</div>
        <div style={line}>Rating: {o.rating}</div>
        <div style={line}>Color: {o.color}</div>

        <div style={{ marginTop: 10 }}>
          <span style={o.isSpecial ? tagTrue : tagFalse}>Special</span>
          <span style={o.isNatural ? tagTrue : tagFalse}>Natural</span>
        </div>

        {/* Nút Detail*/}
        <button
          className="btn btn-outline-primary w-100 mt-3"
          onClick={() => onDetail?.(o)}
        >
          Detail
        </button>
        <NavLink to={`/orchid/${o.id}`} className="btn btn-dark w-100 mt-2">
          Open page
        </NavLink>
      </div>
    </div>
  );
}
