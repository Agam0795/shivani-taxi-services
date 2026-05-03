import { Link } from 'react-router-dom';
import { socialLinks } from '../data/siteData';

const waMessage = encodeURIComponent('Hello Shivani Taxi Services, I need a local taxi in Agra. Please share local package and cab availability.');

export default function LocalTaxiAgra() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">City Cab Service</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Local Taxi Service in Agra</h1>
      <p className="mt-3 text-sm text-brand-slate sm:text-base">
        Book a local taxi in Agra for city rides, station pickup, airport transfer, and full-day sightseeing with verified drivers.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-2xl text-brand-ink">Starting Price & Booking</h2>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Sedan (Dzire)</p><p className="mt-1 text-brand-ocean">From ₹10/KM</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Ertiga / Rumion</p><p className="mt-1 text-brand-ocean">From ₹14/KM</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Innova Crysta</p><p className="mt-1 text-brand-ocean">From ₹18/KM</p></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/booking" className="btn-primary">Book Local Taxi in Agra</Link>
          <a href={`${socialLinks.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer" className="btn-whatsapp">Book on WhatsApp</a>
        </div>
      </div>

      <article className="prose prose-slate mt-8 max-w-none text-sm leading-7 text-brand-slate sm:text-base">
        <p>
          If you need a local taxi in Agra for daily travel, sightseeing, or station transfer, Shivani Taxi Services offers practical city cab solutions with quick response. Customers frequently search for local taxi Agra, city cab in Agra, and taxi service near me in Agra when they need immediate pickup. We provide reliable support for hotel transfers, Taj Mahal visits, local market trips, corporate travel, and family rides. Our goal is to give you a clean car, a verified driver, and clear pricing before the ride starts.
        </p>
        <p>
          Our Agra local cab service works for both short and long city usage. If you need a quick one-way ride within Agra, we can dispatch a vehicle based on your location and timing. If you need a full-day local taxi in Agra for multiple stops, we help plan a route that covers monuments, restaurants, and shopping areas comfortably. This is especially useful for tourists and outstation guests who want private transport instead of waiting for multiple autos or app cabs during peak hours.
        </p>
        <p>
          We maintain flexible vehicle options so you can choose based on budget and group size. Sedan cabs are ideal for regular city travel, while Ertiga and Innova choices are better for families and luggage-heavy plans. Our local taxi rates start from ₹10/KM for Sedan, ₹14/KM for Ertiga/Rumion, and ₹18/KM for Innova Crysta as per available package conditions. Because local requirements can vary by trip duration and stop count, our team confirms final fare details in advance to keep the process transparent.
        </p>
        <p>
          Booking a local taxi in Agra with us is simple. You can use the booking form, call directly, or send your ride requirement on WhatsApp and receive quick assistance. We prioritize punctuality and safe driving standards, which is why many repeat customers trust us for city mobility needs. For same-day local cab booking in Agra, use the button above and get connected with our team instantly.
        </p>
      </article>
    </section>
  );
}
