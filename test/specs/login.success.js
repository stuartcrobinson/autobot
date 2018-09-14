import LoginPage from 'ui/page/login.page';

var fs = require('fs');
var expect = require('chai').expect;

describe('loginGoodCred', () => {

    it('should log in with valid login creds', () => {

        LoginPage.logIn('stuart.clifford@gmail.com', fs.readFileSync('resources/password.txt', 'utf8'))

        expect(LoginPage.logInButton.isExisting()).to.be.false;
    });

});