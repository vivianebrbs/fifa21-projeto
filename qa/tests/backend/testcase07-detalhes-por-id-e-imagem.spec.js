const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

test('R7 – Detalhes por ID + imagem', async ({ request, apiBase }) => {
  // pegar um id válido via listagem
  const lista = await request.get(`${apiBase}/api/players?items=1&page=0`);
  expect(ok(lista.status())).toBeTruthy();
  const primeiro = arrayFrom(await lista.json(), ['data', 'items', 'players'])[0];
  const id = primeiro?.sofifa_id;
  expect(id).toBeDefined();

  // detalhes JSON (se existir)
  const detalhes = await request.get(`${apiBase}/api/players/${id}`);
  if (detalhes.status() === 200) {
    const body = await detalhes.json();
    const idBody = body?.sofifa_id ?? body?.id ?? body?.player_id;
    expect(idBody).toBe(id);
  } else {
    // se não existir, tudo bem — seguimos para validar a imagem
    expect([400, 404, 405]).toContain(detalhes.status());
  }

  // imagem obrigatória
  const img = await request.get(`${apiBase}/api/players/${id}/img`, { timeout: 7000 });
  expect(ok(img.status())).toBeTruthy();
  expect(isImage(img.headers()['content-type'])).toBeTruthy();
  const buf = await img.body();
  expect(buf.byteLength).toBeGreaterThan(0);
});
