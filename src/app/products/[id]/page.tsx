import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productDetails = {
  sigma: {
    id: "sigma",
    name: "Sigma Elevator",
    brochure: "/Sigma 2024.pdf",
    imagePrimary: "/Sigma-1.png",
    imageSecondary: "/Sigma-2.png",
    type: "Passenger & Commercial Elevators",
    tagline: "Safe, smooth and energy-efficient vertical transportation.",
    description:
      "Sigma Elevator is a globally recognized brand known for delivering safe, smooth and energy-efficient vertical transportation solutions. Built with advanced engineering and modern design standards, Sigma elevators combine cutting-edge technology with long-term reliability, making them ideal for residential buildings, commercial complexes, hospitals, shopping malls, and industrial facilities.\n\nWith world-class components, smart control systems, and a strong focus on safety, Sigma elevators ensure a comfortable riding experience while minimizing operational costs. Their gearless and machine-roomless (MRL) models are designed for quiet operation, low vibration, and significantly reduced power consumption. Sigma's modern inverter technology can lower energy usage by up to 50–60%, providing an eco-friendly lift system that meets international efficiency standards.\n\nSigma elevators are manufactured under strict quality management systems and undergo rigorous testing to guarantee durability and consistent performance. From elegant cabin designs to customizable features, each elevator can be tailored to match the architectural style and functional needs of any building.\n\nWhether upgrading an existing property or installing lifts in a new project, Sigma Elevator offers a dependable, safe, and sophisticated solution trusted across global markets.",
    highlights: [
      "Energy-efficient gearless and MRL configurations for many building types",
      "Modern inverter technology that can reduce energy usage by up to 50–60%",
      "Quiet, low-vibration operation with strong focus on passenger comfort",
      "Rigorous quality control and testing for long-term reliability",
    ],
  },
  aoyama: {
    id: "aoyama",
    name: "Aoyama Elevator",
    brochure: "/Aoyama.pdf",
    imagePrimary: "/Aoyama-1.png",
    imageSecondary: "/Aoyama-2.png",
    type: "Premium Residential & Hospitality Elevators",
    tagline: "Modern, safe and dependable elevator solutions.",
    description:
      "Aoyama Elevator delivers modern, safe, and dependable vertical transportation solutions designed for today's residential, commercial, and industrial buildings. Built with advanced engineering and high-precision manufacturing, Aoyama elevators combine smooth performance, stylish design, and long-lasting reliability to ensure a superior riding experience for every user.\n\nFeaturing advanced microcomputer control systems, energy-efficient drive technology, and precision door operations, Aoyama elevators are engineered for quiet movement, reduced vibration, and optimum comfort. Their machine-roomless (MRL), gearless, and home lift models are designed to save space while providing exceptional efficiency—making them suitable for both small and large-scale projects.\n\nAoyama Elevator maintains strict quality standards throughout production, ensuring each lift meets global safety requirements and durability expectations. From modern stainless-steel cabins to customizable interiors, Aoyama offers a wide range of design options that seamlessly blend with any building's architectural style.\n\nWhether you need a passenger lift for an apartment complex, a hospital bed lift for medical facilities, or a heavy-duty freight lift for industrial use, Aoyama Elevator delivers consistent performance, enhanced safety, and long-term value.",
    highlights: [
      "Advanced microcomputer control and energy-efficient drive systems",
      "Quiet, low-vibration operation for superior passenger comfort",
      "Space-saving MRL, gearless and home lift configurations",
      "Customizable cabin finishes to match any architectural style",
    ],
  },
  fujitech: {
    id: "fujitech",
    name: "Fuji Tech Korea Elevator",
    brochure: "/FUJI TECH KOREA1.pdf",
    imagePrimary: "/Fuji-tech-1.png",
    imageSecondary: "/Fuji-tech-2.png",
    type: "Commercial & Mixed-Use Elevators",
    tagline: "High-performance Korean-engineered elevator solutions.",
    description:
      "Fuji Tech Korea is a trusted name in advanced elevator technology, delivering high-performance vertical transportation solutions for modern buildings. Manufactured with Korean engineering precision, Fuji Tech elevators are known for their smooth operation, robust safety features, and long-term reliability—making them an excellent choice for residential towers, commercial complexes, hospitals, hotels, and industrial facilities.\n\nFuji Tech Korea integrates cutting-edge control systems, energy-efficient gearless traction machines, and modern inverter drive technology to ensure quiet movement, reduced power consumption, and consistent performance. Their machine-roomless (MRL) and gearless models maximize building space while maintaining superior ride comfort and operational stability.\n\nEach Fuji Tech elevator is built under strict quality standards and advanced manufacturing processes to ensure durability and safety. With customizable cabin designs, premium stainless-steel finishes, LED lighting options, and smart control panels, Fuji Tech elevators add both functionality and aesthetic value to any project.\n\nWhether you need a passenger lift, hospital bed lift, home lift, or heavy-duty freight elevator, Fuji Tech Korea provides efficient, reliable, and user-friendly solutions tailored for modern architectural needs.",
    highlights: [
      "Korean-engineered control systems for smooth, stable operation",
      "Energy-efficient gearless traction with modern inverter drives",
      "MRL and gearless models that maximize building space",
      "Customizable cabins with premium finishes, LED lighting and smart panels",
    ],
  },
} as const;

type ProductId = keyof typeof productDetails;

interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const key = params.id as ProductId;
  const product = (
    productDetails as Record<string, (typeof productDetails)[ProductId]>
  )[key];

  if (!product) {
    return notFound();
  }

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary)/14%,transparent_70%)] opacity-70" />
      <div className="relative container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              Product Details
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl whitespace-pre-line">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
              {product.type}
            </span>
            <Button asChild variant="outline" size="sm">
              <Link
                href={product.brochure}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Brochure
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-start">
          <Card className="overflow-hidden border border-border/70 bg-card/90 backdrop-blur-sm shadow-sm">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 h-full">
              <div className="relative h-52 w-full sm:h-72 md:h-80">
                <Image
                  src={product.imagePrimary}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
              <div className="relative h-52 w-full sm:h-72 md:h-80">
                <Image
                  src={product.imageSecondary}
                  alt={`${product.name} cabin view`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
            </div>
          </Card>

          <Card className="border border-border/70 bg-card/90 backdrop-blur-sm shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Key Highlights
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                What you can expect from this elevator brand.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {product.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <div>
            <span className="font-medium text-foreground">Need guidance?</span>{" "}
            Talk to our team to choose the right brand and configuration for
            your building.
          </div>
          <div className="flex gap-3">
            <Button asChild size="sm" variant="outline">
              <Link href="/products">Back to Products</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
