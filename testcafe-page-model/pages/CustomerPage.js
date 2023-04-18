import { Selector, t } from "testcafe";

class MyAccountPage{
    constructor() {
        this.OrderLink = Selector('a').withText('Orders');
        this.myAccountHeader = Selector('h1').withText('My account - Orders');
        this.noOrdersLabel = Selector('div.no-data');
    }

}
export default new MyAccountPage();