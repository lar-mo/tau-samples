import { ClientFunction, fixture } from "testcafe";
import homepage from "../pages/homepage";
import registerpage from "../pages/registerpage";
import LoginPage from "../pages/LoginPage";
import searchresults from "../pages/SearchResultsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import myorderpage from "../pages/MyOrderPage"
import SearchResultsPage from "../pages/SearchResultsPage";
import productdetails from "../pages/productDetailPage";

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random()* 10000);
var userEmail = 'test'+randomNumber+'@test.com';

fixture("E2E Fixture")
    .page(URL);

    test("Assert Home page test", async t => {
        await t
            .expect(getURL()).eql(URL)
            .takeScreenshot()
            .expect(homepage.subtitleHeader.exists).ok();
    });
    
    test("User registration and login test", async t => {
        await t 
            // .setTestSpeed(.25)
            .maximizeWindow()
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
            // login
            .click(homepage.loginLink)
            .expect(LoginPage.accountHeader.exists).ok()
            .typeText(LoginPage.LoginEmail,userEmail)
            .typeText(LoginPage.LoginPassword, 'asdf1234')
            .click(LoginPage.submitButton)
            // search for MBP
            await homepage.search('Apple Macbook Pro 13-inch');
            await t
                .click(searchresults.productTitle)
                .expect(getURL()).contains('apple-macbook-pro-13-inch')
                // product details
                .expect(productdetails.productPrice.exists).ok()
                .selectText(productdetails.productQuantity).pressKey("delete")
                .typeText(productdetails.productQuantity, '3')
                .click(productdetails.addToCart)
                .expect(productdetails.successMessage.exists).ok()
                .wait(3000)
                // Cart and checkout
                .click(homepage.shoppingCartLink)
                .click(CartPage.TOScheckbox)
                .click(CartPage.checkoutButton)
                .expect(getURL()).contains('checkout');
                // place order
                await CheckoutPage.selectCountry('United States');
                await CheckoutPage.selectUSState('Oregon');
                await t
                    .takeScreenshot()
                    .typeText(CheckoutPage.cityTxt, 'Portland')
                    .typeText(CheckoutPage.addressTxt, '124 Any Street')
                    .typeText(CheckoutPage.zipTxt,'97217')
                    .typeText(CheckoutPage.phoneTxt,'5035551212')
                    .click(CheckoutPage.continueBtn)
                    .click(CheckoutPage.nextDayOption)
                    .click(CheckoutPage.nextShippingBtn)
                    .click(CheckoutPage.nextPaymentBtn)
                    .click(CheckoutPage.nextConfirmBtn)
                    .click(CheckoutPage.confirmOrderBtn)
                    .expect(CheckoutPage.orderConfirmationMessage.exists).ok()
                    .click(CheckoutPage.viewOrderDetailsLinks)
                    // My Account
                    .click(homepage.myAccountLink)
                    .click(myorderpage.myOrders)        
    });

    test("change currency", async t => {
        await homepage.changeCurrency('Euro');
    });