import { Selector, t } from "testcafe";

class CheckoutPage{
    constructor() {
        this.countryList = Selector('select#BillingNewAddress_CountryId');
        this.StateList = Selector('select#BillingNewAddress_StateProvinceId');
        this.cityTxt = Selector('input#BillingNewAddress_City');
        this.addressTxt = Selector('input#BillingNewAddress_Address1');
        this.zipTxt = Selector('input#BillingNewAddress_ZipPostalCode');
        this.phoneTxt = Selector('input#BillingNewAddress_PhoneNumber')
        this.continueBtn = Selector('button.button-1.new-address-next-step-button');
        this.nextDayOption = Selector('input#shippingoption_1');
        this.nextShippingBtn = Selector('#shipping-method-buttons-container > button');
        this.nextPaymentBtn = Selector('#payment-method-buttons-container > button');
        this.nextConfirmBtn = Selector('#payment-info-buttons-container > button');
        this.confirmOrderBtn = Selector('#confirm-order-buttons-container > button');
        this.orderConfirmationMessage = Selector('strong').withText('Your order has been successfully processed!');
        this.viewOrderDetailsLinks = Selector('a').withText('Click here for order details.');
    }

    async selectCountry(country){
        const countryOption = this.countryList.find('option');
        await t
            .click(this.countryList)
            .click(countryOption.withText(country));
    }

    async selectUSState(state){
        const stateOption = this.StateList.find('option')
        await t
            .click(this.StateList)
            .click(stateOption.withText(state));
    }

}
export default new CheckoutPage();