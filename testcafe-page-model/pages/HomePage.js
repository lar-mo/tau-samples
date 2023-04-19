import { Selector, t } from "testcafe";

class HomePage{

// url

// page title
    constructor(){
        this.subtitleHeader = Selector('h2')
            .withText(/Welcome to our store/i)
        this.registerLink = Selector('a')
            // .withText('Register')
            .withText(/Register/i)
        this.loginLink = Selector('a')
            .withText(/Log in/i)
        this.shoppingCartLink = Selector('a')
            .withText(/Shopping cart/i)
        this.wishListLink = Selector('a')
            .withText(/Wish List/i)
        this.currencyList = Selector('#customerCurrency')
        // My Account
        this.myAccountLink = Selector('a')
            .withText(/My account/i)
        // Logout
        this.logoutLink = Selector('a')
            .withText(/Log out/i)
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