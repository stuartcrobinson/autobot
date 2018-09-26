import LoginPage from '../object/page/login.page';
import Role from '../object/roles';
import Environment from '../object/environments';

const autobot = require('../autobot');

var expect = require('chai').expect;

describe('login', () => {

    before(() => {
        LoginPage.logIn(global.user)
    });

    it('should succeed with good creds', () => {
        expect(LoginPage.logInButton.isExisting(), 'login button shouldnt exist').to.be.false;
    });
});