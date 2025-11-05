export default function Toolbar({
  search, setSearch,
  only3D, setOnly3D,
  race, setRace,
  races,
  muted, setMuted
}) {
  return (
    <nav className="toolbar glassy">
      {/* Logo / título pequeño */}
      <div className="toolbar-logo" title="Dragon Ball 3D Cards">
        <span className="db-badge">DB</span>
        <span className="toolbar-title">Personajes</span>
      </div>

      {/* Buscador */}
      <div className="toolbar-search">
        {/* lupa (SVG inline) */}
        <svg className="icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
        </svg>
        <input
          className="input search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar personaje…"
          aria-label="Buscar personaje"
        />
      </div>

      {/* Select de raza */}
      <select
        className="select"
        value={race}
        onChange={(e) => setRace(e.target.value)}
        aria-label="Filtrar por raza"
      >
        <option value="">Todas las razas</option>
        {races.map(r => <option key={r} value={r}>{r}</option>)}
      </select>

      {/* Botones redondos a la derecha */}
      <div className="toolbar-actions">

        {/* Solo 3D (cubo SVG) */}
        <button
          className={`round-btn ${only3D ? "active" : ""}`}
          onClick={() => setOnly3D(v => !v)}
          title="Mostrar solo personajes con modelo 3D"
          aria-pressed={only3D}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M12 2 3 7l9 5 9-5-9-5Z" fill="currentColor" opacity=".85"/>
            <path d="M3 7v10l9 5V12L3 7Zm18 0-9 5v10l9-5V7Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Sonido (speaker / mute) */}
        <button
          className={`round-btn ${muted ? "" : "active"}`}
          onClick={() => setMuted(m => !m)}
          title={muted ? "Activar sonido" : "Silenciar sonido"}
          aria-pressed={!muted}
        >
          {muted ? (
            // Speaker off
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M3 10v4h4l5 4V6L7 10H3Z" fill="currentColor"/>
              <path d="m17 9 5 5m0-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            // Speaker on
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M3 10v4h4l5 4V6L7 10H3Z" fill="currentColor"/>
              <path d="M16 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
