export default function NewsPage() {
  const items = [
    { id: 'n1', title: 'HSET launches HL Compact home lift', date: '2025-09-12' },
    { id: 'n2', title: 'New energy‑efficient drive systems introduced', date: '2025-06-28' },
    { id: 'n3', title: 'HSET partners with regional developers', date: '2025-03-08' },
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-center">News & Updates</h1>
        <ul className="mt-10 max-w-3xl mx-auto space-y-6">
          {items.map(i => (
            <li key={i.id} className="border rounded-lg p-6 bg-card">
              <div className="text-sm text-muted-foreground">{new Date(i.date).toLocaleDateString()}</div>
              <div className="text-lg font-semibold mt-1">{i.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
