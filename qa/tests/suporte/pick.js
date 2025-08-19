// Helpers para obter um ID válido e reuso em testes
const { ok } = require('../../tests/suporte/http');
const { arrayFrom } = require('../../tests/suporte/http');

/**
 * Tenta obter um ID de jogador por:
 * 1) /api/players?items=5&page=0
 * 2) fallback /api/players/search?name=a&items=5&page=0
 */
async function getFirstValidPlayerId(request, apiBase) {
  let res = await request.get(`${apiBase}/api/players?items=5&page=0`);
  if (ok(res.status())) {
    try {
      const itens = arrayFrom(await res.json(), ['items','data','players']);
      if (itens.length && itens[0]?.id != null) return itens[0].id;
    } catch {}
  }
  res = await request.get(`${apiBase}/api/players/search?name=a&items=5&page=0`);
  if (ok(res.status())) {
    try {
      const itens = arrayFrom(await res.json(), ['items','data','players']);
      if (itens.length && itens[0]?.id != null) return itens[0].id;
    } catch {}
  }
  return undefined;
}

module.exports = { getFirstValidPlayerId };
