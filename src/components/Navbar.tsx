import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = React.useState(window.location.hash || '#home');
  const [menuOpen, setMenuOpen] = useState(false);
  React.useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Close menu on navigation
  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b-2 border-accent/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-2xl font-heading tracking-tight text-accent-dark">Leelamaya Shatapathy</span>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-7 h-7 text-accent-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors duration-200 px-2 py-1 rounded font-heading ${
                  active === link.href
                    ? 'text-accent bg-accent/10 shadow-sm'
                    : 'hover:text-accent-dark'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-2 px-6 pb-4 text-gray-700 font-medium bg-white border-b border-accent/20 shadow animate-fade-in-down">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block transition-colors duration-200 px-2 py-2 rounded font-heading text-lg ${
                  active === link.href
                    ? 'text-accent bg-accent/10 shadow-sm'
                    : 'hover:text-accent-dark'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar; 