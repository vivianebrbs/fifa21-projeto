const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R6 – Listar por posição (GK)', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/players/search?position=GK`);
  expect(ok(res.status())).toBeTruthy();
  const itens = arrayFrom(await res.json(), ['data', 'items', 'players']);
  expect(Array.isArray(itens)).toBeTruthy();
  expect(itens.length).toBeGreaterThan(0);

  for (const p of itens) {
    const raw = String(p.player_positions || '');
    // confere GK como “palavra” isolada ou entre vírgulas
    const temGK = /(^|,\s*)GK(\s*,|$)/i.test(raw);
    expect(temGK).toBeTruthy();
  }
});
