"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/data";

export function HomeHero() {
  const heroImages = placeholderImages.filter((p) => p.id.startsWith("hero-"));
  const bg = heroImages[0];

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen text-white">
      <div className="absolute inset-0">
        {bg ? (
          <Image
            src={bg.imageUrl}
            alt={bg.description}
            fill
            priority
            className="object-cover"
            data-ai-hint={bg.imageHint}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/40 to-background" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Hoque & Sons Elevators
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200 drop-shadow-md">
            Precision, safety, and elegance in vertical transportation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/projects">Our Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
