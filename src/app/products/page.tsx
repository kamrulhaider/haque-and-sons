import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, placeholderImages } from "@/lib/data";

export default function ProductsPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Elevator & Escalator Products</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Choose from our range of passenger, home, and freight elevators, plus escalators and moving walks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(prod => {
            const image = placeholderImages.find(p => p.id === prod.imageId);
            return (
              <Card key={prod.id} className="overflow-hidden group">
                <div className="overflow-hidden">
                  {image && (
                    <Image src={image.imageUrl} alt={prod.title} width={800} height={500} className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{prod.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">{prod.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">{prod.category}</span>
                    {prod.startingPrice && <span>{prod.startingPrice}</span>}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="#">Download Brochure</Link>
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
