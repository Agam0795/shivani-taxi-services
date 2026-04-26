import { businessInfo } from '../data/siteData';

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">About Us</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Trusted Travel Partner For Every Journey</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-display text-2xl text-brand-ink">Who We Are</h2>
          <p className="mt-3 text-sm text-brand-slate sm:text-base">
            {businessInfo.brandName} ({businessInfo.legalName}) is committed to safe, affordable, and reliable taxi
            services. We serve daily commuters, families, business travelers, and tourists with equal care.
          </p>
          <p className="mt-3 text-sm text-brand-slate sm:text-base">
            Every ride is managed with a focus on punctuality, clean vehicles, and respectful customer service.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-brand-cream/60 p-6 shadow-sm">
          <h2 className="font-display text-2xl text-brand-ink">Owner Information</h2>
          <img
            src={businessInfo.ownerImage}
            alt={businessInfo.owner}
            loading="lazy"
            className="mt-4 h-40 w-40 rounded-xl object-cover ring-2 ring-white"
          />
          <p className="mt-3 text-sm text-brand-slate sm:text-base">
            Owner: <span className="font-semibold text-brand-ink">{businessInfo.owner}</span>
          </p>
          <p className="mt-2 text-sm text-brand-slate sm:text-base">Location: {businessInfo.location}</p>
          <p className="mt-4 text-sm text-brand-slate sm:text-base">
            Our mission is to provide dependable and comfortable transport for every customer, every day.
          </p>
        </article>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-2xl text-brand-ink">Why Customers Trust Us</h2>
        <ul className="mt-4 grid gap-3 text-sm text-brand-slate sm:grid-cols-2 sm:text-base">
          <li>• Transparent fares and clear communication</li>
          <li>• Verified drivers and clean, maintained cars</li>
          <li>• On-time pickup for local and outstation trips</li>
          <li>• Easy booking via call, WhatsApp, or website form</li>
        </ul>
      </div>
    </section>
  );
}
