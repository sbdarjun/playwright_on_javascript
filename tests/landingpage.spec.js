const { test, expect } = require("@playwright/test");
const LandingPage = require("./page-object/landingpage.po");

test.describe("Verify the element", () => {
  test("on the landing page", async ({ page }) => {
    var landingpage = new LandingPage(page);

    await page.goto("/");
    await landingpage.verifyHomePageTitle();
    await landingpage.verifyHamburgerButton();
    await landingpage.verifyHomeContainer();
    await landingpage.verifySidebarHomeMenu();
  });
});
