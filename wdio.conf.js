var path = require("path");

lifecycleSpam = false

exports.config = {

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    waffles: 'are delicious',
    specs: [
        // './autobot/test/**/*.js'
        './autobot/test/dashboard.js',
        './autobot/test/login.js'
    ],
    // define specific suites
    suites: {
        login: [
            './autobot/test/login.success.js',
            './autobot/test/login.failure.js'
        ],
        logging: [
            './autobot/test/loggingTest1.js',
            './autobot/test/loggingTest2.js'
        ],
        testing: [
            './test/waitForStableDom.js',
            './autobot/test/scrap/test1.js',
            './autobot/test/dashboard.js',
            './autobot/test/login.js'
        ],
        //parallel testing test
        pt: [
            './autobot/test/scrap/pt1.js',
            './autobot/test/scrap/pt2.js',
            './autobot/test/scrap/pt3.js',
            './autobot/test/scrap/pt4.js',
            './autobot/test/scrap/pt5.js',
        ],
        otherFeature: [
            // ...
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        //
        browserName: 'chrome',
        // chromeOptions: {
        //     args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
        //     binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
        // }
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [],//
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    reporters: ['spec'],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    // note:  this is how to run tests by tag: https://github.com/mochajs/mocha/wiki/Tagging
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000,
        compilers: ['js:babel-register']
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
        if (lifecycleSpam) {

            console.log("stuart onPrepare");

            // for (var propName in config) {
            //     let propValue = config[propName]

            //     console.log(14 + " onPrepare config  -  " + propName, propValue);
            // }

            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(12 + "onPrepare capabilities  -  " + propName, propValue);
            }

            global.onPrepare = "onPrepare"
        }
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * 
     * This is executed in a specific test cases's thread (session?) - stuart
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
        global.livyDoDisplay = true;

        var dateFormat = require('dateformat');

        const testParentDateTime = new Date();

        global.specTime = dateFormat(testParentDateTime, "hh:MM:sstt");
        global.specDate = dateFormat(testParentDateTime, "yyyymmdd");
        //TODO - open an issue with WDIO or ask question.  "specs" is always singular ...
        global.specFilePath = specs[0]

        const livy = require('./autobot/tools/livy')
        livy.initialize();



        if (lifecycleSpam) {

            console.log("stuart beforeSession");

            // for (var propName in config) {
            //     let propValue = config[propName]

            //     console.log(11 + " beforeSession config  -  " + propName, propValue);
            // }

            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(12 + "beforeSession capabilities  -  " + propName, propValue);
            }

            for (var propName in specs) {
                let propValue = specs[propName]

                console.log(13 + " beforeSession specs  -  " + propName, propValue);
            }

            global.beforeSession = "beforeSession"

            console.log("in beforeSession, global.beforeSession: " + global.beforeSession);
            console.log("in beforeSession, global.onPrepare: " + global.onPrepare);
        }

    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
        //read the wdio's --key argument whose string contains login creds formatted like:
        //--key 'email=asdf@asdf.com password=mypassword url=https://wordsmithstaging.com'
        //wdio throws errors if key contais --'s.  so we add them in later, below:
        var stringArgv = require('string-argv');
        var yargsParse = require('yargs-parser');

        let argv = stringArgv(browser.options.key);

        for (let i = 0; i < argv.length; i++) {
            argv[i] = '--' + argv[i]
        }

        const options = yargsParse(argv);

        // console.log("options:");
        // console.log(options);
        // console.log("options.email:");
        // console.log(options.email);

        global.user = {}
        global.user.email = options.email;
        global.user.password = options.password;
        global.user.url = options.url;

        if (lifecycleSpam) {
            console.log("in before, global.beforeSession: " + global.beforeSession);
            console.log("in before, global.onPrepare: " + global.onPrepare);

            console.log("  before specs =   " + specs);
            console.log("  before specs[0] =   " + specs[0]);
            console.log("  before specs[1] =   " + specs[1]);

            for (var propName in specs) {
                let propValue = specs[propName]

                console.log(6 + "  before specs  -   " + propName, propValue);
            }

            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(5 + "   before capabilities  -   " + propName, propValue);
            }
        }

    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    /**
     * Hook that gets executed before the suite starts.
     * 
     * TODO - this doesn't make sense.  it's getting run before every spec in a suite.  post on SO or wdio project or something.
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        if (lifecycleSpam) {
            console.log("stuart beforeSuite");

            for (var propName in suite) {
                let propValue = suite[propName]

                console.log(3 + " beforeSuite -- suite: " + propName, propValue);
            }
        }

    },
    /**
     * Function to be executed before a test [case - stuart] (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    beforeTest: function (test) {
        if (lifecycleSpam) {

            console.log("in beforeTest, global.beforeSession: " + global.beforeSession);
            console.log("in beforeTest, global.onPrepare: " + global.onPrepare);


            for (var propName in test) {
                let propValue = test[propName]

                console.log(3 + " beforeTest -- test: " + propName, propValue);
            }

            // for (var propName in this) {
            //     let propValue = this[propName]

            //     console.log(4 + "  beforeTest -- this: " + propName, propValue);
            // }
        }

        global.livyLog = ""

        global.testCaseTitle = test.title
        global.testParentTitle = test.parent
        global.testCaseFullTitle = test.fullTitle
        global.specFilePath = test.file
        global.testGrandparentsTitle = test.fullTitle
        // global.testCaseSpacelessName = test.fullTitle.replace(/ /, "_");

        global.testGrandparentsTitle = global.testGrandparentsTitle.replace(global.testCaseTitle, "");
        global.testGrandparentsTitle = global.testGrandparentsTitle.replace(global.testParentTitle, "");
        global.testGrandparentsTitle = global.testGrandparentsTitle.trim();


        var dateFormat = require('dateformat');

        const testDateTime = new Date();

        global.testCaseTime = dateFormat(testDateTime, "hh:MM:ss:TT");
        global.testCaseDate = dateFormat(testDateTime, "yyyymmdd");


        const livy = require('./autobot/tools/livy')

        livy.logTestStart()

    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    afterTest: function (test) {
        const livy = require('./autobot/tools/livy')

        //https://github.com/webdriverio/webdriverio/issues/269

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            livy.logPassed();
            return;
        }
        else {
            livy.logFailed();
        }

        // // var dateFormat = require('dateformat');
        // var fs = require('fs')

        // const dir1 = 'autobot/log'
        // const dir2 = 'autobot/log/' + global.specDate
        // let file = dir2 + '/' + global.testCaseTime + ' ' + test.parent + ', ' + test.title + '.png'
        // file = file.replace(/\s/g, '_');

        // if (!fs.existsSync(dir1)) {
        //     fs.mkdirSync(dir1);
        // }
        // if (!fs.existsSync(dir2)) {
        //     fs.mkdirSync(dir2);
        // }

        // const errorImageFile = livy.getErrorScreenshotFileAbsPath(); //testCaseSpacelessName

        // // get current test title and clean it, to use it as file name
        // var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
        // // build file path
        // var filePath = this.screenshotPath + filename + '.png';
        // // save screenshot
        browser.saveScreenshot(livy.getErrorScreenshotFileAbsPath());


        const imageClickablePath = 'file://' + path.resolve(livy.getErrorScreenshotFileAbsPath());

        console.log('\n\tScreenshot location:', imageClickablePath, '\n');

        livy.logErrorImage();



        // let html = `<!doctype html><style>body{background-color:#f5f5f5}</style><img src=${imageClickablePath} width=900>`

        // html = html + "<br/> \n" + test.err.stack.replace(/(?:\r\n|\r|\n)/g, '<br>');
        // html = html + "<br/> <br/> \nduration: " + test.duration;
        // html = html + "\n<br/><br/><br/>\n" + global.livyLog;


        // let htmlfile = dir2 + '/' + global.testCaseTime + ' ' + test.parent + ', ' + test.title + '.html'
        // htmlfile = htmlfile.replace(/\s/g, '_');

        // fs.appendFileSync(htmlfile, html);

        // const htmlReportPath = 'file://' + path.resolve(htmlfile);


        // console.log('\n\tReport location:', htmlReportPath, '\n');


        //now save file

        // let htmlErr = test.err.stack.replace(/(?:\r\n|\r|\n)/g, '<br>');


        if (lifecycleSpam) {

            console.log("in afterTest, global.beforeSession: " + global.beforeSession);
            console.log("in afterTest, global.onPrepare: " + global.onPrepare);

            console.log(test.err.message);
            console.log(test.err.stack);

            console.log(test.err.type);
            console.log(test.err.expected);

            console.log(test.err.actual);

            for (var propName in test) {
                let propValue = test[propName]

                console.log("afterTest -- test:  " + propName, propValue);
            }
        }

    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) {

        if (lifecycleSpam) {


            for (var propName in suite) {
                let propValue = suite[propName]

                console.log(10 + " afterSuite suite  -  " + propName, propValue);
            }
        }
    },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) {
        if (lifecycleSpam) {

            console.log("stuart after -- global.testCaseFullTitle: " + global.testCaseFullTitle);


            console.log("in after, global.beforeSession: " + global.beforeSession);
            console.log("in after, global.onPrepare: " + global.onPrepare);




            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(10 + " after capabilities  -  " + propName, propValue);
            }

            for (var propName in specs) {
                let propValue = specs[propName]

                console.log(10 + " after specs  -  " + propName, propValue);
            }
        }

    },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {
        if (lifecycleSpam) {

            console.log("stuart afterSession -- global.testCaseFullTitle: " + global.testCaseFullTitle);

            console.log("in afterSession, global.beforeSession: " + global.beforeSession);
            console.log("in afterSession, global.onPrepare: " + global.onPrepare);

            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(10 + " afterSession capabilities  -  " + propName, propValue);
            }

            for (var propName in specs) {
                let propValue = specs[propName]

                console.log(10 + " afterSession specs  -  " + propName, propValue);
            }
        }

    },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onComplete: function (exitCode, config, capabilities) {
        if (lifecycleSpam) {

            console.log("stuart onComplete");

            for (var propName in exitCode) {
                let propValue = exitCode[propName]

                console.log(9 + " onComplete exitCode  -  " + propName, propValue);
            }

            // for (var propName in config) {
            //     let propValue = config[propName]

            //     console.log(9 + " onComplete config  -  " + propName, propValue);
            // }

            for (var propName in capabilities) {
                let propValue = capabilities[propName]

                console.log(10 + " onComplete capabilities  -  " + propName, propValue);
            }


            console.log("in onComplete, global.beforeSession: " + global.beforeSession);
            console.log("in onComplete, global.onPrepare: " + global.onPrepare);
        }
    }
}
