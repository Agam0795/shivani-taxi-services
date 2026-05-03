import { Link } from 'react-router-dom';
import { businessInfo, socialLinks } from '../data/siteData';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '../components/SocialIcons';

const officeCoordinates = `27°13'56.7"N 78°00'40.1"E`;
const officeMapLink = 'https://www.google.com/maps?q=27.2324278,78.0111263&z=17&hl=en';
const officeMapEmbed = 'https://maps.google.com/maps?q=27.2324278,78.0111263&z=17&hl=en&output=embed';

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Contact Us</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Book Your Ride Instantly</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-slate sm:text-base">
        Reach us through phone, email, or social channels. We respond quickly and help with fare, route, and booking support.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-display text-2xl text-brand-ink">Phone</h2>
            <a href={`tel:${businessInfo.phones[0]}`} className="mt-3 flex items-center gap-2 text-brand-ocean hover:underline">
              <PhoneIcon className="h-5 w-5" /> Phone: {businessInfo.displayPhones[0]}
            </a>
            <a href={`https://wa.me/${businessInfo.phones[1].replace('+', '')}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-brand-ocean hover:underline">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp: {businessInfo.displayPhones[1]}
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-display text-2xl text-brand-ink">Email</h2>
            <a href={`mailto:${businessInfo.email}`} className="mt-3 inline-flex items-center gap-2 text-brand-ocean hover:underline">
              <MailIcon className="h-5 w-5" /> {businessInfo.email}
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-display text-2xl text-brand-ink">Social Media</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="social-pill">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="social-pill">
                <FacebookIcon className="h-5 w-5" /> Facebook
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="social-pill">
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-display text-2xl text-brand-ink">Rating & Review</h2>
            <p className="mt-2 text-sm text-brand-slate">
              Share your experience with our service. Your feedback helps us improve and serve better.
            </p>
            <Link to="/review" className="btn-primary mt-4 inline-flex items-center gap-2">
              <WhatsAppIcon className="h-5 w-5" /> Open Rating & Review Form
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <iframe
            title="Shivani Taxi Services Location"
            src={officeMapEmbed}
            className="h-80 w-full rounded-lg sm:h-105 lg:h-130"
            loading="lazy"
          />
          <div className="px-2 pb-2 pt-3 text-sm text-brand-slate">
            <p className="font-semibold text-brand-ink">Office Location</p>
            <p className="mt-1">{officeCoordinates}</p>
            <a
              href={officeMapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-semibold text-brand-ocean hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
