import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    baseURL: 'https://www.tutorialspoint.com',
    screenshot: 'on',
    video: 'retain-on-failure',
  },
});
