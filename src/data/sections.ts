export type SectionSlug = 'manada' | 'tropa' | 'comunidad' | 'clan';

export type ScoutSection = {
  slug: SectionSlug;
  name: string;
  shortName: string;
  minAge: number;
  maxAge: number;
  color: 'yellow' | 'green' | 'blue' | 'red';
  icon: 'sparkles' | 'compass' | 'route' | 'hand-heart';
  headline: string;
  summary: string;
  skills: string[];
};

export const sectionHref = (section: Pick<ScoutSection, 'slug'>) => `/secciones/${section.slug}`;

export const scoutSections: ScoutSection[] = [
  {
    slug: 'manada', name: 'Manada de Lobatos', shortName: 'Manada', minAge: 6, maxAge: 9,
    color: 'yellow', icon: 'sparkles', headline: 'Un mundo por descubrir.',
    summary: 'El juego y la imaginación acompañan sus primeros pasos en la vida scout. Una etapa para descubrir, convivir y aprender a colaborar.',
    skills: ['Curiosidad e imaginación', 'Amistad y convivencia', 'Primeras aventuras'],
  },
  {
    slug: 'tropa', name: 'Tropa de Scouts', shortName: 'Tropa', minAge: 10, maxAge: 13,
    color: 'green', icon: 'compass', headline: 'La aventura se vive en equipo.',
    summary: 'Explorar, aprender haciendo y encontrar su lugar en una patrulla. Cada reto es una oportunidad para desarrollar habilidades y trabajar en equipo.',
    skills: ['Vida en patrulla', 'Exploración y habilidades', 'Trabajo en equipo'],
  },
  {
    slug: 'comunidad', name: 'Comunidad de Caminantes', shortName: 'Comunidad', minAge: 14, maxAge: 17,
    color: 'blue', icon: 'route', headline: 'Tu camino, nuevos retos.',
    summary: 'Una etapa para tomar decisiones, proponer ideas y convertirlas en proyectos. El desafío es descubrir lo que puedes lograr junto a otras personas.',
    skills: ['Autonomía y decisiones', 'Liderazgo compartido', 'Retos y proyectos'],
  },
  {
    slug: 'clan', name: 'Clan de Rovers', shortName: 'Clan', minAge: 18, maxAge: 21,
    color: 'red', icon: 'hand-heart', headline: 'Deja huella, encuentra tu rumbo.',
    summary: 'El servicio y el compromiso toman forma en tu comunidad. En el Clan de Rovers Filótimos, el camino también es construir tu propio proyecto de vida.',
    skills: ['Servicio a la comunidad', 'Compromiso y liderazgo', 'Proyecto de vida'],
  },
];
