import loginPage from '../object/wordsmith/page/login.page';
import dashboardPage from '../object/wordsmith/page/dashboard.page';
import createAProjectPage from '../object/wordsmith/page/createAProject.page';
import Table from '../object/wordsmith/table';

var fs = require('fs');
// var assert = require('assert');
var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Dashboard', () => {

    before(() => {


        // console.log("in describe('Dashboard', () => { before((), global.beforeSession: "+ global.beforeSession);
        // console.log("in describe('Dashboard', () => { before((), global.onPrepare: "+ global.onPrepare);
        // console.log("in describe('Dashboard', () => { before((), global.testCaseTitle: "+ global.testCaseTitle);
        // console.log("in describe('Dashboard', () => { before((), global.testParentTitle: "+ global.testParentTitle);
        // console.log("in describe('Dashboard', () => { before((), global.testCaseFullTitle: "+ global.testCaseFullTitle);
        // console.log("in describe('Dashboard', () => { before((), global.testCaseTime: "+ global.testCaseTime);
        // console.log("in describe('Dashboard', () => { before((), global.testCaseDate: "+ global.testCaseDate);
        // console.log("in describe('Dashboard', () => { before((), global.specTime: "+ global.specTime);
        // console.log("in describe('Dashboard', () => { before((), global.specDate: "+ global.specDate);
        // console.log("in describe('Dashboard', () => { before((), global.specFilePath: "+ global.specFilePath);









        // console.log("global.testCaseTitle");
        // console.log(global.testCaseTitle);
        // console.log("global.testParentTitle");
        // console.log( global.testParentTitle);
        // console.log("global.testParentParentTitle");
        // console.log(global.testParentParentTitle);
        // console.log("test.parent");
        // console.log(test.parent.title);


        loginPage.logIn(global.user.email, global.user.password, global.user.url)
    });

    it('"New Project" button loads the "Create a Project" input table page', () => {
        dashboardPage.newProjectButton.click();
        createAProjectPage.createProjectButton.waitForExist();
        expect(browser.getTitle()).to.equal('New Project | Wordsmith');
        browser.back();
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
                expect(Table.isDecreasing(values), 'Project column should be increasing').to.be.true;  //TODO set this to "true" -
                assert.fail()   //to trigger screenshot
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
                expect(Table.isDecreasing(values), 'Project column should be increasing').to.be.true;
            });
        });
    });

});