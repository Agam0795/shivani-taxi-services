import { useState } from 'react';
import StarRating from '../components/StarRating';
import { socialLinks } from '../data/siteData';

const initialReview = {
  name: '',
  phone: '',
  tripDate: '',
  rating: 0,
  review: '',
};

function formatDateForWhatsApp(value) {
  if (!value) return '-';
  const [datePart] = value.split('T');
  return datePart || value;
}

export default function Review() {
  const [formData, setFormData] = useState(initialReview);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '').slice(-10))) {
      nextErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!formData.rating) nextErrors.rating = 'Please select a star rating.';
    if (!formData.review.trim()) nextErrors.review = 'Please write your review.';

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
      setStatus('Please fix highlighted fields and submit again.');
      return;
    }

    const payload = encodeURIComponent(`*Customer Rating & Review*
Name: ${formData.name}
Phone: ${formData.phone}
Trip Date: ${formatDateForWhatsApp(formData.tripDate)}
Rating: ${formData.rating}/5
Review: ${formData.review}`);

    window.open(`${socialLinks.whatsapp}?text=${payload}`, '_blank');
    setStatus('Thanks! Your review has been prepared and sent to WhatsApp.');
    setErrors({});
    setFormData(initialReview);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Rate Our Service</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Rating & Review</h1>
      <p className="mt-3 text-sm text-brand-slate sm:text-base">
        Select stars, write your review, and submit. We send it directly to WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Your Name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div>
            <label className="label">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="10-digit phone number"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="label">Trip Date (Optional)</label>
            <input
              name="tripDate"
              type="date"
              value={formData.tripDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="label">Your Rating</label>
            <StarRating
              value={formData.rating}
              onChange={(value) => setFormData((prev) => ({ ...prev, rating: value }))}
            />
            <p className="mt-1 text-xs text-brand-slate">Click on stars to rate out of 5.</p>
            {errors.rating && <p className="error-text">{errors.rating}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="label">Write Your Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="5"
              className="input-field"
              placeholder="Tell us about your travel experience"
            />
            {errors.review && <p className="error-text">{errors.review}</p>}
          </div>
        </div>

        <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
          Submit Review on WhatsApp
        </button>

        {status && <p className="mt-4 rounded-lg bg-brand-cream px-4 py-3 text-sm text-brand-ink">{status}</p>}
      </form>
    </section>
  );
}