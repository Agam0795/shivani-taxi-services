import { Link } from 'react-router-dom';
import { businessInfo, socialLinks } from '../data/siteData';

const waMessage = encodeURIComponent('Hello Shivani Taxi Services, I want to book an Agra to Delhi taxi. Please share final fare and cab availability.');

export default function AgraToDelhiTaxi() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Outstation Taxi Route</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Agra to Delhi Taxi Service</h1>
      <p className="mt-3 text-sm text-brand-slate sm:text-base">
        Book a reliable Agra to Delhi taxi with verified drivers, transparent fares, and 24/7 pickup support.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-2xl text-brand-ink">Price & Quick Booking</h2>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Sedan (Dzire)</p><p className="mt-1 text-brand-ocean">Starting ₹2,999</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Aura</p><p className="mt-1 text-brand-ocean">Starting ₹3,199</p></div>
          <div className="rounded-lg bg-brand-mist p-3"><p className="font-semibold text-brand-ink">Innova Crysta</p><p className="mt-1 text-brand-ocean">Starting ₹6,500</p></div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/booking" className="btn-primary">Book Agra to Delhi Taxi</Link>
          <a href={`${socialLinks.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer" className="btn-whatsapp">Book on WhatsApp</a>
        </div>
      </div>

      <article className="prose prose-slate mt-8 max-w-none text-sm leading-7 text-brand-slate sm:text-base">
        <p>
          If you are looking for a dependable Agra to Delhi taxi service, Shivani Taxi Services offers a practical and comfortable option for one-way and round-trip travel. Many travelers search for an Agra to Delhi cab when they have airport transfers, business meetings, family visits, or medical appointments in Delhi NCR. Our service is designed for these real travel needs. You get on-time pickup, well-maintained cars, polite drivers, and a simple booking process. Because this is one of the busiest routes in North India, having a trusted taxi partner helps you avoid last-minute stress.
        </p>
        <p>
          Our Agra to Delhi taxi booking process is straightforward. You can call us, send a WhatsApp message, or fill the booking form on the website. After receiving your details, we confirm the cab type, pickup time, and fare. Customers often prefer sedan cabs for budget-friendly travel, while families and groups choose Ertiga or Innova options for extra space. We recommend advance booking for early morning departures, weekend travel, and festival dates. That ensures better vehicle availability and smoother dispatch from Agra.
        </p>
        <p>
          Travelers choose our Agra to Delhi cab service because we keep pricing clear. The starting fare for Sedan (Dzire) is ₹2,999 and for Aura is ₹3,199. Premium options like Innova Crysta are available for customers who need higher comfort. Final fare can vary based on pickup point, drop location, waiting time, and travel date, but we always share details before trip confirmation. This transparency makes us a preferred choice for customers who compare Agra to Delhi taxi price online before booking.
        </p>
        <p>
          Safety and punctuality are central to our operations. Our drivers are verified and experienced in highway travel between Agra and Delhi. Vehicles are checked regularly, and our team stays available for updates during your trip. Whether you need an Agra to Delhi one-way taxi for a same-day plan or a return trip with customized timing, we can provide route support and quick confirmation. For travelers who want a reliable taxi from Agra to Delhi without hidden complications, this page gives the fastest way to start booking.
        </p>
      </article>
    </section>
  );
}
