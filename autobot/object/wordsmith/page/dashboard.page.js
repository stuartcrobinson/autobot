import Page from '../../page';
import L from '../../autobotElement';
import Table from '../table';


class DownloadsTable extends Table {

    constructor() {
        super();
    }

    //should Table be a comp?  and should all comps have a waitToLoad function?  but how to standardize...
    waitToLoad(){

        new L('//div[text()="Total Narratives"]').waitForExist();

        //not sure if this works or is accurate.  should replace with waitForStableDom() <-- need to write
        new L('.spinner').waitForNotExist();
    }
}

class DashboardPage extends Page {

    get newProjectButton() { return new L('//button[text()="New Project"]'); }
    get newProjectDropdown() { return new L('//button[text()="New Project"]/following-sibling::div[@class="dropdown"]'); }
    get createCsvDropdownOption() { return new L('//a[text()="Create CSV"]'); }
    get uploadCsvDropdownOption() { return new L('//a[text()="Upload CSV"]'); }
    get projectsTabLink() { return new L('//a[text()="Projects"]'); }
    get downloadsTabLink() { return new L('//a[text()="Downloads"]'); }

    get table () { return new Table();}


    get downloadsTable() {

        return new DownloadsTable();

    }



}

export default new DashboardPage();