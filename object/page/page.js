export default class Page {
	constructor() {
		this.title = 'My Page';
	}

	open(path) {
		browser.url(path);
	}

	isLoaded(path) {
		browser.url(path);
	}
}
