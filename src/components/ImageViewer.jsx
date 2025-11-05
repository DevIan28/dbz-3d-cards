export default function ImageViewer({ src, name, onClose }) {
  return (
    <div className="viewer-panel" onClick={onClose}>
      <div className="viewer-card" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-head">
          <strong>{name}</strong>
          <button className="viewer-close" onClick={onClose}>Cerrar</button>
        </div>
        <div className="viewer-body" style={{ display: "grid", placeItems: "center" }}>
          <img
            src={src}
            alt={name}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </div>
  );
}
