import { useState } from 'react';
import { socialLinks, vehicles } from '../data/siteData';

function formatDateForWhatsApp(value) {
  if (!value) return '-';
  const [datePart, timePart] = value.split('T');
  if (!datePart || !timePart) return value;
  return `${datePart} at ${timePart}`;
}

function sanitizePassengers(value) {
  return String(value).replace(/\s+/g, '');
}

const initialState = {
  name: '',
  phone: '',
  pickup: '',
  drop: '',
  dateTime: '',
  vehicle: vehicles[0].name,
  passengers: '1',
};

export default function Booking() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      nextErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!formData.pickup.trim()) nextErrors.pickup = 'Pickup location is required.';
    if (!formData.drop.trim()) nextErrors.drop = 'Drop location is required.';
    if (!formData.dateTime) nextErrors.dateTime = 'Date and time are required.';
    if (!sanitizePassengers(formData.passengers).trim() || Number(sanitizePassengers(formData.passengers)) < 1) {
      nextErrors.passengers = 'Passenger count is required.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setMessage('Please fix highlighted fields and submit again.');
      return;
    }

    const snapshot = { ...formData };

    const waText = encodeURIComponent(`*New Booking — One Way*
Name: ${snapshot.name}
Phone: ${snapshot.phone}
Pickup: ${snapshot.pickup}
Drop: ${snapshot.drop}
Date: ${formatDateForWhatsApp(snapshot.dateTime)}
Car: ${snapshot.vehicle}
  Passengers: ${sanitizePassengers(snapshot.passengers)}`);

    window.open(`${socialLinks.whatsapp}?text=${waText}`, '_blank');
    setMessage('Booking details sent to WhatsApp. Our team will confirm shortly.');
    setErrors({});
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Reserve Your Cab</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Booking Form</h1>
      <p className="mt-3 text-sm text-brand-slate sm:text-base">
        Fill this form and submit. We redirect your booking details to WhatsApp for instant confirmation.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} className="input-field" />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div>
            <label className="label">Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} className="input-field" />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div>
            <label className="label">Pickup Location</label>
            <input name="pickup" value={formData.pickup} onChange={handleChange} className="input-field" />
            {errors.pickup && <p className="error-text">{errors.pickup}</p>}
          </div>
          <div>
            <label className="label">Drop Location</label>
            <input name="drop" value={formData.drop} onChange={handleChange} className="input-field" />
            {errors.drop && <p className="error-text">{errors.drop}</p>}
          </div>
          <div>
            <label className="label">Date & Time</label>
            <input name="dateTime" type="datetime-local" value={formData.dateTime} onChange={handleChange} className="input-field" />
            {errors.dateTime && <p className="error-text">{errors.dateTime}</p>}
          </div>
          <div>
            <label className="label">Vehicle</label>
            <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="input-field">
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
              name="passengers"
              type="number"
              min="1"
              value={formData.passengers}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, passengers: sanitizePassengers(event.target.value) }))
              }
              className={`input-field ${errors.passengers ? 'border-red-500 ring-2 ring-red-200' : ''}`}
            />
            {errors.passengers && <p className="error-text">{errors.passengers}</p>}
          </div>
        </div>

        <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
          Submit Booking
        </button>

        {message && <p className="mt-4 rounded-lg bg-brand-cream px-4 py-3 text-sm text-brand-ink">{message}</p>}
      </form>
    </section>
  );
}
