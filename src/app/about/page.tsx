import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { placeholderImages } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const historyImage = placeholderImages.find(p => p.id === 'about-us-history');
  const team = [
    { name: 'Kenji Tanaka', title: 'Founder & CEO', imageId: 'team-member-1' },
    { name: 'Yuki Hayashi', title: 'Head of Engineering', imageId: 'team-member-2' },
    { name: 'Akira Sato', title: 'Director of Operations', imageId: 'team-member-3' },
    { name: 'Hana Mori', title: 'Client Relations Manager', imageId: 'team-member-4' },
  ];
  const values = [
    { title: 'Safety', description: 'The non-negotiable foundation of all our work.' },
    { title: 'Innovation', description: 'Continuously improving for a better tomorrow.' },
    { title: 'Integrity', description: 'Honest and transparent in all our dealings.' },
    { title: 'Excellence', description: 'Striving for the highest quality in every project.' },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Aoyama Elevator</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            Learn about our journey, our values, and the people who make us a leader in vertical transportation.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-primary">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 1988, Aoyama Elevator began with a simple mission: to build elevators that were not just functional, but also safe, reliable, and beautifully designed. From our humble beginnings as a local service provider, we have grown into a trusted name in the industry, known for our commitment to quality and innovation.
              </p>
              <p className="mt-4 text-muted-foreground">
                Over the decades, we've adapted to new technologies and evolving architectural trends, but our core principles have remained unchanged. We believe in building relationships as strong as our elevators, providing exceptional service that lasts a lifetime.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              {historyImage && (
                <Image
                  src={historyImage.imageUrl}
                  alt={historyImage.description}
                  width={800}
                  height={600}
                  className="object-cover"
                  data-ai-hint={historyImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Our Mission & Values</h2>
              <p className="mt-4 text-muted-foreground">
                Our mission is to enhance urban life by providing superior vertical transportation solutions that are safe, efficient, and sustainable. We are driven by a set of core values that guide every decision we make and every project we undertake.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map(value => (
                  <div key={value.title} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-primary">
                  {/* Placeholder for a video */}
                   <div className="w-full h-full flex items-center justify-center">
                      <p className="text-primary-foreground">Our Company Video</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">The passionate experts dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => {
              const image = placeholderImages.find(p => p.id === member.imageId);
              return (
                <div key={member.name} className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-accent">
                    {image && <AvatarImage src={image.imageUrl} alt={member.name} data-ai-hint={image.imageHint}/>}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-accent font-medium">{member.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
