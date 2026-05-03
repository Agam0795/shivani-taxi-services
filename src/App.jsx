import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Review from './pages/Review';
import SeoLandingPage from './components/SeoLandingPage';
import { seoPages } from './data/seoPages';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-mist text-brand-slate">
      <ScrollToTop />
      <Navbar />
      <main className="pb-28 sm:pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          {seoPages.map((page) => (
            <Route key={page.path} path={page.path} element={<SeoLandingPage page={page} />} />
          ))}
          <Route
            path="/agra-to-jaipur-cab"
            element={<SeoLandingPage page={seoPages.find((page) => page.path === '/agra-to-jaipur-taxi')} />}
          />
          <Route
            path="/local-taxi-agra"
            element={<SeoLandingPage page={seoPages.find((page) => page.path === '/local-cab-service-agra')} />}
          />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
