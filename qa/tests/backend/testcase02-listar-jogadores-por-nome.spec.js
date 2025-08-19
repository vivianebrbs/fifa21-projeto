const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R2 – Listar por nome', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/players/search?name=Neymar`);
  expect(ok(res.status())).toBeTruthy();
  const itens = arrayFrom(await res.json(), ['data', 'items', 'players']);
  expect(Array.isArray(itens)).toBeTruthy();
  expect(itens.length).toBeGreaterThan(0);

  for (const p of itens) {
    const nome = `${p.short_name || ''} ${p.long_name || ''}`.toLowerCase();
    expect(nome).toContain('neymar');
  }
});
