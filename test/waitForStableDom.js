var assert = require('chai').assert;
const autobot = require('../autobot/autobot')

describe('waitForStableDom test', () => {

    it.skip('should fail with short timeout on progress bar demo page', () => {

        let url = 'https://chenxuan0000.github.io/svg-progress-bar/';

        autobot.goToUrl(url);

        let didStabilize = false;

        try {
            // console.log("waiting for stable dom now: begin.........");
            autobot.waitForStableDom(3000);
            // console.log("complete!");
            didStabilize = true;
        }
        catch (err) {
            // console.log("fail!");
            didStabilize = false;
        }

        assert.isFalse(didStabilize);
    });

    it.skip('should pass with long timeout on progress bar demo page', () => {

        let url = 'https://chenxuan0000.github.io/svg-progress-bar/';
        autobot.goToUrl(url);

        // console.log("waiting for stable dom now: begin.........");
        autobot.waitForStableDom(15000);
        // console.log("complete!");
    });

    it('should pass immediately for static page', () => {

        let url = 'https://www.google.com';
        autobot.goToUrl(url);
        assert.isFalse(true);


        // console.log("waiting for stable dom now: begin.........");
        autobot.waitForStableDom(500);
        // console.log("complete!");
    });

    it.skip('should pass for w3 main body', () => {

        let url = 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader';
        autobot.goToUrl(url);

        // console.log("waiting for stable dom now: begin.........");
        autobot.waitForStableDom(500);
        // console.log("complete!");
    });

    it.skip('should fail in w3 school spinner demo iframe', () => {

        let url = 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader';
        autobot.goToUrl(url);

        browser.frame('iframeResult');

        let didStabilize = false;

        try {
            // console.log("waiting for stable dom now: begin.........");
            autobot.waitForStableDom(3000);
            // console.log("complete!");
            didStabilize = true;
        }
        catch (err) {
            // console.log("fail!");
            didStabilize = false;
        }

        assert.isFalse(didStabilize);
    });
});