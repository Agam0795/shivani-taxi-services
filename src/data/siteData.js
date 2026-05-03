export const businessInfo = {
  brandName: 'Shivani Taxi Services',
  legalName: 'Shivani Tour and Travels',
  owner: 'Arun Yadav',
  ownerImage: '/owner.jpeg',
  homeOwnerImage: '/owner-home-page.jpeg',
  phones: ['+918279760861', '+919368700598'],
  displayPhones: ['+91 82797 60861', '+91 9368700598'],
  email: 'arunyadav1574@gmail.com',
  tagline: 'Safe • Affordable • On-Time Travel',
  location: 'DayalBagh, Agra, Uttar Pradesh, India-282005',
};

export const socialLinks = {
  whatsapp: 'https://wa.me/919368700598',
  facebook: 'https://www.facebook.com/share/1CP7k2zn1R/',
  instagram: 'https://www.instagram.com/shivani_taxi_service?utm_source=qr&igsh=bGNsbGl6Ymx6NDgx',
};
export const paymentInfo = {
  // QR-first flow: keep empty if you only want scan-and-pay from static QR.
  upiId: 'arunyadav1574@ybl',
  payeeName: 'ARUN YADAV',
  staticQrPath: '/payment-qr.jpg',
};
export const vehicles = [
  {
    name: 'Sedan (Dzire)',
    seats: '4 + Driver',
    description:
      'Comfortable and fuel-efficient sedan for airport rides, city transfers, and business travel.',
    image: '/fleet/sedan-dzire-up80ht5290.jpg',
    fallbackImage:
      '/fleet/sedan-dzire-up80ht5290.jpg',
    photoTag: 'Related Fleet Photo: Dzire',
  },
  {
    name: 'Aura',
    seats: '4 + Driver',
    description:
      'Modern and stylish compact sedan offering comfort and efficiency for city rides and short trips.',
    image: '/fleet/aura.jpeg',
    fallbackImage:
      '/fleet/aura.jpeg',
    photoTag: 'Related Fleet Photo: Aura',
  },
  {
    name: 'Ertiga / Rumion',
    seats: '6 + Driver',
    description:
      'Ideal family MUV with spacious seating and luggage space for short and long trips.',
    image: '/fleet/Rumion.jpg',
    fallbackImage:
      '/fleet/Rumion.jpg',
    photoTag: 'Related Fleet Photo: Rumion / Ertiga',
  },
  {
    name: 'Innova Crysta',
    seats: '7 + Driver',
    description:
      'Premium MPV for corporate tours, outstation routes, and high-comfort group journeys.',
    image: '/fleet/innova-crysta.jpeg',
    fallbackImage:
      '/fleet/innova-crysta.jpeg',
    photoTag: 'Related Fleet Photo: Innova Crysta',
  },
];

export const pricingData = {
  fixedRoutes: [
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Delhi', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Delhi -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Ghaziabad', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Ghaziabad -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Noida', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Noida -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Gurgaon', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Gurgaon -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Faridabad', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Faridabad -> Agra', fare: '₹2,699' },
    { vehicle: 'Aura', route: 'Agra -> Delhi', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Delhi -> Agra', fare: '₹2,899' },
    { vehicle: 'Aura', route: 'Agra -> Ghaziabad', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Ghaziabad -> Agra', fare: '₹2,899' },
    { vehicle: 'Aura', route: 'Agra -> Noida', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Noida -> Agra', fare: '₹2,899' },
    { vehicle: 'Aura', route: 'Agra -> Gurgaon', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Gurgaon -> Agra', fare: '₹2,899' },
    { vehicle: 'Aura', route: 'Agra -> Faridabad', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Faridabad -> Agra', fare: '₹2,899' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Delhi', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Delhi -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Jaipur', fare: '₹7,000' },
    { vehicle: 'Innova Crysta', route: 'Jaipur -> Agra', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Ghaziabad', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Ghaziabad -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Noida', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Noida -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Gurgaon', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Gurgaon -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Faridabad', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Faridabad -> Agra', fare: '₹6,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Jaipur', fare: '₹3,499' },
    { vehicle: 'Sedan (Dzire)', route: 'Jaipur -> Agra', fare: '₹3,199' },
    { vehicle: 'Aura', route: 'Agra -> Jaipur', fare: '₹3,499' },
    { vehicle: 'Aura', route: 'Jaipur -> Agra', fare: '₹3,199' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Haridwar', fare: '₹7,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Haridwar -> Agra', fare: '₹6,000' },
    { vehicle: 'Rumion / Ertiga', route: 'Agra -> Haridwar', fare: '₹8,000' },
    { vehicle: 'Rumion / Ertiga', route: 'Haridwar -> Agra', fare: '₹7,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Lucknow', fare: '₹6,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Lucknow -> Agra', fare: '₹5,000' },
    { vehicle: 'Aura', route: 'Agra -> Lucknow', fare: '₹6,000' },
    { vehicle: 'Aura', route: 'Lucknow -> Agra', fare: '₹5,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Lucknow', fare: '₹7,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Lucknow -> Agra', fare: '₹6,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Delhi', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Delhi -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Ghaziabad', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Ghaziabad -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Noida', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Noida -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Gurgaon', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Gurgaon -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Faridabad', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Faridabad -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Jaipur', fare: '₹4,499' },
    { vehicle: 'Ertiga / Rumion', route: 'Jaipur -> Agra', fare: '₹4,199' },
  ],
  oneWayPerKm: [
    {
      vehicle: 'Sedan (Dzire)',
      rate: '₹10 / KM',
      condition: 'Minimum 300 KM running compulsory per day',
    },
    {
      vehicle: 'Rumion / Ertiga',
      rate: '₹14 / KM',
      condition: 'Minimum 300 KM running compulsory per day',
    },
    {
      vehicle: 'Innova Crysta',
      rate: '₹18 / KM',
      condition: 'Minimum 300 KM running compulsory per day',
    },
  ],
  oneWaySpecialRoutes: [
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Delhi', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Delhi -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Ghaziabad', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Ghaziabad -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Noida', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Noida -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Gurgaon', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Gurgaon -> Agra', fare: '₹2,699' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Faridabad', fare: '₹2,999' },
    { vehicle: 'Sedan (Dzire)', route: 'Faridabad -> Agra', fare: '₹2,699' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Delhi', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Delhi -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Jaipur', fare: '₹7,000' },
    { vehicle: 'Innova Crysta', route: 'Jaipur -> Agra', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Ghaziabad', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Ghaziabad -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Noida', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Noida -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Gurgaon', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Gurgaon -> Agra', fare: '₹6,000' },
    { vehicle: 'Innova Crysta', route: 'Agra -> Faridabad', fare: '₹6,500' },
    { vehicle: 'Innova Crysta', route: 'Faridabad -> Agra', fare: '₹6,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Jaipur', fare: '₹3,499' },
    { vehicle: 'Sedan (Dzire)', route: 'Jaipur -> Agra', fare: '₹3,199' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Haridwar', fare: '₹7,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Haridwar -> Agra', fare: '₹6,000' },
    { vehicle: 'Rumion / Ertiga', route: 'Agra -> Haridwar', fare: '₹8,000' },
    { vehicle: 'Rumion / Ertiga', route: 'Haridwar -> Agra', fare: '₹7,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Agra -> Lucknow', fare: '₹6,000' },
    { vehicle: 'Sedan (Dzire)', route: 'Lucknow -> Agra', fare: '₹5,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Lucknow', fare: '₹7,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Lucknow -> Agra', fare: '₹6,000' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Delhi', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Delhi -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Ghaziabad', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Ghaziabad -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Noida', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Noida -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Gurgaon', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Gurgaon -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Faridabad', fare: '₹3,999' },
    { vehicle: 'Ertiga / Rumion', route: 'Faridabad -> Agra', fare: '₹3,599' },
    { vehicle: 'Ertiga / Rumion', route: 'Agra -> Jaipur', fare: '₹4,499' },
    { vehicle: 'Ertiga / Rumion', route: 'Jaipur -> Agra', fare: '₹4,199' },
  ],
  notes: [
    'Fares are as provided by Shivani Taxi Services and can vary on peak dates.',
    'Toll, state tax, and parking are extra unless specifically included.',
    'For custom routes, call or WhatsApp for the best quote.',
  ],
};

export const testimonials = [
  {
    name: 'Priya Sharma',
    quote:
      'Professional driver, clean car, and very punctual service. Booking was smooth on WhatsApp.',
  },
  {
    name: 'Rahul Singh',
    quote:
      'Used Shivani Taxi Services for family travel. Safe driving and transparent pricing.',
  },
  {
    name: 'Neha Verma',
    quote:
      'Excellent support and on-time pickup for airport transfer. Highly recommended.',
  },
];

export const faqItems = [
  {
    question: 'How can I confirm my booking?',
    answer:
      'You can book via call, WhatsApp, or the booking form. Our team confirms your ride quickly by phone.',
  },
  {
    question: 'Do you provide outstation and one-way trips?',
    answer:
      'Yes. We provide local, outstation, one-way, and round trips with multiple vehicle options.',
  },
  {
    question: 'Are your drivers verified?',
    answer:
      'Yes, all drivers are verified and experienced, with focus on safety and professional behavior.',
  },
  {
    question: 'Can I schedule a cab in advance?',
    answer:
      'Absolutely. We recommend advance booking to ensure vehicle availability at your preferred time.',
  },
];
