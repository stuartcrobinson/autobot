import LoginPage from '../../object/page/login.page';
import ToasterComp from 'object/component/toaster.comp';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('login failure', () => {

    it('should display warning', () => {

        LoginPage.logIn('stuart.clifford@gmail.com', 'ojfhdud')

        LoginPage.invalidLoginWarningToaster.waitForExist();

        assert(LoginPage.invalidLoginWarningToaster.isExisting(), "Invalid login warning should exist")

        ToasterComp.close();

        assert(!LoginPage.invalidLoginWarningToaster.isExisting(), "Invalid login warning shouldn’t exist")

    });

});