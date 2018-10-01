import LoginPage from '../object/wordsmith/page/login.page';
import SidebarComp from '../object/wordsmith/component/sidebar.comp';
import HeaderComp from '../object/wordsmith/component/header.comp';
import ToasterComp from '../object/wordsmith/component/toaster.comp';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Login @on @off', () => {

    before(() => {
        // Agent.deploy(environment = Environment.staging, roles = [Role.noRole]);
        // LoginPage.logIn(global.agent, password = 'wrong_password_fdiusy')

        //TODO - figure out how to put this in wdio.conf.js
        LoginPage.logIn(global.user.email, global.user.password, global.user.url)

    });

    it('should succeed with good creds', () => {
        assert.isFalse(!LoginPage.logInButton.isExisting(), 'Login button should be gone.');//TODO remove  "!"" - moved to trigger fail
    });

    // it('should logout successfully', () => {
    //     SidebarComp.settingsLink.hover();
    //     SidebarComp.settingsMenu.SignOutLink.click();

    //     LoginPage.toaster_signedOutSuccessfully.waitForExist();
    //     LoginPage.toaster_signedOutSuccessfully.close();
    //     LoginPage.toaster_signedOutSuccessfully.waitForNotExist();

    //     assert(!LoginPage.logInButton.isExisting(), 'Login button should exist.');      //TODO remove "!"" - there to trigger fail
    // });

    // it('should fail with warning with bad creds', () => {

    //     LoginPage.logIn(global.user.email, 'wrong_password_fdiusy')

    //     LoginPage.toaster_invalidEmailOrPwd.waitForExist();
    //     LoginPage.toaster_invalidEmailOrPwd.close();
    //     LoginPage.toaster_invalidEmailOrPwd.waitForNotExist();

    //     assert(!LoginPage.toaster_invalidEmailOrPwd.isExisting(), "Invalid login warning should be gone.")
    // });

});