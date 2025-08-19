// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Pasta raiz de testes
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true, // Backend roda sem abrir navegador, no frontend passamos --headed pelo script
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure'
  }
});
