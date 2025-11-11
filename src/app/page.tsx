import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, projects, placeholderImages } from "@/lib/data";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Cog,
  Users,
  Building2,
  LineChart,
} from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const strengths = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: "Safety First",
      description:
        "Advanced multi-layer failsafes and rigorous compliance testing protect every passenger, every ride.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Quality Craftsmanship",
      description:
        "Premium materials, precision engineering, and meticulous installation deliver lasting performance.",
    },
    {
      icon: <Cog className="w-12 h-12 text-primary" />,
      title: "Smart Technology",
      description:
        "IoT monitoring, energy‑efficient drives, and intelligent dispatch optimize flow and reduce costs.",
    },
  ];

  const stats = [
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "Projects Delivered",
      value: "750+",
    },
    {
      icon: <Users className="h-8 w-8" />,
      label: "Clients Served",
      value: "300+",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      label: "Avg. Uptime",
      value: "99.7%",
    },
  ];

  return (
    <div className="flex flex-col">
      <HomeHero />

      <section id="services" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for all your vertical transportation
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.id}
                className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="strengths" className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,theme(colors.primary)/10%,transparent_70%)]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Why Hoque & Sons
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three pillars behind every elevation we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {strengths.map((strength) => (
              <div key={strength.title} className="p-6">
                <div className="flex justify-center mb-4">{strength.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-muted-foreground">{strength.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-xl border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {s.icon}
                </div>
                <div className="text-3xl font-bold tracking-tight text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 lg:py-28 bg-card relative">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent,theme(colors.primary)/5%)]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Witness our commitment to excellence in every installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const image = placeholderImages.find(
                (p) => p.id === project.imageId
              );
              return (
                <Card key={project.id} className="overflow-hidden group">
                  <div className="overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                        {project.type}
                      </span>
                      <span>{project.location}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)]" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Elevate Your Space?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-primary-foreground/80">
            Contact us today for a consultation and let us help you find the
            perfect vertical transportation solution for your building.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
