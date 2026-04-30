import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Wifi, Battery, Home,
  Code, BarChart2, Megaphone, Bot, Lock,
  Users, CheckCircle, ArrowRight,
  Cpu, Settings, Award, Building2,
} from 'lucide-react';
import RevealSection from '../components/RevealSection';

// Branded Local Assets
import itParkImg from '../assets/resources/hw-it-park.png';
import networkImg from '../assets/resources/hw-network.png';
import generatorImg from '../assets/resources/hw-generator.png';
import officeImg from '../assets/resources/hw-office.png';
import heroImg from '../assets/resources/hero-office-final.png';
import teamImg from '../assets/resources/team.png';
import handshakeImg from '../assets/resources/handshake.png';

import './Resources.css';

const hardware = [
  {
    icon: Monitor,
    label: 'PARC INFORMATIQUE PROFESSIONNEL',
    desc: 'Postes multi-écrans haute résolution pour le développement et le design. Équipements de visioconférence 4K pour une collaboration fluide.',
    impact: 'Disponibilité : 99.9% — Performance Optimale',
    image: itParkImg
  },
  {
    icon: Wifi,
    label: 'INFRASTRUCTURE RÉSEAU & CONNECTIVITÉ',
    desc: 'Fibre optique dédiée avec basculement automatique. Réseau local 10Gbps sécurisé par pare-feu de nouvelle génération.',
    impact: 'Connexion Ultra-Rapide & Sécurisée',
    image: networkImg
  },
  {
    icon: Battery,
    label: 'CONTINUITÉ ÉNERGÉTIQUE (SÉCURITÉ)',
    desc: 'Double redondance avec onduleurs haute capacité et groupe électrogène industriel à démarrage automatique.',
    impact: 'Autonomie Totale en cas de Coupure',
    image: generatorImg
  },
  {
    icon: Home,
    label: 'ENVIRONNEMENT DE TRAVAIL',
    desc: 'Espaces collaboratifs ergonomiques, salles de réunion équipées et zones de concentration dédiées.',
    impact: 'Cadre Professionnel & Inspirant',
    image: officeImg
  },
];

const software = [
  {
    icon: Code,
    label: 'DÉVELOPPEMENT & TECH',
    tools: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
    desc: 'Frameworks modernes (React, Next.js). Backend robuste (Node.js, Python). Bases de données et Cloud (PostgreSQL, AWS).',
    impact: 'Solutions scalables, rapides et sécurisées.',
    logos: [
      'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
      'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg',
      'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
      'https://www.vectorlogo.zone/logos/python/python-icon.svg',
      'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
      'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg',
      'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg'
    ]
  },
  {
    icon: BarChart2,
    label: 'GESTION DE PROJETS',
    tools: ['Trello', 'Monday.com', 'Microsoft Project'], 
    desc: 'Outils de gestion de projet (suivi des tâches). Planification et reporting. Collaboration interne structurée.', 
    impact: 'Votre projet est suivi de A à Z avec rigueur.',
    logos: [
      'https://www.google.com/s2/favicons?domain=trello.com&sz=128', 
      'https://www.google.com/s2/favicons?domain=monday.com&sz=128', 
      'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128'
    ]
  },
  {
    icon: Megaphone,
    label: 'MARKETING & DIGITAL',
    tools: ['Meta', 'TikTok', 'Google', 'Canva'],
    desc: 'Outils de gestion réseaux sociaux. Plateformes publicitaires (Meta, TikTok, Google). Outils de design et création visuelle.',
    impact: 'Nous ne faisons pas que créer, nous savons vendre.',
    logos: [
      'https://api.iconify.design/logos:facebook.svg', 
      'https://api.iconify.design/logos:tiktok-icon.svg', 
      'https://api.iconify.design/logos:google-icon.svg', 
      'https://api.iconify.design/logos:canva.svg'
    ]
  },
  {
    icon: Bot,
    label: 'AUTOMATISATION & RELATION CLIENT',
    tools: ['ManyChat', 'HubSpot', 'Zoho CRM'],
    desc: 'Chatbots intelligents. Automatisation des réponses clients. CRM (gestion des prospects et clients).',
    impact: 'Nous optimisons votre acquisition et votre conversion.',
    logos: [
      'https://api.iconify.design/logos:hubspot.svg', 
      'https://api.iconify.design/logos:zoho.svg'
    ]
  },
  {
    icon: Lock,
    label: 'SÉCURITÉ & PROTECTION DES DONNÉES',
    tools: ['Acronis', 'LastPass', 'Kaspersky'], 
    desc: 'Systèmes de sauvegarde régulière. Protection des données sensibles. Gestion des accès et des droits.', 
    impact: 'Vos données sont sécurisées chez nous.',
    logos: [
      'https://www.google.com/s2/favicons?domain=acronis.com&sz=128', 
      'https://www.google.com/s2/favicons?domain=lastpass.com&sz=128',
      'https://www.google.com/s2/favicons?domain=kaspersky.com&sz=128'
    ]
  },
];

const infra = [
  { num: '01', label: 'SALLE DE CONFÉRENCE MODULABLE', sub: 'Capacité : 30 places. Idéale pour séminaires, réunions et présentations.' },
  { num: '01', label: 'SALLE DE FORMATION ET DE RÉUNION', sub: 'Capacité : 20 places. Dédiée aux formations et sessions pratiques.' },
  { num: '06', label: 'BUREAUX SPACIEUX', sub: 'Espaces de travail dédiés aux équipes pour une organisation optimale des activités.' },
  { num: '110m²', label: " D'INFRASTRUCTURE", sub: 'Le site principal de GUIMS GROUP à Malangue s\'étend sur une superficie d\'environ 110 m², aménagée pour répondre aux exigences professionnelles du groupe.' },
];

const methodology = [
  'Processus de travail clair et structuré',
  'Planification rigoureuse et respect des délais',
  'Suivi et reporting réguliers',
  'Qualité, transparence et amélioration continue',
];

const references = [
  'Plusieurs projets réalisés avec succès',
  'Clients et partenaires satisfaits',
  'Expertise reconnue dans divers secteurs',
  'Approche orientée résultats et impact',
];

const atouts = [
  { icon: Building2, text: 'Un cadre professionnel adapté aux formations et réunions' },
  { icon: Users, text: 'Une organisation interne structurée et performante' },
  { icon: CheckCircle, text: 'Une capacité d\'accueil pour clients et partenaires' },
  { icon: Settings, text: 'Une flexibilité pour différents types d\'activités' }
];

const ResourcesPage = () => (
  <div className="resources-page">
    <div className="page-bg-pattern"></div>
    {/* ── HERO SECTION ── */}
    <div className="resources-hero">
      <div className="page-bg-pattern"></div>
      <div className="container">
        <div className="res-hero-grid">
          <div className="res-hero-text">
            <div className="res-breadcrumb">
              <Link to="/">Accueil</Link> / <span>Ressources</span>
            </div>
            <h1 className="res-title">NOS <span className="text-highlight">RESSOURCES</span></h1>
            <h2 className="res-subtitle">LES MOYENS AU SERVICE DE VOS PROJETS</h2>
            <div className="res-divider"></div>
            <p className="res-description">
              GUIMS GROUP s'appuie sur une infrastructure technologique moderne,
              des outils performants et des ressources humaines qualifiées
              pour garantir la qualité, la sécurité, la continuité
              et la réussite de chacun de vos projets.
            </p>
          </div>
          <div className="res-hero-visual">
            <div className="res-hero-img-wrapper" style={{ backgroundColor: '#f0f4ff' }}>
              <img 
                src={heroImg} 
                alt="GUIMS GROUP Office" 
              />
              <div className="res-hero-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ── HARDWARE ── */}
    <RevealSection>
      <section className="section section--light">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">Matériel</span>
            <h2 className="section-title">1. Ressources Matérielles <span>(Hardware)</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Un parc informatique professionnel et une infrastructure robuste pour des projets sans interruption.
            </p>
          </div>
          <div className="hw-grid">
            {hardware.map((item, i) => (
              <div key={item.label} className={`hw-card reveal delay-${i + 1}`}>
                <div className="hw-main-content">
                  <div className="hw-header-group">
                    <div className="hw-icon"><item.icon size={24} /></div>
                    <h3 className="hw-label">{item.label}</h3>
                  </div>
                  <p className="hw-desc">{item.desc}</p>
                  <div className="hw-impact">
                    <Award size={12} />
                    <span>{item.impact}</span>
                  </div>
                </div>
                <div className="hw-image-wrapper">
                  <img src={item.image} alt={item.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── SOFTWARE ── */}
    <RevealSection>
      <section className="section section--white">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">Logiciels</span>
            <h2 className="section-title">2. Ressources Logicielles <span>(Software)</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Les meilleurs outils du marché pour assurer performance, collaboration et sécurité.
            </p>
          </div>
          <div className="sw-grid">
            {software.map((item, i) => (
              <div key={item.label} className={`sw-card reveal delay-${(i % 3) + 1}`}>
                <div className="sw-header">
                  <div className="sw-icon"><item.icon size={20} /></div>
                  <h3 className="sw-label">{item.label}</h3>
                </div>
                <div className="sw-logos-row">
                  {item.logos && item.logos.map((logo, idx) => (
                    <img key={idx} src={logo} alt="logo" className="sw-logo-img" />
                  ))}
                </div>
                <p className="sw-desc">{item.desc}</p>
                <div className="hw-impact" style={{ marginTop: '12px' }}>
                  <Award size={12} />
                  <span>{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── HUMAN RESOURCES ── */}
    <RevealSection>
      <section className="section res-human">
        <div className="container">
          <div className="human-grid">
            <div className="human-text">
              <div className="reveal">
                <span className="section-badge section-badge--light">Notre équipe</span>
                <h2 className="section-title section-title--white" style={{ marginTop: '12px' }}>
                  3. Ressources <span>Humaines</span>
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle section-subtitle--white">
                  L'expertise au service de votre réussite.
                </p>
              </div>
              <div className="human-qualities">
                {[
                  'Équipe pluridisciplinaire et qualifiée',
                  'Experts par domaine d\'activité',
                  'Formation continue et montée en compétences',
                  'Engagement et esprit d\'équipe',
                ].map((q, i) => (
                  <div key={q} className={`hq-item reveal delay-${i + 1}`}>
                    <CheckCircle size={16} />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
              <div className="human-impact reveal delay-4">
                <Award size={18} />
                <p><strong>IMPACT CLIENT :</strong> Une équipe compétente, motivée et engagée pour vous accompagner vers le succès.</p>
              </div>
            </div>
            <div className="human-visual reveal-right delay-2">
              <div className="human-image-container">
                <img src={teamImg} alt="Notre Équipe" className="human-img" />
                <div className="human-stats-overlay">
                  <div className="hs-grid">
                    <div className="hs-card">
                      <div className="hs-num">30+</div>
                      <div className="hs-label">Collaborateurs</div>
                    </div>
                    <div className="hs-card">
                      <div className="hs-num">7</div>
                      <div className="hs-label">Directions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── INFRASTRUCTURE ── */}
    <RevealSection>
      <section className="section section--light">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <span className="section-badge">Nos locaux</span>
            <h2 className="section-title">Infrastructure & <span>Localisation</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              GUIMS GROUP dispose d'infrastructures modernes et adaptées pour accueillir vos projets
              et garantir un environnement de travail optimal.
            </p>
          </div>

          <div className="infra-grid">
            {infra.map((item) => (
              <div key={item.label} className="infra-card reveal">
                <div className="infra-num">{item.num}</div>
                <h4 className="infra-label">{item.label}</h4>
                <p className="infra-sub">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="method-card reveal" style={{ background: 'var(--grad-primary)', border: 'none', marginBottom: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', width: '100%' }}>
              {atouts.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--white)', padding: '16px 20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--secondary)', flexShrink: 0 }}><a.icon size={28} /></div>
                  <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--gray-700)', lineHeight: '1.4' }}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology + References */}
          <div className="method-ref-grid">
            <div className="method-card reveal delay-1">
              <h4><Settings size={16} /> 4. Méthodologie & Organisation</h4>
              <ul>
                {methodology.map((m) => (
                  <li key={m}><CheckCircle size={13} /><span>{m}</span></li>
                ))}
              </ul>
            </div>
            <div className="method-card reveal delay-2">
              <div className="ref-content">
                <h4><Award size={16} /> 5. Expérience & Références</h4>
                <ul>
                  {references.map((r) => (
                    <li key={r}><CheckCircle size={13} /><span>{r}</span></li>
                  ))}
                </ul>
              </div>
              <div className="ref-image">
                <img src={handshakeImg} alt="Handshake" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>

    {/* CTA */}
    <RevealSection>
      <section className="section res-cta reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title section-title--white">
            Mettons nos ressources au service<br />de <span>votre projet</span>
          </h2>
          <div className="section-divider" style={{ margin: '20px auto 24px' }} />
          <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto 36px' }}>
            Contactez-nous pour discuter de votre projet et découvrir comment GUIMS GROUP
            peut vous accompagner vers le succès.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg" id="resources-cta-btn">
            Démarrer un projet <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </RevealSection>
  </div>
);

export default ResourcesPage;
