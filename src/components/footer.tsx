import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import WaveDivider from "@/components/wave-divider";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#324740] text-[#F8D9D4]">
      {/* Wave from cream Find Us into green footer */}
      <WaveDivider bg="#FEF8F4" fill="#324740" />
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="High Tide Cafe"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Link>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Coffee that grounds you. Food that lifts you.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/HighTideCafeSemaphore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#F8D9D4] opacity-70 hover:opacity-100 transition-opacity"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/high_tide_semaphore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#F8D9D4] opacity-70 hover:opacity-100 transition-opacity"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Menu", href: "/menu" },
                { label: "Find Us", href: "/#find-us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide text-sm uppercase">
              Find Us
            </h4>
            <ul className="flex flex-col gap-4 text-sm opacity-80">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F8D9D4]" />
                <span>35 Semaphore Rd, Semaphore SA 5019</span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#F8D9D4]" />
                <span>
                  Mon–Fri: 7am – 3pm
                  <br />
                  Sat–Sun: 7am – 4pm
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="shrink-0 text-[#F8D9D4]" />
                <span>(08) 8449 0000</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="shrink-0 text-[#F8D9D4]" />
                <a href="mailto:hello@hightidecafe.com.au" className="hover:opacity-100 transition-opacity">
                  hello@hightidecafe.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs opacity-50">
          &copy; 2019 High Tide Cafe Semaphore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
