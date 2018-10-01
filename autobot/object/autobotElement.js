// var log = require('npmlog')
// Object.defineProperty(log, 'heading', { get: () => { return new Date().toUTCString() } })
const livy = require('../tools/livy');

/**
 * Wrapped wdio element for reliable interactions. 
 */
export default class L {


    static byText(text) {
        return '//*[text()="' + text + '"]'
    }

    constructor(selector) {
        this.selector = selector;
    }

    get element() { return browser.element(this.selector); }

    /**
     * Returns a new L whose selector is the child's selector appended to the parent selector.  So make sure both are xpaths or cssSelectors.
     * @param {} childSelector 
     */
    get(childSelector) {
        return new L(this.selector + childSelector)
    }

    toString() {
        return this.selector;
    }

    print() {
        livy.logAction(this.toString());
    }

    logAndWait(message, waiteeSelector) {

        var screenshotId = livy.logAction(message);
        if (waiteeSelector) {
            browser.waitForExist(waiteeSelector);
        }
        livy.setMouseoverEventScreenshotFunction(screenshotId)
    }
    click() {
        // livy.logAction('Click: ' + this.selector);
        // browser.waitForExist(this.selector);

        this.logAndWait('Click: ' + this.selector,
            this.selector);
        browser.click(this.selector)
    }

    hover() {
        // livy.logAction('Hover: ' + this.selector);
        // browser.waitForExist(this.selector);

        this.logAndWait('Hover: ' + this.selector,
            this.selector);
        browser.moveToObject(this.selector)
    }

    click_waitForChange(indicatorSelector) {

        const initialIndicatorElementHtml = browser.element(indicatorSelector).getHTML();

        // livy.logAction('click: ' + this.selector + ', then wait for change in: ' + indicatorSelector);
        // browser.waitForExist(this.selector);


        this.logAndWait('Click: ' + this.selector + ', then wait for change in: ' + indicatorSelector,
            this.selector);

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

        // livy.logAction('Click: ' + this.selector + ', then wait for element to exist: ' + indicatorSelector);
        // browser.waitForExist(this.selector);
        this.logAndWait('Click: ' + this.selector + ', then wait for element to exist: ' + indicatorSelector,
            this.selector);

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

        // livy.logAction('Click: ' + this.selector + ', then wait for element to disappear: ' + indicatorSelector);
        // browser.waitForExist(this.selector);

        this.logAndWait('Click: ' + this.selector + ', then wait for element to disappear: ' + indicatorSelector,
            this.selector);
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


    // click_waitForNotExisting() {
    //     this.click_waitForNotExisting(this.selector)
    // }



    setValue(value) {
        // livy.logAction('Set value of [' + this.selector + '] to [' + value + ']');
        // browser.waitForExist(this.selector);

        this.logAndWait('Set value of [' + this.selector + '] to [' + value + ']',
            this.selector);

        browser.setValue(this.selector, value);

    }

    waitForNotExist() {
        // livy.logAction('waitForNotExist: ' + this.selector)
        this.logAndWait('waitForNotExist: ' + this.selector)
        browser.waitUntil(() => (!browser.isExisting(this.selector)));
    }

    waitForExist() {
        // livy.logAction('waitForExist: ' + this.selector)
        this.logAndWait('waitForExist: ' + this.selector)
        browser.waitUntil(() => (browser.isExisting(this.selector)));
    }

    isExisting() {
        return browser.isExisting(this.selector);
    }
}
