"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/data";
import logoPng from "@/assets/logo.png";

export function HomeHero() {
  const heroImages = placeholderImages.filter((p) => p.id.startsWith("hero-"));
  // Prefer a glass/modern elevator image for the hero background if available
  const bg =
    heroImages.find((p) => p.id === "hero-2") ||
    heroImages.find((p) => p.id === "hero-1") ||
    heroImages[0];

  return (
    <section className="relative w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        {bg ? (
          <Image
            src={bg.imageUrl}
            alt={bg.description}
            fill
            priority
            className="object-cover scale-105"
            data-ai-hint={bg.imageHint}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/50 via-background to-background" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/40" />
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,theme(colors.primary)/30%,transparent_65%)]" />
        <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full border border-primary/40 bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:gap-10 md:py-24 lg:py-28">
          <div className="max-w-xl text-center md:text-left justify-self-start">
            <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary mb-4">
              ELEVATOR & ESCALATOR SOLUTIONS
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-xl">
              Hoque & Sons
              <span className="block text-primary-100">
                Engineering Technology
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-neutral-200/90">
              We design, supply, and install modern elevators and escalators for
              residential, commercial, and industrial projectswith
              uncompromising safety and comfort.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/5 text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-300/90">
              <div>
                <div className="font-semibold text-white">750+ projects</div>
                <div className="text-xs text-neutral-300">
                  Commercial, residential & industrial
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">24/7 Service</div>
                <div className="text-xs text-neutral-300">
                  Maintenance & emergency support
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center justify-self-stretch w-full h-full">
            <div className="relative flex h-64 w-full sm:h-72 md:h-80 lg:h-[22rem] items-center justify-center">
              <Image
                src={logoPng}
                alt="Hoque & Sons Engineering Technology logo"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
