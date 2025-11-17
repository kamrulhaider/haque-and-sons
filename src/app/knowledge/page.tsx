export default function KnowledgePage() {
  const faqs = [
    { q: 'How do I choose the right elevator capacity?', a: 'Consider peak traffic, building type, and available shaft space. Our team can size the car and drive accordingly.' },
    { q: 'What is the typical delivery time?', a: 'Standard passenger models ship in 6–10 weeks; custom finishes or heavy‑duty specs may require more time.' },
    { q: 'Do you provide installation and maintenance?', a: 'Yes, we provide complete installation, commissioning, and proactive maintenance plans.' },
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-center">Knowledge Base</h1>
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          {faqs.map((f, idx) => (
            <div key={idx} className="border rounded-lg p-6 bg-card">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-muted-foreground">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
