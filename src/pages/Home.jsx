import { Link } from 'react-router-dom';
import {
  businessInfo,
  faqItems,
  socialLinks,
  testimonials,
  vehicles,
} from '../data/siteData';
import { useState } from 'react';

function formatDateForWhatsApp(value) {
  if (!value) return '-';
  const [datePart, timePart] = value.split('T');
  if (!datePart || !timePart) return value;
  return `${datePart} at ${timePart}`;
}

export default function Home() {
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    dateTime: '',
    vehicle: vehicles[0]?.name || '',
    passengers: '1',
  });
  const [quickErrors, setQuickErrors] = useState({});

  const sanitizePassengers = (value) => String(value).replace(/\s+/g, '');

  const validateQuickBooking = () => {
    const nextErrors = {};
    if (!sanitizePassengers(quickForm.passengers).trim() || Number(sanitizePassengers(quickForm.passengers)) < 1) {
      nextErrors.passengers = 'Passenger count is required.';
    }
    setQuickErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleQuickBooking = (event) => {
    event.preventDefault();
    if (!validateQuickBooking()) return;

    const snapshot = {
      ...quickForm,
      passengers: sanitizePassengers(quickForm.passengers),
    };

    const message = encodeURIComponent(`*New Booking — One Way*
Name: ${snapshot.name}
Phone: ${snapshot.phone}
Pickup: ${snapshot.pickup}
Drop: ${snapshot.drop}
Date: ${formatDateForWhatsApp(snapshot.dateTime)}
Car: ${snapshot.vehicle || '-'}
Passengers: ${snapshot.passengers}`);
    window.open(`${socialLinks.whatsapp}?text=${message}`, '_blank');
    setQuickErrors({});
  };

  return (
    <>
      <section className="hero-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-fade-up">
            <p className="inline-block rounded-full bg-brand-ink px-4 py-1 text-xs font-semibold tracking-wider text-white">
              Premium Taxi Experience
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
              {businessInfo.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-brand-slate sm:text-base">
              Trusted cab service for city rides, airport transfers, and
              outstation trips. Clean vehicles, verified drivers, and on-time
              pickup every time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/pricing" className="btn-primary">
                Pricing / Booking
              </Link>
              <a href={`tel:${businessInfo.phones[0]}`} className="btn-outline">
                Call Now
              </a>
              <a
                href={`${socialLinks.whatsapp}?text=${encodeURIComponent("Hello, I want to book a taxi with Shivani Taxi Services.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          <form
            onSubmit={handleQuickBooking}
            className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:p-7"
          >
            <h2 className="font-display text-2xl text-brand-ink">Quick Booking</h2>
            <p className="mt-1 text-sm text-brand-slate">Fast booking confirmation on WhatsApp.</p>
            <div className="mt-5 grid gap-3">
              <div>
                <label className="label">Name</label>
                <input
                  required
                  value={quickForm.name}
                  onChange={(e) => setQuickForm((prev) => ({ ...prev, name: e.target.value }))}
                  type="text"
                  placeholder="Your Name"
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Phone Number</label>
                <input
                  required
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm((prev) => ({ ...prev, phone: e.target.value }))}
                  type="tel"
                  placeholder="Phone Number"
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Pickup Location</label>
                <input
                  required
                  value={quickForm.pickup}
                  onChange={(e) => setQuickForm((prev) => ({ ...prev, pickup: e.target.value }))}
                  type="text"
                  placeholder="Pickup Location"
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Drop Location</label>
                <input
                  required
                  value={quickForm.drop}
                  onChange={(e) => setQuickForm((prev) => ({ ...prev, drop: e.target.value }))}
                  type="text"
                  placeholder="Drop Location"
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Date & Time</label>
                <input
                  required
                  value={quickForm.dateTime}
                  onChange={(e) =>
                    setQuickForm((prev) => ({
                      ...prev,
                      dateTime: e.target.value,
                    }))
                  }
                  type="datetime-local"
                  className="input-field"
                />
              </div>
              <div>
                <label className="label">Car Type</label>
                <select
                  required
                  value={quickForm.vehicle}
                  onChange={(e) => setQuickForm((prev) => ({ ...prev, vehicle: e.target.value }))}
                  className="input-field"
                >
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.name} value={vehicle.name}>
                      {vehicle.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">Passengers</label>
                <input
                  required
                  value={quickForm.passengers}
                  onChange={(e) =>
                    setQuickForm((prev) => ({
                      ...prev,
                      passengers: sanitizePassengers(e.target.value),
                    }))
                  }
                  type="number"
                  min="1"
                  placeholder="Passengers"
                  className={`input-field ${quickErrors.passengers ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                />
                {quickErrors.passengers && <p className="text-xs text-red-600">{quickErrors.passengers}</p>}
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Booking on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "24/7 Service",
              desc: "Available round the clock for planned rides and urgent travel needs.",
            },
            {
              title: "Affordable Pricing",
              desc: "Transparent fare structure with no hidden surprises.",
            },
            {
              title: "Verified Drivers",
              desc: "Professional and background-verified chauffeurs.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-xl text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-brand-slate">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-brand-ink">
            Popular Vehicles
          </h2>
          <Link
            to="/services"
            className="text-sm font-semibold text-brand-ocean hover:underline"
          >
            Explore all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-48 w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  if (
                    vehicle.fallbackImage &&
                    event.currentTarget.src !== vehicle.fallbackImage
                  ) {
                    event.currentTarget.src = vehicle.fallbackImage;
                  }
                }}
              />
              <div className="p-5">
                <h3 className="font-display text-xl text-brand-ink">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-ocean">
                  Seating: {vehicle.seats}
                </p>
                <p className="mt-2 text-sm text-brand-slate">
                  {vehicle.description}
                </p>
                <p className="mt-2 text-xs font-medium text-brand-ocean/90">
                  {vehicle.photoTag}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="font-display text-3xl text-brand-ink">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-3">
          {faqItems.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer list-none font-semibold text-brand-ink">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-brand-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
