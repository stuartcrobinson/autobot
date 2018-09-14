import Page from './page';
import AiElement from './aiElement';

// var Page = require('./page');
// var AiElement = require('./aiElement');

class LoginPage extends Page {

    get emailInput()  { return new AiElement('input.email'); }
    get passwordInput()  { return new AiElement('input.password'); }
    get logInButton()  { return new AiElement('input[value="Log In"]'); }
    // get form()      { return browser.element('#login'); }
    // get flash()     { return browser.element('#flash'); }

    open() {
        super.open('https://wordsmith.automatedinsights.com/');
    }

    submit() {
        this.form.submitForm();
    }

}

export default new LoginPage();