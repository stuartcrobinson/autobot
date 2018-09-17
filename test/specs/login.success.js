import LoginPage from '../../object/page/login.page';

var fs = require('fs');
var expect = require('chai').expect;

describe('login success', () => {
    it('should log in with good creds', () => {
        LoginPage.logIn('stuart.clifford@gmail.com', fs.readFileSync('resources/password.txt', 'utf8'))
        expect(LoginPage.logInButton.isExisting(), 'login button shouldnt exist').to.be.false;
    });
});