import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Globe, ExternalLink,
  Building2, FileText, Hash, Landmark,
} from 'lucide-react';
import './Footer.css';

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const entities = [
  { name: 'Digitbooster+', path: '/entites' },
  { name: 'Guims Academy', path: '/entites' },
  { name: 'Guims Educ', path: '/entites' },
  { name: 'GABA', path: '/entites' },
  { name: 'GuimsElect', path: '/entites' },
  { name: 'Guims Compta', path: '/entites' },
  { name: 'Guims Consulting', path: '/entites' },
];

const quickLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Entités', to: '/entites' },
  { label: 'Valeurs & Mission', to: '/valeurs' },
  { label: 'Ressources', to: '/ressources' },
  { label: 'Contact', to: '/contact' },
];

const legalInfo = [
  { icon: Hash, label: 'NIU', value: 'M0326185I5952T' },
  { icon: Building2, label: 'RCCM', value: 'CM/DLA/0326/B13/00336' },
  { icon: FileText, label: 'N° CNPS', value: '356-0016184-000-G' },
  { icon: Landmark, label: 'Compte Bancaire', value: 'CCA Bank : 00281631401' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* ── Top Wave ── */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#071530" />
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* ── Brand Column ── */}
            <div className="footer-col footer-col--brand">
              <Link to="/" className="footer-logo" aria-label="GUIMS GROUP">
                <div className="footer-logo-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
                    <circle cx="24" cy="24" r="5" fill="currentColor" />
                    <line x1="24" y1="2" x2="24" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="24" y1="37" x2="24" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="2" y1="24" x2="11" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="37" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="footer-logo-name">GUIMS <em>GROUP</em></div>
                  <div className="footer-logo-tagline">Petit à petit, on y arrivera</div>
                </div>
              </Link>

              <p className="footer-brand-desc">
                Groupe multisectoriel camerounais regroupant 7 filiales spécialisées.
                Notre mission : construire, former et digitaliser l'Afrique avec excellence et intégrité.
              </p>

              <div className="footer-slogan">
                <span>Construire</span>
                <span className="dot">•</span>
                <span>Former</span>
                <span className="dot">•</span>
                <span>Digitaliser L'Afrique</span>
              </div>

              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="footer-col">
              <h3 className="footer-col-title">Navigation</h3>
              <ul className="footer-links">
                {quickLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="footer-link">
                      <span className="footer-link-arrow">›</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Entities ── */}
            <div className="footer-col">
              <h3 className="footer-col-title">Nos Entités</h3>
              <ul className="footer-links">
                {entities.map((e) => (
                  <li key={e.name}>
                    <Link to={e.path} className="footer-link">
                      <span className="footer-link-arrow">›</span>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="footer-col">
              <h3 className="footer-col-title">Coordonnées</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="contact-icon"><Phone size={14} /></div>
                  <div>
                    <span className="contact-label">Téléphone</span>
                    <a href="tel:+237691629244" className="contact-value">696 29 99 16</a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="contact-icon"><Mail size={14} /></div>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:contacts@guimsgroup.com" className="contact-value">contacts@guimsgroup.com</a>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="contact-icon"><Globe size={14} /></div>
                  <div>
                    <span className="contact-label">Site Web</span>
                    <span className="contact-value">www.guimsgroup.com</span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="contact-icon"><MapPin size={14} /></div>
                  <div>
                    <span className="contact-label">Localisation</span>
                    <span className="contact-value">Malangue, Douala – Cameroun<br />En face du Collège La Conquête</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Legal Strip ── */}
          <div className="footer-legal">
            <div className="legal-grid">
              {legalInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="legal-item">
                  <Icon size={13} className="legal-icon" />
                  <span className="legal-label">{label} :</span>
                  <span className="legal-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {year} GUIMS GROUP. Tous droits réservés.
          </p>
          <p className="footer-made">
            — <em>Petit à petit, on y arrivera.</em> —
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
