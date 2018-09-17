import LoginPage from '../../object/page/login.page';
import AlertComp from '../../object/component/alert.comp';
 
var fs = require('fs');

var expect = require('chai').expect;

describe('login failure', () => {

    it('should display warning', () => {
        LoginPage.logIn('stuart.clifford@gmail.com', 'ojfhdud')

        LoginPage.invalidLoginWarning.waitForExist();

        expect(LoginPage.invalidLoginWarning.isExisting()).to.be.true;

        AlertComp.close();

        expect(LoginPage.invalidLoginWarning.isExisting()).to.be.false;
    });

});