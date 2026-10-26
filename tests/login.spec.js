import {customtest} from '../utils/fixtures.js';
const {POManager} = require('../pageobjects/POManager.js');
const { expect } = require("@playwright/test");

customtest("Valid Login", async({page})=>
{
    
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = process.env.ADMIN_EMAIL;
    const passwordInput = process.env.ADMIN_PASSWORD;
    await loginPage.validLogin(userNameInput, passwordInput);
    const dashboardPage = poManager.getDashboardPage();
    await expect(dashboardPage.titleText).toContainText("Dashboard");
    
});

customtest("Invalid Login Email Error Message", async({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = "incorrectemail";
    const passwordInput = "wrongpassword";
    await loginPage.validLogin(userNameInput, passwordInput);
    expect(loginPage.errorMessage).toBeVisible;

});

customtest("Invalid Login Password Error Message", async({page})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const userNameInput = process.env.ADMIN_EMAIL;
    const passwordInput = "";
    await loginPage.validLogin(userNameInput, passwordInput);
    expect(loginPage.passwordErrorMessage).toBeVisible;

});