var log = require('npmlog')
Object.defineProperty(log, 'heading', { get: () => { return new Date().toUTCString() } })
const livy = require('./livy');

/**
 * Wrapped wdio element for reliable interactions. 
 */
export default class L {

    constructor(selector) {
        this.selector = selector;
    }

    get element() { return browser.element(this.selector); }

    toString() {
        return this.selector;
    }

    print() {
        livy.log(this.toString());
    }

    click() {
        livy.log('click: ' + this.selector);
        browser.waitForExist(this.selector);
        browser.click(this.selector)
    }

    click_waitForChange(indicatorSelector) {

        const initialIndicatorElementHtml = browser.element(indicatorSelector).getHTML();

        livy.log('click: ' + this.selector + ', then wait for change in: ' + indicatorSelector);
        browser.waitForExist(this.selector);
        browser.click(this.selector)

        const init = new Date().getTime();

        const timeout = 2000;

        while (browser.element(indicatorSelector).getHTML() === initialIndicatorElementHtml) {
            browser.pause(200);

            if (new Date().getTime() - init > timeout) {
                throw new Error("timeout waiting for " + indicatorSelector + ' to change after clicking ' + this.selector);
            }
        }
    }

    click_waitForExisting(indicatorSelector) {
        if (browser.isExisting(indicatorSelector)) {
            throw new Error("Element already exists: " + indicatorSelector);
        }

        livy.log('Click: ' + this.selector + ', then wait for element to exist: ' + indicatorSelector);
        browser.waitForExist(this.selector);
        browser.click(this.selector)

        const init = new Date().getTime();

        const timeout = 2000;

        while (!browser.isExisting(indicatorSelector)) {
            browser.pause(200);

            if (new Date().getTime() - init > timeout) {
                throw new Error("timeout waiting for " + indicatorSelector + ' to exist after clicking ' + this.selector);
            }
        }
    }

    click_waitForNotExisting(indicatorSelector) {
        if (!browser.isExisting(indicatorSelector)) {
            throw new Error("Element [" + indicatorSelector + '] should exist prior to clicking [' + this.selector + ']');
        }

        livy.log('Click: ' + this.selector + ', then wait for element to disappear: ' + indicatorSelector);
        browser.waitForExist(this.selector);
        browser.click(this.selector)

        const init = new Date().getTime();

        const timeout = 2000;

        while (browser.isExisting(indicatorSelector)) {
            browser.pause(200);

            if (new Date().getTime() - init > timeout) {
                throw new Error("Timeout waiting for " + indicatorSelector + ' to no longer exist after clicking ' + this.selector);
            }
        }
    }


    click_waitForNotExisting() {
        this.click_waitForNotExisting(this.selector)
    }

    setValue(value) {
        livy.log('Set value of [' + this.selector + '] to [' + value + ']');
        browser.waitForExist(this.selector);
        browser.setValue(this.selector, value);
    }

    waitForNotExist() {
        livy.log('waitForNotExist: ' + this.selector)
        browser.waitUntil(() => (!browser.isExisting(this.selector)));
    }

    waitForExist() {
        livy.log('waitForExist: ' + this.selector)
        browser.waitUntil(() => (browser.isExisting(this.selector)));
    }

    isExisting() {
        return browser.isExisting(this.selector);
    }
}
