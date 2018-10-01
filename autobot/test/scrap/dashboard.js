import LoginPage from '../../object/wordsmith/page/login.page';
import DashboardPage from '../../object/wordsmith/page/dashboard.page';
import ToasterComp from 'object/wordsmith/component/toaster.comp';
import Table from '../../object/wordsmith/table';
const livy = require('../../tools/livy');

var fs = require('fs');

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('dashboard', () => {

    before(() => {
        LoginPage.logIn('stuart.clifford@gmail.com', fs.readFileSync('resources/password.txt', 'utf8'))
    });

    describe('sort table', () => {

        describe('Projects ', () => {

            it('by Project increasing', () => {
                const values = DashboardPage.table.sortIncreasing('Project').select('Project').getValues();
                console.log(values);
                assert(Table.isIncreasing(values), 'Project column should be increasing');
            });
            it('by Project decreasing', () => {
                const values = DashboardPage.table.sortDecreasing('Project').select('Project').getValues();
                console.log(values);
                expect(Table.isDecreasing(values), 'Project column should be increasing').to.be.true;
            });
            it('by Last Edited, increasing', () => {
                const values = DashboardPage.table.sortIncreasing('Last Edited').select('Last Edited').getValues();
                console.log(values);
                expect(Table.isIncreasing(values), 'Last Edited column should be increasing').to.be.true;
            });
            it('by Last Edited, decreasing', () => {
                const values = DashboardPage.table.sortDecreasing('Last Edited').select('Last Edited').getValues();
                console.log(values);
                expect(Table.isDecreasing(values), 'Last Edited column should be decreasing').to.be.true;
            });
            it('4. by project', () => {
                browser.pause(100);
                livy.logAction()
            });
            it('2. by Last Edited', () => {
                browser.pause(100);
                livy.logAction()
            });

        });
        describe('A Downloads', () => {

            it('1. d by Project', () => {
                browser.pause(100);
                livy.logAction()
            });
            it('2. d by Last Edited', () => {
                browser.pause(100);
                livy.logAction()
            });
            it('3. d by Created', () => {
                browser.pause(100);
                livy.logAction()
            });
            it('4. d by project', () => {
                browser.pause(100);
                livy.logAction()
            });

        });
    });
});