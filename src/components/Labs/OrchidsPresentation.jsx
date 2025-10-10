import React, { useState } from "react";
import { ListOfOrchids } from "../../shared/ListOfOrchids";
import Orchids from "./Orchids";

export default function OrchidsPresentation() {
  const [selected, setSelected] = useState(null);

  const openDetail = (o) => setSelected(o);
  const closeDetail = () => setSelected(null);

  return (
    <div className="main-content container" style={{ paddingTop: 12 }}>
      <h3 style={{ margin: 0, marginBottom: 8 }}>Orchids</h3>

      <div className="row g-3">
        {ListOfOrchids.map((o) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={o.id}>
            <Orchids o={o} onDetail={openDetail} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="overlay" onClick={closeDetail}>
          <div
            className="popup"
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(600px, 90%)" }}
          >
            <img src={selected.image} alt={selected.name} />
            <h2 style={{ margin: "10px 12px" }}>{selected.name}</h2>
            <button className="close" onClick={closeDetail}>
              &times;
            </button>

            <div className="content" style={{ padding: "0 12px 12px" }}>
              <p>{selected.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
