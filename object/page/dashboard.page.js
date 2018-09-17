import Page from './page';
import L from '../aiElement';
import Table from '../table';

// var Page = require('./page');
// var AiElement = require('./aiElement');

class DashboardPage extends Page {

    get newProjectButton() { return new L('//button[text()="New Project"]'); }
    get newProjectDropdown() { return new L('//button[text()="New Project"]/following-sibling::div[@class="dropdown"]'); }
    get createCsvDropdownOption() { return new L('//a[text()="Create CSV"]'); }
    get uploadCsvDropdownOption() { return new L('//a[text()="Upload CSV"]'); }
    get projectsTabLink() { return new L('//a[text()="Projects"]'); }
    get downloadsTabLink() { return new L('//a[text()="Downloads"]'); }


    // get projectColumnHeader()  { return new AiElement('//div[text()="Project"]'); }
    // get lastEditedColumnHeader()  { return new AiElement('//div[text()="Last Edited"]'); }
    // get createdColumnHeader()  { return new AiElement('//div[text()="Created"]'); }

    // get createdColumnHeader()  { return new AiElement('//div[text()="Created"]'); }

    get table () { return new Table();}

    get projectsTable() {
        return new Table()
            .setColumns('Project', 'Last Edited', 'Created')
            .setSearchSelector('#search-input')
            .setCheckboxSelector('.checkbox-input');
    }

    get downloadsTable() {
        return new Table()
            .setColumns('Project', 'Template', 'Total Narratives', 'Created', 'Status', 'Actions')
            .setSearchSelector('#search-input');
    }



}

export default new DashboardPage();