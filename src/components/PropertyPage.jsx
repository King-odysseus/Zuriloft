import { useParams, Link } from 'react-router-dom';

function PropertyPage() {
  const { id } = useParams();

  // Sample property data - in a real app, this would come from an API
  const property = {
    id: id || '1',
    title: 'Premium Furnished Apartment',
    location: 'Kilimani, Nairobi',
    price: 8000,
    rating: 5.0,
    reviews: 12,
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    description: `Experience luxury living in the heart of Kilimani, one of Nairobi's most prestigious neighborhoods. This beautifully furnished apartment offers modern amenities, stunning views, and easy access to shopping centers, restaurants, and business districts.`,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    amenities: [
      'High-Speed WiFi',
      'Smart TV',
      'Fully Equipped Kitchen',
      'Cleaning Service',
      '24/7 Power Backup',
      'Secure Parking',
      'Air Conditioning',
      'Washing Machine',
    ],
    nearby: [
      '5 minutes from Yaya Centre',
      '10 minutes from CBD',
      'Close to major hospitals',
      'Near international schools',
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-navy py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-white hover:text-gold transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">{property.title}</h1>
          <div className="flex items-center text-cool-grey">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="md:col-span-2">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-4">
            <img 
              src={property.images[1]} 
              alt="Interior"
              className="w-full h-[192px] object-cover rounded-2xl"
            />
            <img 
              src={property.images[2]} 
              alt="Kitchen"
              className="w-full h-[192px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-border-grey">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <div>
                  <p className="font-bold text-navy">{property.bedrooms}</p>
                  <p className="text-sm text-cool-grey">Bedrooms</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <div>
                  <p className="font-bold text-navy">{property.bathrooms}</p>
                  <p className="text-sm text-cool-grey">Bathrooms</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
                <div>
                  <p className="font-bold text-navy">{property.area} sq ft</p>
                  <p className="text-sm text-cool-grey">Area</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div>
                  <p className="font-bold text-navy">{property.rating}</p>
                  <p className="text-sm text-cool-grey">({property.reviews} reviews)</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">About this property</h2>
              <p className="text-charcoal leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">What's nearby</h2>
              <ul className="space-y-3">
                {property.nearby.map((item, index) => (
                  <li key={index} className="flex items-center text-charcoal">
                    <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-border-grey p-6 sticky top-24">
              <div className="mb-6">
                <span className="text-3xl font-bold text-navy">KES {property.price.toLocaleString()}</span>
                <span className="text-cool-grey"> / night</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-border-grey rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-border-grey rounded-lg focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Guests</label>
                  <select className="w-full px-4 py-3 border border-border-grey rounded-lg focus:outline-none focus:border-gold">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-gold text-navy font-bold py-4 rounded-lg hover:bg-gold/90 transition-all duration-200 shadow-md">
                Book Now
              </button>

              <p className="text-center text-sm text-cool-grey mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
