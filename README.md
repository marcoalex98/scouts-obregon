# Scouts Obregón — Grupo Scout 5 Mak’Chu

Primera versión de Inicio para scoutsobregon.com, construida con Astro, TypeScript y Tailwind CSS. El contexto y las reglas del grupo están en AGENTS.md.

## Desarrollo

Requiere Node.js 22.12 o posterior.

```sh
npm install
npm run dev -- --background
npm exec astro -- dev status
npm exec astro -- dev logs
npm exec astro -- dev stop
npm run build
npm run preview
```

## Contenido y temas

- src/pages/index.astro: hero, información de secciones, grupo, preguntas de familias, voluntariado e incorporación.
- src/data/sections.ts: nombres, edades, colores y textos de las cuatro secciones.
- src/data/section-details.ts: contenido ampliado y fotografías de cada etapa. Los ejemplos educativos no son un calendario confirmado.
- src/data/site.ts: identidad del sitio, logotipo oficial, canal institucional de contacto y site.meeting (ubicación y horario confirmados).
- src/components/MeetingLocation.astro: mapa compartido por Inicio y las páginas de secciones, con horario y enlace para llegar. El iframe de Google Maps carga de forma diferida y mantiene sus colores cartográficos en ambos modos.
- src/components/SectionCard.astro: presentación reutilizable de cada sección.
- src/assets/flor-de-lis.svg: símbolo vectorial decorativo original, compartido por cabecera y menú. Usa currentColor para seguir el tema y no sustituye al logotipo oficial pendiente.
- src/layouts/SiteLayout.astro: idioma, metadatos SEO y tema principal.
- src/styles/global.css: tokens de color y estilos compartidos.

El tema general es purple. Inicio muestra tarjetas breves; /secciones compara las etapas; /secciones/manada, /secciones/tropa, /secciones/comunidad y /secciones/clan tienen páginas estáticas detalladas. Cada página recibe su color desde SiteLayout y data-theme en el HTML inicial. Las seis páginas tienen canonical, y las páginas de secciones incluyen breadcrumbs estructurados. /sitemap.xml enumera las rutas públicas construidas.

Las galerías están vacías por defecto. Para añadir una fotografía, impórtala desde src/assets y agrega su ImageMetadata, alt descriptivo, caption opcional y authorized: true al array gallery de su sección, únicamente después de confirmar el permiso de publicación. SectionGallery filtra las imágenes no autorizadas y genera imágenes optimizadas con carga diferida. Sin fotos aprobadas se muestra una reserva de espacio identificada, nunca imágenes de stock.

La apariencia es clara por defecto y sigue prefers-color-scheme en segundo plano, sin avisos ni textos de estado, hasta seleccionar light/dark en el menú lateral. La selección manual se guarda como makchu-appearance en localStorage y se aplica antes del primer render. Los tokens usan light-dark() y color-scheme; data-appearance es independiente del color de sección en data-theme.

La fuente Manrope y los iconos Lucide se sirven localmente. SideMenu usa un dialog modal nativo con foco contenido, cierre con Escape o fondo desenfocado y bloqueo de scroll. El mismo botón pasa de hamburguesa a cierre dentro del modal. Los enlaces, el historial y los eventos de navegación Astro cierran el menú y restauran el scroll. La navegación se comparte desde src/data/navigation.ts. El contenido y las preguntas frecuentes están presentes en el HTML inicial.

## Antes de publicar

1. Añadir el logotipo oficial a public y configurar site.logo con src, width y height.
2. Configurar site.contact con href y label únicamente para un canal institucional autorizado.
3. Confirmar cuotas y proceso de incorporación; mantener actualizados el horario y la sede ya autorizados: sábados de 5:00 a 7:00 p. m. en el parque de la colonia del Valle, frente a Plaza Tutuli y detrás de KFC.
4. Incorporar únicamente fotografías con autorización. La galería queda pendiente de selección; no hay fotografías de stock ni imágenes de menores generadas.
5. Revisar el diseño final en móvil y escritorio, accesibilidad, enlaces y metadatos.

Mientras no exista un canal confirmado, el apartado de incorporación muestra un aviso explícito y no recoge ni envía datos personales. La vista de desarrollo lleva noindex; la compilación de producción no lo incluye.

public/og.png es una propuesta tipográfica de imagen para compartir enlaces; no es el logotipo oficial. El dominio de los metadatos se centraliza en src/data/site.ts. No se ha desplegado esta vista previa.
