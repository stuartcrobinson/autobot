import L from '../aiElement';

class ToasterComp {

    get xCloseIcon() { return new L('i[title="Dismiss alert"]'); }

    close() {
        this.xCloseIcon.click();
        browser.waitUntil(() => (!browser.isExisting(this.xCloseIcon.selector)));        
    }
}

export default new ToasterComp();