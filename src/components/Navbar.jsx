import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({
  cartCount = 0,
  onOpenCart,
  searchTerm = '',
  onSearchChange,
  onClearSearch,
  activeSection = 'home',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Focus search input when toggled open
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close search on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Categories', href: '#categories', id: 'categories' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="w-[90%] max-w-[1120px] mx-auto min-h-[76px] flex items-center justify-between gap-4 sm:gap-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-extrabold tracking-tight whitespace-nowrap text-foodiBlack flex items-center gap-2"
        >
          <i className="fa-solid fa-utensils text-foodiGreen text-base" />
          <span>
            FOOD<span className="text-foodiGreen">I</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-xs font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-foodiGreen-dark font-bold'
                  : 'text-gray-600 hover:text-foodiGreen-dark'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Bar Dropdown */}
          <div className="relative" ref={searchContainerRef}>
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-foodiGreen hover:scale-110 transition-all duration-200 text-sm sm:text-base"
              aria-label="Search food"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>

            {/* Expandable Search Input */}
            <div
              className={`absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-full shadow-lg px-3 py-1.5 flex items-center gap-2 transition-all duration-200 z-50 ${
                isSearchOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <i className="fa-solid fa-magnifying-glass text-gray-400 text-xs ml-1" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search delicious food..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full text-xs text-foodiBlack bg-transparent outline-none py-1"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={onClearSearch}
                  className="p-1 text-gray-400 hover:text-gray-700 rounded-full text-xs"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              )}
            </div>
          </div>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-foodiGreen-dark hover:scale-110 transition-all duration-200 text-base"
            aria-label="View shopping cart"
          >
            <i className="fa-solid fa-bag-shopping" />
            <span
              className={`absolute -top-1 -right-1 bg-foodiGreen text-white text-[9px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center transition-transform ${
                cartCount > 0 ? 'animate-cart-bump' : ''
              }`}
            >
              {cartCount}
            </span>
          </button>

          {/* Explore Food CTA Button */}
          <a
            href="#menu"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-foodiGreen hover:bg-foodiGreen-dark text-white text-xs font-semibold shadow-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Food
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-xl text-foodiBlack hover:text-foodiGreen transition-colors"
            aria-label="Toggle navigation"
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm py-2 border-b border-gray-50 transition-colors ${
                activeSection === link.id
                  ? 'text-foodiGreen font-bold'
                  : 'text-gray-700 hover:text-foodiGreen'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full bg-foodiGreen text-white text-xs font-semibold"
          >
            Explore Food
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

