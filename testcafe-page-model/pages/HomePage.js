import { Selector, t } from "testcafe";

class HomePage{

// url

// page title
    constructor(){
        this.subtitleHeader = Selector('h2')
            .withText("Welcome to our store")
        this.registerLink = Selector('a')
            .withText('Register')
        this.loginLink = Selector('a')
            .withText('Log in')
        this.shoppingCartLink = Selector('a')
            .withText('Shopping Cart')
        this.wishListLink = Selector('a')
            .withText('Wish List')
        this.currencyList = Selector('#customCurrency')
        // My Account
        this.myAccountLink = Selector('a')
            .withText('My account')
        // Logout
        this.logoutLink = Selector('a')
            .withText('Log out')
    }
    // search 
    get productSearch() {
        return Selector("#small-searchterms");
        // document.querySelector("#small-searchterms")
    }
    async search(product){
        await t
            .typeText(this.productSearch,product)
            .wait(3000)
            .pressKey('enter');
    }
    async changeCurrency(currency){
        await t
            .click(this.currencyList)
            .click(Selector('option',{text: currency}));
    }

}
export default new HomePage();