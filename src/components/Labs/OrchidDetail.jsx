import React, { useState } from "react";
import { useParams, NavLink } from "react-router";
import { ListOfOrchids } from "../../shared/ListOfOrchids";
import { Modal, Button } from "react-bootstrap";

export default function OrchidDetail() {
  const { id } = useParams();
  const o = ListOfOrchids.find((x) => x.id === id);
  const [open, setOpen] = useState(false);

  if (!o) return <div className="container py-4">Orchid not found.</div>;

  const box = { maxWidth: 800, margin: "0 auto" };
  const imgBox = { height: 360, overflow: "hidden", borderRadius: 8 };
  const imgFit = { width: "100%", height: "100%", objectFit: "cover" };

  return (
    <div className="container py-4" style={box}>
      <div className="card p-3">
        <div style={imgBox}>
          <img src={o.image} alt={o.name} style={imgFit} />
        </div>
        <h3 className="mt-3">{o.name}</h3>
        <p>
          <b>Category:</b> {o.category}
        </p>
        <p>
          <b>Origin:</b> {o.origin}
        </p>
        <p>
          <b>Rating:</b> {o.rating}
        </p>
        <p>
          <b>Color:</b> {o.color}
        </p>
        <p>{o.info}</p>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-secondary" onClick={() => history.back()}>
            Back
          </button>
          {o.clip && (
            <Button variant="primary" onClick={() => setOpen(true)}>
              Watch clip
            </Button>
          )}
        </div>
      </div>

      <Modal show={open} onHide={() => setOpen(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{o.name} — Clip</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ aspectRatio: "16 / 9" }}>
          <iframe
            title="orchid-clip"
            width="100%"
            height="100%"
            src={o.clip}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
