import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "./_components/contact-form";

const corporateAddress = [
  "Faruk Chamber (10th Floor)",
  "1403 Sk. Mujib Road, Chomohony More",
  "Agrabad, Chattogram, Bangladesh",
];

const feniAddress = [
  "Shukhi Nibash, Holding # 6/1",
  "Opposite Fire Service Station",
  "Bhuiya Bari Road, Feni",
];

const warehouseAddress = ["Bara Quarter", "Phartali, Chattogram"];

const phoneNumbers = ["02333311757", "01714044905", "01673-355534"];

const email = "ziaulhaquejami@gmail.com";

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Corporate Office",
      value: corporateAddress,
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Feni Office",
      value: feniAddress,
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Warehouse / Show Room",
      value: warehouseAddress,
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      value: phoneNumbers.join(", "),
      href: `tel:${phoneNumbers[0]}`,
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      value: email,
      href: `mailto:${email}`,
    },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            We're here to help. Reach out to us for inquiries, quotes, or
            service requests.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Whether you have a question about our services, need a quote for
                a new project, or require maintenance support, our team is ready
                to answer all your questions.
              </p>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      {Array.isArray(detail.value) ? (
                        <div className="text-muted-foreground text-sm">
                          {detail.value.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      ) : detail.href ? (
                        <a
                          href={detail.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-primary mb-4">
              Find Us on the Map
            </h2>
            <div className="relative w-full overflow-hidden rounded-xl border border-border/60 bg-muted/40">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.522326406967!2d91.80964327507037!3d22.33389817966249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acdffb5d0ccd8b%3A0x898d98e3ffe780e1!2sHAQUE%20%26%20SONS%20Engineering%20Technology!5e0!3m2!1sen!2sbd!4v1763970142765!5m2!1sen!2sbd"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Haque &amp; Sons Engineering Technology location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
