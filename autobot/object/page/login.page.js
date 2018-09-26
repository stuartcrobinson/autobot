import Page from './page';
import L from '../aiElement';
import { AssertionError } from 'assert';
import ToasterComp from '../component/toaster.comp';


import Role from '../../object/roles';
import Environment from '../../object/environments';

var fs = require('fs');
var assert = require('chai').assert;

class LoginPage extends Page {

    asdf() {
        console.log('hello')
    }


    get emailInput() { return new L('input.email'); }
    get passwordInput() { return new L('input.password'); }
    get logInButton() { return new L('input[value="Log In"]'); }
    // get invalidLoginWarningToaster() { return new L("//span[contains(text(),'Invalid Email or password.')]"); }
    get toaster_signedOutSuccessfully() { return ToasterComp.withMessage("Signed out successfully."); }
    get toaster_invalidEmailOrPwd() { return ToasterComp.withMessage("Invalid Email or password."); }

    open(environment = Environment.staging) {
        super.open('https://wordsmith.automatedinsights.com/');
        browser.waitUntil(() => (browser.isExisting('input.email')));
    }

    logIn(email, password, url) {


        assert.isDefined(email, "email should be defined")
        assert.isDefined(password, "password should be defined")

        //TODO how to deal with opens?  declare per test?  embed in certain/all actions?
        this.open(url);
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