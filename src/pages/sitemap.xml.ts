import type { APIRoute } from 'astro';
import { caseStudies } from '../data/case-studies';
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://hanzha-portfolio.vercel.app');
  const routes = ['/', ...caseStudies.map((study) => `/work/${study.project.id}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${new URL(route, origin).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
