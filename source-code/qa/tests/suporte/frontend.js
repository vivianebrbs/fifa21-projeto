// tests/suporte/frontend.js
// Helper simples para navegar no front usando FRONT_BASE_URL (ou padrão).

function frontBaseUrl() {
  return process.env.FRONT_BASE_URL || 'http://localhost:3001';
}

/**
 * Vai para uma rota do front, esperando ocioso de rede.
 * @param {import('@playwright/test').Page} page
 * @param {string} path caminho relativo (ex.: '/')
 */
async function gotoFront(page, path = '/') {
  const base = frontBaseUrl().replace(/\/+$/, '');
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  await page.goto(url, { waitUntil: 'networkidle' });
}

module.exports = { frontBaseUrl, gotoFront };
