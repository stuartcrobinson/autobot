import LoginPage from '../../object/page/login.page';
import ToasterComp from 'object/component/toaster.comp';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('login failure', () => {

    before(() => {
        Agent.deploy(environment = Environment.staging, roles = [Role.noRole]);
        LoginPage.logIn(global.agent, password='wrong_password_fdiusy')
    });

    it('should display warning', () => {

        LoginPage.invalidLoginWarningToaster.waitForExist();

        assert(LoginPage.invalidLoginWarningToaster.isExisting(), "Invalid login warning should exist.")

        ToasterComp.close();

        assert(!LoginPage.invalidLoginWarningToaster.isExisting(), "Invalid login warning should be gone.")
    });

});