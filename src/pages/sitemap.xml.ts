import type { APIRoute } from 'astro';
import { scoutSections, sectionHref } from '../data/sections';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const paths = ['/', '/secciones', '/voluntariado', '/contacto', ...scoutSections.map(sectionHref)];
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escapeXml(new URL(path, site.url).href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
