import React from "react";
import { useParams } from "react-router";
import { data } from "../shared/ListOfPlayers.js";

export default function Detail() {
  const { id } = useParams();
  const player = data.find((p) => p.id.toString() === id);

  if (!player) {
    return (
      <h2 style={{ padding: "2rem" }}>Không tìm thấy cầu thủ với id = {id}</h2>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{player.name}</h1>
      <img
        src={player.img}
        alt={player.name}
        style={{
          width: "400px",
          borderRadius: "8px",
          margin: "1rem 0",
        }}
      />
      <h2>{player.club}</h2>
      <p style={{ color: "orange", fontWeight: "bold" }}>
        Market value: {player.marketValue}
      </p>
      <p>{player.info}</p>
    </div>
  );
}
