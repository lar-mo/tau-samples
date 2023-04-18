import { ClientFunction, fixture } from "testcafe";
import homepage from "../pages/homepage";
import registerpage from "../pages/registerpage";
import LoginPage from "../pages/LoginPage";
import CustomerPage from "../pages/CustomerPage";

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random()* 10000);
var userEmail = 'test'+randomNumber+'@test.com';

fixture("Register Fixture")
    .page(URL);

test("Assert Home page test", async t => {
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();
});

test("User registration and login test", async t => {
    await t 
        .click(homepage.registerLink)
        .expect(getURL()).contains('register')
        .click(registerpage.GenderOption)
        .typeText(registerpage.FirstName, 'Larry')
        .typeText(registerpage.LastName, 'Moiola');
        await registerpage.selectDay('5');
        await registerpage.selectMonth('July');
        await registerpage.selectYear('1972');
        await t 
            .typeText(registerpage.Email, userEmail)
            .typeText(registerpage.Password, 'asdf1234')
            .typeText(registerpage.ConfirmPassword, 'asdf1234')
            .click(registerpage.RegisterBtn)
            .expect(registerpage.SuccessfulMessage.exists).ok()
        // Login with registered account
        .click(homepage.loginLink)
        .expect(LoginPage.accountHeader.exists).ok()
        .typeText(LoginPage.LoginEmail,userEmail)
        .typeText(LoginPage.LoginPassword, 'asdf1234')
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