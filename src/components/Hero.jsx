import Navbar from './Navbar';

function Hero() {
  return (
    <section className="relative min-h-[700px] flex flex-col overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Navbar */}
      <Navbar />

      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-24">
          {/* Headline and Description */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Available for Booking</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Find Your Perfect <span className="text-gold">Short-Let Stay</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Premium furnished apartments in Nairobi. Experience comfort, convenience, and luxury all in one place.
            </p>
          </div>

          {/* Pill-shaped Search Bar */}
          <div className="max-w-[680px] mx-auto">
            <div className="bg-white rounded-full shadow-2xl px-2 py-2 flex items-center transform hover:scale-[1.02] transition-transform duration-200">
              <div className="flex-1 flex items-center px-5">
                <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Where do you want to stay?"
                  className="w-full py-3 text-charcoal placeholder-cool-grey focus:outline-none bg-transparent text-base"
                />
              </div>
              <button className="bg-white text-navy font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 flex justify-center items-center space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">5.0</div>
              <div className="text-white/70 text-sm mt-1 font-medium">Star Rating</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm mt-1 font-medium">Happy Stays</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="text-center hidden md:block">
              <div className="text-4xl md:text-5xl font-bold text-white">100%</div>
              <div className="text-white/70 text-sm mt-1 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
