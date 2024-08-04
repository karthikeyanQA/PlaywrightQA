import { defineConfig, devices } from '@playwright/test';


module.exports = defineConfig ({

  testDir: 'src/tests',
  globalSetup : 'src/utils/globalSetup.ts',
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'https://the-internet.herokuapp.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  
    // Populates context with given storage state.
    storageState: 'state.json',
  },

  projects:[

    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        fullyParallel: true,
    },
  
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
      fullyParallel: true,
  
    },
  
  ],

});
