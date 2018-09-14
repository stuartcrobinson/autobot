// login.spec.js
import LoginPage from '../../ui/page/login.page';
// var LoginPage = require('./login.page');

var fs = require('fs');


var expect = require('chai').expect;

describe('login form', () => {
    it('should deny access with wrong creds', () => {

        LoginPage.logIn('stuart.clifford@gmail.com', fs.readFileSync('resources/password.txt', 'utf8'))
        // expect(!LoginPage.logInButton.isExisting);
    });

});