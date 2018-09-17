import L from '../aiElement';

class AlertComp {

    get xCloseIcon() { return new L('i[title="Dismiss alert"]'); }

    close() {
        this.xCloseIcon.click();
        browser.waitUntil(() => (!browser.isExisting(this.xCloseIcon.selector)));        
    }
}

export default new AlertComp();