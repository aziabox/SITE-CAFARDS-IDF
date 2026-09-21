import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://www.blattis.fr/').replace(/\/$/, '');
  const body = `# Blattis — traitement des cafards et des blattes en Île-de-France
User-agent: *
Allow: /
Disallow: /merci
Disallow: /merci/

# Agents de moteurs génératifs : contenu accessible, pas de restriction spécifique.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
