import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyPage from './components/PropertyPage';

// Your single furnished apartment
const apartment = {
  image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  title: 'Premium Furnished Apartment',
  location: 'Kilimani, Nairobi',
  price: 6300,
  rating: 5.0,
  reviews: 12,
  bedrooms: 2,
  bathrooms: 2,
  area: 950,
  badge: 'Available Now'
};

// Home page component
function HomePage() {
  return (
    <>
      {/* Hero Section with integrated Navbar */}
      <Hero />
      
      {/* Properties Section */}
      <section id="properties" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Apartments</h2>
          <p className="text-cool-grey max-w-2xl mx-auto text-lg">
            Discover our carefully curated selection of premium furnished apartments
            in prime Nairobi locations. Each property is designed for comfort and convenience.
          </p>
        </div>
        
        {/* Two Column Layout - Property Info & Card */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
          {/* Left Column - Property Location & Description */}
          <div className="flex-1 lg:pr-8 pt-4">
            <div className="mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Featured Location</span>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mt-2">Kilimani, Nairobi</h3>
            </div>
            <p className="text-charcoal leading-relaxed mb-6 text-justify">
              Experience luxury living in the heart of Kilimani, one of Nairobi's most prestigious neighborhoods.
              This beautifully furnished apartment offers modern amenities, stunning views, and easy access to
              shopping centers, restaurants, and business districts. Perfect for business travelers and tourists
              seeking a comfortable short-term stay.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                5 minutes from Yaya Centre
              </li>
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure parking available
              </li>
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 security & concierge
              </li>
            </ul>
            <a
              href="/property/1"
              className="inline-block bg-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-navy/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Property
            </a>
          </div>
          
          {/* Right Column - Property Card */}
          <div className="w-full max-w-sm lg:max-w-sm">
            <PropertyCard property={apartment} />
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-light-grey rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-navy text-center mb-10">Amenities Included</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">High-Speed WiFi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Smart TV</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Fully Equipped Kitchen</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Cleaning Service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">24/7 Power Backup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Secure Parking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Spacious Living</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-charcoal font-semibold">Prime Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
