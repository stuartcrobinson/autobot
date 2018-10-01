import loginPage from '../object/wordsmith/page/login.page';
import dashboardPage from '../object/wordsmith/page/dashboard.page';
import createAProjectPage from '../object/wordsmith/page/createAProject.page';
import Table from '../object/wordsmith/table';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;
var autobot = require('../autobot');


describe('Dashboard', () => {

    before(() => {
        loginPage.logIn(global.user.email, global.user.password, global.user.url)
    });

    it('"New Project" button loads the "Create a Project" input table page', () => {
        dashboardPage.newProjectButton.click();
        createAProjectPage.createProjectButton.waitForExist();
        expect(browser.getTitle()).to.equal('New Project | Wordsmith');
        autobot.goBack();
        dashboardPage.newProjectButton.waitForExist();
    });

    describe('Sort table', () => {

        describe('Projects ', () => {

            it('by Project increasing', () => {
                //TODO refactor this stuff to avoid column strings.  do this instead;
                //dashboardPage.projectsTable.projectColumn.sortIncreasing();
                //const values = dashboardPage.projectsTable.projectColumn.getValues()
                //or
                //const values = dashboardPage.projectsTable.projectColumn.sortIncreasing().getValues()
                //wait no this approach falls apart when we want to get col1's value where col2=x

                const values = dashboardPage.table.sortIncreasing('Project').select('Project').getValues();
                // console.log(values);
                assert(Table.isIncreasing(values), 'Project column should be increasing');
            });
            it('by Project decreasing', () => {
                const values = dashboardPage.table.sortDecreasing('Project').select('Project').getValues();
                // console.log(values);
                assert(Table.isDecreasing(values), 'Project column should be increasing');
            });
        });

        describe('Downloads ', () => {
            
            it('should open', () => {
                dashboardPage.downloadsTabLink.click();
                dashboardPage.downloadsTable.waitToLoad();
            });

            it('by Project increasing', () => {
                const values = dashboardPage.table.sortIncreasing('Project').select('Project').getValues();
                // console.log(values);
                assert(!Table.isIncreasing(values), 'Project column should be increasing'); //TODO - remove the "!" here - set to make it fail
            });
            it('by Project decreasing', () => {
                const values = dashboardPage.table.sortDecreasing('Project').select('Project').getValues();
                // console.log(values);
                assert(Table.isDecreasing(values), 'Project column should be increasing');
            });
        });
    });

});