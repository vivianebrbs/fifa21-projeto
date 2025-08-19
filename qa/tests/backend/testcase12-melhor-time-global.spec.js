const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

function esperaBestXI(players) {
  expect(Array.isArray(players)).toBeTruthy();
  expect(players.length).toBeGreaterThanOrEqual(11); // ≥ 11 jogadores
}

test('R12 – Melhor time (global)', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/team/best`);
  expect(ok(res.status())).toBeTruthy();
  const players = arrayFrom(await res.json(), ['players','items','data','list','results']);
  esperaBestXI(players);
});
