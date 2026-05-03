import { Link } from 'react-router-dom';
import { businessInfo, socialLinks } from '../data/siteData';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './SocialIcons';

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <img
            src="/logo.png"
            alt="Shivani Taxi Services Logo"
            className="mb-3 h-14 w-auto object-contain brightness-0 invert"
          />
          <h3 className="font-display text-2xl">Shivani Taxi Services</h3>
          <p className="mt-2 text-sm text-white/80">{businessInfo.legalName}</p>
          <p className="mt-4 text-sm text-white/70">
            Reliable local and outstation travel with verified drivers and transparent pricing.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">Quick Links</h4>
          <div className="mt-4 grid gap-2 text-sm">
            <Link to="/services" className="hover:text-brand-gold">Services</Link>
            <Link to="/pricing" className="hover:text-brand-gold">Pricing</Link>
            <Link to="/booking" className="hover:text-brand-gold">Booking</Link>
            <Link to="/agra-to-delhi-taxi" className="hover:text-brand-gold">Agra to Delhi Taxi</Link>
            <Link to="/agra-to-jaipur-taxi" className="hover:text-brand-gold">Agra to Jaipur Taxi</Link>
            <Link to="/agra-taxi-service" className="hover:text-brand-gold">Agra Taxi Service</Link>
            <Link to="/outstation-taxi-agra" className="hover:text-brand-gold">Outstation Taxi Service</Link>
            <Link to="/local-cab-service-agra" className="hover:text-brand-gold">Local Cab Service Agra</Link>
            <Link to="/one-way-special-routes-agra-delhi-ncr" className="hover:text-brand-gold">One Way Special Routes Delhi NCR</Link>
            <Link to="/one-way-special-routes-agra-jaipur-west" className="hover:text-brand-gold">One Way Special Routes Jaipur West</Link>
            <Link to="/review" className="hover:text-brand-gold">Review</Link>
            <Link to="/contact" className="hover:text-brand-gold">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-gold">Connect</h4>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`tel:${businessInfo.phones[0]}`} className="inline-flex items-center gap-2 hover:text-brand-gold">
              <PhoneIcon className="h-4 w-4" /> {businessInfo.displayPhones[0]}
            </a>
            <a href="mailto:arunyadav1574@gmail.com" className="flex items-center gap-2 hover:text-brand-gold">
              <MailIcon className="h-4 w-4" /> {businessInfo.email}
            </a>
          </div>
          <div className="mt-4 flex gap-2">
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Shivani Taxi Services. All rights reserved.
      </div>
    </footer>
  );
}
