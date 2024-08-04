import { Locator, Selectors } from '@playwright/test';
import { BasePage } from './base.page.ts';

export class LoginPage extends BasePage {
  private usernameInput = "#username" ;
  private passwordInput = "#password";
  loginButton = this.page.getByRole("button",{name:'Login'});

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.loginButton.click();
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.loginButton.isVisible();
  }


 
}
