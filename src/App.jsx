import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';
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
  const [slide, setSlide] = useState(0);
  const totalSlides = 5;

  function nextSlide() { setSlide((s) => (s + 1) % totalSlides); }
  function prevSlide() { setSlide((s) => (s - 1 + totalSlides) % totalSlides); }

  useEffect(() => {
    const id = setInterval(nextSlide, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Hero Section with integrated Navbar */}
      <Hero />
      
      {/* Properties Section */}
      <section id="properties" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262262] mb-4">Our Apartments</h2>
          <p className="text-cool-grey max-w-2xl mx-auto text-lg">
            Discover our carefully curated selection of premium furnished apartments
            in prime Nairobi locations. Each property is designed for comfort and convenience.
          </p>
        </div>

        {/* Two Column Layout - Property Info & Card */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          {/* Left Column - Property Location & Description */}
          <div className="flex-1 lg:pr-8 pt-4">
            <div className="mb-6">
              <span className="text-[#C49A6C] font-semibold text-sm uppercase tracking-wider">Featured Location</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#262262] mt-2">Kilimani, Nairobi</h3>
            </div>
            <p className="text-charcoal leading-relaxed mb-6 text-justify pr-4 lg:pr-8">
              Experience luxury living in the heart of Kilimani, one of Nairobi's most prestigious neighborhoods.
              This beautifully furnished apartment offers modern amenities, stunning views, and easy access to
              shopping centers, restaurants, and business districts. Perfect for business travelers and tourists
              seeking a comfortable short-term stay.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-[#C49A6C] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                5 minutes from Yaya Centre
              </li>
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-[#C49A6C] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure parking available
              </li>
              <li className="flex items-center text-charcoal">
                <svg className="w-5 h-5 text-[#C49A6C] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 security & concierge
              </li>
            </ul>
            <a
              href="/property/1"
              className="inline-block bg-[#262262] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#262262]/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Property
            </a>
          </div>
          
          {/* Right Column - Property Image Carousel */}
          <div className="w-full max-w-md">
            <div id="property-carousel" className="relative w-full h-full">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-md">
                {[
                  'https://images.pexels.com/photos/27224283/pexels-photo-27224283.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/7219921/pexels-photo-7219921.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/29891537/pexels-photo-29891537.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/27975402/pexels-photo-27975402.jpeg?auto=compress&cs=tinysrgb&w=800',
                  'https://images.pexels.com/photos/34048803/pexels-photo-34048803.jpeg?auto=compress&cs=tinysrgb&w=800',
                ].map((src, i) => (
                  <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${slide === i ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={src} alt={`Slide ${i + 1}`} className="absolute block w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-3 left-1/2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button key={i} type="button" onClick={() => setSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${slide === i ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>

              <button type="button" onClick={prevSlide} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7"/></svg>
                </span>
              </button>
              <button type="button" onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-3 cursor-pointer group focus:outline-none">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7"/></svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Explore Nairobi Section */}
        <div className="text-center mb-10 mt-48">
          <h2 className="text-3xl md:text-4xl font-bold text-[#262262]">Explore Nairobi</h2>
          <p className="text-cool-grey max-w-2xl mx-auto text-lg mt-3">
            Discover the beauty and vibrancy of Kenya's capital city
          </p>
        </div>

        {/* Masonry Gallery - Kenyan Homes from Pexels (Free License) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 auto-rows-[150px]">
          {/* Tall — col 1 rows 1-2 */}
          <div className="row-span-2 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/27224283/pexels-photo-27224283.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Nairobi apartment buildings" />
          </div>
          {/* Small — col 2 row 1 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/7219921/pexels-photo-7219921.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Outdoor pool dining" />
          </div>
          {/* Tall — col 3 rows 1-2 */}
          <div className="row-span-2 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/29891537/pexels-photo-29891537.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Nairobi city skyline" />
          </div>
          {/* Small — col 4 row 1 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/27975402/pexels-photo-27975402.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Diani Beach entrance" />
          </div>

          {/* Small — col 2 row 2 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/34048803/pexels-photo-34048803.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Nairobi architecture" />
          </div>
          {/* Small — col 4 row 2 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/34048800/pexels-photo-34048800.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sunset Nairobi" />
          </div>

          {/* Small — col 1 row 3 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/36539147/pexels-photo-36539147.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Luxury homes" />
          </div>
          {/* Tall — col 2 rows 3-4 */}
          <div className="row-span-2 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/18120169/pexels-photo-18120169.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Wooden cabin Molo" />
          </div>
          {/* Small — col 3 row 3 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/36068362/pexels-photo-36068362.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Ruiru countryside" />
          </div>
          {/* Tall — col 4 rows 3-4 */}
          <div className="row-span-2 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/10610013/pexels-photo-10610013.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kenyan landscape" />
          </div>

          {/* Small — col 1 row 4 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/10822170/pexels-photo-10822170.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Traditional Kenyan home" />
          </div>
          {/* Small — col 3 row 4 */}
          <div className="row-span-1 col-span-1 overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://images.pexels.com/photos/36298878/pexels-photo-36298878.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kenyan scenic road" />
          </div>
        </div>
      </section>
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
