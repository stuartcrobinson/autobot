import LoginPage from '../object/page/login.page';
import SidebarComp from '../object/component/sidebar.comp';
import HeaderComp from '../object/component/header.comp';
import ToasterComp from '../object/component/toaster.comp';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;


/*

TODO


*/

describe('Create project', () => {

    before(() => {
        LoginPage.logIn(global.user.email, global.user.password, global.user.url)
    });

    it('from Create CSV', () => {
    });

    it('from Upload CSV', () => {
    });

    it('should logout successfully', () => {
        SidebarComp.settingsLink.hover();
        SidebarComp.settingsMenu.SignOutLink.click();

        LoginPage.toaster_signedOutSuccessfully.waitForExist();
        LoginPage.toaster_signedOutSuccessfully.close();
        LoginPage.toaster_signedOutSuccessfully.waitForNotExist();

        assert(LoginPage.logInButton.isExisting(), 'Login button should exist.');
    });

    it('should fail with warning with bad creds', () => {

        LoginPage.logIn(global.user.email, 'wrong_password_fdiusy')

        LoginPage.toaster_invalidEmailOrPwd.waitForExist();
        LoginPage.toaster_invalidEmailOrPwd.close();
        LoginPage.toaster_invalidEmailOrPwd.waitForNotExist();

        assert(!LoginPage.toaster_invalidEmailOrPwd.isExisting(), "Invalid login warning should be gone.")
    });

});