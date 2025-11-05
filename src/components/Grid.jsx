import Card from "./Card";

function SkeletonCard() {
  return (
    <article className="card skel">
      <div className="thumb skeleton" />
      <div className="meta">
        <div style={{width:"70%"}} className="line skeleton" />
      </div>
      <div className="line skeleton" style={{width:"50%"}} />
      <button className="btn" disabled>Cargando…</button>
    </article>
  );
}

export default function Grid({ items, onInvoke3D, onView2D, hasModelFn }) {
  if (!items || !items.length) {
    return (
      <section className="grid">
        {Array.from({length:8}).map((_,i)=><SkeletonCard key={i} />)}
      </section>
    );
  }
  return (
    <section className="grid">
      {items.map((c) => (
        <Card
          key={c.id ?? c._id ?? c.name}
          character={c}
          onInvoke3D={onInvoke3D}
          onView2D={onView2D}
          has3D={hasModelFn(c.name)}
        />
      ))}
    </section>
  );
}
