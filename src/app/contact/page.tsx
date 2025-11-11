import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from './_components/contact-form';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: 'Address',
      value: '123 Elevator Lane, Metropolis, ST 12345',
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: 'Phone',
      value: '(123) 456-7890',
      href: 'tel:+1234567890',
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: 'Email',
      value: 'contact@aoyama.com',
      href: 'mailto:contact@aoyama.com',
    },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-primary-foreground/80">
            We're here to help. Reach out to us for inquiries, quotes, or service requests.
          </p>
        </div>
      </section>
      
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-primary">Get in Touch</h2>
              <p className="text-muted-foreground">
                Whether you have a question about our services, need a quote for a new project, or require maintenance support, our team is ready to answer all your questions.
              </p>
              <div className="space-y-6">
                {contactDetails.map(detail => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">{detail.icon}</div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      {detail.href ? (
                        <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">{detail.value}</a>
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
        </div>
      </section>
    </>
  );
}
