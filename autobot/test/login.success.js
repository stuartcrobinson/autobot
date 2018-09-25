import LoginPage from '../object/page/login.page';
import Role from '../object/roles';
import Environment from '../object/environments';

var expect = require('chai').expect;

describe('login', () => {

    before(() => {
        Agent.deploy(environment = Environment.staging, roles = [Role.noRole]);
        LoginPage.logIn(global.agent)
    });

    it('should succeed with good creds', () => {
        expect(LoginPage.logInButton.isExisting(), 'login button shouldnt exist').to.be.false;
    });
});