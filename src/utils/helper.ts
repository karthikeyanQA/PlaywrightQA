import { Page } from 'playwright';

export async function waitForElement(selector: string, page: Page) {
    await page.waitForSelector(selector);
  }
  