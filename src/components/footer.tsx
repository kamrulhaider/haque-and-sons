import Link from "next/link";
import { Mountain, Facebook, Twitter, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";

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
              <Mountain className="h-7 w-7" />
              <span>Hoque & Sons Engineering Technology</span>
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
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; {new Date().getFullYear()} Hoque & Sons Engineering
            Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
