// Utilitários HTTP e extração tolerante de arrays
function ok(status) { return status >= 200 && status < 300; }
function isJson(ct) { return String(ct || '').toLowerCase().includes('application/json'); }
function isImage(ct){ return String(ct || '').toLowerCase().startsWith('image/'); }

/**
 * Extrai um array de diferentes envelopes:
 * [], {items:[]}, {data:[]}, {players:[]}, {list:[]}, {results:[]},
 * {nationalities:[]}, {positions:[]}, {leagues:[]}, {content:[]}, etc.
 * Se não achar por chave, tenta achar o primeiro array de objetos no corpo.
 */
function arrayFrom(body, preferKeys = []) {
  if (Array.isArray(body)) return body;

  const keys = [
    ...preferKeys,
    'items','data','players','list','results','nationalities','positions','leagues','content'
  ];
  for (const k of keys) {
    if (Array.isArray(body?.[k])) return body[k];
  }
  if (body && typeof body === 'object') {
    for (const [k, v] of Object.entries(body)) {
      if (Array.isArray(v) && v.length && typeof v[0] === 'object') return v;
    }
    for (const v of Object.values(body)) {
      if (Array.isArray(v)) return v;
    }
  }
  return [];
}

module.exports = { ok, isJson, isImage, arrayFrom };
