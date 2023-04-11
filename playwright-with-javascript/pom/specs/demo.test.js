const { chromium } = require('playwright');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');

describe(`Applitools demo page`, () => {

    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async() => {
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await browser.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    afterAll(async() => {
        await context.close();
        await browser.close();
    });

    test(`should be able to login`, async() => {
        await loginPage.login('username', 'password');
        expect(await page.title()).not.toBeNull();
    });

    test(`should be logged in as Jack Gomez`, async() => {
        expect(await homePage.getUserName()).toBe('Jack Gomez');
    });

    test(`should have total balance of $350`, async() => {
        expect(await homePage.getBalance('total')).toBe('$350');
    });

    test(`should have credit of $17800`, async() => {
        expect(await homePage.getBalance('credit')).toBe('$17,800'); 
    });

    test(`should have due today of $180`, async() => {
        expect(await homePage.getBalance('due')).toBe('$180');
    });

});