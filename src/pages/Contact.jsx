import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MapPin, Globe, Clock,
  Send, CheckCircle, Building2, FileText, Hash, Landmark,
  AlertCircle,
} from 'lucide-react';
import RevealSection from '../components/RevealSection';
import './Contact.css';

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const contactInfo = [
  { icon: Phone,  label: 'Téléphone',    value: '691 629 244 / 653 307 372', href: 'tel:+237691629244', color: '#1D9845' },
  { icon: Mail,   label: 'Email',        value: 'contacts@guimsgroup.com',    href: 'mailto:contacts@guimsgroup.com', color: '#2563eb' },
  { icon: Globe,  label: 'Site Web',     value: 'www.guimsgroup.com',         href: '#', color: '#7c3aed' },
  { icon: MapPin, label: 'Siège',        value: 'Malangue, Douala – En face du Collège La Conquête', href: '#', color: '#dc2626' },
  { icon: Clock,  label: 'Disponibilité',value: 'Lun – Sam : 8h00 – 18h00', href: null, color: '#d97706' },
];

const legalInfo = [
  { icon: Hash,      label: 'NIU',             value: 'M0326185I5952T' },
  { icon: Building2, label: 'RCCM',            value: 'CM/DLA/0326/B13/00336' },
  { icon: FileText,  label: 'Numéro CNPS',     value: '356-0016184-000-G' },
  { icon: Landmark,  label: 'Compte Bancaire', value: 'CCA Bank : 00281631401' },
];

const presences = [
  { city: 'Douala (Malangue)', type: 'Siège Principal', note: 'Carrefour Conquête, en face du Collège La Conquête' },
  { city: 'Douala (Akwa)',     type: 'Représentation',  note: 'Bureau de représentation pour Douala centre' },
  { city: 'Yaoundé',          type: 'Représentation',  note: 'Bureau de représentation pour la capitale' },
];

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // VERIFICATION: Tous les champs obligatoires sont remplis ?
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus(null);

    // CONFIGURATION EMAILJS : Remplacez par vos propres IDs
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log('EmailJS Success:', result.text);
        setLoading(false);
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      }, (error) => {
        console.log('EmailJS Error:', error.text);
        setLoading(false);
        setStatus('error');
      });
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <div className="page-breadcrumb">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <span className="section-badge section-badge--light">Parlons de votre projet</span>
          <h1><span style={{ color: 'var(--secondary-light)' }}>Contactez</span>-Nous</h1>
          <p>
            Nous sommes à votre écoute pour répondre à vos besoins et vous accompagner
            dans la réussite de vos projets. Votre succès est notre mission.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTACT SECTION ── */}
      <RevealSection>
        <section className="section section--light contact-main">
          <div className="container">
            <div className="contact-grid">

              {/* ── Left: Info ── */}
              <div className="contact-info-col">
                <div className="reveal">
                  <span className="section-badge">Nos coordonnées</span>
                  <h2 className="section-title" style={{ marginTop: '12px', fontSize: '1.8rem' }}>
                    Nous sommes <span>disponibles</span>
                  </h2>
                  <div className="section-divider" />
                </div>

                <div className="contact-info-list">
                  {contactInfo.map((item, i) => (
                    <div key={item.label} className={`ci-item reveal delay-${i + 1}`}>
                      <div className="ci-icon" style={{ background: `${item.color}15`, color: item.color, borderColor: `${item.color}30` }}>
                        <item.icon size={18} />
                      </div>
                      <div className="ci-content">
                        <span className="ci-label">{item.label}</span>
                        {item.href && item.href !== '#' ? (
                          <a href={item.href} className="ci-value">{item.value}</a>
                        ) : (
                          <span className="ci-value">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="contact-socials reveal delay-4">
                  <p className="socials-label">Suivez-nous</p>
                  <div className="socials-row">
                    {[
                      { icon: Facebook,  href: '#', label: 'Facebook' },
                      { icon: Linkedin,  href: '#', label: 'LinkedIn' },
                      { icon: Instagram, href: '#', label: 'Instagram' },
                      { icon: Twitter,   href: '#', label: 'Twitter' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className="cs-btn" aria-label={label}>
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Presence */}
                <div className="contact-presences reveal delay-5">
                  <h4 className="pres-title" style={{ color: 'var(--primary)', marginBottom: '8px' }}>Localisation & Présence</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', marginBottom: '16px', lineHeight: '1.6' }}>
                    GUIMS GROUP est localisé au Carrefour Conquête, en face du Collège La Conquête, dans le quartier Malangue, dans la ville de Douala.<br/><br/>
                    L'entreprise dispose également de représentations à Akwa et dans la ville de Yaoundé, afin d'assurer une proximité et une meilleure réactivité auprès de ses clients et partenaires.
                  </p>
                  {presences.map((p) => (
                    <div key={p.city} className="pres-item">
                      <MapPin size={14} className="pres-pin" />
                      <div>
                        <strong>{p.city}</strong>
                        <span className="pres-type">{p.type}</span>
                        <p className="pres-note">{p.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: Form ── */}
              <div className="contact-form-col reveal-right delay-1">
                <div className="contact-form-card">
                  <div className="cfc-header">
                    <Send size={20} />
                    <span>Envoyer un message</span>
                  </div>

                  {status === 'success' && (
                    <div className="form-success">
                      <CheckCircle size={20} />
                      <div>
                        <strong>Message envoyé !</strong>
                        <p>Nous vous répondrons dans les plus brefs délais.</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form-error">
                      <AlertCircle size={20} />
                      <span>Une erreur est survenue. Veuillez réessayer.</span>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="contact-form" id="contact-form" noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Nom complet *</label>
                        <input
                          id="contact-name" name="name" type="text"
                          placeholder="Jean Dupont"
                          value={form.name} onChange={handleChange} required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">Email *</label>
                        <input
                          id="contact-email" name="email" type="email"
                          placeholder="jean@example.com"
                          value={form.email} onChange={handleChange} required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-phone">Téléphone</label>
                        <input
                          id="contact-phone" name="phone" type="tel"
                          placeholder="+237 6XX XXX XXX"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-subject">Sujet *</label>
                        <select
                          id="contact-subject" name="subject"
                          value={form.subject} onChange={handleChange} required
                        >
                          <option value="">Choisir un sujet…</option>
                          <option value="digitbooster">Digitbooster+ (Digital)</option>
                          <option value="academy">Guims Academy (Formation)</option>
                          <option value="educ">Guims Educ (Éducation)</option>
                          <option value="gaba">GABA (Agrobusiness)</option>
                          <option value="elect">GuimsElect (Technique)</option>
                          <option value="compta">Guims Compta (Comptabilité)</option>
                          <option value="consulting">Guims Consulting (Conseil)</option>
                          <option value="other">Autre demande</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message" name="message" rows={6}
                        placeholder="Décrivez votre projet ou votre demande…"
                        value={form.message} onChange={handleChange} required
                      />
                    </div>
                    <button
                      type="submit" className="btn btn--primary btn--lg form-submit-btn"
                      id="contact-submit-btn" disabled={loading}
                    >
                      {loading ? (
                        <><span className="spinner" /> Envoi en cours…</>
                      ) : (
                        <><Send size={16} /> Envoyer le message</>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ── LEGAL INFO ── */}
      <RevealSection>
        <section className="section section--white">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <span className="section-badge">Légal</span>
              <h2 className="section-title">Informations <span>Légales</span></h2>
              <div className="section-divider" />
            </div>
            <div className="legal-cards">
              {legalInfo.map((item, i) => (
                <div key={item.label} className={`lc-card reveal delay-${i + 1}`}>
                  <div className="lc-icon"><item.icon size={20} /></div>
                  <div className="lc-label">{item.label}</div>
                  <div className="lc-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
    </div>
  );
};

export default ContactPage;
