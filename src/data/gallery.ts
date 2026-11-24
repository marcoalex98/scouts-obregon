import type { ImageMetadata } from 'astro';
import type { SectionSlug } from './sections';
import encuentroTropasMarzo2026 from '../assets/gallery/tropa/tropa-encuentro-scouts-2026.jpg';
import tropaNoviembre2026 from '../assets/gallery/tropa/tropa-actividad-bordones-2026.jpg';
import actividadEquipoMayo2026 from '../assets/gallery/tropa/tropa-organizacion-materiales-2026.jpg';
import campingEjercito2025 from '../assets/gallery/tropa/tropa-camping-ejercito-2025.jpg';
import cabuyeriaFebrero2025 from '../assets/gallery/tropa/tropa-practica-cabuyeria-2025.jpg';
import salidaAbril2025 from '../assets/gallery/tropa/tropa-salida-grupal-2025.jpg';
import primerosAuxiliosAbril2025 from '../assets/gallery/tropa/tropa-taller-primeros-auxilios-2025.jpg';
import convivenciaMarzo2025 from '../assets/gallery/tropa/tropa-convivencia-2025.jpg';
import tropaMarzo2025 from '../assets/gallery/tropa/tropa-foto-grupal-2025.jpg';
import clanApoyoAcantonamientoManadas from '../assets/gallery/clan/clan-apoyo-acantonamiento-manadas-2025.jpeg';
import clanFogataNocturna from '../assets/gallery/clan/clan-fogata-nocturna.jpeg';
import clanEncuentroCostero from '../assets/gallery/clan/clan-encuentro-costero.jpeg';
import clanSalidaSenderismo from '../assets/gallery/clan/clan-salida-senderismo.jpeg';
import clanConvivenciaJardin from '../assets/gallery/clan/clan-convivencia-jardin.jpeg';
import clanDescansoCampamento from '../assets/gallery/clan/clan-descanso-campamento.jpeg';
import clanEncuentroRovers from '../assets/gallery/clan/clan-encuentro-rovers.jpeg';
import clanActividadParque from '../assets/gallery/clan/clan-actividad-en-parque.jpeg';
import clanActividadAireLibre from '../assets/gallery/clan/clan-actividad-al-aire-libre.jpeg';

export type GalleryPhoto = {
  image: ImageMetadata;
  alt: string;
  caption: string;
  sections: readonly [SectionSlug, ...SectionSlug[]];
  authorized: true;
};

// Keep only photographs with explicit publication authorization in this list.
// Import each original from `src/assets/gallery` and associate it with one or
// more sections. Astro generates the grid and lightbox sizes during the build.
export const galleryPhotos: GalleryPhoto[] = [
  {
    image: clanApoyoAcantonamientoManadas,
    alt: 'Integrantes del Clan acompañan a participantes de Manada frente a las letras de Guaymas.',
    caption: 'Apoyo del Clan durante un acantonamiento de Manada.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanFogataNocturna,
    alt: 'Integrantes del Clan forman un círculo alrededor de una fogata durante una actividad nocturna.',
    caption: 'Convivencia nocturna alrededor de la fogata.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanEncuentroCostero,
    alt: 'Integrantes de varios clanes posan juntos frente a un paisaje costero con cactáceas.',
    caption: 'Encuentro Rover junto al paisaje costero.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanSalidaSenderismo,
    alt: 'Integrantes del Clan posan con bordones y su banderín durante una salida entre formaciones rocosas.',
    caption: 'El Clan durante una salida de senderismo.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanConvivenciaJardin,
    alt: 'Integrantes del Clan posan juntos frente a un jardín iluminado por el atardecer.',
    caption: 'Convivencia del Clan al aire libre.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanDescansoCampamento,
    alt: 'Tres integrantes del Clan descansan sobre una hamaca durante una actividad al aire libre.',
    caption: 'Un momento de descanso durante el campamento.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanEncuentroRovers,
    alt: 'Rovers de distintos grupos posan juntos en el patio de un edificio.',
    caption: 'Encuentro y convivencia con otros Rovers.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanActividadParque,
    alt: 'Cinco integrantes del Clan permanecen en formación durante una actividad en un parque.',
    caption: 'Actividad del Clan en el parque.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: clanActividadAireLibre,
    alt: 'Integrantes del Clan participan en una actividad bajo los árboles de un entorno natural.',
    caption: 'Actividad del Clan al aire libre.',
    sections: ['clan'],
    authorized: true,
  },
  {
    image: encuentroTropasMarzo2026,
    alt: 'Integrantes de varias tropas scouts posan al aire libre junto a los banderines de sus grupos.',
    caption: 'Encuentro al aire libre con otras tropas scouts.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: tropaNoviembre2026,
    alt: 'Integrantes de la Tropa posan al aire libre con bordones scouts frente a palmeras y un cielo azul.',
    caption: 'La Tropa reunida al finalizar una actividad al aire libre.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: actividadEquipoMayo2026,
    alt: 'Integrantes de la Tropa organizan latas, paquetes y otros materiales reunidos en un parque.',
    caption: 'Organización de materiales y provisiones como equipo.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: campingEjercito2025,
    alt: 'Integrantes de la Tropa posan con mochilas y bordones frente a personal militar durante una actividad.',
    caption: 'Participación de la Tropa en una experiencia de camping.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: salidaAbril2025,
    alt: 'Integrantes de la Tropa y personas adultas posan juntos con mochilas y bordones scouts.',
    caption: 'Foto de grupo durante una salida scout.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: primerosAuxiliosAbril2025,
    alt: 'Scouts practican maniobras de reanimación con maniquíes de entrenamiento durante una actividad al aire libre.',
    caption: 'Práctica de primeros auxilios compartida en el grupo.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: convivenciaMarzo2025,
    alt: 'Integrantes de la Tropa posan alrededor de una mesa con pastelillos de colores y un perro.',
    caption: 'Un momento de convivencia durante una actividad al aire libre.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: tropaMarzo2025,
    alt: 'Integrantes de la Tropa posan al aire libre sosteniendo el banderín de la sección.',
    caption: 'La Tropa reunida para compartir una actividad al aire libre.',
    sections: ['tropa'],
    authorized: true,
  },
  {
    image: cabuyeriaFebrero2025,
    alt: 'Integrantes de la Tropa practican con cuerdas sentados en círculo bajo un árbol.',
    caption: 'Práctica de cabuyería y habilidades scouts en equipo.',
    sections: ['tropa'],
    authorized: true,
  },
];

export const galleryPhotosForSection = (section: SectionSlug) =>
  galleryPhotos.filter((photo) => photo.sections.includes(section));
