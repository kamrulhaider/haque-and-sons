import Link from "next/link";
import Image from "next/image";
import { Mountain, Facebook, Twitter, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";
import logoPng from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Image
                src={logoPng}
                alt="Haque & Sons Engineering Technology logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span>Haque & Sons Engineering Technology</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Crafting reliable, elegant elevator experiences since 1988.
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-primary-foreground/70">
              <div>
                <p className="font-semibold">Corporate Office</p>
                <p>Faruk Chamber (10th Floor)</p>
                <p>1403 Sk. Mujib Road, Chomohony More</p>
                <p>Agrabad, Chattogram, Bangladesh</p>
              </div>
              <div>
                <p className="font-semibold">Feni Office</p>
                <p>Shukhi Nibash, Holding # 6/1</p>
                <p>Opposite Fire Service Station</p>
                <p>Bhuiya Bari Road, Feni</p>
              </div>
              <div>
                <p className="font-semibold">Warehouse / Show Room</p>
                <p>Bara Quarter</p>
                <p>Phartali, Chattogram</p>
              </div>
              <div className="pt-1 space-y-1">
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:02333311757"
                  className="block hover:text-primary-foreground transition-colors"
                >
                  02333311757, 01714-404495, 01673-355534
                </a>
                <p className="font-semibold mt-2">Email</p>
                <a
                  href="mailto:ziaulhaquejami@gmail.com"
                  className="block hover:text-primary-foreground transition-colors"
                >
                  ziaulhaquejami@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="flex mt-4 space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors" />
              </Link>
            </div>
            <div className="mt-6 text-xs text-primary-foreground/70">
              <p className="font-semibold mb-2">Location</p>
              <div className="relative w-full overflow-hidden rounded-md border border-primary-foreground/20 bg-primary-foreground/10">
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
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Haque & Sons Engineering
            Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
