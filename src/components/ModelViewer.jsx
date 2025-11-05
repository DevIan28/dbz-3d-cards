import { useEffect, useRef, useState } from "react";
import "@google/model-viewer";

export default function ModelViewer({ src, name, onClose }) {
  const mvRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = mvRef.current;
    if (!el) return;
    const onLoad = () => setLoading(false);
    const onProgress = (ev) => {
      if (ev.detail?.totalProgress >= 1) setLoading(false);
    };
    el.addEventListener("load", onLoad);
    el.addEventListener("progress", onProgress);
    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("progress", onProgress);
    };
  }, [src]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="viewer-panel" onClick={onClose}>
      <div className="viewer-card" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-head">
          <strong>{name}</strong>
          <button className="viewer-close" onClick={onClose}>Cerrar (Esc)</button>
        </div>
        <div className="viewer-body" style={{ position: "relative" }}>
          {loading && (
            <div className="ki-loader">
              <div className="ki-orb" />
            </div>
          )}
          <model-viewer
            ref={mvRef}
            src={src}
            camera-controls
            auto-rotate
            rotation-per-second="20deg"
            shadow-intensity="1"
            ar
            style={{ width: "100%", height: "100%", background: "black" }}
          ></model-viewer>
        </div>
      </div>
    </div>
  );
}
