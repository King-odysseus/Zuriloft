import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

function PropertiesPage() {
  const [filter, setFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample properties data
  const properties = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      title: 'Premium Furnished Apartment',
      location: 'Kilimani, Nairobi',
      price: 6300,
      rating: 5.0,
      reviews: 12,
      bedrooms: 2,
      bathrooms: 2,
      area: 950,
      badge: 'Featured',
      type: 'apartment',
    },
  ];

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    const matchesType = filter === 'all' || property.type === filter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = property.price < 5000;
    else if (priceRange === 'mid') matchesPrice = property.price >= 5000 && property.price < 8000;
    else if (priceRange === 'high') matchesPrice = property.price >= 8000;

    return matchesType && matchesSearch && matchesPrice;
  });

  const filterButtons = [
    { key: 'all', label: 'All Properties' },
    { key: 'apartment', label: 'Apartments' },
    { key: 'studio', label: 'Studios' },
    { key: 'penthouse', label: 'Penthouses' },
    { key: 'house', label: 'Houses' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#262262] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Properties</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Discover our carefully curated selection of premium furnished apartments
              in Nairobi's most desirable neighborhoods.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-full shadow-xl px-2 py-2 flex items-center">
              <div className="flex-1 flex items-center px-5">
                <svg className="w-5 h-5 text-[#C49A6C] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 text-[#1f2937] placeholder-[#6b7280] focus:outline-none bg-transparent text-base"
                />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-2 text-[#6b7280] hover:text-[#262262] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-10 bg-white border-b border-[#D9D9D9] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Property Type Filters */}
            <div className="flex flex-wrap gap-2">
              {filterButtons.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === key
                      ? 'bg-[#262262] text-white'
                      : 'bg-[#D9D9D9] text-[#1f2937] hover:bg-[#C49A6C] hover:text-[#262262]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6b7280]">Price:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#D9D9D9] text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#C49A6C] cursor-pointer"
              >
                <option value="all">All Prices</option>
                <option value="low">Under KES 5,000</option>
                <option value="mid">KES 5,000 - 8,000</option>
                <option value="high">Above KES 8,000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[#6b7280]">
              Showing <span className="font-semibold text-[#262262]">{filteredProperties.length}</span> properties
            </p>
            {(filter !== 'all' || priceRange !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setFilter('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
                className="text-sm text-[#C49A6C] hover:text-[#262262] font-medium transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Link key={property.id} to={`/property/${property.id}`} className="block">
                  <PropertyCard property={property} />
                </Link>
              ))}
              {/* Coming Soon Cards */}
              <div className="group bg-white rounded-2xl shadow-md border border-[#D9D9D9] overflow-hidden">
                <div className="aspect-[4/3] bg-[#D9D9D9] flex items-center justify-center">
                  <span className="text-4xl">🏗️</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#262262] mb-2">Coming Soon</h3>
                  <p className="text-[#6b7280] text-sm">Exciting new property being added</p>
                </div>
              </div>
              <div className="group bg-white rounded-2xl shadow-md border border-[#D9D9D9] overflow-hidden">
                <div className="aspect-[4/3] bg-[#D9D9D9] flex items-center justify-center">
                  <span className="text-4xl">🏗️</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#262262] mb-2">Coming Soon</h3>
                  <p className="text-[#6b7280] text-sm">Exciting new property being added</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-[#262262]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#262262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#262262] mb-2">No properties found</h3>
              <p className="text-[#6b7280] mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}
                className="bg-[#C49A6C] text-[#262262] px-6 py-2 rounded-full font-semibold hover:bg-[#b8895c] transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PropertiesPage;
