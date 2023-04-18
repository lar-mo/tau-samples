import { Selector } from "testcafe";

class ProductDetailsPage{
    constructor() {
        this.productPrice = Selector('#price-value-4');
        this.productQuantity = Selector('#product_enteredQuantity_4');
        this.addToCart = Selector('#add-to-cart-button-4');
        this.successMessage = Selector('#bar-notification');
    }
}
export default new ProductDetailsPage();