import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFAQ = (e) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      const headerHeight = 80; // Approximate header height in pixels
      const elementPosition = faqSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full flex justify-center items-center px-3 sm:px-4 md:px-8 py-3 sm:py-4 bg-black shadow-md fixed top-0 left-0 right-0 z-[100]">
      <div className="w-full flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <a href="/" className="flex items-center">
            <img 
              src="/logo 101.svg" 
              alt="BrainAlive Logo" 
              className="h-6 sm:h-8 md:h-10 w-auto" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-4 lg:gap-8 flex-1">
          <div className="flex justify-center items-center gap-4 lg:gap-8 mx-auto">
            <a href="/" className="font-poppins text-base leading-[100%] tracking-[0%] text-custom-green hover:text-custom-green transition-colors whitespace-nowrap" style={{ fontWeight: '400' }}>Home</a>
            <a href="/about" className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors whitespace-nowrap" style={{ fontWeight: '400' }}>About</a>
            <a href="/docs" className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors whitespace-nowrap" style={{ fontWeight: '400' }}>Docs</a>
            <a href="#faq" 
               onClick={scrollToFAQ} 
               className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors whitespace-nowrap" style={{ fontWeight: '400' }}>
              FAQ's
            </a>
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2 sm:gap-3 lg:gap-4 items-center">
          <button className="bg-custom-green text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
            Buy Nodes
          </button>
          <button className="border border-white text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-white p-1.5 sm:p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black md:hidden p-4 shadow-lg border-t border-gray-800 z-50">
          <nav className="flex flex-col items-center gap-4">
            <a href="/" className="font-poppins text-base leading-[100%] tracking-[0%] text-custom-green w-full text-center py-2" style={{ fontWeight: '400' }}>Home</a>
            <a href="/about" className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors w-full text-center py-2" style={{ fontWeight: '400' }}>About</a>
            <a href="/docs" className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors w-full text-center py-2" style={{ fontWeight: '400' }}>Docs</a>
            <a href="#faq" 
               onClick={scrollToFAQ} 
               className="font-poppins text-base leading-[100%] tracking-[0%] text-white hover:text-custom-green transition-colors w-full text-center py-2" style={{ fontWeight: '400' }}>
              FAQ's
            </a>
            <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-800">
              <button className="bg-custom-green text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-colors w-full">
                Buy Nodes
              </button>
              <button className="border border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-black transition-colors w-full">
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
