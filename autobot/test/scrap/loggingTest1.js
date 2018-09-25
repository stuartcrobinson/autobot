// import livy from '../../object/livy';

const livy = require('object/livy');


//to run w/ just mocha:
// ./node_modules/mocha/bin/mocha ./test/specs/test.js
const challenge = require('./testFunctions');


var myglobalmaybe = 9;

describe("top1", function () {
    console.log(1 + " " + this.title);
    console.log(2 + " " + this.fullTitle());

    // for (var propName in this) {
    //     let propValue = this[propName]

    //     console.log(0 + " " + propName, propValue);
    // }

    it("test1", function () {
        // livy.testTitle = this.test.title
        // livy.testParentTitle = this.test.parent.title

        // global.testTitle = this.test.title
        // global.testParentTitle = this.test.parent.title


        livy.log("message top1 test1 1");
        livy.log("message top1 test1 2");
        livy.log("message top1 test1 3");
        livy.log("message top1 test1 4");
        livy.log("message top1 test1 5");

        // livy.function1();
        // livy.function2();

        // var currentTime = new Date().getTime();

        // const milliseconds = 3000;

        // while (currentTime + milliseconds >= new Date().getTime()) {
        // }

        // livy.function3();

    })

    it("test2", function () {
        // livy.testTitle = this.test.title
        // livy.testParentTitle = this.test.parent.title

        // global.testTitle = this.test.title
        // global.testParentTitle = this.test.parent.title
        

        livy.log("message top1 test2 1");
        livy.log("message top1 test2 2");
        livy.log("message top1 test2 3");
        livy.log("message top1 test2 4");
        livy.log("message top1 test2 5");

        
        // livy.function1();
        // livy.function2();
        // livy.function3();

        // console.log(3 + " " + this.test.title);
        // console.log(3.1 + " " + this.test.fullTitle());
        // console.log(3.2 + " " + this.test.titlePath());
        // // console.log(5 + " " + this);
        // // console.log(6 + " " + this.test);
        // // console.log(7 + " " + this.test['parent']);
        // console.log(4 + " " + this.test.parent.title);
        // console.log(5 + " myglobalmaybe in test" + myglobalmaybe);

        // // challenge.afunction();

        // console.log("livy.someData " + livy.someData);

        // livy.someData = 100;

        // console.log("livy.someData " + livy.someData);

        // heresafunction();
        // console.log("livy.someData " + livy.someData);


        // // console.log(66 + " LoggerTestObject.asdf: " + LoggerTestObject.asdf);
        // // console.log(66 + " LoggerTestObject.asdf: " + LoggerTestObject.dosomething());

        // // for (var propName in this) {
        // //     let propValue = this[propName]

        // //     console.log(7 + " " + propName, propValue);
        // // }
        // // for (var propName in this.test['parent']) {
        // //     let propValue = this.test['parent'][propName]

        // //     console.log(10 + " " + propName, propValue);
        // // }
        // // for (var propName in this.test) {
        // //     let propValue = this.test[propName]

        // //     console.log(5 + " " + propName, propValue);
        // // }
    });
});

const heresafunction = () => {
    console.log("?? " + livy.someData);
    livy.someData = 0;
}