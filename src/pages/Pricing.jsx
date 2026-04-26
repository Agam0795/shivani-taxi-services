import { useEffect, useMemo, useState } from 'react';
import { paymentInfo, pricingData, socialLinks, vehicles } from '../data/siteData';

function parseFare(fareText) {
  return Number(String(fareText).replace(/[^\d]/g, ''));
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

function formatDateForWhatsApp(value) {
  if (!value) return '-';
  const [datePart, timePart] = value.split('T');
  if (!datePart || !timePart) return value;
  return `${datePart} at ${timePart}`;
}

function sanitizePassengers(value) {
  return String(value).replace(/\s+/g, '');
}

function parseRoute(routeText) {
  const [pickup = '', drop = ''] = String(routeText).split('->').map((item) => item.trim());
  return { pickup, drop };
}

function normalizeSpecialRouteVehicle(vehicle) {
  if (vehicle === 'Rumion / Ertiga') return 'Ertiga / Rumion';
  return vehicle;
}

function buildRouteComparison(routes) {
  const vehicleOrder = ['Sedan (Dzire)', 'Ertiga / Rumion', 'Innova Crysta'];
  const routeOrder = [
    'Agra -> Delhi',
    'Delhi -> Agra',
    'Agra -> Jaipur',
    'Jaipur -> Agra',
    'Agra -> Ghaziabad',
    'Ghaziabad -> Agra',
    'Agra -> Noida',
    'Noida -> Agra',
    'Agra -> Gurgaon',
    'Gurgaon -> Agra',
    'Agra -> Faridabad',
    'Faridabad -> Agra',
    'Agra -> Haridwar',
    'Haridwar -> Agra',
    'Agra -> Lucknow',
    'Lucknow -> Agra',
  ];

  const lookup = new Map();

  for (const item of routes) {
    const vehicle = normalizeSpecialRouteVehicle(item.vehicle);
    const key = `${vehicle}__${item.route}`;
    lookup.set(key, item.fare);
  }

  const vehicles = vehicleOrder.filter((vehicle) =>
    routes.some((item) => normalizeSpecialRouteVehicle(item.vehicle) === vehicle)
  );

  const routesByName = Array.from(
    new Set(routes.map((item) => item.route).filter((route) => routeOrder.includes(route)))
  ).sort((a, b) => routeOrder.indexOf(a) - routeOrder.indexOf(b));

  return { vehicles, routesByName, lookup };
}

function bookingLink(bookingForm, vehicle, route, fare) {
  const { pickup, drop } = parseRoute(route);
  const message = encodeURIComponent(`*New Booking - Fixed Route*
Name: ${bookingForm.name || '-'}
Phone: ${bookingForm.phone || '-'}
Pickup: ${bookingForm.pickup || pickup || '-'}
Drop: ${bookingForm.drop || drop || '-'}
Date: ${formatDateForWhatsApp(bookingForm.dateTime)}
Car: ${bookingForm.vehicleType || vehicle}
Passengers: ${sanitizePassengers(bookingForm.passengers) || '-'}
Fare: ${fare}`);
  return `${socialLinks.whatsapp}?text=${message}`;
}

function getRouteFare(routeId) {
  const route = fixedRoutes.find((item) => item.id === routeId);
  if (!route) return '';
  return formatCurrency(route.totalFare);
}

const fixedRoutes = pricingData.fixedRoutes.map((item) => {
  const totalFare = parseFare(item.fare);
  const advanceAmount = Math.round(totalFare * 0.3);
  return {
    ...item,
    totalFare,
    advanceAmount,
    remainingAmount: totalFare - advanceAmount,
    id: `${item.vehicle}-${item.route}-${totalFare}`,
  };
});

export default function Pricing() {
  const [selectedRouteId, setSelectedRouteId] = useState('');
  const [qrLoadFailed, setQrLoadFailed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [showCustomRouteForm, setShowCustomRouteForm] = useState(false);
  const [customFieldErrors, setCustomFieldErrors] = useState({});
  const [customMessage, setCustomMessage] = useState('');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    dateTime: '',
    vehicleType: '',
    passengers: '1',
  });
  const [customBookingForm, setCustomBookingForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    dateTime: '',
    vehicle: vehicles[0]?.name || '',
    passengers: '1',
  });

  const selectedRoute = useMemo(
    () => fixedRoutes.find((item) => item.id === selectedRouteId) ?? null,
    [selectedRouteId]
  );

  useEffect(() => {
    if (!selectedRouteId) return;
    const rafId = window.requestAnimationFrame(() => {
      const paymentSection = document.getElementById('fixed-route-payment');
      paymentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [selectedRouteId]);

  const upiLink = useMemo(() => {
    if (!selectedRoute || !paymentInfo.upiId) return '';
    return `upi://pay?pa=${encodeURIComponent(paymentInfo.upiId)}&pn=${encodeURIComponent(
      paymentInfo.payeeName
    )}&am=${selectedRoute.advanceAmount}&cu=INR&tn=${encodeURIComponent(`Advance for ${selectedRoute.route}`)}`;
  }, [selectedRoute]);

  const dynamicQrCodeSrc = useMemo(() => {
    if (!upiLink) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(upiLink)}`;
  }, [upiLink]);

  const qrCodeSrc = useMemo(() => {
    if (!selectedRoute) return '';
    if (paymentInfo.staticQrPath && !qrLoadFailed) {
      return paymentInfo.staticQrPath;
    }
    return dynamicQrCodeSrc;
  }, [dynamicQrCodeSrc, qrLoadFailed, selectedRoute]);

  const specialRouteComparison = useMemo(
    () => buildRouteComparison(pricingData.oneWaySpecialRoutes),
    []
  );

  const whatsappPaymentMessage = useMemo(() => {
    if (!selectedRoute) return socialLinks.whatsapp;

    const message = `Hello, I have made the advance payment.\n\nName: ${bookingForm.name || '-'}\nPhone: ${bookingForm.phone || '-'}\nPickup: ${bookingForm.pickup || '-'}\nDrop: ${bookingForm.drop || '-'}\nRoute: ${selectedRoute.route}\nDate: ${formatDateForWhatsApp(
      bookingForm.dateTime
    )}\nCar: ${bookingForm.vehicleType || selectedRoute.vehicle}\nPassengers: ${sanitizePassengers(bookingForm.passengers) || '-'}\nAdvance Paid: ${formatCurrency(
      selectedRoute.advanceAmount
    )}\n\nI am attaching the payment screenshot. Please confirm my booking.`;

    return `${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [bookingForm, selectedRoute]);

  const validateBookingFields = () => {
    const errors = {};
    if (!bookingForm.name.trim()) errors.name = 'Name is required';
    if (!bookingForm.phone.trim()) errors.phone = 'Phone is required';
    if (!bookingForm.pickup.trim()) errors.pickup = 'Pickup is required';
    if (!bookingForm.drop.trim()) errors.drop = 'Drop is required';
    if (!bookingForm.dateTime.trim()) errors.dateTime = 'Date & time is required';
    if (!bookingForm.vehicleType.trim()) errors.vehicleType = 'Vehicle type is required';
    const bookingPassengers = sanitizePassengers(bookingForm.passengers);
    if (!bookingPassengers.trim() || Number(bookingPassengers) < 1) {
      errors.passengers = 'Passenger count is required';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleWhatsAppConfirmation = () => {
    if (!validateBookingFields()) {
      return;
    }
    window.open(whatsappPaymentMessage, '_blank', 'noopener,noreferrer');
  };

  const copyPaymentDetails = async () => {
    if (!selectedRoute) return;

    const details = [
      `Route: ${selectedRoute.route}`,
      `Vehicle: ${bookingForm.vehicleType || selectedRoute.vehicle}`,
      `Total Fare: ${formatCurrency(selectedRoute.totalFare)}`,
      `Advance (30%): ${formatCurrency(selectedRoute.advanceAmount)}`,
      `Remaining: ${formatCurrency(selectedRoute.remainingAmount)}`,
      `Payee: ${paymentInfo.payeeName}`,
      ...(paymentInfo.upiId ? [`UPI ID: ${paymentInfo.upiId}`] : []),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(details);
      window.alert('Payment details copied.');
    } catch {
      window.alert('Could not copy automatically. Please copy manually from screen.');
    }
  };

  const chooseRouteForPayment = (routeId, routeVehicle) => {
    const route = fixedRoutes.find((item) => item.id === routeId);
    const routePoints = parseRoute(route?.route || '');
    setShowCustomRouteForm(false);
    setSelectedRouteId(routeId);
    setQrLoadFailed(false);
    setFieldErrors({});
    setBookingForm((prev) => ({
      ...prev,
      vehicleType: routeVehicle,
      pickup: routePoints.pickup,
      drop: routePoints.drop,
    }));
    const paymentSection = document.getElementById('fixed-route-payment');
    paymentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const validateCustomBookingFields = () => {
    const errors = {};
    if (!customBookingForm.name.trim()) errors.name = 'Name is required';
    if (!/^\d{10}$/.test(customBookingForm.phone.replace(/\D/g, '').slice(-10))) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!customBookingForm.pickup.trim()) errors.pickup = 'Pickup is required';
    if (!customBookingForm.drop.trim()) errors.drop = 'Drop is required';
    if (!customBookingForm.dateTime.trim()) errors.dateTime = 'Date & time is required';
    if (!customBookingForm.vehicle.trim()) errors.vehicle = 'Vehicle is required';
    const customPassengers = sanitizePassengers(customBookingForm.passengers);
    if (!customPassengers.trim() || Number(customPassengers) < 1) {
      errors.passengers = 'Passenger count is required';
    }
    setCustomFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCustomRouteBooking = (event) => {
    event.preventDefault();
    if (!validateCustomBookingFields()) {
      setCustomMessage('Please fix highlighted fields and submit again.');
      return;
    }

    const snapshot = { ...customBookingForm };

    const message = `*New Booking — One Way*\nName: ${snapshot.name}\nPhone: ${snapshot.phone}\nPickup: ${snapshot.pickup}\nDrop: ${snapshot.drop}\nDate: ${formatDateForWhatsApp(
      snapshot.dateTime
    )}\nCar: ${snapshot.vehicle}\nPassengers: ${sanitizePassengers(snapshot.passengers)}`;

    window.open(`${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setCustomMessage('Booking details sent to WhatsApp. Our team will confirm shortly.');
    setCustomFieldErrors({});
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-ocean">Transparent Fare Plans</p>
      <h1 className="mt-3 font-display text-4xl text-brand-ink">Pricing That Builds Trust</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-slate sm:text-base">
        Fixed-route fares and one-way rates are listed below. Pricing and booking are now on one page. Pay only 30%
        advance for fixed routes, or choose another location and send booking directly on WhatsApp.
      </p>

      <div className="mt-8">
        <h2 className="font-display text-3xl text-brand-ink">Fixed Routes</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fixedRoutes.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ocean">{item.vehicle}</p>
              <h3 className="mt-2 font-display text-xl text-brand-ink">{item.route}</h3>
              <p className="mt-2 text-2xl font-bold text-brand-ink">{formatCurrency(item.totalFare)}</p>
              <p className="mt-1 text-sm text-brand-slate">Advance: {formatCurrency(item.advanceAmount)} (30%)</p>
              <div className="mt-4 grid gap-2">
                <button
                  type="button"
                  onClick={() => chooseRouteForPayment(item.id, item.vehicle)}
                  className="btn-primary w-full justify-center"
                >
                  Pay 30% & Confirm
                </button>
                <button
                  type="button"
                  onClick={() => chooseRouteForPayment(item.id, item.vehicle)}
                  className="btn-outline w-full justify-center text-center"
                >
                  Book Without Payment
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <h2 className="font-display text-2xl text-brand-ink">Booking For Another Location</h2>
        <p className="mt-2 text-sm text-brand-slate">
          For non-fixed routes, click below and fill the form. Booking will be sent to WhatsApp in the same format.
        </p>
        <button
          type="button"
          onClick={() => {
            setShowCustomRouteForm((prev) => {
              const nextValue = !prev;
              if (nextValue) {
                setSelectedRouteId('');
              }
              return nextValue;
            });
          }}
          className="btn-primary mt-4"
        >
          {showCustomRouteForm ? 'Hide Another Location Form' : 'Another Location'}
        </button>

        {showCustomRouteForm && (
          <form onSubmit={handleCustomRouteBooking} className="mt-6 rounded-xl border border-slate-200 bg-brand-cream/40 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label">Name</label>
                <input
                  className={`input-field ${customFieldErrors.name ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.name}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, name: e.target.value }));
                    if (customFieldErrors.name) setCustomFieldErrors((prev) => ({ ...prev, name: '' }));
                  }}
                />
                {customFieldErrors.name && <p className="text-xs text-red-600">{customFieldErrors.name}</p>}
              </div>
              <div>
                <label className="label">Phone</label>
                <input
                  className={`input-field ${customFieldErrors.phone ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.phone}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, phone: e.target.value }));
                    if (customFieldErrors.phone) setCustomFieldErrors((prev) => ({ ...prev, phone: '' }));
                  }}
                />
                {customFieldErrors.phone && <p className="text-xs text-red-600">{customFieldErrors.phone}</p>}
              </div>
              <div>
                <label className="label">Pickup</label>
                <input
                  className={`input-field ${customFieldErrors.pickup ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.pickup}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, pickup: e.target.value }));
                    if (customFieldErrors.pickup) setCustomFieldErrors((prev) => ({ ...prev, pickup: '' }));
                  }}
                />
                {customFieldErrors.pickup && <p className="text-xs text-red-600">{customFieldErrors.pickup}</p>}
              </div>
              <div>
                <label className="label">Drop</label>
                <input
                  className={`input-field ${customFieldErrors.drop ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.drop}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, drop: e.target.value }));
                    if (customFieldErrors.drop) setCustomFieldErrors((prev) => ({ ...prev, drop: '' }));
                  }}
                />
                {customFieldErrors.drop && <p className="text-xs text-red-600">{customFieldErrors.drop}</p>}
              </div>
              <div>
                <label className="label">Date & Time</label>
                <input
                  type="datetime-local"
                  className={`input-field ${customFieldErrors.dateTime ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.dateTime}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, dateTime: e.target.value }));
                    if (customFieldErrors.dateTime) setCustomFieldErrors((prev) => ({ ...prev, dateTime: '' }));
                  }}
                />
                {customFieldErrors.dateTime && <p className="text-xs text-red-600">{customFieldErrors.dateTime}</p>}
              </div>
              <div>
                <label className="label">Car</label>
                <select
                  className={`input-field ${customFieldErrors.vehicle ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.vehicle}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, vehicle: e.target.value }));
                    if (customFieldErrors.vehicle) setCustomFieldErrors((prev) => ({ ...prev, vehicle: '' }));
                  }}
                >
                  {vehicles.map((vehicle) => (
                    <option key={vehicle.name} value={vehicle.name}>
                      {vehicle.name}
                    </option>
                  ))}
                </select>
                {customFieldErrors.vehicle && <p className="text-xs text-red-600">{customFieldErrors.vehicle}</p>}
              </div>
              <div>
                <label className="label">Passengers</label>
                <input
                  type="number"
                  min="1"
                  className={`input-field ${customFieldErrors.passengers ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={customBookingForm.passengers}
                  onChange={(e) => {
                    setCustomBookingForm((prev) => ({ ...prev, passengers: sanitizePassengers(e.target.value) }));
                    if (customFieldErrors.passengers) setCustomFieldErrors((prev) => ({ ...prev, passengers: '' }));
                  }}
                />
                {customFieldErrors.passengers && <p className="text-xs text-red-600">{customFieldErrors.passengers}</p>}
              </div>
            </div>

            <button type="submit" className="btn-primary mt-5 w-full justify-center sm:w-auto">
              Send Booking on WhatsApp
            </button>

            {customMessage && <p className="mt-4 rounded-lg bg-brand-cream px-4 py-3 text-sm text-brand-ink">{customMessage}</p>}
          </form>
        )}
      </section>

      {!showCustomRouteForm && selectedRoute && (
        <section id="fixed-route-payment" className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <h2 className="font-display text-3xl text-brand-ink">Advance Payment</h2>
          <p className="mt-2 text-sm text-brand-slate">
            Please pay {formatCurrency(selectedRoute.advanceAmount)} using QR code and send payment screenshot on
            WhatsApp to confirm booking.
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-brand-ink">1. Fill Booking Details</h3>
              <div className="mt-4 grid gap-3">
                <p className="rounded-lg border border-slate-200 bg-brand-cream/50 px-3 py-2 text-sm text-brand-ink">
                  Selected Route: <span className="font-semibold">{selectedRoute.route}</span>
                </p>

                <label className="label">Name</label>
                <input
                  className={`input-field ${fieldErrors.name ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.name}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, name: e.target.value }));
                    if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="Your full name"
                />
                {fieldErrors.name && <p className="text-xs text-red-600">{fieldErrors.name}</p>}

                <label className="label">Phone</label>
                <input
                  className={`input-field ${fieldErrors.phone ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.phone}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, phone: e.target.value }));
                    if (fieldErrors.phone) setFieldErrors((prev) => ({ ...prev, phone: '' }));
                  }}
                  placeholder="Phone number"
                />
                {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}

                <label className="label">Pickup</label>
                <input
                  className={`input-field ${fieldErrors.pickup ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.pickup}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, pickup: e.target.value }));
                    if (fieldErrors.pickup) setFieldErrors((prev) => ({ ...prev, pickup: '' }));
                  }}
                  placeholder="Pickup location"
                />
                {fieldErrors.pickup && <p className="text-xs text-red-600">{fieldErrors.pickup}</p>}

                <label className="label">Drop</label>
                <input
                  className={`input-field ${fieldErrors.drop ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.drop}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, drop: e.target.value }));
                    if (fieldErrors.drop) setFieldErrors((prev) => ({ ...prev, drop: '' }));
                  }}
                  placeholder="Drop location"
                />
                {fieldErrors.drop && <p className="text-xs text-red-600">{fieldErrors.drop}</p>}

                <label className="label">Date & Time</label>
                <input
                  type="datetime-local"
                  className={`input-field ${fieldErrors.dateTime ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.dateTime}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, dateTime: e.target.value }));
                    if (fieldErrors.dateTime) setFieldErrors((prev) => ({ ...prev, dateTime: '' }));
                  }}
                />
                {fieldErrors.dateTime && <p className="text-xs text-red-600">{fieldErrors.dateTime}</p>}

                <label className="label">Vehicle Type</label>
                <input
                  className={`input-field ${fieldErrors.vehicleType ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.vehicleType}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, vehicleType: e.target.value }));
                    if (fieldErrors.vehicleType) setFieldErrors((prev) => ({ ...prev, vehicleType: '' }));
                  }}
                  placeholder="Vehicle type"
                />
                {fieldErrors.vehicleType && <p className="text-xs text-red-600">{fieldErrors.vehicleType}</p>}

                <label className="label">Passengers</label>
                <input
                  type="number"
                  min="1"
                  className={`input-field ${fieldErrors.passengers ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                  value={bookingForm.passengers}
                  onChange={(e) => {
                    setBookingForm((prev) => ({ ...prev, passengers: sanitizePassengers(e.target.value) }));
                    if (fieldErrors.passengers) setFieldErrors((prev) => ({ ...prev, passengers: '' }));
                  }}
                  placeholder="Passenger count"
                />
                {fieldErrors.passengers && <p className="text-xs text-red-600">{fieldErrors.passengers}</p>}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-brand-ink">2. Booking Summary & Payment</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-brand-ocean/20 bg-brand-mist p-4">
                  <p className="text-sm text-brand-slate">Route</p>
                  <p className="font-semibold text-brand-ink">{selectedRoute.route}</p>
                  <p className="mt-2 text-sm text-brand-slate">Total Fare</p>
                  <p className="font-semibold text-brand-ink">{formatCurrency(selectedRoute.totalFare)}</p>
                  <p className="mt-2 text-sm text-brand-slate">Advance Payment (30%)</p>
                  <p className="text-xl font-bold text-brand-ink">{formatCurrency(selectedRoute.advanceAmount)}</p>
                  <p className="mt-2 text-sm text-brand-slate">Remaining Amount (Pay Later)</p>
                  <p className="font-semibold text-brand-ink">{formatCurrency(selectedRoute.remainingAmount)}</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-3 text-sm font-semibold text-brand-ink">Scan QR to pay advance</p>
                  <img
                    src={qrCodeSrc}
                    alt="UPI payment QR code"
                    className="mx-auto h-64 w-64 rounded-lg border border-slate-200 bg-white p-2"
                    loading="lazy"
                    onError={() => setQrLoadFailed(true)}
                  />
                  <p className="mt-3 text-xs text-brand-slate">Payment Receiver: {paymentInfo.payeeName}</p>
                  {paymentInfo.upiId && (
                    <>
                      <p className="mt-1 text-xs text-brand-slate">UPI ID: {paymentInfo.upiId}</p>
                      <a href={upiLink} className="btn-outline mt-3 w-full justify-center text-center">
                        Pay via UPI App
                      </a>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={copyPaymentDetails}
                    className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-brand-ink transition hover:bg-slate-100"
                  >
                    Copy Payment Details
                  </button>
                </div>

                <div className="rounded-xl bg-[#e9fff2] p-4 text-sm text-brand-ink">
                  Please pay {formatCurrency(selectedRoute.advanceAmount)} on this QR code and send payment screenshot
                  on WhatsApp to confirm booking.
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppConfirmation}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Send Payment Screenshot on WhatsApp
                </button>

                <a
                  href={bookingLink(
                    bookingForm,
                    bookingForm.vehicleType || selectedRoute.vehicle,
                    selectedRoute.route,
                    getRouteFare(selectedRoute.id)
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full justify-center text-center"
                >
                  Book Without Payment on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-4 font-display text-2xl text-brand-ink">Round Trip Per KM Rate</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-cream/60 text-brand-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Vehicle</th>
                <th className="px-4 py-3 font-semibold">Rate</th>
                <th className="px-4 py-3 font-semibold">Condition</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.oneWayPerKm.map((item) => (
                <tr key={item.vehicle} className="border-t border-slate-100">
                  <td className="px-4 py-3 text-brand-slate">{item.vehicle}</td>
                  <td className="px-4 py-3 text-brand-slate">{item.rate}</td>
                  <td className="px-4 py-3 text-brand-slate">{item.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <h2 className="border-b border-slate-200 px-5 py-4 font-display text-2xl text-brand-ink">One-Way Special Routes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-cream/60 text-brand-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Route</th>
                {specialRouteComparison.vehicles.map((vehicle) => (
                  <th key={vehicle} className="px-4 py-3 font-semibold">{vehicle}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specialRouteComparison.routesByName.map((route) => (
                <tr key={route} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-brand-ink">{route}</td>
                  {specialRouteComparison.vehicles.map((vehicle) => {
                    const fare = specialRouteComparison.lookup.get(`${vehicle}__${route}`);
                    return (
                      <td key={`${vehicle}-${route}`} className="px-4 py-3 text-brand-slate">
                        {fare ?? '—'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
