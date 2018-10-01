// import MyClass from '../../object/myClass';

const livy = require('../../tools/livy');


//to run w/ just mocha:
// ./node_modules/mocha/bin/mocha ./test/specs/test.js
const challenge = require('./testFunctions');


var myglobalmaybe = 9;

describe("top2", function () {

    it("test1", function () {
        // livy.testTitle = this.test.title
        // livy.testParentTitle = this.test.parent.title

        // global.testCaseTitle = this.test.title
        // global.testParentTitle = this.test.parent.title

        // global.testCaseTitle = 9;

        livy.logAction("message top2 test1 1");
        livy.logAction("message top2 test1 2");
        livy.logAction("message top2 test1 3");
        livy.logAction("message top2 test1 4");
        livy.logAction("message top2 test1 5");
        // livy.log("message 2");
        // livy.log("message 3");
        // livy.log("message 4");
        // livy.function1();
        // livy.function2();
        // livy.function3();

    })

    it("test2", function () {

        // global.testCaseTitle = this.test.title
        // global.testParentTitle = this.test.parent.title

        // livy.testTitle = this.test.title
        // livy.testParentTitle = this.test.parent.title

        livy.logAction("message top2 test2 1");
        livy.logAction("message top2 test2 2");
        livy.logAction("message top2 test2 3");
        livy.logAction("message top2 test2 4");
        livy.logAction("message top2 test2 5");
        // livy.function1();
        // livy.function2();
        // livy.function3();

    });
});
