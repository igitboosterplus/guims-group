import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Lightbulb, Shield, Target,
  Heart, Users, TrendingUp, Globe,
  CheckCircle, ArrowRight, Quote, Settings, Calculator
} from 'lucide-react';
import RevealSection from '../components/RevealSection';
import './Values.css';

const coreValues = [
  {
    icon: Award,
    name: 'Excellence',
    color: '#d97706',
    bg: '#fffbeb',
    desc: 'Chaque projet est abordé avec le plus haut niveau de rigueur, de précision et de qualité. Nous ne nous satisfaisons jamais du minimum — nous visons toujours l\'optimal.',
    points: [
      'Standards de qualité élevés sur chaque livrable',
      'Amélioration continue de nos méthodes',
      'Résultats mesurables et concrets',
    ],
  },
  {
    icon: Lightbulb,
    name: 'Innovation',
    color: '#0891b2',
    bg: '#ecfeff',
    desc: 'Nous adoptons en permanence les meilleures technologies et méthodologies pour offrir des solutions modernes, efficaces et adaptées aux réalités du marché africain.',
    points: [
      'Veille technologique permanente',
      'Solutions numériques à la pointe',
      'Approches créatives et disruptives',
    ],
  },
  {
    icon: Shield,
    name: 'Intégrité',
    color: '#1D9845',
    bg: '#f0fdf4',
    desc: 'La transparence, l\'honnêteté et l\'éthique professionnelle guident toutes nos actions. Nous construisons des relations durables fondées sur la confiance mutuelle.',
    points: [
      'Transparence totale dans nos engagements',
      'Respect strict des délais et accords',
      'Relations basées sur la confiance',
    ],
  },
  {
    icon: Target,
    name: 'Impact',
    color: '#dc2626',
    bg: '#fef2f2',
    desc: 'Notre raison d\'être est de créer un impact positif, mesurable et durable — pour nos clients, nos partenaires, nos collaborateurs et l\'ensemble de la société africaine.',
    points: [
      'Impact positif sur le développement africain',
      'Résultats durables et transformateurs',
      'Engagement envers les communautés',
    ],
  },
];

const engagements = [
  { icon: Heart, label: 'Compétence', desc: 'Des experts qualifiés dans chaque domaine d\'activité.' },
  { icon: Shield, label: 'Rigueur', desc: 'Un suivi méticuleux de chaque étape de vos projets.' },
  { icon: Users, label: 'Équipe Dédiée', desc: 'Une équipe pluridisciplinaire à votre service.' },
  { icon: TrendingUp, label: 'Performance', desc: 'Des solutions performantes orientées résultats.' },
  { icon: Globe, label: 'Vision Africa', desc: 'Construire et digitaliser l\'Afrique de demain.' },
  { icon: Award, label: 'Innovation', desc: 'Toujours à la pointe des meilleures pratiques.' },
];



const ValuesPage = () => (
  <div className="values-page">
    {/* Page Hero */}
    <div className="page-hero">
      <div className="container page-hero-content">
        <div className="page-breadcrumb">
          <Link to="/">Accueil</Link>
          <span>/</span>
          <span>Valeurs & Mission</span>
        </div>
        <span className="section-badge section-badge--light">Ce qui nous définit</span>
        <h1>Nos <span style={{ color: 'var(--secondary-light)' }}>Valeurs</span> & Mission</h1>
        <p>
          Les valeurs de GUIMS GROUP sont le fondement de notre culture, de nos décisions
          et de notre engagement envers chaque client et partenaire.
        </p>
      </div>
    </div>

    {/* ── SLOGAN BAND ── */}
    <div className="values-slogan-band">
      <div className="container values-slogan-inner">
        <Quote size={32} className="quote-icon" />
        <blockquote className="values-main-quote">
          "Petit à petit, on y arrivera."
        </blockquote>
        <div className="values-slogan-pills">
          <span>Construire</span>
          <span className="pill-dot">•</span>
          <span>Former</span>
          <span className="pill-dot">•</span>
          <span>Digitaliser L'Afrique</span>
        </div>
      </div>
    </div>

    {/* ── CORE VALUES ── */}
    <RevealSection>
      <section className="section section--light">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <span className="section-badge">Nos piliers fondateurs</span>
            <h2 className="section-title">Nos <span>4 Valeurs</span> Fondamentales</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Ces valeurs ne sont pas de simples mots — elles sont incarnées chaque jour
              par chaque membre de l'équipe GUIMS GROUP.
            </p>
          </div>

          <div className="core-values-grid">
            {coreValues.map((v, i) => (
              <div key={v.name} className={`cv-card reveal delay-${i + 1}`}>
                <div className="cv-icon-wrap" style={{ background: v.bg }}>
                  <div className="cv-icon" style={{ color: v.color }}>
                    <v.icon size={36} />
                  </div>
                </div>
                <div className="cv-content">
                  <div className="cv-accent" style={{ background: v.color }} />
                  <h3 className="cv-name" style={{ color: v.color }}>{v.name}</h3>
                  <p className="cv-desc">{v.desc}</p>
                  <ul className="cv-points">
                    {v.points.map((p) => (
                      <li key={p}>
                        <CheckCircle size={13} style={{ color: v.color }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── MISSION ── */}
    <RevealSection>
      <section className="section values-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <div className="reveal">
                <span className="section-badge section-badge--light">Notre raison d'être</span>
                <h2 className="section-title section-title--white" style={{ marginTop: '12px' }}>
                  Notre <span>Mission</span> & Objectif
                </h2>
                <div className="section-divider" />
              </div>
              <div className="mission-blocks">
                <div className="mission-block reveal delay-1">
                  <div className="mb-icon"><Target size={20} /></div>
                  <div>
                    <h4>Notre Objectif</h4>
                    <p>Offrir des solutions de qualité et un accompagnement personnalisé pour la réussite de nos partenaires.</p>
                  </div>
                </div>
                <div className="mission-block reveal delay-2">
                  <div className="mb-icon"><Globe size={20} /></div>
                  <div>
                    <h4>Notre Vision</h4>
                    <p>Devenir le groupe de référence en Afrique centrale pour le développement, la formation et la digitalisation.</p>
                  </div>
                </div>
                <div className="mission-block reveal delay-3">
                  <div className="mb-icon"><Heart size={20} /></div>
                  <div>
                    <h4>Notre Force</h4>
                    <p>Une équipe pluridisciplinaire, engagée et compétente pour des résultats durables au service de vos projets.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual reveal-right delay-2">
              <div className="mv-card glass">
                <div className="mv-header">
                  <TrendingUp size={24} className="mv-header-icon" />
                  <span>GUIMS GROUP en chiffres</span>
                </div>
                <div className="mv-stats">
                  <div className="mv-stat">
                    <div className="mv-num">7</div>
                    <div className="mv-label">Filiales spécialisées</div>
                  </div>
                  <div className="mv-stat">
                    <div className="mv-num">3</div>
                    <div className="mv-label">Présences géographiques</div>
                  </div>
                  <div className="mv-stat">
                    <div className="mv-num">110m²</div>
                    <div className="mv-label">D'infrastructure</div>
                  </div>
                  <div className="mv-stat">
                    <div className="mv-num">30+</div>
                    <div className="mv-label">Collaborateurs</div>
                  </div>
                </div>
                <div className="mv-promise">
                  <CheckCircle size={16} />
                  <span>Votre succès est notre engagement quotidien.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── ORGANIGRAMME ── */}
    <RevealSection>
      <section className="section section--light">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <span className="section-badge">Notre organisation</span>
            <h2 className="section-title">Direction & <span>Gouvernance</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Une structure claire et performante pour garantir l'excellence de nos services.
            </p>
          </div>
          <div className="org-tree-wrapper reveal delay-1">
            <div className="org-diagram">

              {/* Level 1: DG & Assistante */}
              <div className="od-level od-level-1">
                <div className="od-assistante-group">
                  <div className="od-box od-assistante">
                    <div className="od-box-header" style={{ background: '#2D754C' }}>
                      <Users size={16} /> ASSISTANTE DE DIRECTION
                    </div>
                    <div className="od-box-body">Support administratif<br />et organisationnel</div>
                  </div>
                  <div className="od-line-h-dotted"></div>
                </div>

                <div className="od-dg-group">
                  <div className="od-box od-dg">
                    <div className="od-box-header" style={{ background: '#0B2046' }}>
                      DG<br />DIRECTEUR GÉNÉRAL
                    </div>
                    <div className="od-box-body" style={{ fontWeight: '800' }}>GUIMTSOP YVANN</div>
                  </div>
                  <div className="od-line-v-dg"></div>
                </div>
              </div>

              {/* Level 2: DAF & DT */}
              <div className="od-level od-level-2">
                <div className="od-line-h-level2"></div>
                <div className="od-line-v-center-1"></div>

                <div className="od-level2-branches">
                  <div className="od-branch">
                    <div className="od-line-v-branch"></div>
                    <div className="od-box">
                      <div className="od-box-header" style={{ background: '#0B2046' }}>
                        <TrendingUp size={16} /> DIRECTEUR ADMINISTRATIF<br />ET FINANCIER
                      </div>
                      <div className="od-box-body" style={{ fontWeight: '800' }}>GUIMTSOP YVANN</div>
                    </div>
                    <div className="od-line-v-sub"></div>
                  </div>

                  <div className="od-branch">
                    <div className="od-line-v-branch"></div>
                    <div className="od-box">
                      <div className="od-box-header" style={{ background: '#0B2046' }}>
                        <Settings size={16} /> DIRECTEUR TECHNIQUE
                      </div>
                      <div className="od-box-body" style={{ fontWeight: '800' }}>CEVERIN WOUETCHOUA</div>
                    </div>
                    <div className="od-line-v-sub"></div>
                  </div>
                </div>

                {/* Sub-level horizontal line between Compta and Projet */}
                <div className="od-line-h-sublevel"></div>

                <div className="od-level2-sub-nodes">
                  <div className="od-box od-sub">
                    <div className="od-box-header" style={{ background: '#fff', color: '#2D754C', borderBottom: '1px solid #eee' }}>
                      <Calculator size={16} /> COMPTABILITÉ
                    </div>
                    <div className="od-box-body" style={{ fontWeight: '700' }}>BUCHA PAMELA</div>
                  </div>
                  <div className="od-box od-sub">
                    <div className="od-box-header" style={{ background: '#fff', color: '#2D754C', borderBottom: '1px solid #eee' }}>
                      <Users size={16} /> CHEF DE PROJET
                    </div>
                    <div className="od-box-body" style={{ fontWeight: '700' }}>PROSPER MAHOU</div>
                  </div>
                </div>
                <div className="od-line-v-center-2"></div>
              </div>

              {/* Level 3: 7 Entities */}
              <div className="od-level od-level-3">
                <div className="od-line-h-level3"></div>
                <div className="od-level3-grid">

                  {/* Entity 1 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header">DIRECTION DIGITALE<br />(DIGITBOOSTER+)</div>
                      <div className="ode-resp">RESPONSABLE DIGITAL</div>
                      <div className="ode-list">
                        <ul>
                          <li>Ingénieurs en Génie Logiciel</li>
                          <li>Développeurs Web & Mobile</li>
                          <li>UI/UX Designers</li>
                          <li>Community Managers</li>
                          <li>Experts Marketing Digital</li>
                          <li>Traffic Managers</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE DIGITALE</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 2 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#2D754C' }}>DIRECTION ÉDUCATION<br />(GUIMS EDUC)</div>
                      <div className="ode-resp">RESPONSABLE PÉDAGOGIQUE</div>
                      <div className="ode-list">
                        <ul>
                          <li>Enseignants / Répétiteurs</li>
                          <li>Coordinateurs Pédagogiques</li>
                          <li>Chargés du Suivi des Élèves</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE ÉDUCATION</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 3 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#0B2046' }}>DIRECTION FORMATION<br />(GUIMS ACADEMY)</div>
                      <div className="ode-resp">RESPONSABLE FORMATION</div>
                      <div className="ode-list">
                        <ul>
                          <li>Formateurs Spécialisés</li>
                          <li>Chargés de Programme</li>
                          <li>Coachs Professionnels</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE FORMATION</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 4 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#2D754C' }}>DIRECTION AGROBUSINESS<br />(GABA)</div>
                      <div className="ode-resp">RESPONSABLE GABA</div>
                      <div className="ode-list">
                        <ul>
                          <li>Techniciens Agricoles</li>
                          <li>Formateurs Terrain</li>
                          <li>Conseillers en Production</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE AGROBUSINESS</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 5 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#0B2046' }}>DIRECTION TECHNIQUE<br />(GUIMSELECT)</div>
                      <div className="ode-resp">RESPONSABLE TECHNIQUE</div>
                      <div className="ode-list">
                        <ul>
                          <li>Techniciens Informatiques</li>
                          <li>Techniciens Maintenance</li>
                          <li>Gestionnaires de Matériel</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE TECHNIQUE</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 6 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#2D754C' }}>DIRECTION COMPTABLE<br />(GUIMS COMPTA)</div>
                      <div className="ode-resp">RESPONSABLE COMPTABLE</div>
                      <div className="ode-list">
                        <ul>
                          <li>Comptables</li>
                          <li>Fiscalistes</li>
                          <li>Conseillers en Gestion</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE COMPTABLE</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>

                  {/* Entity 7 */}
                  <div className="od-entity-col">
                    <div className="od-line-v-entity"></div>
                    <div className="od-box od-entity">
                      <div className="ode-header" style={{ color: '#0B2046' }}>DIRECTION CONSULTING<br />& RH</div>
                      <div className="ode-resp">RESPONSABLE CONSULTING & RH</div>
                      <div className="ode-list">
                        <ul>
                          <li>Chargés de Recrutement</li>
                          <li>Consultants</li>
                          <li>Gestionnaires RH</li>
                        </ul>
                      </div>
                      <div className="ode-footer"><Users size={14} /> ÉQUIPE CONSULTING & RH</div>
                    </div>
                    <div className="od-line-v-entity-bottom"></div>
                  </div>
                </div>
              </div>

              {/* Level 4: Services Support */}
              <div className="od-level od-level-4">
                <div className="od-line-h-level4-top"></div>
                <div className="od-line-v-support-top"></div>
                <div className="od-support-title">SERVICES SUPPORT & ADMINISTRATIFS</div>
                <div className="od-line-v-support-bottom"></div>
                <div className="od-line-h-level4-bottom"></div>

                <div className="od-support-grid">
                  <div className="od-support-col">
                    <div className="od-line-v-support-node"></div>
                    <div className="od-box od-support">
                      <div className="ods-icon"><Users size={20} color="#2D754C" /></div>
                      <div className="ods-text">
                        <strong>SECRÉTARIAT</strong>
                        <p>Gestion administrative<br />et communication</p>
                      </div>
                    </div>
                  </div>
                  <div className="od-support-col">
                    <div className="od-line-v-support-node"></div>
                    <div className="od-box od-support">
                      <div className="ods-icon"><Globe size={20} color="#2D754C" /></div>
                      <div className="ods-text">
                        <strong>SERVICE COMMERCIAL</strong>
                        <p>Développement commercial<br />et relation clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="od-support-col">
                    <div className="od-line-v-support-node"></div>
                    <div className="od-box od-support">
                      <div className="ods-icon"><TrendingUp size={20} color="#2D754C" /></div>
                      <div className="ods-text">
                        <strong>SERVICE MARKETING</strong>
                        <p>Promotion, communication<br />et visibilité</p>
                      </div>
                    </div>
                  </div>
                  <div className="od-support-col">
                    <div className="od-line-v-support-node"></div>
                    <div className="od-box od-support">
                      <div className="ods-icon"><Settings size={20} color="#2D754C" /></div>
                      <div className="ods-text">
                        <strong>SERVICE ADMINISTRATIF</strong>
                        <p>Gestion des ressources<br />et moyens généraux</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="od-footer-bar">
                <Users size={20} />
                <span><strong>NOTRE FORCE :</strong> Une équipe pluridisciplinaire, engagée et compétente pour accompagner vos projets avec professionnalisme, innovation et excellence.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealSection>

    {/* ── ENGAGEMENTS ── */}
    <RevealSection>
      <section className="section section--white">
        <div className="container">
          <div className="section-header section-header--center reveal">
            <span className="section-badge">Ce que nous promettons</span>
            <h2 className="section-title">Nos <span>Engagements</span></h2>
            <div className="section-divider" />
          </div>
          <div className="engagements-grid">
            {engagements.map((e, i) => (
              <div key={e.label} className={`eng-card reveal delay-${(i % 3) + 1}`}>
                <div className="eng-icon"><e.icon size={22} /></div>
                <h3 className="eng-label">{e.label}</h3>
                <p className="eng-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealSection>

    {/* CTA */}
    <RevealSection>
      <section className="section values-cta reveal">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title section-title--white">
            Prêt à rejoindre l'aventure <span>GUIMS GROUP</span> ?
          </h2>
          <div className="section-divider" style={{ margin: '20px auto 24px' }} />
          <p className="section-subtitle section-subtitle--white" style={{ margin: '0 auto 36px' }}>
            Que vous soyez client, partenaire ou futur collaborateur — construisons ensemble.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary btn--lg" id="values-cta-btn">
              Contactez-nous <ArrowRight size={18} />
            </Link>
            <Link to="/entites" className="btn btn--secondary btn--lg" id="values-entities-btn">
              Nos entités
            </Link>
          </div>
        </div>
      </section>
    </RevealSection>
  </div>
);

export default ValuesPage;
