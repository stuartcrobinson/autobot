import L from '../../autobotElement';

class ToasterComp extends L {


    constructor(message) {
        const container = new L('//div[contains(@class, "loaded-message")]');

        if (message) {
            return super(container.get('//*[contains(text(),"' + message + '")]/..').selector);
        }
        else {
            super(container.selector);
        }
    }

    get xCloseIcon() { return this.get('//i[@title="Dismiss alert"]'); }
    get messageSpan() { return this.get('//span[contains(@class="message__text"]'); }

    close() {
        this.xCloseIcon.click();
        browser.waitUntil(() => (!browser.isExisting(this.xCloseIcon.selector)));
    }

    getMessage() {
        return this.messageSpan.element.getText();
    }

    /**
     * Not supported for messages that contain apostrophes!
     * @param {*} message 
     */
    withMessage(message) {
        if (message.includes('"') || message.includes("'")) {
            throw new Error("Apostrophes not yet supported.  This sounds like a good job for you.");
        }
        return new ToasterComp(message);
    }
}

export default new ToasterComp();