import { pricingData, businessInfo, faqItems } from './siteData';

const sharedWhyChooseUs = [
  'Affordable pricing with clear quotes before confirmation.',
  'Verified, experienced drivers for safe highway and city travel.',
  '24/7 booking support by call and WhatsApp.',
  'Clean AC vehicles maintained for comfort and reliability.',
];

const sharedServices = [
  'Local rides across Agra and nearby neighborhoods.',
  'Airport pickup and drop support with timely dispatch.',
  'Outstation taxi service for family and business travel.',
  'One way and round trip cab booking with flexible scheduling.',
];

const generalPricingRows = pricingData.oneWayPerKm.map((item) => ({
  label: item.vehicle,
  detail: item.rate,
  note: item.condition,
}));

function buildPage({
  path,
  title,
  metaTitle,
  metaDescription,
  intro,
  services = sharedServices,
  whyChooseUs = sharedWhyChooseUs,
  pricingRows = generalPricingRows,
  faq = [],
  relatedLinks = [],
  whatsappMessage,
  heroNote,
}) {
  return {
    path,
    title,
    metaTitle,
    metaDescription,
    intro,
    services,
    whyChooseUs,
    pricingRows,
    faq,
    relatedLinks,
    whatsappMessage,
    heroNote,
  };
}

const locationFaq = [
  {
    question: 'Do you provide pickup from hotels, homes, and railway stations?',
    answer:
      'Yes, we provide pickup from homes, hotels, railway stations, and other local points in Agra and nearby areas.',
  },
  {
    question: 'Can I book a cab in advance for a wedding or family trip?',
    answer:
      'Yes, advance booking is recommended for events, family travel, and festival dates so the right vehicle is reserved for you.',
  },
];

const routeFaq = [
  {
    question: 'Do you offer one way and round trip options on this route?',
    answer:
      'Yes, we support both one way and round trip booking depending on your travel plan.',
  },
  {
    question: 'Can I get a quote for a different pickup or drop point?',
    answer:
      'Yes, custom pickup and drop points can be quoted over WhatsApp or by phone.',
  },
];

const highIntentFaq = [
  {
    question: 'How fast can you confirm a booking?',
    answer:
      'Most bookings are confirmed quickly after call or WhatsApp details are shared.',
  },
  {
    question: 'Do you share a final fare before the trip starts?',
    answer:
      'Yes, we share the applicable fare and trip details before confirmation so there are no surprises.',
  },
];

function makeRoutePricingRows(routeLabel, fallbackNote) {
  const rows = pricingData.fixedRoutes
    .filter((item) => item.route.includes(routeLabel))
    .map((item) => ({
      label: item.vehicle,
      detail: item.fare,
      note: item.route,
    }));

  if (rows.length > 0) return rows;

  return [
    { label: 'Sedan (Dzire)', detail: 'Quote on request', note: fallbackNote },
    { label: 'Ertiga / Rumion', detail: 'Quote on request', note: fallbackNote },
    { label: 'Innova Crysta', detail: 'Quote on request', note: fallbackNote },
  ];
}

export const seoPages = [
  buildPage({
    path: '/agra-taxi-service',
    title: 'Agra Taxi Service',
    metaTitle: 'Agra Taxi Service - Affordable & 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book a reliable Agra taxi service with verified drivers, local rides, airport transfers, and outstation travel support.',
    intro: [
      'Looking for a reliable taxi service in Agra? Shivani Taxi Services provides fast, safe, and affordable cab booking for local travel, airport transfers, and outstation journeys. Our team keeps the booking process simple so you can confirm a ride without wasting time on repeated calls or unclear pricing.',
      'This page is designed for customers who want dependable Agra taxi service with clean vehicles, experienced chauffeurs, and support when plans change. Whether you need an urgent pickup, a family cab, or a planned return trip, we can help with quick confirmation and route guidance.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Dayalbagh Taxi Service', to: '/dayalbagh-taxi-service' },
      { label: 'Best Taxi Service in Agra', to: '/best-taxi-service-in-agra' },
      { label: 'Local Cab Service Agra', to: '/local-cab-service-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want to book Agra Taxi Service.',
    heroNote: businessInfo.location,
  }),
  buildPage({
    path: '/dayalbagh-taxi-service',
    title: 'Dayalbagh Taxi Service',
    metaTitle: 'Dayalbagh Taxi Service in Agra - Local Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Need a Dayalbagh taxi service in Agra? Book local rides, airport transfers, and outstation cabs with verified drivers and quick support.',
    intro: [
      'Looking for a reliable taxi service in Agra for Dayalbagh travel? We provide local cab booking for school runs, office visits, market trips, and family outings with quick WhatsApp confirmation.',
      'Many customers search for a Dayalbagh taxi service because they need a cab that arrives on time and understands local pickup points. Our team helps with timely dispatch, route clarity, and vehicle selection for solo passengers, families, and small groups.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Local Cab Service Agra', to: '/local-cab-service-agra' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need a Dayalbagh taxi service.',
    heroNote: 'Popular for local rides, return trips, and scheduled pickups.',
  }),
  buildPage({
    path: '/tajganj-taxi-service',
    title: 'Taj Ganj Taxi Service',
    metaTitle: 'Taj Ganj Taxi Service in Agra - Local Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book Taj Ganj taxi service for sightseeing, hotel pickups, station transfers, and local travel in Agra.',
    intro: [
      'Looking for a reliable taxi service in Agra around Taj Ganj? Shivani Taxi Services offers hotel pickup, sightseeing support, and local cab booking for visitors and residents.',
      'Taj Ganj is one of the most searched travel areas in Agra, so a dedicated taxi service helps you move between hotels, monuments, restaurants, and stations without delay. We keep the process straightforward and can arrange both short local rides and longer city trips.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Best Taxi Service in Agra', to: '/best-taxi-service-in-agra' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need a Taj Ganj taxi service.',
    heroNote: 'Ideal for hotel guests, local sightseeing, and station transfers.',
  }),
  buildPage({
    path: '/agra-cantt-taxi-service',
    title: 'Agra Cantt Taxi Service',
    metaTitle: 'Agra Cantt Taxi Service - Reliable Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Need a cab from Agra Cantt? Book a reliable Agra Cantt taxi service for station pickup, drop, and city travel.',
    intro: [
      'Looking for a reliable taxi service in Agra near Agra Cantt? We provide quick pickup and drop support for railway station travelers, business passengers, and family trips.',
      'Agra Cantt taxi service is often needed for early trains, late arrivals, and last-minute local movement. We help you reserve the right cab type in advance so your ride starts smoothly and you avoid waiting after reaching the station.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Local Cab Service Agra', to: '/local-cab-service-agra' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need an Agra Cantt taxi service.',
    heroNote: 'Best for station pickup, station drop, and city transfers.',
  }),
  buildPage({
    path: '/airport-taxi-agra',
    title: 'Airport Taxi Service Agra',
    metaTitle: 'Airport Taxi Service Agra - 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book airport taxi service in Agra for timely pickup, drop, and verified driver support with easy WhatsApp booking.',
    intro: [
      'Looking for a reliable taxi service in Agra for airport travel? We arrange airport pickup and drop rides with timely dispatch, so you can travel without last-minute stress.',
      'Airport taxi service in Agra is useful for business travel, family flights, and late-night departures. Our vehicles are maintained for comfort, and our drivers track your schedule closely so the ride stays on time and dependable.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Local Cab Service Agra', to: '/local-cab-service-agra' },
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need an airport taxi service in Agra.',
    heroNote: 'Useful for pickups, drops, and flight-time planning.',
  }),
  buildPage({
    path: '/local-cab-service-agra',
    title: 'Local Cab Service Agra',
    metaTitle: 'Local Cab Service Agra - Fast & Affordable Booking | Shivani Taxi Services',
    metaDescription:
      'Need local cab service in Agra? Book affordable city rides, hotel transfers, market trips, and verified driver support.',
    intro: [
      'Looking for a reliable taxi service in Agra for short-distance travel? Our local cab service covers daily city movement, family pickups, shopping trips, and hotel transfers.',
      'Customers use this page when they want quick local booking without uncertainty. We keep the conversation direct, share the available car type, and help you confirm the trip with simple WhatsApp support.',
    ],
    faq: [...faqItems.slice(0, 2), ...locationFaq],
    relatedLinks: [
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Dayalbagh Taxi Service', to: '/dayalbagh-taxi-service' },
      { label: 'Cheap Taxi Service in Agra', to: '/cheap-taxi-service-in-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need a local cab service in Agra.',
    heroNote: 'Designed for city rides, errands, and regular travel.',
  }),
  buildPage({
    path: '/outstation-taxi-agra',
    title: 'Outstation Taxi Service',
    metaTitle: 'Outstation Taxi Service in Agra - Safe & Affordable Booking | Shivani Taxi Services',
    metaDescription:
      'Book outstation taxi service from Agra for Delhi, Jaipur, Mathura, Vrindavan, Lucknow, and other long-distance trips.',
    intro: [
      'Looking for a reliable taxi service in Agra for long-distance travel? Our outstation taxi service is built for family trips, work travel, and intercity journeys with verified drivers and clear fare communication.',
      'Outstation bookings often need the right vehicle and route planning. We help with sedan, Ertiga, and Innova options so you can choose a cab that matches passenger count, luggage, and comfort expectations.',
    ],
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Agra to Delhi Taxi', to: '/agra-to-delhi-taxi' },
      { label: 'Agra to Jaipur Taxi', to: '/agra-to-jaipur-taxi' },
      { label: 'One Way Cab Booking', to: '/one-way-cab-booking' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need an outstation taxi from Agra.',
    heroNote: 'Best for family travel, business travel, and long routes.',
  }),
  buildPage({
    path: '/one-way-cab-booking',
    title: 'One Way Cab Booking',
    metaTitle: 'One Way Cab Booking from Agra - Best Rates | Shivani Taxi Services',
    metaDescription:
      'Book one way cab from Agra with transparent fares, verified drivers, and quick confirmation for long-distance travel.',
    intro: [
      'Looking for a reliable taxi service in Agra with one way pricing? Our one way cab booking option is ideal when you are traveling to Delhi, Jaipur, Noida, Lucknow, or another destination and do not need a return trip on the same booking.',
      'One way travel saves money and simplifies planning. We explain the fare structure in advance and help you choose the right cab type for your route so the booking matches your exact travel need.',
    ],
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
      { label: 'Agra to Delhi Taxi', to: '/agra-to-delhi-taxi' },
      { label: 'Agra to Jaipur Taxi', to: '/agra-to-jaipur-taxi' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need one way cab booking from Agra.',
    heroNote: 'Useful for single-direction travel with no return trip.',
  }),
  buildPage({
    path: '/agra-to-delhi-taxi',
    title: 'Agra to Delhi Taxi',
    metaTitle: 'Agra to Delhi Taxi - Affordable & 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book Agra to Delhi taxi with affordable fares, verified drivers, and 24/7 support for one way and round trip travel.',
    intro: [
      'Looking for a reliable taxi service in Agra for the Delhi route? Our Agra to Delhi taxi page is built for travelers who want a safe, direct, and easy booking process with transparent fare details.',
      'This route is one of the most important search intents for Agra travelers. Whether you are heading to Delhi for airport travel, office work, family visits, or medical appointments, we help you confirm the cab type and departure time quickly.',
    ],
    pricingRows: makeRoutePricingRows('Agra -> Delhi', 'Use the fare table below for the most common Delhi route options.'),
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Agra to Jaipur Taxi', to: '/agra-to-jaipur-taxi' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
      { label: 'Airport Taxi Service Agra', to: '/airport-taxi-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want to book an Agra to Delhi taxi.',
    heroNote: 'Popular for airport transfers, business travel, and return trips.',
  }),
  buildPage({
    path: '/agra-to-jaipur-taxi',
    title: 'Agra to Jaipur Taxi',
    metaTitle: 'Agra to Jaipur Taxi - Affordable & 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book Agra to Jaipur taxi with clean cars, transparent fares, and verified drivers for one way or round trip travel.',
    intro: [
      'Looking for a reliable taxi service in Agra for Jaipur travel? Our Agra to Jaipur taxi service is suitable for family trips, weekend plans, and business visits where comfort and timing matter.',
      'We help customers who compare Agra to Jaipur taxi options online and want a simple way to confirm the right cab. From pickup scheduling to vehicle selection, the goal is to keep the trip stress-free and clear from the first message.',
    ],
    pricingRows: makeRoutePricingRows('Agra -> Jaipur', 'Use the fare table below for common Jaipur route options.'),
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Agra to Delhi Taxi', to: '/agra-to-delhi-taxi' },
      { label: 'Agra to Mathura Taxi', to: '/agra-to-mathura-taxi' },
      { label: 'Agra to Vrindavan Taxi', to: '/agra-to-vrindavan-taxi' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want to book an Agra to Jaipur taxi.',
    heroNote: 'Suitable for family tours, business trips, and holiday travel.',
  }),
  buildPage({
    path: '/agra-to-mathura-taxi',
    title: 'Agra to Mathura Taxi',
    metaTitle: 'Agra to Mathura Taxi - Affordable & 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book Agra to Mathura taxi for temple visits, family travel, and quick intercity rides with reliable driver support.',
    intro: [
      'Looking for a reliable taxi service in Agra for a short intercity journey? Agra to Mathura taxi booking is ideal for temple visits, family outings, and same-day travel plans.',
      'This route works best when you want a comfortable cab with quick confirmation and support for both pickup and return timing. We make it easy to book the right vehicle without depending on uncertain last-minute arrangements.',
    ],
    pricingRows: makeRoutePricingRows('Agra -> Mathura', 'Custom quote available for Agra to Mathura and return travel.'),
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Agra to Vrindavan Taxi', to: '/agra-to-vrindavan-taxi' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want to book an Agra to Mathura taxi.',
    heroNote: 'Good for quick pilgrim travel and day trips.',
  }),
  buildPage({
    path: '/agra-to-vrindavan-taxi',
    title: 'Agra to Vrindavan Taxi',
    metaTitle: 'Agra to Vrindavan Taxi - Affordable & 24/7 Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Book Agra to Vrindavan taxi for temple visits, family travel, and same-day cab bookings with quick confirmation.',
    intro: [
      'Looking for a reliable taxi service in Agra for Vrindavan travel? Our Agra to Vrindavan taxi page is designed for customers who want a direct, comfortable cab for devotional trips and family journeys.',
      'Vrindavan bookings often require flexible timing, so we keep the process simple and share clear route support before confirmation. You can choose a vehicle according to passenger count and luggage needs.',
    ],
    pricingRows: makeRoutePricingRows('Agra -> Vrindavan', 'Custom quote available for Agra to Vrindavan and return travel.'),
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'Agra to Mathura Taxi', to: '/agra-to-mathura-taxi' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
      { label: 'Best Taxi Service in Agra', to: '/best-taxi-service-in-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want to book an Agra to Vrindavan taxi.',
    heroNote: 'Best for temple visits, day trips, and family travel.',
  }),
  buildPage({
    path: '/best-taxi-service-in-agra',
    title: 'Best Taxi Service in Agra',
    metaTitle: 'Best Taxi Service in Agra - Affordable & 24/7 Booking | Shivani Taxi Services',
    metaDescription:
      'Book the best taxi service in Agra for local rides, airport transfers, and outstation travel with verified drivers and fast support.',
    intro: [
      'Looking for a reliable taxi service in Agra that is easy to book and dependable on the road? Shivani Taxi Services is built for customers who want a simple, professional, and affordable cab experience.',
      'This high-intent page is useful when a customer compares taxi companies and wants the best option for clean vehicles, verified drivers, on-time pickup, and transparent support. We handle local, airport, and outstation travel from a single contact point.',
    ],
    faq: [...faqItems.slice(0, 2), ...highIntentFaq],
    relatedLinks: [
      { label: 'Cheap Taxi Service in Agra', to: '/cheap-taxi-service-in-agra' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want the best taxi service in Agra.',
    heroNote: 'Useful for customers comparing trusted taxi providers.',
  }),
  buildPage({
    path: '/cheap-taxi-service-in-agra',
    title: 'Cheap Taxi Service in Agra',
    metaTitle: 'Cheap Taxi Service in Agra - Affordable Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Need a cheap taxi service in Agra? Book affordable cab rides with transparent pricing, verified drivers, and easy WhatsApp booking.',
    intro: [
      'Looking for a reliable taxi service in Agra at a budget-friendly price? Our cheap taxi service page is focused on customers who want affordable travel without sacrificing safety or punctuality.',
      'We keep fares transparent, share the available cab options early, and help you choose a vehicle that fits your trip size and budget. That makes it easier to compare booking choices and avoid hidden surprises.',
    ],
    faq: [...faqItems.slice(0, 2), ...highIntentFaq],
    relatedLinks: [
      { label: 'Best Taxi Service in Agra', to: '/best-taxi-service-in-agra' },
      { label: 'Local Cab Service Agra', to: '/local-cab-service-agra' },
      { label: 'Taxi Near Me Agra', to: '/taxi-near-me-agra' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I want a cheap taxi service in Agra.',
    heroNote: 'Budget-focused booking with clear communication.',
  }),
  buildPage({
    path: '/taxi-near-me-agra',
    title: 'Taxi Near Me Agra',
    metaTitle: 'Taxi Near Me Agra - Fast Local Cab Booking | Shivani Taxi Services',
    metaDescription:
      'Search taxi near me in Agra and book a fast local cab for city rides, hotel pickup, airport travel, and outstation trips.',
    intro: [
      'Looking for a reliable taxi service in Agra right now? This taxi near me page helps customers get quick local cab booking for urgent pickup, station travel, and same-day travel requests.',
      'When travelers search for taxi near me in Agra, they usually need a fast response and a clear next step. We make the process simple with phone and WhatsApp booking so you can confirm a cab quickly and move on with your plan.',
    ],
    faq: [...faqItems.slice(0, 2), ...highIntentFaq],
    relatedLinks: [
      { label: 'Agra Taxi Service', to: '/agra-taxi-service' },
      { label: 'Airport Taxi Service Agra', to: '/airport-taxi-agra' },
      { label: 'Dayalbagh Taxi Service', to: '/dayalbagh-taxi-service' },
    ],
    whatsappMessage: 'Hello Shivani Taxi Services, I need a taxi near me in Agra.',
    heroNote: 'Ideal for urgent booking and immediate response requests.',
  }),
  buildPage({
    path: '/one-way-special-routes-agra-delhi-ncr',
    title: 'One Way Special Routes Agra to Delhi & NCR',
    metaTitle: 'One Way Special Routes Agra to Delhi & NCR | Shivani Taxi Services',
    metaDescription:
      'View one way special routes from Agra to Delhi, Ghaziabad, and Noida with transparent fares for sedan, Ertiga, and Innova trips.',
    intro: [
      'Looking for a reliable taxi service in Agra for one way special routes to Delhi NCR? This page groups the most booked intercity routes for customers who want clear pricing and quick confirmation in one place.',
      'If you compare Agra to Delhi, Agra to Ghaziabad, or Agra to Noida taxi fares, this landing page gives a fast summary of the most common one way prices for budget and premium vehicle options.',
    ],
    pricingRows: [
      { label: 'Agra -> Delhi | Sedan (Dzire)', detail: '₹2,999', note: 'One way special route' },
      { label: 'Delhi -> Agra | Sedan (Dzire)', detail: '₹2,699', note: 'One way special route' },
      { label: 'Agra -> Delhi | Ertiga / Rumion', detail: '₹3,999', note: 'One way special route' },
      { label: 'Delhi -> Agra | Ertiga / Rumion', detail: '₹3,599', note: 'One way special route' },
      { label: 'Agra -> Delhi | Innova Crysta', detail: '₹6,500', note: 'One way special route' },
      { label: 'Delhi -> Agra | Innova Crysta', detail: '₹6,000', note: 'One way special route' },
      { label: 'Agra -> Ghaziabad | Sedan (Dzire)', detail: '₹2,999', note: 'One way special route' },
      { label: 'Ghaziabad -> Agra | Sedan (Dzire)', detail: '₹2,699', note: 'One way special route' },
      { label: 'Agra -> Noida | Sedan (Dzire)', detail: '₹2,999', note: 'One way special route' },
      { label: 'Noida -> Agra | Sedan (Dzire)', detail: '₹2,699', note: 'One way special route' },
      { label: 'Agra -> Ghaziabad | Ertiga / Rumion', detail: '₹3,999', note: 'One way special route' },
      { label: 'Ghaziabad -> Agra | Ertiga / Rumion', detail: '₹3,599', note: 'One way special route' },
    ],
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'One Way Special Routes - Jaipur', to: '/one-way-special-routes-agra-jaipur-west' },
      { label: 'One Way Cab Booking', to: '/one-way-cab-booking' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
    ],
    whatsappMessage:
      'Hello Shivani Taxi Services, I want one way special route pricing for Agra to Delhi NCR.',
    heroNote: 'Best for Delhi, Ghaziabad, and Noida one way travel.',
  }),
  buildPage({
    path: '/one-way-special-routes-agra-jaipur-west',
    title: 'One Way Special Routes Agra to Jaipur, Gurgaon & Faridabad',
    metaTitle: 'One Way Special Routes Agra to Jaipur, Gurgaon & Faridabad | Shivani Taxi Services',
    metaDescription:
      'Check one way special routes from Agra to Jaipur, Gurgaon, and Faridabad with sedan, Ertiga, and Innova fare details.',
    intro: [
      'Looking for a reliable taxi service in Agra for the Jaipur and west side corridors? This page organizes the most common one way special route fares for long and medium distance bookings.',
      'It is useful when you need to compare Agra to Jaipur taxi pricing or look up one way cab rates for Gurgaon and Faridabad without opening multiple pages.',
    ],
    pricingRows: [
      { label: 'Agra -> Jaipur | Sedan (Dzire)', detail: '₹3,499', note: 'One way special route' },
      { label: 'Jaipur -> Agra | Sedan (Dzire)', detail: '₹3,199', note: 'One way special route' },
      { label: 'Agra -> Jaipur | Ertiga / Rumion', detail: '₹4,499', note: 'One way special route' },
      { label: 'Jaipur -> Agra | Ertiga / Rumion', detail: '₹4,199', note: 'One way special route' },
      { label: 'Agra -> Jaipur | Innova Crysta', detail: '₹7,000', note: 'One way special route' },
      { label: 'Jaipur -> Agra | Innova Crysta', detail: '₹6,500', note: 'One way special route' },
      { label: 'Agra -> Gurgaon | Sedan (Dzire)', detail: '₹2,999', note: 'One way special route' },
      { label: 'Gurgaon -> Agra | Sedan (Dzire)', detail: '₹2,699', note: 'One way special route' },
      { label: 'Agra -> Faridabad | Sedan (Dzire)', detail: '₹2,999', note: 'One way special route' },
      { label: 'Faridabad -> Agra | Sedan (Dzire)', detail: '₹2,699', note: 'One way special route' },
      { label: 'Agra -> Gurgaon | Innova Crysta', detail: '₹6,500', note: 'One way special route' },
      { label: 'Gurgaon -> Agra | Innova Crysta', detail: '₹6,000', note: 'One way special route' },
    ],
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'One Way Special Routes - Delhi & NCR', to: '/one-way-special-routes-agra-delhi-ncr' },
      { label: 'Agra to Jaipur Taxi', to: '/agra-to-jaipur-taxi' },
      { label: 'Outstation Taxi Service', to: '/outstation-taxi-agra' },
    ],
    whatsappMessage:
      'Hello Shivani Taxi Services, I want one way special route pricing for Agra to Jaipur, Gurgaon, and Faridabad.',
    heroNote: 'Best for Jaipur, Gurgaon, and Faridabad one way travel.',
  }),
  buildPage({
    path: '/one-way-special-routes-agra-haridwar-lucknow',
    title: 'One Way Special Routes Agra to Haridwar & Lucknow',
    metaTitle: 'One Way Special Routes Agra to Haridwar & Lucknow | Shivani Taxi Services',
    metaDescription:
      'View one way special routes from Agra to Haridwar and Lucknow with clear sedan and Ertiga pricing for long-distance travel.',
    intro: [
      'Looking for a reliable taxi service in Agra for longer outstation journeys? This page covers the special one way route pricing for Haridwar and Lucknow with the most relevant vehicle options.',
      'It works well for travelers who want to compare one way cab rates for Agra to Haridwar or Agra to Lucknow before confirming the ride.',
    ],
    pricingRows: [
      { label: 'Agra -> Haridwar | Sedan (Dzire)', detail: '₹7,000', note: 'One way special route' },
      { label: 'Haridwar -> Agra | Sedan (Dzire)', detail: '₹6,000', note: 'One way special route' },
      { label: 'Agra -> Haridwar | Ertiga / Rumion', detail: '₹8,000', note: 'One way special route' },
      { label: 'Haridwar -> Agra | Ertiga / Rumion', detail: '₹7,000', note: 'One way special route' },
      { label: 'Agra -> Lucknow | Sedan (Dzire)', detail: '₹6,000', note: 'One way special route' },
      { label: 'Lucknow -> Agra | Sedan (Dzire)', detail: '₹5,000', note: 'One way special route' },
      { label: 'Agra -> Lucknow | Ertiga / Rumion', detail: '₹7,000', note: 'One way special route' },
      { label: 'Lucknow -> Agra | Ertiga / Rumion', detail: '₹6,000', note: 'One way special route' },
    ],
    faq: [...faqItems.slice(0, 2), ...routeFaq],
    relatedLinks: [
      { label: 'One Way Special Routes - Delhi & NCR', to: '/one-way-special-routes-agra-delhi-ncr' },
      { label: 'One Way Special Routes - Jaipur & West', to: '/one-way-special-routes-agra-jaipur-west' },
      { label: 'One Way Cab Booking', to: '/one-way-cab-booking' },
    ],
    whatsappMessage:
      'Hello Shivani Taxi Services, I want one way special route pricing for Agra to Haridwar and Lucknow.',
    heroNote: 'Best for Haridwar and Lucknow one way travel.',
  }),
];

export const seoPageMap = Object.fromEntries(
  seoPages.flatMap((page) => [[page.path, page], ...(page.aliases || []).map((alias) => [alias, page])])
);
