import AiElement from '../../test/specs/aiElement';

class AlertComp {

    get xCloseIcon() { return new AiElement('i[title="Dismiss alert"]'); }

    close() {
        this.xCloseIcon.click();
        browser.waitUntil(() => (!browser.isExisting(this.xCloseIcon.selector)));        
    }
}

export default new AlertComp();