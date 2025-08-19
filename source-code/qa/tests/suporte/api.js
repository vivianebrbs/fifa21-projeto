// Injeta apiBase (da .env) em todos os testes
const base = require('@playwright/test').test;

const test = base.extend({
  apiBase: async ({}, use) => {
    const url = process.env.API_BASE_URL || 'http://localhost:3000';
    await use(url);
  }
});
const expect = base.expect;

module.exports = { test, expect };
