import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, projects } from "@/lib/data";
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

  const categories = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "New Installations",
      description:
        "Custom elevator solutions for new constructions, designed for performance and aesthetics.",
    },
    {
      icon: <Cog className="w-10 h-10 text-primary" />,
      title: "Modernization & Upgrades",
      description:
        "Upgrade your existing elevators with the latest technology for improved safety and efficiency.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Maintenance & Repair",
      description:
        "Proactive maintenance plans and responsive repair services to ensure maximum uptime.",
    },
  ];

  const homepageProducts = [
    {
      id: "sigma",
      name: "Sigma Elevator",
      description:
        "Safe, smooth and energy-efficient elevators trusted worldwide for residential and commercial projects.",
      type: "Passenger & Commercial Elevators",
      image: "/Sigma-1.png",
    },
    {
      id: "aoyama",
      name: "Aoyama Elevator",
      description:
        "Japanese-inspired precision with quiet operation and refined cabin design.",
      type: "Premium Residential & Hospitality Elevators",
      image: "/Aoyama-1.png",
    },
    {
      id: "fujitech",
      name: "Fuji Tech Korea Elevator",
      description:
        "High-performance Korean-engineered elevators for malls, offices and mixed-use buildings.",
      type: "Commercial & Mixed-Use Elevators",
      image: "/Fuji-tech-1.png",
    },
  ];

  return (
    <div className="flex flex-col">
      <HomeHero />

      {/* Services section */}
      <section
        id="services"
        className="relative py-16 lg:py-24 bg-gradient-to-b from-background via-card to-background overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/12%,transparent_65%)] opacity-70" />
        <div className="relative container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              What We Do
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Complete elevator and escalator solutions for new installations,
              modernization, and long‑term care of your assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((c, index) => (
              <Card
                key={c.title}
                className="group relative overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative pt-8 pb-4 flex flex-col items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm shadow-primary/20">
                    {c.icon}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-lg font-semibold">
                      {c.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative pb-6 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground max-w-md">
              Need something custom? We can tailor elevators and service
              agreements for residential towers, commercial complexes, and
              industrial facilities.
            </p>
          </div>
        </div>
      </section>

      <section
        id="strengths"
        className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-background to-card/60 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/18%,transparent_70%)] opacity-70" />
        <div className="relative container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Haque & Sons Engineering Technology
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              We combine safety, craftsmanship, and smart technology to deliver
              smooth, reliable vertical transportation for every type of
              building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 text-left shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {strength.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{strength.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/90 p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/10 to-transparent opacity-60" />
                <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm">
                  {s.icon}
                </div>
                <div className="relative text-3xl font-bold tracking-tight text-primary">
                  {s.value}
                </div>
                <div className="relative mt-1 text-xs font-medium text-muted-foreground uppercase tracking-[0.18em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products strip using the three main brands */}
      <section
        id="featured-products"
        className="py-16 lg:py-20 bg-background relative"
      >
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent,theme(colors.primary)/5%)]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Featured Elevator Brands
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trusted global brands we supply and install across residential,
              commercial and mixed-use projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homepageProducts.map((prod) => (
              <Card
                key={prod.id}
                className="overflow-hidden group border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden h-60 w-full">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {prod.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      {prod.type}
                    </span>
                    <Link
                      href={`/products/${prod.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
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
