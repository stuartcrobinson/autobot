import Page from './page';
import L from '../aiElement';

// var Page = require('./page');
// var AiElement = require('./aiElement');

class LoginPage extends Page {

    asdf(){
        console.log('hello')
    }


    get emailInput() { return new L('input.email'); }
    get passwordInput() { return new L('input.password'); }
    get logInButton() { return new L('input[value="Log In"]'); }
    get invalidLoginWarning() { return new L("//span[contains(text(),'Invalid Email or password.')]"); }

    open() {
        super.open('https://wordsmith.automatedinsights.com/');
        browser.waitUntil(() => (browser.isExisting('input.email')));
    }

    logIn(email, password) {
        //TODO how to deal with opens?  declare per test?  embed in certain/all actions?
        this.open();
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.logInButton.click();
        // this.logInButton.waitForNotExist();  //this can't be here for when we want to test invalid login creds
        // so actions must confirm they're at the right spot BEFORE execution

        
        // LoginPage.open();
        // LoginPage.emailInput.setValue(email);
        // LoginPage.passwordInput.setValue(password);
        // LoginPage.logInButton.click();
        // LoginPage.logInButton.waitForNotExist();
    }
}

export default new LoginPage();