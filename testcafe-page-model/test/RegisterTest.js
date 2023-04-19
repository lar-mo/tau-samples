import { ClientFunction, fixture } from "testcafe";
import homepage from "../pages/homepage";
import registerpage from "../pages/registerpage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";
import Eyes from '@applitools/eyes-testcafe';

const dataset = require("../data/data.json");
const eyes = new Eyes();

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random()* 10000);
var userEmail = 'test'+randomNumber+'@test.com';

fixture("Register Fixture")
    .page(URL)
    .afterEach(async () => eyes.close())
    .after(async () => eyes.waitForResults(true));

test.skip
.meta({
    ID: '12334',
    SEVERITY: 'blocker',
    STORY: '114'
})
("Assert Home page test", async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();
});

dataset.forEach(data =>{
    test("User registration and login test", async t => {
        await eyes.open({
            appName: 'TestCafe Demo',
            testName: 'User registration and login test',
            // browser: [{ width: 1600, height: 1200, name: 'firefox' }],
            t
        });
        await eyes.setMatchLevel("Layout");
        await eyes.checkWindow('Home Page');
        await t 
            .click(homepage.registerLink)
            .expect(getURL()).contains('register')
            await eyes.checkWindow('Register Page');
            await t
            .click(registerpage.GenderOption)
            .typeText(registerpage.FirstName, data.firstname)
            .typeText(registerpage.LastName, data.lastname);
            await registerpage.selectDay(data.birthday);
            await registerpage.selectMonth(data.birthmonth);
            await registerpage.selectYear(data.birthyear);
            await t 
                .typeText(registerpage.Email, data.email+randomNumber+'@test.com')
                .typeText(registerpage.Password, data.password)
                .typeText(registerpage.ConfirmPassword, data.password)
                .click(registerpage.RegisterBtn)
                await eyes.checkWindow('Success Page');
                await t
                .expect(registerpage.SuccessfulMessage.exists).ok()
            // Login with registered account
            .click(homepage.loginLink)
            .expect(LoginPage.accountHeader.exists).ok()
            .typeText(LoginPage.LoginEmail,data.email+randomNumber+'@test.com')
            .typeText(LoginPage.LoginPassword, data.password)
            .click(LoginPage.submitButton)
            // Go to My Account
            .click(homepage.myAccountLink)
            // check orders are displayed
            .expect(CustomerPage.OrderLink.exists).ok()
            .click(CustomerPage.OrderLink)
            .expect(CustomerPage.noOrdersLabel.exists).ok()
            .takeScreenshot()
            // Logout
            .click(homepage.logoutLink)
    });
});