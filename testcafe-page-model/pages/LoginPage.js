import { Selector, t } from "testcafe";

class LoginPage{
    constructor() {
        this.LoginEmail = Selector('#Email');
        this.LoginPassword = Selector('#Password');
        this.submitButton = Selector('button.button-1.login-button');
        this.accountHeader = Selector('strong').withText('Returning Customer');
    }

}
export default new LoginPage();