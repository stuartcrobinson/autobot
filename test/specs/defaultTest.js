var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        browser.click('=Contribute')
        var title = browser.getTitle();
	console.log('logging title: ' + title)
        assert.equal(title, 'WebdriverIO - Contributing');
    });
});
