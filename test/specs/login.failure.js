import LoginPage from 'ui/page/login.page';
import AlertComp from 'ui/component/alert.comp';

var fs = require('fs');

var expect = require('chai').expect;

describe('loginBadCred', () => {

    it('should display warning for invalid login creds', () => {
        LoginPage.logIn('stuart.clifford@gmail.com', 'ojfhdud')

        LoginPage.invalidLoginWarning.waitForExist();

        expect(LoginPage.invalidLoginWarning.isExisting()).to.be.true;

        AlertComp.close();

        expect(LoginPage.invalidLoginWarning.isExisting()).to.be.false;
    });

});