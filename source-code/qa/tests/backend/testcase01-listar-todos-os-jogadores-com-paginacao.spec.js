const { test, expect } = require('../suporte/api');
const { ok, isJson, arrayFrom } = require('../suporte/http');

test.describe('R1 – Listar todos com paginação', () => {
  test('lista padrão (sem querystring)', async ({ request, apiBase }) => {
    const res = await request.get(`${apiBase}/api/players`);
    expect(ok(res.status())).toBeTruthy();
    expect(isJson(res.headers()['content-type'])).toBeTruthy();
    const itens = arrayFrom(await res.json(), ['items','data','players']);
    expect(Array.isArray(itens)).toBeTruthy();
    expect(itens.length).toBeGreaterThan(0);
  });

  test('lista com items & page (0-based)', async ({ request, apiBase }) => {
    const res = await request.get(`${apiBase}/api/players?items=5&page=0`);
    expect(ok(res.status())).toBeTruthy();
    const itens = arrayFrom(await res.json(), ['items','data','players']);
    expect(itens.length).toBeGreaterThan(0);
    expect(itens.length).toBeLessThanOrEqual(5);
  });
});
