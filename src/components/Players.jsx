import React from "react";
import { data } from "../shared/ListOfPlayers";
import { Link } from "react-router";

export default function Players() {
  return (
    <div className="main-content container">
      <div className="row g-3">
        {data.map((player) => (
          <div className="col-md-4" key={player.id}>
            <div className="card">
              <div>
                <img className="img-fluid" src={player.img} alt="" />
                <h6 className="card-footer text-center">{player.name}</h6>
                <p className="text-center">{player.club}</p>
                <h6 className="card-footer p-0 text-center detail">
                  <Link
                    to={`detail/${player.id}`}
                    className="btn  w-100 detail-btn"
                  >
                    <p>
                      <button>Detail</button>
                    </p>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
