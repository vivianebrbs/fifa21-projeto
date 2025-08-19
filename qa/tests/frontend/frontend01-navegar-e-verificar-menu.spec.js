// Teste de navegação inicial para a página /list e verificação do menu lateral
const { test, expect } = require('@playwright/test');
const { gotoFront } = require('../suporte/frontend');

test.describe('Frontend – Navegação inicial e menu', () => {
  test('clica na tela inicial e verifica menu da página /list', async ({ page }) => {
    // Abre a tela inicial
    await gotoFront(page, '/');

    // Aguarda a tela inicial
    const startScreen = page.locator('.startScreen');
    await expect(startScreen).toBeVisible();

    // Clica na tela inicial (pode ser no logo ou na div toda)
    await startScreen.click();

    // Aguarda a navegação para /list
    await page.waitForURL(/\/list$/, { timeout: 5000 });

    // Verifica se o container do menu existe
    const menuContainer = page.locator('div.items');
    await expect(menuContainer).toBeVisible();

    // Espera todos os 4 links
    const menuItems = menuContainer.locator('a.item');
    await expect(menuItems).toHaveCount(4);

    // Verifica cada item pelo texto
    const expectedMenus = [
      { href: '/list', title: 'Player List' },
      { href: '/search', title: 'Search player' },
      { href: '/top', title: 'Top players' },
      { href: '/team', title: 'Top team' }
    ];

    for (let i = 0; i < expectedMenus.length; i++) {
      const item = menuItems.nth(i);
      await expect(item).toHaveAttribute('href', expectedMenus[i].href);
      await expect(item.locator('.title')).toHaveText(expectedMenus[i].title);
    }
  });
});
