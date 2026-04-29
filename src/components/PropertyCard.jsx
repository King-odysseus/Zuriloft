import PropTypes from 'prop-types';
import { useState } from 'react';

function PropertyCard({ property }) {
  const [isLiked, setIsLiked] = useState(false);
  
  const {
    image,
    title,
    location,
    price,
    rating,
    reviews,
    bedrooms,
    bathrooms,
    area,
    badge
  } = property;

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-border-grey">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge */}
        {badge && (
          <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
            {badge}
          </span>
        )}
        
        {/* Favorite Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
          aria-label="Add to favorites"
        >
          <svg 
            className={`w-5 h-5 transition-colors duration-200 ${isLiked ? 'text-red-500 fill-current' : 'text-cool-grey hover:text-red-400'}`} 
            fill={isLiked ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-semibold text-charcoal leading-tight pr-2">{title}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0 bg-gold/10 px-2 py-1 rounded-lg">
            <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-charcoal">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-cool-grey mb-3">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm truncate">{location}</span>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between mb-3 py-3 border-y border-border-grey">
          <div className="text-center flex-1">
            <div className="flex items-center justify-center text-cool-grey mb-1">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">{bedrooms}</span>
            </div>
            <span className="text-xs text-cool-grey">Beds</span>
          </div>
          <div className="w-px h-8 bg-border-grey"></div>
          <div className="text-center flex-1">
            <div className="flex items-center justify-center text-cool-grey mb-1">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-xs">{bathrooms}</span>
            </div>
            <span className="text-xs text-cool-grey">Baths</span>
          </div>
          <div className="w-px h-8 bg-border-grey"></div>
          <div className="text-center flex-1">
            <div className="flex items-center justify-center text-cool-grey mb-1">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span className="text-xs">{area}</span>
            </div>
            <span className="text-xs text-cool-grey">Sqft</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-cool-grey">per night</span>
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-gold">KES {price.toLocaleString()}</span>
            </div>
          </div>
          <button className="bg-gold text-navy font-semibold px-4 py-2 rounded-full hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-sm">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    badge: PropTypes.string
  }).isRequired
};

export default PropertyCard;
