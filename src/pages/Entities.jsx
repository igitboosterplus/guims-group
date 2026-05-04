import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, GraduationCap, BookOpen, Leaf,
  Zap, Calculator, Briefcase,
  ArrowRight, ChevronDown, ChevronUp,
  Users, Target, Star, CheckCircle,
} from 'lucide-react';
import RevealSection from '../components/RevealSection';
import { Helmet } from 'react-helmet-async';
import './Entities.css';

const entities = [
  {
    id: 'digitbooster',
    imgSrc: '/logo-digibooster.png',
    icon: Monitor,
    name: 'Digitbooster+',
    subtitle: 'Direction Digitale',
    color: '#2563eb',
    bg: '#eff6ff',
    gradient: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
    tagline: 'Votre croissance digitale, notre mission',
    description:
      'Digitbooster+ est le pôle digital et communication de GUIMS GROUP. Nous concevons et déployons des stratégies digitales complètes pour propulser votre visibilité et votre croissance en ligne.',
    services: [
      'Gestion des réseaux sociaux',
      'Création de sites web',
      'Conception d\'applications',
      'E-commerce',
      'Communication digitale',
    ],
    team: [
      'Ingénieurs en Génie Logiciel',
      'Développeurs Web & Mobile',
      'UI/UX Designers',
      'Community Managers',
      'Experts Marketing Digital',
      'Traffic Managers',
    ],
    impact: 'Nous créons et maintenons des solutions fiables et performantes.',
    websiteUrl: 'https://digitboosterplus.com',
  },
  {
    id: 'guims-educ',
    imgSrc: '/logo-guims-educ.jpg',
    icon: BookOpen,
    name: 'Guims Educ',
    subtitle: 'Direction Éducation',
    color: '#7c3aed',
    bg: '#f5f3ff',
    gradient: 'linear-gradient(135deg, #6d28d9, #8b5cf6)',
    tagline: 'L\'excellence académique à portée de tous',
    description:
      'Guims Educ accompagne élèves et étudiants dans leur parcours académique à travers des cours particuliers de qualité, un suivi personnalisé et un encadrement pédagogique rigoureux.',
    services: [
      'Cours particuliers à domicile',
      'Suivi académique personnalisé',
      'Aide aux devoirs',
      'Préparation aux examens',
    ],
    team: [
      'Responsable Pédagogique',
      'Enseignants / Répétiteurs qualifiés',
      'Coordinateurs Pédagogiques',
      'Chargés du Suivi des Élèves',
    ],
    impact: 'Une qualité pédagogique garantie pour chaque apprenant.',
    websiteUrl: 'https://guimeduc.com',
  },
  {
    id: 'guims-academy',
    imgSrc: '/logo-academy.jpg',
    icon: GraduationCap,
    name: 'Guims Academy',
    subtitle: 'Direction Formation',
    color: '#0891b2',
    bg: '#ecfeff',
    gradient: 'linear-gradient(135deg, #0e7490, #06b6d4)',
    tagline: 'Former les talents de demain aujourd\'hui',
    description:
      'Guims Academy est le centre de formation professionnelle du groupe. Nous proposons des formations certifiantes, pratiques et adaptées aux besoins du marché africain et mondial.',
    services: [
      'Formations professionnelles',
      'Renforcement de compétences',
      'Développement personnel',
      'Accompagnement à l\'employabilité',
    ],
    team: [
      'Formateurs Spécialisés',
      'Coachs Professionnels',
      'Chargés de Programme',
      'Coordinateurs Formation',
    ],
    impact: 'Des compétences concrètes, un impact immédiat sur votre carrière.',
    websiteUrl: 'https://guimacademy.com',
  },
  {
    id: 'gaba',
    imgSrc: '/logo-gaba.png',
    icon: Leaf,
    name: 'GABA',
    subtitle: 'Direction Agrobusiness',
    color: '#16a34a',
    bg: '#f0fdf4',
    gradient: 'linear-gradient(135deg, #15803d, #22c55e)',
    tagline: 'Valoriser les ressources agricoles africaines',
    description:
      'GABA est le bras agrobusiness de GUIMS GROUP. Nous supervisons les activités agricoles, coordonnons les formations terrain et accompagnons les producteurs dans leurs projets de production durable.',
    services: [
      'Agriculture et élevage',
      'Formation pratique',
      'Accompagnement à la production',
      'Conseils et suivi technique',
    ],
    team: [
      'Responsable GABA',
      'Techniciens Agricoles',
      'Formateurs Terrain',
      'Conseillers en Production',
    ],
    impact: 'Nous valorisons les ressources agricoles pour une production durable.',
    websiteUrl: 'https://gaba.com',
  },
  {
    id: 'guimselect',
    imgSrc: '/logo-guimselect.png',
    icon: Zap,
    name: 'GuimsElect',
    subtitle: 'Direction Technique',
    color: '#d97706',
    bg: '#fffbeb',
    gradient: 'linear-gradient(135deg, #b45309, #f59e0b)',
    tagline: 'La technologie au service de vos projets',
    description:
      'GuimsElect est le pôle technique et équipements du groupe. Nous gérons les équipements, supervisors les interventions techniques et assurons la maintenance pour garantir la continuité de vos opérations.',
    services: [
      'Vente de matériel informatique',
      'Réparation d\'équipements électroniques',
      'Maintenance & assistance technique',
    ],
    team: [
      'Responsable Technique',
      'Techniciens Informatiques',
      'Techniciens Maintenance',
      'Gestionnaires de Matériel',
    ],
    impact: 'Vos équipements toujours opérationnels, vos projets jamais interrompus.',
    websiteUrl: 'https://guimselect.com',
  },
  {
    id: 'guims-compta',
    imgSrc: '/logo-compta.png',
    icon: Calculator,
    name: 'Guims Compta',
    subtitle: 'Direction Comptable',
    color: '#dc2626',
    bg: '#fef2f2',
    gradient: 'linear-gradient(135deg, #b91c1c, #ef4444)',
    tagline: 'Votre expertise comptable et fiscale de confiance',
    description:
      'Guims Compta offre des services d\'expertise comptable, de conseil fiscal et financier aux entreprises et particuliers. Nous gérons votre comptabilité avec rigueur pour vous permettre de vous concentrer sur votre cœur de métier.',
    services: [
      'Tenue et révision comptable',
      'Déclarations fiscales',
      'Conseil en gestion',
      'Accompagnement juridique et administratif',
    ],
    team: [
      'Responsable Comptable',
      'Comptables certifiés',
      'Fiscalistes',
      'Conseillers en Gestion',
    ],
    impact: 'Vos finances en ordre, votre développement assuré.',
    websiteUrl: 'https://guimcompta.com',
  },
  {
    id: 'guims-consulting',
    imgSrc: '/logo-consulting.png',
    icon: Briefcase,
    name: 'Guims Consulting',
    subtitle: 'Direction Consulting & RH',
    color: '#0B2046',
    bg: '#f0f4ff',
    gradient: 'linear-gradient(135deg, #0B2046, #163a7a)',
    tagline: 'Votre partenaire stratégique pour réussir',
    description:
      'Guims Consulting accompagne entreprises et entrepreneurs dans leur développement stratégique. De la gestion des ressources humaines au conseil stratégique, nous vous aidons à atteindre vos objectifs.',
    services: [
      'Conseil en stratégie et organisation',
      'Études et analyses de marché',
      'Accompagnement de projets',
      'Performance & transformation',
    ],
    team: [
      'Responsable Consulting & RH',
      'Chargés de Recrutement',
      'Consultants Senior',
      'Gestionnaires RH',
    ],
    impact: 'Votre succès est notre mission. Construisons ensemble un avenir meilleur.',
    websiteUrl: 'https://guimconsulting.com',
  },
];

const EntityCard = ({ entity, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = entity.icon;

  return (
    <div
      className={`entity-card reveal delay-${(index % 3) + 1}`}
      id={`entity-${entity.id}`}
    >
      {/* Card top accent */}
      <div className="ec-top-bar" style={{ background: entity.gradient }} />

      <div className="ec-body">
        {/* Header */}
        <div className="ec-header">
          {entity.imgSrc ? (
            <div className="ec-logo-img">
              <img src={entity.imgSrc} alt={`${entity.name} logo`} style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '8px', padding: '4px', background: 'white' }} />
            </div>
          ) : (
            <div className="ec-icon" style={{ background: entity.bg, color: entity.color }}>
              <Icon size={32} />
            </div>
          )}
          <div className="ec-title-group">
            <span className="ec-subtitle" style={{ color: entity.color }}>{entity.subtitle}</span>
            <h2 className="ec-name">{entity.name}</h2>
            <p className="ec-tagline">{entity.tagline}</p>
          </div>
        </div>

        {/* Description & Voir Plus */}
        <div className="ec-description-wrap">
          <p className="ec-description">{entity.description}</p>
          <a 
            href={entity.websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn--primary btn--sm"
            style={{ background: entity.color, border: 'none', marginBottom: '24px', width: 'fit-content' }}
          >
            Voir plus
            <ArrowRight size={14} style={{ marginLeft: '6px' }} />
          </a>
        </div>

        {/* Services */}
        <div className="ec-services">
          <h4 className="ec-section-label">Nos services</h4>
          <ul className="ec-service-list">
            {entity.services.map((s) => (
              <li key={s} className="ec-service-item">
                <CheckCircle size={14} style={{ color: entity.color, flexShrink: 0 }} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle team */}
        <button
          className="ec-toggle"
          onClick={() => setExpanded(!expanded)}
          style={{ color: entity.color, borderColor: `${entity.color}33` }}
          aria-expanded={expanded}
        >
          <Users size={15} />
          <span>Notre équipe</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <div className="ec-team">
            <div className="ec-team-grid">
              {entity.team.map((t) => (
                <div key={t} className="ec-team-item" style={{ background: entity.bg, color: entity.color }}>
                  <Star size={11} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact badge */}
        <div className="ec-impact" style={{ borderColor: `${entity.color}33`, background: entity.bg }}>
          <Target size={14} style={{ color: entity.color, flexShrink: 0 }} />
          <p style={{ color: entity.color }}><strong>Impact client :</strong> {entity.impact}</p>
        </div>
      </div>
    </div>
  );
};

const EntitiesPage = () => (
  <div className="entities-page">
    <Helmet>
      <title>Nos Entités | GUIMS GROUP - Digital, Éducation, Agrobusiness, Formation</title>
      <meta name="description" content="Découvrez les 7 filiales de GUIMS GROUP : Digitbooster+, Guims Academy, GABA, Guims Compta, et plus encore. Des pôles d'excellence pour l'Afrique." />
      <link rel="canonical" href="https://guimsgroup.com/entites" />
    </Helmet>
    {/* Page Hero */}
    <div className="page-hero">
      <div className="container page-hero-content">
        <div className="page-breadcrumb">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <span>Nos Entités</span>
        </div>
        <span className="section-badge section-badge--light">Notre écosystème</span>
        <h1>Nos <span style={{ color: 'var(--secondary-light)' }}>7 Entités</span> Spécialisées</h1>
        <p>
          Chaque filiale de GUIMS GROUP est un pôle d'excellence dans son domaine,
          portée par des experts engagés et des équipes pluridisciplinaires.
        </p>
      </div>
    </div>

    {/* Entities grid */}
    <RevealSection>
      <section className="section section--light entities-grid-section">
        <div className="container">
          {/* Quick nav */}
          <div className="entities-quick-nav reveal">
            {entities.map((e) => (
              <a
                key={e.id}
                href={`#entity-${e.id}`}
                className="eqn-item"
                style={{ '--eqn-color': e.color }}
              >
                {e.imgSrc ? (
                  <img src={e.imgSrc} alt={e.name} style={{ width: '24px', height: '24px', objectFit: 'contain', background: 'white', borderRadius: '4px' }} />
                ) : (
                  <e.icon size={14} />
                )}
                <span>{e.name}</span>
              </a>
            ))}
          </div>

          {/* Cards */}
          <div className="entities-grid">
            {entities.map((entity, i) => (
              <EntityCard key={entity.id} entity={entity} index={i} />
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* Bottom CTA */}
    <RevealSection>
      <section className="section entities-cta reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge section-badge--light">Travailler ensemble</span>
          <h2 className="section-title section-title--white" style={{ marginTop: '12px' }}>
            Besoin d'un accompagnement <span>personnalisé</span> ?
          </h2>
          <div className="section-divider" style={{ margin: '20px auto 24px' }} />
          <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto 36px' }}>
            Nos équipes sont disponibles pour étudier votre projet et vous proposer
            les solutions adaptées à vos besoins spécifiques.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg" id="entities-cta-btn">
            Contactez-nous maintenant
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </RevealSection>
  </div>
);

export default EntitiesPage;
