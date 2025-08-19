const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R5 – Listar por nacionalidade', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/players/search?nationality=Brazil`);
  expect(ok(res.status())).toBeTruthy();
  const itens = arrayFrom(await res.json(), ['items','data','players']);
  for (const p of itens) {
    expect(String(p.nationality || '').toLowerCase()).toContain('brazil');
  }
});
