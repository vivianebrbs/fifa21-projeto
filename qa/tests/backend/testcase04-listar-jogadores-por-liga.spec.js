const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R4 – Listar por liga', async ({ request, apiBase }) => {
  const liga = 'Campeonato Brasileiro Série A';
  const res = await request.get(`${apiBase}/api/players/search?league=${encodeURIComponent(liga)}`);
  expect(ok(res.status())).toBeTruthy();
  const itens = arrayFrom(await res.json(), ['data', 'items', 'players']);
  expect(Array.isArray(itens)).toBeTruthy();
  expect(itens.length).toBeGreaterThan(0);

  for (const p of itens) {
    expect(String(p.league_name || '').toLowerCase()).toContain('campeonato brasileiro');
  }
});
