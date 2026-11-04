export const navigation = [
  { label: 'El grupo', href: '/#el-grupo' },
  { label: 'Secciones', href: '/secciones' },
  { label: 'Para familias', href: '/#familias' },
  { label: 'Voluntariado', href: '/voluntariado' },
  { label: 'Ubicación', href: '/#ubicacion' },
];

export const isNavigationActive = (href: string, pathname: string) =>
  pathname.replace(/\/$/, '') === href || (href === '/secciones' && pathname.startsWith('/secciones/'));
