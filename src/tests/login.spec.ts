import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.ts';
import { validUser,InvalidUser } from '../data/login.data.ts';
const testData = JSON.parse(JSON.stringify(require('../data/testData.json')));
require('dotenv').config();


test.describe.configure({ mode: 'parallel' });


test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo('/login');
  });

  test.afterEach(async ({ page }) => {
    await loginPage.quit();
  });

  test('should login with valid credentials', async () => {
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.login(validUser.username, validUser.password);

    // Assert some post-login state
  });

  test('should show error message for invalid credentials', async () => {
    await loginPage.login(InvalidUser.username, InvalidUser.password);
    // Assert error message is shown
  });


});
