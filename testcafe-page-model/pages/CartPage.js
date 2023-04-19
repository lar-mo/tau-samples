import { Selector } from "testcafe";

class CartPage{
    constructor() {
        // this.grandTotalLabel = Selector('strong').withText(cost);
        this.TOScheckbox = Selector('input#termsofservice');
        this.cartTotal = Selector('td.cart-total-right');
        this.checkoutButton = Selector('button#checkout');
    }
}
export default new CartPage();