import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productData = [
  {
    id: "sigma",
    name: "Sigma Elevator",
    tagline: "Safe, smooth and energy-efficient vertical transportation.",
    description:
      "A globally trusted brand offering safe, smooth and energy-efficient elevators for residential, commercial and mixed-use projects.",
    type: "Passenger & Commercial Elevators",
  },
  {
    id: "aoyama",
    name: "Aoyama Elevator",
    tagline: "Japanese-inspired precision and quiet operation.",
    description:
      "Aoyama elevators deliver whisper-quiet operation, refined cabin design, and advanced control systems—perfect for premium residences and boutique hotels.",
    type: "Premium Residential & Hospitality Elevators",
  },
  {
    id: "fujitech",
    name: "Fuji Tech Korea Elevator",
    tagline: "Efficient, smart, and built for modern cities.",
    description:
      "Fuji Tech Korea elevators focus on energy efficiency, smart dispatching, and robust performance for malls, offices, and mixed-use developments.",
    type: "Commercial & Mixed-Use Elevators",
  },
];

export default function ProductsPage() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/14%,transparent_70%)] opacity-70" />
      <div className="relative container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Our Products
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Elevator Brands We Offer
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hoque & Sons Engineering Technology supplies and installs leading
            global elevator brands to match the needs of your building and
            budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {productData.map((prod) => {
            const imageSrc =
              prod.id === "sigma"
                ? "/Sigma-1.png"
                : prod.id === "aoyama"
                ? "/Aoyama-1.png"
                : "/Fuji-tech-1.png";
            return (
              <Card
                key={prod.id}
                className="group relative overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="overflow-hidden h-52 w-full">
                  <Image
                    src={imageSrc}
                    alt={prod.name}
                    width={900}
                    height={520}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-3 pt-6 flex flex-col gap-2">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {prod.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary/80">
                    {prod.tagline}
                  </p>
                </CardHeader>
                <CardContent className="pb-6 pt-0 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prod.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      {prod.type}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 min-w-[8rem] justify-center"
                    >
                      <Link href={`/products/${prod.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
