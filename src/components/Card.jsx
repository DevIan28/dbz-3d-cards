import { useState } from "react";

export default function Card({ character, onInvoke3D, onView2D, has3D }) {
  const [selected, setSelected] = useState(false);
  const status = character?.race || "Z-Fighter";

  const toggle = () => setSelected(!selected);

  return (
    <article
      className={`card ${selected ? "active" : ""}`}
      onClick={toggle}
    >
      <div className="thumb">
        <img src={character?.image} alt={character?.name} loading="lazy" />
      </div>

      <div className="meta">
        <div>
          <div style={{ fontWeight: 700 }}>{character?.name}</div>
          <div className="badge">{status}</div>
        </div>
      </div>

      {selected && (
        <div className="details">
          <p><b>Género:</b> {character.gender || "Desconocido"}</p>
          <p><b>Planeta:</b> {character.originPlanet?.name || "Desconocido"}</p>
          <p><b>Afiliación:</b> {character.affiliation || "N/A"}</p>
          <p><b>Ki:</b> {character.ki || "No especificado"}</p>
        </div>
      )}

      {has3D ? (
        <button className="btn" onClick={(e) => { e.stopPropagation(); onInvoke3D(character); }}>
          ⚡ Invocar en 3D
        </button>
      ) : (
        <button className="btn btn-blue" onClick={(e) => { e.stopPropagation(); onView2D(character); }}>
          🖼️ Ver imagen
        </button>
      )}
    </article>
  );
}
