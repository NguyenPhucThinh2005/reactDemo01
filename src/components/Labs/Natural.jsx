import React from "react";
import { ListOfOrchids } from "../../shared/ListOfOrchids";
import Orchids from "./Orchids";

export default function Natural() {
  const items = ListOfOrchids.filter((o) => o.isNatural === true);

  return (
    <div className="main-content container">
      <h3>Natural Orchids</h3>
      <div className="row g-3">
        {items.map((o) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={o.id}>
            <Orchids o={o} onDetail={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
}
