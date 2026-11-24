export const navigation = [
  { label: 'El grupo', href: '/#el-grupo' },
  { label: 'Secciones', href: '/secciones' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Para familias', href: '/#familias' },
  { label: 'Voluntariado', href: '/voluntariado' },
  { label: 'Contacto', href: '/contacto' },
];

export const isNavigationActive = (href: string, pathname: string) =>
  pathname.replace(/\/$/, '') === href || (href === '/secciones' && pathname.startsWith('/secciones/'));
