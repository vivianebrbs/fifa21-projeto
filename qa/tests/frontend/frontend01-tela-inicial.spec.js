// tests/frontend/frontend01-tela-inicial.spec.js
// Valida a tela inicial em http://localhost:3001/ com o logo StartLogo.
// HTML informado: <div class="startScreen"><img src="/static/media/StartLogo.9f208cdb.png" alt=""></div>

const { test, expect } = require('@playwright/test');
const { gotoFront, frontBaseUrl } = require('../suporte/frontend');

test.describe('Frontend – Tela inicial', () => {
  test('exibe .startScreen com o logo carregado', async ({ page }) => {
    // Abre a home do front (http://localhost:3001/ por padrão)
    await gotoFront(page, '/');

    // 1) container principal visível
    const startScreen = page.locator('.startScreen');
    await expect(startScreen).toBeVisible();

    // 2) existe um <img> dentro do container
    const img = startScreen.locator('img').first();
    await expect(img).toBeVisible();

    // 3) src aponta para o StartLogo.*.png
    const src = await img.getAttribute('src');
    expect(src, 'esperado src de StartLogo.*.png').toMatch(/StartLogo.*\.png$/);

    // 4) a imagem realmente carregou (naturalWidth > 0)
    const loaded = await img.evaluate((el) => {
      // garante que a imagem terminou de carregar e é válida
      return el.complete && Number(el.naturalWidth) > 0;
    });
    expect(loaded, 'imagem deve estar carregada (naturalWidth > 0)').toBeTruthy();

    // 5) URL base conferida (apenas log para depuração)
    test.info().annotations.push({ type: 'front-base', description: frontBaseUrl() });
  });

  test('renderiza a startScreen rápido o suficiente', async ({ page }) => {
    const t0 = Date.now();
    await gotoFront(page, '/');
    await page.waitForSelector('.startScreen', { state: 'visible', timeout: 5000 });
    const ms = Date.now() - t0;

    // meta simples: 5s
    expect(ms).toBeLessThan(5000);
  });
});
