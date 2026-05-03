import { Link } from 'react-router-dom';
import { socialLinks } from '../data/siteData';

const waMessage = encodeURIComponent('Hello Shivani Taxi Services, I want to book an Agra to Jaipur cab. Please share fare and car options.');

export default function AgraToJaipurCab() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Popular Intercity Route</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Agra to Jaipur Cab Booking</h1>
      <p className="mt-3 text-sm text-brand-slate sm:text-base">
        Comfortable Agra to Jaipur cab service for tourists, families, and business travelers with instant booking assistance.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-2xl text-brand-ink">Route Price & Booking</h2>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Sedan (Dzire)</p><p className="mt-1 text-brand-ocean">Starting ₹3,499</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Aura</p><p className="mt-1 text-brand-ocean">Starting ₹3,499</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Innova Crysta</p><p className="mt-1 text-brand-ocean">Starting ₹7,000</p></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/booking" className="btn-primary">Book Agra to Jaipur Cab</Link>
          <a href={`${socialLinks.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer" className="btn-whatsapp">Book on WhatsApp</a>
        </div>
      </div>

      <article className="prose prose-slate mt-8 max-w-none text-sm leading-7 text-brand-slate sm:text-base">
        <p>
          Planning a road trip from Agra to Jaipur is common for tourists following the Golden Triangle circuit, and a private cab is one of the most convenient options. With Shivani Taxi Services, you can book an Agra to Jaipur cab that matches your timing, budget, and comfort level. This route is popular for same-day sightseeing, hotel transfers, and family travel, so our team focuses on flexible pickup and dependable support. If you are searching for an Agra to Jaipur taxi with transparent pricing, this page is built to help you decide quickly.
        </p>
        <p>
          Our Agra to Jaipur cab service is suitable for couples, solo travelers, business passengers, and group trips. Sedan cabs are ideal for affordable travel, while Ertiga and Innova options provide extra space for luggage and long-route comfort. Customers often ask for early departures to avoid traffic near city exits, and we support that with pre-scheduled dispatch. You can choose one-way cab service or request round-trip planning based on your itinerary. We also assist with custom pickup points in Agra and multiple drop points in Jaipur.
        </p>
        <p>
          The Agra to Jaipur cab fare starts at ₹3,499 for Sedan and Aura, while premium vehicles are available at higher rates. Final fare depends on route requirements, date, toll policy, and specific vehicle demand, but our team confirms trip details before booking. This helps customers who compare Agra to Jaipur taxi price on different portals and want a direct, human-assisted confirmation. No complex app steps are required. Just use the booking button or send a WhatsApp message and we will share available car options immediately.
        </p>
        <p>
          Travelers choose our Agra to Jaipur taxi booking because it saves time and gives better journey control. Instead of switching between buses or trains, you travel door-to-door with one dedicated driver. Our verified chauffeurs know the intercity route well and focus on safe driving standards. If you want a smooth cab from Agra to Jaipur for leisure, work, or family travel, book now and get quick confirmation from our support team.
        </p>
      </article>
    </section>
  );
}
