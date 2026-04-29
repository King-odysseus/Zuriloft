import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'Properties', href: '#properties' },
  { name: 'Amenities',  href: '#amenities' },
  // { name: 'Pricing',    href: '#pricing' },
  { name: 'Contact',    href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 border-b transition-all duration-300 ${
      scrolled
        ? 'bg-white border-gray-200 shadow-sm'
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse w-[200px]">
          <div className="w-8 h-8 bg-[#f59e0b] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className={`self-center text-xl font-bold whitespace-nowrap transition-colors duration-300 ${
            scrolled ? 'text-[#1e3a8a]' : 'text-white'
          }`}>
            ZuriLofts
          </span>
        </a>

        {/* Right side: CTA buttons + hamburger */}
        <div className="flex items-center md:order-2 space-x-2 rtl:space-x-reverse w-[200px] justify-end">
          <button className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold border-2 whitespace-nowrap transition-all duration-200 bg-white text-navy border-white hover:bg-white/90">
            Sign In
          </button>
          <button className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-semibold bg-white text-navy hover:bg-white/90 transition-all duration-200 shadow-md whitespace-nowrap">
            Book Now
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden transition-colors duration-200 ${
              scrolled
                ? 'text-[#1e3a8a] hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-controls="navbar-main"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav links */}
        <div
          id="navbar-main"
          className={`absolute top-full left-0 right-0 md:static md:flex md:w-auto md:order-1 transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-0 border-b border-gray-200 bg-white shadow-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:shadow-none">
            {navLinks.map((link, i) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative block py-2 px-3 md:p-0 rounded transition-colors duration-200 font-semibold group
                    ${i === 0
                      ? 'text-[#f59e0b] md:text-[#f59e0b]'
                      : scrolled
                        ? 'text-[#1f2937] hover:text-[#f59e0b] md:hover:text-[#f59e0b]'
                        : 'text-gray-700 md:text-white md:hover:text-[#f59e0b]'
                    }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f59e0b] group-hover:w-full transition-all duration-200 hidden md:block" />
                </a>
              </li>
            ))}
            {/* Mobile CTA buttons */}
            <li className="md:hidden pt-3 space-y-2 border-t border-gray-200 mt-2">
              <button className="w-full py-2.5 rounded-full font-semibold border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-all duration-200">
                Sign In
              </button>
              <button className="w-full py-2.5 rounded-full font-semibold bg-[#f59e0b] text-[#1e3a8a] hover:bg-amber-400 transition-all duration-200">
                Book Now
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
