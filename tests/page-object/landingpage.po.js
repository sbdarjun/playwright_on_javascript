const { expect } = require("@playwright/test");
class LandingPage {
  constructor(page) {
    this.page = page;
    this.title = "Learn Automation Courses";
    this.homeContainer = page.locator(".home-container");
    this.hamburgerButton = page.locator(".navbar-menu-links").first();
    this.sidebarMenu = page.locator(".sidebar");
  }
  async verifyHomePageTitle() {
    await expect(this.page).toHaveTitle(this.title);
  }

  async verifyHamburgerButton() {
    await expect(this.hamburgerButton).toBeVisible();
  }

  async verifyHomeContainer() {
    await expect(this.homeContainer).toBeVisible();
  }
  async verifySidebarHomeMenu() {
    await this.hamburgerButton.click();
    await expect(this.sidebarMenu).toBeVisible();
  }
}
module.exports = LandingPage;
