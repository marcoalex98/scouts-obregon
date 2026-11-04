type SiteConfig = {
  name: string;
  shortName: string;
  url: string;
  logo: { src: string; width: number; height: number } | null;
  contact: { href: string; label: string } | null;
  meeting: {
    place: string;
    city: string;
    reference: string;
    day: string;
    hours: string;
    mapsUrl: string;
    latitude: number;
    longitude: number;
  };
};

// Add only the official logo and an institutional contact approved for publication.
export const site: SiteConfig = {
  name: 'Grupo Scout 5 Mak’Chu',
  shortName: 'Mak’Chu',
  url: 'https://scoutsobregon.com',
  logo: null,
  contact: null,
  meeting: {
    place: 'Parque de la colonia del Valle',
    city: 'Ciudad Obregón, Sonora',
    reference: 'Frente a Plaza Tutuli, detrás de KFC.',
    day: 'Sábados',
    hours: '4:00 a 6:00 p. m.',
    mapsUrl: 'https://maps.app.goo.gl/EnxtCn9FLkfAmh5g9',
    latitude: 27.4956628,
    longitude: -109.947079,
  },
};

export const meetingSummary = `Nos reunimos los ${site.meeting.day.toLowerCase()}, de ${site.meeting.hours}, en el ${site.meeting.place}, en ${site.meeting.city}. ${site.meeting.reference}`;
