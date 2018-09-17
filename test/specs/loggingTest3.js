var expect = require('chai').expect;

describe("parentName!", function () {

    it("test1", function () {




        expect(true).to.be.true
    });
    it("test2", function () {
        expect(true).to.be.false
    });
    it("test3", function () {
        expect(true).to.be.true
    });
    it("test4", function () {

        setTimeout(() => console.log('Hello'), 2000);
        // browser.pause(3000);
        console.log("oh hi");
        expect(true).to.be.true
    });
    it("test5", function () {
        expect(true).to.be.true
    });
});
