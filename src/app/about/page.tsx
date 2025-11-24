import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const offerings = [
    "Professional advice and customized system design",
    "Provision of cutting-edge, superior parts and machinery",
    "Expert installation carried out by qualified technical staff",
    "Completion of technical paperwork, commissioning, and testing",
    "Flexible Annual Maintenance Contracts (AMC)",
    "24-hour emergency assistance and post-purchase service",
  ];

  const reasons = [
    "Authorized distributor of globally renowned brands: Sigma Elevator Shanghai (China), AOYAMA (Japan), and Fuji Tech (Korea)",
    "Proven technical expertise across essential infrastructure domains",
    "End-to-end project execution with attention to detail",
    "Skilled and experienced workforce",
    "Strong commitment to quality, safety, and customer satisfaction",
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Haque &amp; Sons Engineering Technology
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            A trusted, authorized distributor and technical partner for globally
            renowned elevator brands—delivering safe, efficient and dependable
            vertical transportation solutions.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Company Profile
            </h2>
            <p className="mt-4 text-muted-foreground">
              Haque and Sons Engineering Technology is a reliable, authorized
              distributor and technical partner of well-known companies in the
              lift industry. We provide clever, high-performing solutions for
              commercial, industrial, and residential applications with a strong
              emphasis on innovation, dependability, and client satisfaction.
            </p>
            <p className="mt-4 text-muted-foreground">
              As partners of leading international elevator manufacturers—
              <span className="font-semibold">
                Sigma Elevator Shanghai (China)
              </span>
              ,<span className="font-semibold"> AOYAMA (Japan)</span>, and
              <span className="font-semibold"> Fuji Tech (Korea)</span> — we
              bring world-class technology and engineering quality to every
              project we undertake. Our solutions are designed with durability,
              efficiency, and safety in mind, ensuring seamless movement for
              modern buildings and infrastructure.
            </p>
            <p className="mt-4 text-muted-foreground">
              At Haque and Sons Engineering Technology, we don&apos;t just
              supply products—we build long-term partnerships by delivering
              smart, reliable elevator solutions tailored to each client&apos;s
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                What We Offer
              </h2>
              <p className="mt-4 text-muted-foreground">
                From initial consultation to long-term maintenance, we provide
                complete, end-to-end elevator solutions for residential towers,
                commercial complexes, hospitals, and industrial facilities.
              </p>
              <div className="mt-6 space-y-3">
                {offerings.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-primary flex items-center justify-center">
                <p className="px-6 text-center text-primary-foreground/90 text-sm md:text-base">
                  Commitment is paramount in every project we deliver. We
                  approach each installation, modernization and service contract
                  with the same focus on safety, precision and long-term
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section removed as requested */}
    </>
  );
}
