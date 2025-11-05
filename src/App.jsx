import { useEffect, useMemo, useRef, useState } from "react";
import "./styles/globals.css";
import { getCharacters } from "./api/dragonball";
import Grid from "./components/Grid";
import ModelViewer from "./components/ModelViewer";
import ImageViewer from "./components/ImageViewer";
import Toolbar from "./components/Toolbar";
import IntroScreen from "./components/IntroScreen";     // 👈 importar Intro
import { resolveModelFor, hasModel } from "./data/modelMap";

export default function App() {
  const [raw, setRaw] = useState([]);
  const [list, setList] = useState([]);

  const [viewer3D, setViewer3D] = useState(null);
  const [viewer2D, setViewer2D] = useState(null);

  const [search, setSearch] = useState("");
  const [only3D, setOnly3D] = useState(false);
  const [race, setRace] = useState("");

  const [muted, setMuted] = useState(false);
  const sfxRef = useRef(null);

  const [entered, setEntered] = useState(false);        // 👈 control de intro

  useEffect(() => {
    (async () => {
      const characters = await getCharacters({ page: 1, limit: 48 });
      setRaw(characters);
      setList(characters);
    })();
  }, []);

  // races únicas para el filtro
  const races = useMemo(() => {
    const set = new Set(raw.map(c => c.race).filter(Boolean));
    return Array.from(set).sort();
  }, [raw]);

  // aplica filtros
  useEffect(() => {
    let data = [...raw];
    if (search.trim()) {
      const s = search.toLowerCase();
      data = data.filter(c => c.name?.toLowerCase().includes(s));
    }
    if (race) data = data.filter(c => c.race === race);
    if (only3D) data = data.filter(c => hasModel(c.name));
    setList(data);
  }, [raw, search, race, only3D]);

  useEffect(() => {
    if (!sfxRef.current) return;
    sfxRef.current.muted = muted;
  }, [muted]);

  const onInvoke3D = (character) => {
    const src = resolveModelFor(character.name);
    if (!src) return;
    try { sfxRef.current?.play().catch(()=>{}); } catch {}
    setViewer2D(null);
    setViewer3D({ name: character.name, src });
  };

  const onView2D = (character) => {
    setViewer3D(null);
    setViewer2D({ name: character.name, image: character.image });
  };

  return (
    <>
      {!entered && <IntroScreen onEnter={() => setEntered(true)} />}  {/* 👈 Intro */}

      {entered && (
        <div className="app">
          <audio ref={sfxRef} src={`${import.meta.env.BASE_URL}sfx/invoke.mp3`} preload="auto" />

          <header style={{ marginBottom: 8 }}>
            <h1>Dragon Ball — Cartas en 3D</h1>
            <div className="subtitle">
              Busca, filtra y prueba invocar en 3D. Si no tiene modelo, verás la imagen ampliada.
            </div>
          </header>

          <Toolbar
            search={search} setSearch={setSearch}
            only3D={only3D} setOnly3D={setOnly3D}
            race={race} setRace={setRace}
            races={races}
            muted={muted} setMuted={setMuted}
          />

          <Grid
            items={list}
            onInvoke3D={onInvoke3D}
            onView2D={onView2D}
            hasModelFn={hasModel}
          />

          {viewer3D && (
            <ModelViewer
              name={viewer3D.name}
              src={viewer3D.src}
              onClose={() => setViewer3D(null)}
            />
          )}
          {viewer2D && (
            <ImageViewer
              name={viewer2D.name}
              src={viewer2D.image}
              onClose={() => setViewer2D(null)}
            />
          )}
        </div>
      )}
    </>
  );
}
