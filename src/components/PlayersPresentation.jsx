import React, { useState } from "react";

export default function PlayersPresentation({ dataFromContainer }) {
  const [playerDetail, setPlayerDetail] = useState(null);

  return (
    <div className="main-content container">
      <h3>Players</h3>
      <div className="row g-3">
        {dataFromContainer.map((player) => (
          <div className="col-md-4" key={player.id}>
            <div className="card">
              <div>
                <img className="img-fluid" src={player.img} alt={player.name} />
                <h6 className="card-footer text-center">{player.name}</h6>
                <p className="text-center">{player.club}</p>
                <p className="text-center">{player.nation}</p>
                <p className="text-center">
                  {player.marketValue.toLocaleString()}
                </p>
                <h6 className="card-footer p-0 text-center detail">
                  <button
                    onClick={() => setPlayerDetail(player)}
                    className="btn w-100 detail-btn"
                  >
                    Details
                  </button>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal hiển thị detail khi chọn player */}
      {playerDetail && (
        <div className="overlay">
          <div className="popup">
            <img src={playerDetail.img} alt={playerDetail.name} />
            <h2>{playerDetail.name}</h2>
            <button className="close" onClick={() => setPlayerDetail(null)}>
              &times;
            </button>
            <div className="content">
              <p>
                <b>Club:</b> {playerDetail.club}
              </p>
              <p>
                <b>Nation:</b> {playerDetail.nation}
              </p>
              <p>
                <b>Market Value:</b> {playerDetail.marketValue.toLocaleString()}
              </p>
              <p>{playerDetail.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
