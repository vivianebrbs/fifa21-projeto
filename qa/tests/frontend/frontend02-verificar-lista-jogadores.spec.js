// Teste de verificação da listagem de jogadores na página /list
const { test, expect } = require('@playwright/test');
const { gotoFront } = require('../suporte/frontend');

test.describe('Frontend – Lista de jogadores', () => {
  test('verifica se lista de jogadores aparece na página /list', async ({ page }) => {
    // Abre diretamente a página de listagem
    await gotoFront(page, '/list');

    // Aguarda o container da lista
    const listContainer = page.locator('div.list');
    await expect(listContainer).toBeVisible();

    // Aguarda pelo menos 1 jogador na lista
    const players = listContainer.locator('div.player');
    const count = await players.count();
    expect(count).toBeGreaterThan(0);

    // Verifica alguns nomes conhecidos
    const expectedNames = [
      'Lionel Andrés Messi Cuccittini',
      'Cristiano Ronaldo dos Santos Aveiro',
      'Neymar da Silva Santos Júnior'
    ];

    for (const name of expectedNames) {
      await expect(page.locator(`.playerName:has-text("${name}")`)).toBeVisible();
    }
  });
});

