import React from "react";
export default function PSGPlayersPresentation({ psgFromContainer }) {
  return (
    <div className="main-content container">
      <h3>PSG Players</h3>
      <div className="row g-3">
        {psgFromContainer.map((player) => (
          <div className="col-md-4" key={player.id}>
            <div className="card">
              <div>
                <img className="img-fluid" src={player.img} alt="" />
                <h6 className="card-footer text-center">{player.name}</h6>
                <p className="text-center">{player.club}</p>
                <p className="text-center">{player.nation}</p>
                <p className="text-center">
                  {player.marketValue.toLocaleString()}
                </p>
                <h6 className="card-footer p-0 text-center detail">
                  <button className="btn  w-100 detail-btn">Details</button>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
