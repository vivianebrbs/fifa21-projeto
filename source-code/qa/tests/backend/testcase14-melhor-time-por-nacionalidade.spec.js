const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

function esperaBestXI(players) {
  expect(Array.isArray(players)).toBeTruthy();
  expect(players.length).toBeGreaterThanOrEqual(11);
}

test('R14 – Melhor time por nacionalidade (Brazil)', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/team/best?nationality=Brazil`);
  expect(ok(res.status())).toBeTruthy();
  const players = arrayFrom(await res.json(), ['players','items','data','list','results']);
  esperaBestXI(players);
});
