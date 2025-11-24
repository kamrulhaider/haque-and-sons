import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productData = [
  {
    id: "sigma",
    name: "Sigma Elevator Shanghai",
    tagline: "Safe, smooth and energy-efficient vertical transportation.",
    description:
      "A globally trusted brand offering safe, smooth and energy-efficient elevators for residential, commercial and mixed-use projects.",
    type: "Passenger & Commercial Elevators",
    heroImage: "/Sigma-1.png",
    secondaryImage: "/Sigma-2.png",
    logo: "/company-logo/sigma.jpg",
  },
  {
    id: "aoyama",
    name: "Aoyama Elevator",
    tagline: "Japanese-inspired precision and quiet operation.",
    description:
      "Aoyama elevators deliver whisper-quiet operation, refined cabin design, and advanced control systems—perfect for premium residences and boutique hotels.",
    type: "Premium Residential & Hospitality Elevators",
    heroImage: "/Aoyama-1.png",
    secondaryImage: "/Aoyama-2.png",
    logo: "/company-logo/ayoama.jpg",
  },
  {
    id: "fujitech",
    name: "Fuji Tech Korea Elevator",
    tagline: "Efficient, smart, and built for modern cities.",
    description:
      "Fuji Tech Korea elevators focus on energy efficiency, smart dispatching, and robust performance for malls, offices, and mixed-use developments.",
    type: "Commercial & Mixed-Use Elevators",
    heroImage: "/Fuji-tech-1.png",
    secondaryImage: "/Fuji-tech-2.png",
    logo: "/company-logo/fuji.png",
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
          {productData.map((prod) => (
            <Card
              key={prod.id}
              className="group relative overflow-hidden border border-border/40 bg-[#FAFAFA] shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              {/* Top: two images side-by-side (50/50 style split) */}
              <div className="relative w-full bg-white">
                <div className="grid grid-cols-2 gap-0 border-b border-border/30">
                  <div className="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100">
                    <div className="relative w-[82%] h-[82%] rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.18)] overflow-hidden bg-white">
                      <Image
                        src={prod.heroImage}
                        alt={prod.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 260px, 100vw"
                      />
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] hidden sm:flex items-center justify-center bg-gradient-to-tr from-slate-50 via-white to-slate-100">
                    <div className="relative w-[78%] h-[78%] rounded-3xl shadow-[0_14px_30px_rgba(15,23,42,0.16)] overflow-hidden bg-white">
                      <Image
                        src={prod.secondaryImage}
                        alt={`${prod.name} detail view`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:-translate-x-1 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 220px, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: product name + short details */}
              <CardHeader className="pb-2 pt-4 flex flex-col items-center text-center gap-1.5 bg-[#FAFAFA]">
                <CardTitle className="text-2xl md:text-3xl font-semibold tracking-wide group-hover:text-primary transition-colors">
                  {prod.name}
                </CardTitle>
                <p className="text-sm md:text-base text-muted-foreground/90 max-w-xs">
                  {prod.tagline}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 mt-0.5">
                  {prod.type}
                </p>
              </CardHeader>

              {/* Bottom: big centered company logo as premium badge */}
              <CardContent className="pb-4 pt-3 flex flex-col items-center gap-3 bg-[#FAFAFA]">
                <div className="relative w-full flex items-center justify-center py-2">
                  <div className="relative w-full max-w-xs md:max-w-sm h-14 md:h-16 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-100 via-white to-slate-200 shadow-[0_10px_24px_rgba(15,23,42,0.22)] flex items-center justify-center overflow-hidden">
                      {prod.logo ? (
                        <Image
                          src={prod.logo}
                          alt={`${prod.name} company logo`}
                          fill
                          className="object-contain px-4 py-2"
                          sizes="(min-width: 1024px) 260px, 100vw"
                        />
                      ) : (
                        <p className="text-xs md:text-sm font-semibold tracking-[0.26em] uppercase text-slate-700">
                          Hoque &amp; Sons
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-0 w-full flex flex-wrap gap-2 justify-center">
                  <Button asChild size="sm" className="px-5 h-9 justify-center">
                    <Link href={`/products/${prod.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
