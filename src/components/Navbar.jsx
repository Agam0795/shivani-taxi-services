import { Link, NavLink } from 'react-router-dom';
import { businessInfo, socialLinks } from '../data/siteData';
import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './SocialIcons';
import { useState } from 'react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Review', to: '/review' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-[0_8px_30px_rgba(16,24,40,0.08)]">
      <div className="bg-brand-ink px-4 py-2 text-xs text-white sm:text-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="inline-flex items-center gap-1.5 transition hover:text-brand-gold"
            >
              <PhoneIcon className="h-4 w-4" /> {businessInfo.displayPhones[0]}
            </a>
            <a href="mailto:arunyadav1574@gmail.com" className="transition hover:text-brand-gold">
              {businessInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-white/10 p-1.5 transition hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-1.5 transition hover:bg-white/20"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-1.5 transition hover:bg-white/20"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3 leading-tight">
            <img
              src="/logo.png"
              alt="Shivani Taxi Services Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="font-display text-lg text-brand-ink sm:text-xl">Shivani Taxi Services</p>
              <p className="text-xs font-medium text-brand-slate">Shivani Tour and Travels</p>
            </div>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-slate-300 p-2 text-brand-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block h-5 w-5">
              <span className={`mb-1 block h-0.5 bg-current transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`mb-1 block h-0.5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-brand-cream text-brand-ink'
                      : 'text-brand-slate hover:bg-slate-100 hover:text-brand-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="ml-2 rounded-lg bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-amber"
            >
              Call Now
            </a>
          </nav>
        </div>

        {menuOpen && (
          <nav className="space-y-1 border-t border-slate-200 px-4 pb-4 pt-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-brand-cream text-brand-ink' : 'text-brand-slate hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="mt-2 block rounded-md bg-brand-gold px-3 py-2 text-center text-sm font-semibold text-brand-ink"
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
