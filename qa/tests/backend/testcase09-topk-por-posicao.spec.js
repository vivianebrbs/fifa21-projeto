const { test, expect } = require('../suporte/api');
const { ok, arrayFrom } = require('../suporte/http');

function ordenadoDescPorOverall(players) {
  const arr = players.map(p => Number(p.overall));
  for (let i = 1; i < arr.length; i++) expect(arr[i] <= arr[i-1]).toBeTruthy();
}

test('R9 – Top-K por posição (K=5, GK)', async ({ request, apiBase }) => {
  const res = await request.get(`${apiBase}/api/players/top/5/overall?position=GK`);
  expect(ok(res.status())).toBeTruthy();
  const jogadores = arrayFrom(await res.json(), ['players','items','data']);
  expect(Array.isArray(jogadores)).toBeTruthy();
  ordenadoDescPorOverall(jogadores);
});
