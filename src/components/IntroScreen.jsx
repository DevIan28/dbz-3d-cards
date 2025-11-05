import { useEffect, useState } from "react";

export default function IntroScreen({ onEnter }) {
  const [visible, setVisible] = useState(true);
  const [aura, setAura] = useState(false);

  useEffect(() => {
    // activa el aura a los 2s, salida a los 7s
    const t1 = setTimeout(() => setAura(true), 2000);
    const t2 = setTimeout(() => {
      setVisible(false);
      onEnter?.();
    }, 8000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onEnter]);

  if (!visible) return null;

  return (
    <div className={`intro ${aura ? "aura-active" : ""}`}>
      <div className="intro-content">
        <div className="dragonball-scene">
          <div className="dragonball-orbit">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`orbit-ball orb-${i + 1}`}>
                <div className="sphere small">
                  <div className="star">★</div>
                </div>
              </div>
            ))}
            <div className="sphere main">
              <div className="star">★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
