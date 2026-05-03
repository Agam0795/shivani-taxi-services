import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { businessInfo, socialLinks, vehicles, pricingData, faqItems } from '../data/siteData';

function ensureMeta(name, content, attribute = 'name') {
  const selector = `meta[${attribute}="${name}"]`;
  let meta = document.head.querySelector(selector);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function routePricingTable(pricingRows) {
  return pricingRows.map((row) => ({
    label: row.label,
    detail: row.detail,
    note: row.note,
  }));
}

export default function SeoLandingPage({ page }) {
  useEffect(() => {
    document.title = page.metaTitle;
    ensureMeta('description', page.metaDescription);
    ensureMeta('keywords', `${page.title}, ${businessInfo.brandName}, Agra taxi, cab booking`);
    ensureMeta('title', page.metaTitle);
    ensureMeta('og:title', page.metaTitle, 'property');
    ensureMeta('og:description', page.metaDescription, 'property');
  }, [page.metaDescription, page.metaTitle, page.title]);

  const whatsappMessage = encodeURIComponent(page.whatsappMessage);
  const pricingRows = routePricingTable(page.pricingRows || pricingData.oneWayPerKm);
  const pageFaq = [...faqItems.slice(0, 2), ...(page.faq || [])].slice(0, 5);
  const primaryVehicleCards = vehicles.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full bg-brand-cream px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink">
            SEO Landing Page
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-ocean">
              {page.heroNote || 'Fast booking and route support'}
            </p>
            <h1 className="font-display text-4xl leading-tight text-brand-ink sm:text-5xl">
              {page.title} | {businessInfo.brandName}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-brand-slate sm:text-lg">
              {page.metaDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`tel:${businessInfo.phones[0]}`} className="btn-primary">
              Call Now
            </a>
            <a href={`${socialLinks.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp Booking
            </a>
            <Link to="/pricing" className="btn-outline">
              View Pricing
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Coverage', value: 'Agra + Nearby Routes' },
              { label: 'Support', value: '24/7 Booking Help' },
              { label: 'Fleet', value: 'Sedan to Innova' },
            ].map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ocean">{item.label}</p>
                <p className="mt-2 font-display text-lg text-brand-ink">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
          <h2 className="font-display text-2xl text-brand-ink">Quick Overview</h2>
          <p className="mt-2 text-sm leading-6 text-brand-slate">
            {page.heroNote || businessInfo.tagline}
          </p>
          <div className="mt-5 grid gap-3">
            {pricingRows.slice(0, 3).map((row) => (
              <div key={`${row.label}-${row.detail}`} className="rounded-2xl bg-brand-mist p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-brand-ink">{row.label}</p>
                    <p className="mt-1 text-sm text-brand-slate">{row.note}</p>
                  </div>
                  <p className="shrink-0 font-display text-lg text-brand-ocean">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">Introduction</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-brand-slate sm:text-base">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-brand-ink">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-slate">
                {page.services.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl text-brand-ink">Why Choose Us</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-slate">
                {page.whyChooseUs.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-ocean" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">Fleet</p>
              <h3 className="mt-2 font-display text-2xl text-brand-ink">Choose the right cab</h3>
            </div>
            <Link to="/services" className="text-sm font-semibold text-brand-ocean hover:underline">
              Explore fleet
            </Link>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {primaryVehicleCards.map((vehicle) => (
              <article key={vehicle.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-brand-mist">
                <img src={vehicle.image} alt={vehicle.name} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-display text-lg text-brand-ink">{vehicle.name}</h4>
                  <p className="mt-1 text-sm font-semibold text-brand-ocean">{vehicle.seats}</p>
                  <p className="mt-2 text-sm text-brand-slate">{vehicle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">Pricing Table</p>
          <h3 className="mt-2 font-display text-2xl text-brand-ink">Sample fares and booking options</h3>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-3 bg-brand-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
              <span>Vehicle</span>
              <span>Fare</span>
              <span>Details</span>
            </div>
            <div className="divide-y divide-slate-200 bg-white">
              {pricingRows.map((row) => (
                <div key={`${row.label}-${row.detail}-${row.note}`} className="grid grid-cols-3 gap-3 px-4 py-4 text-sm text-brand-slate">
                  <span className="font-semibold text-brand-ink">{row.label}</span>
                  <span className="font-semibold text-brand-ocean">{row.detail}</span>
                  <span>{row.note}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-brand-slate">
            For the final price, route, date, and vehicle type can change the quote. Call or WhatsApp us for an exact confirmation before travel.
          </p>
        </article>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">Local SEO</p>
            <h3 className="mt-2 font-display text-2xl text-brand-ink">Google Map Embed</h3>
          </div>
          <iframe
            title={`${page.title} map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(businessInfo.location)}&output=embed`}
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">FAQ</p>
          <h3 className="mt-2 font-display text-2xl text-brand-ink">Common booking questions</h3>
          <div className="mt-5 space-y-4">
            {pageFaq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 bg-brand-mist px-4 py-3">
                <summary className="cursor-pointer font-semibold text-brand-ink">{item.question}</summary>
                <p className="mt-2 text-sm leading-6 text-brand-slate">{item.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-ocean">Related Links</p>
          <h3 className="mt-2 font-display text-2xl text-brand-ink">Interlinking for search and users</h3>
          <div className="mt-5 grid gap-3">
            {page.relatedLinks.map((link) => (
              <Link key={link.to} to={link.to} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-ocean hover:bg-brand-cream">
                {link.label}
              </Link>
            ))}
            <Link to="/pricing" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-ocean hover:bg-brand-cream">
              View full pricing page
            </Link>
            <Link to="/booking" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:border-brand-ocean hover:bg-brand-cream">
              Open booking form
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${businessInfo.phones[0]}`} className="btn-primary">Call Now</a>
            <a href={`${socialLinks.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp Booking
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
