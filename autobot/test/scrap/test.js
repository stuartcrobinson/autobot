import LoginPage from 'object/page/login.page';

var fs = require('fs');
var expect = require('chai').expect;

describe('login success', () => {
    it('should log in with good creds', () => {





        LoginPage.open();

        // LoginPage.logInButton.click_waitForChange('.container');
        LoginPage.logInButton.click_waitForChange('.devise-links');

        LoginPage.invalidLoginWarningToaster.waitForExist();










        // const myform = browser.element('#new_user');

        // console.log(myform.getHTML());

        // console.log(myform);

        // for (var propName in myform) {
        //     let propValue = myform[propName]

        //     console.log(7 + " " + propName, propValue);
        // }

    });
});