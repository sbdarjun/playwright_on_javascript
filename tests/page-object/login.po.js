const exp = require("constants");
const LandingPage = require("./landingpage.po");
const { expect } = require("@playwright/test");

class Login {
  constructor(page) {
    this.page = page;
    this.loginText = "text=Log in";
    this.signInText = this.page.locator(".header");
    this.emailInput = page.locator("#email1");
    this.passwordInput = page.locator("#password1");
    this.signInBtn = page.locator(".submit-btn");
    this.socialMedia = page.locator(".social");
    this.errorMessage = page.locator('.errorMessage')
    this.landingpage = new LandingPage(page);
  }

  async clickLogin() {
    await this.landingpage.verifySidebarHomeMenu();
    await this.page.locator(this.loginText).click();
  }

  async signInPageTitle(expectedText) {
    await expect(this.signInText).toHaveText(expectedText);
  }
  async emailInputField() {
    await expect(this.emailInput).toBeVisible();
  }
  async passwordInputField() {
    await expect(this.passwordInput).toBeVisible();
  }
  async signInButton() {
    await expect(this.signInBtn).toBeVisible();
  }
  async socialMediaSection() {
    await expect(this.socialMedia).toBeVisible();
  }
  async userLogin(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInBtn.click();
  }
  async invalidLogin(){
    await expect(this.errorMessage).toBeVisible();
  }
}

module.exports = Login;
