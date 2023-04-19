import { Selector } from "testcafe";

class MyOrderPage{
    constructor() {
        this.myOrders = Selector('a').withText('Orders');
        this.myOrderNumber = Selector('strong').withText('Order Number')
   }
}
export default new MyOrderPage();