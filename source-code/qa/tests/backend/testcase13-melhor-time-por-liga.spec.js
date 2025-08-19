const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

function esperaBestXI(players) {
  expect(Array.isArray(players)).toBeTruthy();
  expect(players.length).toBeGreaterThanOrEqual(11);
}

test('R13 – Melhor time por liga (Brasileiro Série A)', async ({ request, apiBase }) => {
  const liga = 'Campeonato Brasileiro Série A';
  const res = await request.get(`${apiBase}/api/team/best?league=${encodeURIComponent(liga)}`);
  expect(ok(res.status())).toBeTruthy();
  const players = arrayFrom(await res.json(), ['players','items','data','list','results']);
  esperaBestXI(players);
});
