const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R3 – Listar por time (clube)', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/players/search?club=Barcelona`);
  expect(ok(res.status())).toBeTruthy();
  const itens = arrayFrom(await res.json(), ['data', 'items', 'players']);
  expect(Array.isArray(itens)).toBeTruthy();
  expect(itens.length).toBeGreaterThan(0);

  for (const p of itens) {
    expect(String(p.club_name || '').toLowerCase()).toContain('barcelona');
  }
});
