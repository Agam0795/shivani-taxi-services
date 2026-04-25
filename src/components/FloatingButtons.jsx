import { Link } from 'react-router-dom';
import { businessInfo, socialLinks } from '../data/siteData';
import { BookingIcon, PhoneIcon, WhatsAppIcon } from './SocialIcons';

const defaultMessage = encodeURIComponent(
  'Hello Shivani Taxi Services, I want to book a cab. Please share availability and fare details.'
);

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col gap-2 sm:bottom-5 sm:right-6 sm:gap-3">
      <a
        href={`tel:${businessInfo.phones[0]}`}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink p-0 text-white shadow-lg transition hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Call Now</span>
      </a>
      <a
        href={`${socialLinks.whatsapp}?text=${defaultMessage}`}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] p-0 text-white shadow-lg transition hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp Chat</span>
      </a>
      <Link
        to="/pricing"
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold p-0 text-brand-ink shadow-lg transition hover:scale-105 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
      >
        <BookingIcon className="h-5 w-5" />
        <span className="hidden sm:inline">Pricing/Booking</span>
      </Link>
    </div>
  );
}
