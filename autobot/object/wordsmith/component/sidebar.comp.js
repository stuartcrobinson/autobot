import L from '../../autobotElement';



class SettingsDropdownComp extends L {

    constructor() {
        const container = new L('//div[contains(@class, "ws-sidebar__account-menu--open")]');

        super(container.selector);
    }

    get accountLink() { return this.get('//span[text()="Account"]'); }
    get billingLink() { return this.get('//span[text()="Billing and Usage"]'); }
    get teamLink() { return this.get('//span[text()="Team"]'); }
    get legalLink() { return this.get('//span[text()="Legal"]'); }
    get customerAdminLink() { return this.get('//span[text()="Customer Admin"]'); }
    get SignOutLink() { return this.get('//span[text()="Sign Out"]'); }
}


class SideBarComp  extends L {

    constructor() {
        const container = new L('//div[@class="ws-sidebar"]');

        super(container.selector);
        //this is where we make sure the sidebar is open. if not, click the header hamburger aka sidebar trigger button
    }

    get dashboardLink() { return this.get('//span[text()="Dashboard"]'); }
    get galleryLink() { return this.get('//span[text()="Gallery"]'); }
    get integrationsLink() { return this.get('//span[text()="Integrations"]'); }
    get apiAccessLink() { return this.get('//span[text()="API Access"]'); }

    get helpLink() { return this.get('//div[text()="Live Chat"]'); }
    get liveChatLink() { return this.get('//div[text()="Live Chat"]'); }
    get settingsLink() { return this.get('//div[text()="Settings"]'); }

    get settingsMenu() { return new SettingsDropdownComp(); }
}

export default new SideBarComp();