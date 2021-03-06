const yaml = require('js-yaml');
const fs = require('fs');
var livy = require('./tools/livy')
var livywtf = require('./tools/livy')
var tools = require('./tools/tools')


const currTime = () => {
    return new Date().getTime();
}



module.exports = {

    getConfigs: function () {
        try {
            return yaml.safeLoad(fs.readFileSync('./autobot/config.yml', 'utf8'));
        } catch (e) {
            console.log(e);
        }
    },

    //maybe this stuff should be broken out into an AutobotBrowser object:

    wtf: function () {
        console.log('wtffff');
        // livywtf.wtf();
        livy.wtf();
    },
    goToUrl: function (url) {
        var screenshotId = livy.logAction("load " + url);
        livy.setMouseoverEventScreenshotFunction(screenshotId);
        browser.url(url);
    },
    goBack: function () {
        var screenshotId = livy.logAction("Go back ");
        livy.setMouseoverEventScreenshotFunction(screenshotId);
        browser.back();
    },

    waitForStableDom: function (timeoutInMillis = 10000) {

        const initTime = currTime();

        let currDom;
        let prevDom = this.getFullDom();
        livy.logAction(`waiting ${timeoutInMillis} ms for stable DOM...`);

        while (currTime() - initTime < timeoutInMillis) {

            browser.pause(200);

            currDom = this.getFullDom();

            if (currDom === prevDom) {
                return;
            }
            if (currTime() - initTime > timeoutInMillis) {
                throw new Error('Timed out waiting for stable DOM.')
            }
            prevDom = currDom;
        }
    },

    getFullDom: function () {
        return browser.execute(
            function () {

                Element.prototype.serializeWithStyles = (function () {

                    // Mapping between tag names and css default values lookup tables. This allows to exclude default values in the result.
                    var defaultStylesByTagName = {};

                    // Styles inherited from style sheets will not be rendered for elements with these tag names
                    var noStyleTags = { "BASE": true, "HEAD": true, "HTML": true, "META": true, "NOFRAME": true, "NOSCRIPT": true, "PARAM": true, "SCRIPT": true, "STYLE": true, "TITLE": true };

                    // This list determines which css default values lookup tables are precomputed at load time
                    // Lookup tables for other tag names will be automatically built at runtime if needed
                    var tagNames = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"];

                    // Precompute the lookup tables.
                    for (var i = 0; i < tagNames.length; i++) {
                        if (!noStyleTags[tagNames[i]]) {
                            defaultStylesByTagName[tagNames[i]] = computeDefaultStyleByTagName(tagNames[i]);
                        }
                    }

                    function computeDefaultStyleByTagName(tagName) {
                        var defaultStyle = {};
                        var element = document.body.appendChild(document.createElement(tagName));
                        var computedStyle = getComputedStyle(element);
                        for (var i = 0; i < computedStyle.length; i++) {
                            defaultStyle[computedStyle[i]] = computedStyle[computedStyle[i]];
                        }
                        document.body.removeChild(element);
                        return defaultStyle;
                    }

                    function getDefaultStyleByTagName(tagName) {
                        tagName = tagName.toUpperCase();
                        if (!defaultStylesByTagName[tagName]) {
                            defaultStylesByTagName[tagName] = computeDefaultStyleByTagName(tagName);
                        }
                        return defaultStylesByTagName[tagName];
                    }

                    return function serializeWithStyles() {
                        if (this.nodeType !== Node.ELEMENT_NODE) { throw new TypeError(); }
                        var cssTexts = [];
                        var elements = this.querySelectorAll("*");
                        for (var i = 0; i < elements.length; i++) {
                            var e = elements[i];
                            if (!noStyleTags[e.tagName]) {
                                var computedStyle = getComputedStyle(e);
                                var defaultStyle = getDefaultStyleByTagName(e.tagName);
                                cssTexts[i] = e.style.cssText;
                                for (var ii = 0; ii < computedStyle.length; ii++) {
                                    var cssPropName = computedStyle[ii];
                                    if (computedStyle[cssPropName] !== defaultStyle[cssPropName]) {
                                        e.style[cssPropName] = computedStyle[cssPropName];
                                    }
                                }
                            }
                        }
                        var result = this.outerHTML;
                        for (var i = 0; i < elements.length; i++) {
                            elements[i].style.cssText = cssTexts[i];
                        }
                        return result;
                    }
                })();

                var domStr = document.body.serializeWithStyles();

                //now remove all whitespace and remove all 'style=""'

                //whitespace: https://stackoverflow.com/a/6623263/3124680

                domStr = domStr.replace(/[^\S ]/g, "");
                domStr = domStr.replace(/  +/g, " ");
                domStr = domStr.replace(/\\n/g, "");
                // domStr = domStr.replace(/\s/g, "");
                domStr = domStr.replace(/style=""/g, "")

                return domStr;

            }).value;
    }
}


// static waitForStableDom(timeoutInMillis = 10000) {

//     const initTime = currTime();

//     let currDom;
//     let prevDom = tools.getFullDom();
//     livy.log(`waiting ${timeoutInMillis} ms for stable DOM...`);

//     while (currTime() - initTime < timeoutInMillis) {

//         browser.pause(200);

//         currDom = tools.getFullDom();

//         if (currDom === prevDom) {
//             return;
//         }
//         if (currTime() - initTime > timeoutInMillis) {
//             throw new Error('Timed out waiting for stable DOM.')
//         }
//         prevDom = currDom;
//     }
// }