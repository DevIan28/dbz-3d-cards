import { useEffect, useState } from "react";

export default function InvokeAura({ name }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="invoke-aura">
      <div className="invoke-ring" />
      <div className="invoke-name">{name}</div>
    </div>
  );
}
