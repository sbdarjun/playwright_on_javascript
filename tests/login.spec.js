const { test, expect } = require("@playwright/test");
const LandingPage = require("./page-object/landingpage.po");
const Login = require("./page-object/login.po");
const loginData = require("../loginData.json");

test.describe("Verify Login", () => {
  test("Page Elements", async ({ page }) => {
    var login = new Login(page);
    await page.goto("/");
    await login.clickLogin();
    await expect(page).toHaveURL("/login");
    await login.signInPageTitle("Sign In");
    await login.emailInputField();
    await login.passwordInputField();
    await login.signInButton();
    await login.socialMediaSection();
  });

  test("Validate Login", async ({ page }) => {
    var login = new Login(page);
    await page.goto("/login");
    await login.userLogin(loginData.email, loginData.password);
    await login.invalidLogin();
  });
});
