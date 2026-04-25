import { useState } from 'react';
import { vehicles } from '../data/siteData';

export default function Services() {
  const [failedImages, setFailedImages] = useState({});

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Fleet & Services</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Choose The Right Vehicle For Every Trip</h1>
      <p className="mt-3 max-w-2xl text-sm text-brand-slate sm:text-base">
        From solo city rides to premium family journeys, we provide clean, maintained vehicles with professional drivers.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {vehicles.map((vehicle) => (
          <article key={vehicle.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
            {!failedImages[vehicle.name] ? (
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-56 w-full object-cover"
                loading="lazy"
                onError={() => setFailedImages((prev) => ({ ...prev, [vehicle.name]: true }))}
              />
            ) : (
              <div className="flex h-56 w-full items-center justify-center bg-brand-mist p-4 text-center text-sm font-medium text-brand-ocean">
                {vehicle.name} photo will appear here.
              </div>
            )}
            <div className="p-6">
              <h2 className="font-display text-2xl text-brand-ink">{vehicle.name}</h2>
              <p className="mt-2 text-sm font-semibold text-brand-ocean">Seating Capacity: {vehicle.seats}</p>
              <p className="mt-3 text-sm text-brand-slate">{vehicle.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                <li>• Air-conditioned comfort</li>
                <li>• Professional chauffeur</li>
                <li>• Luggage friendly</li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
