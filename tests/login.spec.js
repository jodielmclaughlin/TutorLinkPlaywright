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
    console.log(await page.title());
    await expect(dashboardPage.titleText).toContainText("Dashboard");
    
})