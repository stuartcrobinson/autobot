import Page from './page';
import AiElement from '../../test/specs/aiElement';

// var Page = require('./page');
// var AiElement = require('./aiElement');

class LoginPage extends Page {

    get emailInput()  { return new AiElement('input.email'); }
    get passwordInput()  { return new AiElement('input.password'); }
    get logInButton()  { return new AiElement('input[value="Log In"]'); }

    open() {
        super.open('https://wordsmith.automatedinsights.com/');
        browser.waitUntil(() => (browser.isExisting('input.email')));
    }

    logIn(email, password){
        this.open();
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.logInButton.click();
        this.logInButton.waitForNotExist();


        // LoginPage.open();
        // LoginPage.emailInput.setValue(email);
        // LoginPage.passwordInput.setValue(password);
        // LoginPage.logInButton.click();
        // LoginPage.logInButton.waitForNotExist();
    }

}

export default new LoginPage();