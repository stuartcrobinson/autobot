var log = require('npmlog')
Object.defineProperty(log, 'heading', { get: () => { return new Date().toUTCString() } })



export default class AiElement {

    constructor(selector) {
        this.selector = selector;
    }

    get element() { return browser.element(this.selector); }

    toString() {
        return this.selector;
    }

    print() {
        log.info(this.toString());
    }

    click() {
        log.info('dummy log, about to click: ' + this.selector);
        browser.waitForExist(this.selector);
        browser.click(this.selector)
    }

    setValue(value) {
        log.info('dummy log, about to set value: ' + this.selector + ', to ' + value);
        browser.waitForExist(this.selector);
        browser.setValue(this.selector, value);
    }

    waitForNotExist() {
        browser.waitUntil(() => (!browser.isExisting(this.selector)));
    }

    isExisting() {
        return browser.isExisting(this.selector);
    }




}

// const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);

// chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
// console.log(chicken_breast.protein); // 26 (LINE A)