export const familyInfo = {
  updatedAt: 'noviembre de 2026',
  scoutsMexicoUrl: 'https://scouts.org.mx/',
  sustainableDevelopmentGoalsUrl: 'https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/',
  registration: {
    scoutsMexicoAnnual: 1200,
    groupAnnualPerFamily: 400,
    shirtApproximate: 400,
  },
  specialVenue: {
    name: 'Casa Scout',
    mapsUrl: 'https://maps.app.goo.gl/dMUNy58eCD3akJneA?g_st=aw',
  },
} as const;

export const scoutsMexicoRegistrationSummary = `El registro anual a Scouts de México cuesta $${familyInfo.registration.scoutsMexicoAnnual.toLocaleString('es-MX')} MXN por participante e incluye el seguro scout durante las actividades, credencial, parche anual, agenda y los materiales que determine la asociación.`;

export const groupFeeSummary = `La cuota anual del grupo es de $${familyInfo.registration.groupAnnualPerFamily.toLocaleString('es-MX')} MXN por familia y apoya la entrega de pañoleta, insignias de progresión y otros reconocimientos scouts.`;
