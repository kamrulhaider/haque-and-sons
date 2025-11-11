"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/data';

export function HomeHero() {
  const heroImages = placeholderImages.filter(p => p.id.startsWith('hero-'));

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen text-white">
      <Carousel
        className="w-full h-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-white/50" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 border-white/50" />
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Elevating Your World
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200 drop-shadow-md">
            Precision, Safety, and Elegance in Vertical Transportation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/projects">Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
