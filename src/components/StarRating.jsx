import { useState } from 'react';

const starValues = [1, 2, 3, 4, 5];

function StarIcon({ active }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-8 w-8 transition ${active ? 'text-brand-gold' : 'text-slate-300'}`}
      aria-hidden="true"
    >
      <path d="M12 1.75 15.02 8l6.9.99-5 4.81 1.2 6.85L12 17.42 5.88 20.65l1.2-6.85-5-4.81L8.98 8 12 1.75Z" />
    </svg>
  );
}

export default function StarRating({ value, onChange }) {
  const [hoverValue, setHoverValue] = useState(0);
  const highlightedValue = hoverValue || value;

  return (
    <div className="flex items-center gap-1" onMouseLeave={() => setHoverValue(0)}>
      {starValues.map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHoverValue(star)}
          className="rounded-md p-0.5 outline-none transition hover:scale-105 focus:ring-2 focus:ring-brand-ocean/30"
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
          title={`${star} star${star > 1 ? 's' : ''}`}
        >
          <StarIcon active={highlightedValue >= star} />
        </button>
      ))}
    </div>
  );
}