import LoginPage from 'object/page/login.page';
import ToasterComp from 'object/component/toaster.comp';
const livy = require('object/livy');

var fs = require('fs');

var expect = require('chai').expect;

describe('dashboard', () => {

    before(() => {
        // LoginPage.logIn('stuart.clifford@gmail.com', fs.readFileSync('resources/password.txt', 'utf8'))
    });

    describe('sort table', () => {

        describe('Projects ', () => {

            it('1. by Project', () => {
                browser.pause(100);
                livy.log()
            });
            it('3. by Created', () => {
                browser.pause(100);
                livy.log()
            });
            it('4. by project', () => {
                browser.pause(100);
                livy.log()
            });
            it('2. by Last Edited', () => {
                browser.pause(100);
                livy.log()
            });

        });
        describe('A Downloads', () => {

            it('1. d by Project', () => {
                browser.pause(100);
                livy.log()
            });
            it('2. d by Last Edited', () => {
                browser.pause(100);
                livy.log()
            });
            it('3. d by Created', () => {
                browser.pause(100);
                livy.log()
            });
            it('4. d by project', () => {
                browser.pause(100);
                livy.log()
            });

        });
    });
});