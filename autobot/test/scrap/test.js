import loginPage from '../../object/page/login.page';
import Page from '../../object/page/page';


var fs = require('fs');
var tools = require('../../tools/tools.js')
var jsdiff = require('diff');

var expect = require('chai').expect;

const sleep = require('util').promisify(setTimeout)




describe('login success', () => {
    it('should log in with good creds', () => {


        // let url = 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader';
        // let url = 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader';
        // let url = 'https://wordsmith.automatedinsights.com';
        // let url = 'https://varvy.com/pagespeed/wicked-fast.html';
        // let url = 'https://www.google.com';
        let url = 'https://chenxuan0000.github.io/svg-progress-bar/';
        // 
        browser.url(url);
        // browser.frame('iframeResult');
        // browser.pause(1000);


        try {

            console.log("waiting for stable dom now: begin.........");
            new Page().waitForStableDom(3000);
            console.log("complete!");
        }
        catch (err) {
            console.log("fail!");


            const x = tools.getFullDom();
            browser.pause(200);

            const y = tools.getFullDom();

            console.log("HERE!!!!!!!");
            console.log("x");
            console.log(x);
            console.log("y");
            console.log(y);
            console.log(x === y);
        }




        // var diff = jsdiff.diffChars(x, y);

        // diff.forEach(function (part) {
        //     // green for additions, red for deletions
        //     // grey for common parts
        //     var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
        //     process.stderr.write(part.value[color]);
        //     // console.log(part.value[color]);
        // });

        // console.log();

        // setTimeout(function () { console.log('hi1') }, 1000);
        // setTimeout(function () { console.log('hi2') }, 1000);
        // setTimeout(function () { console.log('hi3') }, 1000);
        // setTimeout(function () { console.log('hi4') }, 1000);


        // async function main() {
        //     console.time("Slept for")
        //     await sleep(3000)
        //     console.timeEnd("Slept for")
        // }

        // await main()

        // function myf(msg) {
        //     console.log(msg)
        //     return 0;
        // }

        // function sleep(fn, par) {
        //     return new Promise((resolve) => {
        //         // wait 3s before calling fn(par)
        //         setTimeout(() => resolve(fn(par)), 3000)
        //     })
        // }
        // //   Then you'll be able to use this new sleep function with ES7 async-await:

        // var fileList = await sleep(myf, "OH HI THERE")

        // console.log(fileList)

        // browser.pause(1000);

        // window.close();

        // console.log('not in settimeout');
        // browser.pause(1000);
        // console.log('not in settimeout');
        // browser.pause(1000);
        // console.log('not in settimeout');
        // browser.pause(1000);
        // console.log('not in settimeout');
        // console.log('not in settimeout');
        // console.log('not in settimeout');



        // console.log(browser.options.user);
        // console.log(browser.options.key);
        // console.log(browser.options.mochaOpts);
        // console.log(browser.options.cucumberOpts);
        // console.log(browser.options.asdf);
        // console.log(global.user);
        // console.log(global.user);

        // LoginPage.open();

        // // LoginPage.logInButton.click_waitForChange('.container');
        // LoginPage.logInButton.click_waitForChange('.devise-links');

        // LoginPage.invalidLoginWarningToaster.waitForExist();










        // const myform = browser.element('#new_user');

        // console.log(myform.getHTML());

        // console.log(myform);

        // for (var propName in myform) {
        //     let propValue = myform[propName]

        //     console.log(7 + " " + propName, propValue);
        // }

    });
});