import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/entites', label: 'Nos Entités' },
  { to: '/valeurs', label: 'Valeurs & Mission' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const location                    = useLocation();
  const isHome                      = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const headerClass = [
    'header',
    'header--solid',
    menuOpen ? 'header--menu-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} id="site-header">
      <div className="container header-inner">
        {/* ── Logo ── */}
        <Link to="/" className="logo-link" aria-label="GUIMS GROUP Accueil">
          <img src="/logo-guims.jpg" alt="GUIMS GROUP Logo" className="logo-img" />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="nav-desktop" role="navigation" aria-label="Navigation principale">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-item">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA Button ── */}
        <Link to="/contact" className="btn btn--primary btn--sm header-cta" id="header-contact-btn">
          Nous Contacter
        </Link>

        {/* ── Mobile Toggle ── */}
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} role="navigation" aria-label="Menu mobile">
        <ul className="mobile-nav-list">
          {navLinks.map((link, i) => (
            <li key={link.to} className="mobile-nav-item" style={{ '--i': i }}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-nav-item" style={{ '--i': navLinks.length }}>
            <Link to="/contact" className="btn btn--primary mobile-cta-btn" id="mobile-contact-btn">
              Contactez-Nous
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
