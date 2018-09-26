import L from '../aiElement';

class HeaderComp extends L {

    constructor() {
        const container = new L('//header');
        super(constructor.selector)
    }

    get bigWIcon() { return this.get('//a[@class="header__logo flex" and @title="Go to dashboard"]') }

    get sidebarTriggerButton() { return this.get('//button[@class="ws-sidebar-trigger-btn margin-top"]') }

}

export default new HeaderComp();