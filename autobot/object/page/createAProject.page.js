import Page from './page';
import L from '../aiElement';

class CreateAProjectPage extends Page {

    get createProjectButton() { return new L('//button[text()="Create Project"]'); }
}

export default new CreateAProjectPage();