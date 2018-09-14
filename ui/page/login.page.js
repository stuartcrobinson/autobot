import Page from './page';
import AiElement from '../../test/specs/aiElement';

// var Page = require('./page');
// var AiElement = require('./aiElement');

class LoginPage extends Page {

    get emailInput()  { return new AiElement('input.email'); }
    get passwordInput()  { return new AiElement('input.password'); }
    get logInButton()  { return new AiElement('input[value="Log In"]'); }
    get invalidLoginWarning()  { return new AiElement("//span[contains(text(),'Invalid Email or password.')]"); }


    //  //span[contains(text(),'Invalid Email or password.')]

    open() {
        super.open('https://wordsmith.automatedinsights.com/');
        browser.waitUntil(() => (browser.isExisting('input.email')));
    }

    logIn(email, password){
        //TODO how to deal with opens?  declare per test?  embed in certain/all actions?
        this.open();
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.logInButton.click();
        // this.logInButton.waitForNotExist();  //this can't be here for when we want to test invalid login creds
            //so actions must confirm they're at the right spot BEFORE execution


        // LoginPage.open();
        // LoginPage.emailInput.setValue(email);
        // LoginPage.passwordInput.setValue(password);
        // LoginPage.logInButton.click();
        // LoginPage.logInButton.waitForNotExist();
    }

}

export default new LoginPage();