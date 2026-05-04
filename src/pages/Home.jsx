import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Play, ChevronDown,
  Monitor, GraduationCap, BookOpen, Leaf,
  Zap, Calculator, Briefcase,
  Shield, Lightbulb, Heart, Target,
  Award, Users, TrendingUp, Globe,
} from 'lucide-react';
import RevealSection from '../components/RevealSection';
import { Helmet } from 'react-helmet-async';
import './Home.css';

// Logo Imports
import logoDigibooster from '../assets/logos/logo-digibooster.png';
import logoGuimsEduc from '../assets/logos/logo-guims-educ.jpg';
import logoAcademy from '../assets/logos/logo-academy.jpg';
import logoGaba from '../assets/logos/logo-gaba.png';
import logoGuimselect from '../assets/logos/logo-guimselect.png';
import logoCompta from '../assets/logos/logo-compta.png';
import logoConsulting from '../assets/logos/logo-consulting.png';

/* ── Entity cards for the preview strip ── */
const entities = [
  { id: 'digitbooster', imgSrc: logoDigibooster, icon: Monitor, name: 'Digitbooster+', color: '#2563eb', bg: '#eff6ff', desc: 'Digital & Communication' },
  { id: 'guims-educ', imgSrc: logoGuimsEduc, icon: BookOpen, name: 'Guims Educ', color: '#7c3aed', bg: '#f5f3ff', desc: 'Éducation & Cours particuliers' },
  { id: 'guims-academy', imgSrc: logoAcademy, icon: GraduationCap, name: 'Guims Academy', color: '#0891b2', bg: '#ecfeff', desc: 'Formation professionnelle' },
  { id: 'gaba', imgSrc: logoGaba, icon: Leaf, name: 'GABA', color: '#16a34a', bg: '#f0fdf4', desc: 'Agrobusiness' },
  { id: 'guimselect', imgSrc: logoGuimselect, icon: Zap, name: 'GuimsElect', color: '#d97706', bg: '#fffbeb', desc: 'Technologie & Équipements' },
  { id: 'guims-compta', imgSrc: logoCompta, icon: Calculator, name: 'Guims Compta', color: '#dc2626', bg: '#fef2f2', desc: 'Expertise Comptable & Conseil' },
  { id: 'guims-consulting', imgSrc: logoConsulting, icon: Briefcase, name: 'Guims Consulting', color: '#0B2046', bg: '#f0f4ff', desc: 'Conseil & Stratégie' },
];

/* ── Values for home preview ── */
const values = [
  { icon: Award, label: 'EXCELLENCE', desc: "Nous visons l'excellence dans tout ce que nous entreprenons." },
  { icon: Lightbulb, label: 'INNOVATION', desc: "Nous innovons constamment pour répondre aux défis de demain." },
  { icon: Shield, label: 'INTÉGRITÉ', desc: "Nous agissons avec honnêteté, transparence et professionnalisme." },
  { icon: Target, label: 'IMPACT', desc: "Nous créons de la valeur et contribuons au développement durable." },
];

/* ── Stats ── */
const stats = [
  { number: '7', label: 'Filiales Spécialisées', icon: Globe },
  { number: '110m²', label: ' d\'Infrastructure', icon: Award },
  { number: '30+', label: 'Collaborateurs', icon: Users },
  { number: '100%', label: 'Engagement Client', icon: TrendingUp },
];

const HomePage = () => {
  const heroRef = useRef(null);

  /* Parallax on hero */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.setProperty('--parallax-y', `${y * 0.4}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToNext = () => {
    document.getElementById('home-stats')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <Helmet>
        <title>GUIMS GROUP - Accueil | Construire • Former • Digitaliser l'Afrique</title>
        <meta name="description" content="Bienvenue chez GUIMS GROUP, groupe multisectoriel basé à Douala. Découvrez nos filiales en digital, éducation, formation et agrobusiness." />
        <link rel="canonical" href="https://guimsgroup.com/" />
      </Helmet>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="hero" ref={heroRef} id="hero">
        {/* Background layers */}
        <div className="hero-bg">
          <div className="hero-bg-grid" />
          <div className="hero-bg-blob hero-bg-blob--1" />
          <div className="hero-bg-blob hero-bg-blob--2" />
          <div className="hero-bg-blob hero-bg-blob--3" />
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" />
              Groupe Multisectoriel Camerounais
            </div>

            <h1 className="hero-title">
              L'<span>Expertise</span> au Service<br />
              de Votre <span>Réussite</span>
            </h1>

            <p className="hero-subtitle">
              GUIMS GROUP est un groupe multisectoriel qui réunit des experts passionnés pour offrir des solutions innovantes, adaptées et orientées résultats. Nous accompagnons les entreprises, institutions et particuliers dans leurs projets à travers un écosystème de compétences complémentaires.
            </p>

            <div className="hero-slogan">
              <span>Construire</span>
              <span className="sep">•</span>
              <span>Former</span>
              <span className="sep">•</span>
              <span>Digitaliser L'Afrique</span>
            </div>

            <div className="hero-actions">
              <Link to="/entites" className="btn btn--primary btn--lg" id="hero-discover-btn">
                Découvrir nos entités
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--lg" id="hero-contact-btn">
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="hero-visual">
            <div className="hero-card glass">
              <div className="hero-card-header">
                <div className="hc-dot hc-dot--r" />
                <div className="hc-dot hc-dot--y" />
                <div className="hc-dot hc-dot--g" />
                <span>GUIMS GROUP — Vue d'ensemble</span>
              </div>
              <div className="hero-card-body">
                <div className="hc-label">Nos 7 Entités</div>
                {entities.map((e, i) => (
                  <Link 
                    key={e.name} 
                    to="/entites" 
                    className="hc-entity" 
                    style={{ '--delay': `${i * 0.1}s`, textDecoration: 'none', display: 'flex' }}
                  >
                    <div className="hc-entity-icon" style={!e.imgSrc ? { background: e.bg, color: e.color } : {}}>
                      {e.imgSrc ? (
                        <img src={e.imgSrc} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      ) : (
                        <e.icon size={14} />
                      )}
                    </div>
                    <div className="hc-entity-info">
                      <span className="hc-entity-name">{e.name}</span>
                      <span className="hc-entity-desc">{e.desc}</span>
                    </div>
                    <div className="hc-entity-bar">
                      <div className="hc-entity-fill" style={{ width: `${75 + i * 3}%`, background: e.color }} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero-badge-float hero-badge-float--1 glass">
              <Shield size={16} className="float-icon" />
              <span>Certifié & Enregistré</span>
            </div>
            <div className="hero-badge-float hero-badge-float--2 glass">
              <MapPinIcon />
              <span>Douala, Cameroun</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button className="hero-scroll-cue" onClick={scrollToNext} aria-label="Défiler vers le bas">
          <ChevronDown size={22} />
        </button>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <div className="stats-bar" id="home-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ number, label, icon: Icon }) => (
              <div key={label} className="stat-item">
                <div className="stat-icon"><Icon size={18} /></div>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ABOUT / INTRO
      ══════════════════════════════════════════ */}
      <RevealSection>
        <section className="section section--white home-about">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <div className="reveal">
                  <span className="section-badge">À propos de nous</span>
                  <h2 className="section-title">
                    L'expertise au service de votre <span>réussite</span>
                  </h2>
                  <div className="section-divider" />
                  <p className="section-subtitle">
                    GUIMS GROUP est un groupe multisectoriel qui réunit des experts passionnés pour offrir des solutions innovantes, adaptées et orientées résultats.
                  </p>
                </div>
                <div className="reveal delay-2">
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.95rem', lineHeight: '1.8' }}>
                    Nous accompagnons les entreprises, institutions et particuliers dans leurs projets à travers un écosystème de compétences complémentaires.
                  </p>
                </div>
                <div className="reveal delay-3" style={{ marginTop: '32px' }}>
                  <Link to="/valeurs" className="btn btn--outline" id="about-values-btn">
                    Nos valeurs & mission
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="about-visual reveal-right delay-2">
                <div className="about-card-stack">
                  <div className="about-card about-card--back" />
                  <div className="about-card about-card--main">
                    <div className="about-card-content">
                      <div className="about-presence">
                        <h4>Notre Présence</h4>
                        <div className="presence-item">
                          <div className="presence-dot presence-dot--main" />
                          <span>Siège : Malangue – Douala</span>
                        </div>
                        <div className="presence-item">
                          <div className="presence-dot" />
                          <span>Représentation : Akwa – Douala</span>
                        </div>
                        <div className="presence-item">
                          <div className="presence-dot" />
                          <span>Représentation : Yaoundé</span>
                        </div>
                      </div>
                      <div className="about-infra">
                        <div className="infra-item">
                          <Users size={20} color="var(--primary)" />
                          <div className="infra-label"><strong>UNE ÉQUIPE</strong><br />D'EXPERTS<br />PLURIDISCIPLINAIRES</div>
                        </div>
                        <div className="infra-item">
                          <Lightbulb size={20} color="var(--primary)" />
                          <div className="infra-label"><strong>DES SOLUTIONS</strong><br />INNOVANTES ET<br />ADAPTÉES</div>
                        </div>
                        <div className="infra-item">
                          <TrendingUp size={20} color="var(--primary)" />
                          <div className="infra-label"><strong>DES RÉSULTATS</strong><br />CONCRETS ET<br />MESURABLES</div>
                        </div>
                        <div className="infra-item">
                          <Heart size={20} color="var(--primary)" />
                          <div className="infra-label"><strong>UN PARTENAIRE</strong><br />DE CONFIANCE À<br />VOS CÔTÉS</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ══════════════════════════════════════════
          ENTITIES PREVIEW
      ══════════════════════════════════════════ */}
      <RevealSection>
        <section className="section section--light home-entities">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <span className="section-badge">Notre écosystème</span>
              <h2 className="section-title">Nos <span>7 Entités</span> Spécialisées</h2>
              <div className="section-divider" />
              <p className="section-subtitle">
                Chaque filiale est un centre d'excellence dans son domaine, portée par
                des experts engagés pour votre réussite.
              </p>
            </div>

            <div className="entities-preview-grid">
              {entities.map((entity, i) => (
                <Link
                  key={entity.name}
                  to="/entites"
                  className={`entity-preview-card reveal delay-${(i % 4) + 1}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div className="epc-icon" style={!entity.imgSrc ? { background: entity.bg, color: entity.color } : { width: '80px', height: '80px', marginBottom: '12px' }}>
                    {entity.imgSrc ? (
                      <img src={entity.imgSrc} alt={entity.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <entity.icon size={28} />
                    )}
                  </div>
                  <div className="epc-accent" style={{ background: entity.color }} />
                  <h3 className="epc-name">{entity.name}</h3>
                  <p className="epc-desc">{entity.desc}</p>
                  <div className="epc-arrow" style={{ color: entity.color }}>›</div>
                </Link>
              ))}
            </div>

            <div className="reveal delay-4" style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link to="/entites" className="btn btn--primary btn--lg" id="entities-see-all-btn">
                Voir toutes nos entités
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ══════════════════════════════════════════
          VALUES PREVIEW
      ══════════════════════════════════════════ */}
      <RevealSection>
        <section className="section home-values">
          <div className="container">
            <div className="home-values-inner">
              <div className="home-values-text">
                <div className="reveal">
                  <span className="section-badge section-badge--light">Nos valeurs</span>
                  <h2 className="section-title section-title--white">
                    Les piliers de notre <span>excellence</span>
                  </h2>
                  <div className="section-divider" />
                  <p className="section-subtitle section-subtitle--white">
                    Nos valeurs sont le fondement de chaque décision, chaque projet
                    et chaque relation que nous bâtissons.
                  </p>
                  <blockquote className="home-values-quote reveal delay-2">
                    "Petit à petit, on y arrivera."
                  </blockquote>
                  <div className="reveal delay-3">
                    <Link to="/valeurs" className="btn btn--secondary" id="home-values-btn">
                      Explorer nos valeurs
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="home-values-grid">
                {values.map((v, i) => (
                  <div key={v.label} className={`hv-card glass reveal delay-${i + 1}`}>
                    <div className="hv-icon">
                      <v.icon size={24} />
                    </div>
                    <h3 className="hv-label">{v.label}</h3>
                    <p className="hv-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <RevealSection>
        <section className="home-cta reveal">
          <div className="container home-cta-inner">
            <div className="home-cta-text">
              <h2>Prêt à bâtir votre avenir avec GUIMS GROUP ?</h2>
              <p>Contactez-nous dès aujourd'hui et démarrons ensemble votre projet de réussite.</p>
            </div>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn--primary btn--lg" id="cta-contact-btn">
                Contactez-nous
                <ArrowRight size={18} />
              </Link>
              <Link to="/ressources" className="btn btn--outline home-cta-outline" id="cta-resources-btn">
                Nos ressources
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

    </div>
  );
};

/* Tiny inline icon to avoid extra import */
const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default HomePage;
