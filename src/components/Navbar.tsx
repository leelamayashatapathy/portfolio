import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = useState(window.location.hash || '#home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="font-heading text-2xl tracking-wide text-ink">
          Leelamaya
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/65 p-1.5 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  active === link.href
                    ? 'bg-ink text-white shadow-[0_10px_25px_rgba(31,41,51,0.16)]'
                    : 'text-muted hover:bg-ink/5 hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-panel/95 px-4 py-4 backdrop-blur md:hidden">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block rounded-2xl px-4 py-3 text-base transition ${
                    active === link.href
                      ? 'bg-ink text-white'
                      : 'bg-white/70 text-muted hover:bg-white hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
