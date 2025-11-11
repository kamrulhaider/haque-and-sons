import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Elevator Services</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            From initial design and installation to ongoing maintenance and future-proof upgrades, we provide end-to-end solutions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <h2 className="text-3xl font-bold tracking-tight text-primary">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{service.details}</p>
                  <Button asChild className="mt-6">
                    <Link href="/contact">Request This Service</Link>
                  </Button>
                </div>
                <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <Card className="bg-card shadow-xl">
                    <CardHeader className="items-center text-center">
                       <div className="mx-auto bg-primary/10 rounded-full p-6 w-24 h-24 flex items-center justify-center mb-4">
                        <service.icon className="w-12 h-12 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Have a Specific Need?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            Our team of experts is ready to discuss your project requirements and provide a tailored solution.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Consult With an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
