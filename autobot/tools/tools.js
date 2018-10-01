//deprecated.  now in autobot.js
// module.exports = {


//     /**
//      * https://stackoverflow.com/a/6310120/3124680
//      */
//     getSerializedWithStylesDomMini: function () {
//         return browser.execute(function () { return Element.prototype.serializeWithStyles = function () { for (var E = {}, T = { BASE: !0, HEAD: !0, HTML: !0, META: !0, NOFRAME: !0, NOSCRIPT: !0, PARAM: !0, SCRIPT: !0, STYLE: !0, TITLE: !0 }, e = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"], t = 0; t < e.length; t++)T[e[t]] || (E[e[t]] = A(e[t])); function A(E) { for (var T = {}, e = document.body.appendChild(document.createElement(E)), t = getComputedStyle(e), A = 0; A < t.length; A++)T[t[A]] = t[t[A]]; return document.body.removeChild(e), T } return function () { if (this.nodeType !== Node.ELEMENT_NODE) throw new TypeError; for (var e, t = [], R = this.querySelectorAll("*"), O = 0; O < R.length; O++) { var r = R[O]; if (!T[r.tagName]) { var S = getComputedStyle(r), D = (e = (e = r.tagName).toUpperCase(), E[e] || (E[e] = A(e)), E[e]); t[O] = r.style.cssText; for (var I = 0; I < S.length; I++) { var o = S[I]; S[o] !== D[o] && (r.style[o] = S[o]) } } } var L = this.outerHTML; for (O = 0; O < R.length; O++)R[O].style.cssText = t[O]; return L } }(), document.body.serializeWithStyles() }).value;
//     },

//     minid: function () {
//         return browser.execute(function () { Element.prototype.serializeWithStyles = function () { for (var e = {}, E = { BASE: !0, HEAD: !0, HTML: !0, META: !0, NOFRAME: !0, NOSCRIPT: !0, PARAM: !0, SCRIPT: !0, STYLE: !0, TITLE: !0 }, T = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"], t = 0; t < T.length; t++)E[T[t]] || (e[T[t]] = A(T[t])); function A(e) { for (var E = {}, T = document.body.appendChild(document.createElement(e)), t = getComputedStyle(T), A = 0; A < t.length; A++)E[t[A]] = t[t[A]]; return document.body.removeChild(T), E } return function () { if (this.nodeType !== Node.ELEMENT_NODE) throw new TypeError; for (var T, t = [], r = this.querySelectorAll("*"), R = 0; R < r.length; R++) { var O = r[R]; if (!E[O.tagName]) { var S = getComputedStyle(O), D = (T = (T = O.tagName).toUpperCase(), e[T] || (e[T] = A(T)), e[T]); t[R] = O.style.cssText; for (var I = 0; I < S.length; I++) { var o = S[I]; S[o] !== D[o] && (O.style[o] = S[o]) } } } var L = this.outerHTML; for (R = 0; R < r.length; R++)r[R].style.cssText = t[R]; return L } }(); var e = document.body.serializeWithStyles(); return e = (e = e.replace(/\s/g, "")).replace(/style=""/g, "") }).value;
//     },
//     minid2: function () {
//         return browser.execute(
//             function () { Element.prototype.serializeWithStyles = function () { for (var e = {}, E = { BASE: !0, HEAD: !0, HTML: !0, META: !0, NOFRAME: !0, NOSCRIPT: !0, PARAM: !0, SCRIPT: !0, STYLE: !0, TITLE: !0 }, T = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"], t = 0; t < T.length; t++)E[T[t]] || (e[T[t]] = A(T[t])); function A(e) { for (var E = {}, T = document.body.appendChild(document.createElement(e)), t = getComputedStyle(T), A = 0; A < t.length; A++)E[t[A]] = t[t[A]]; return document.body.removeChild(T), E } return function () { if (this.nodeType !== Node.ELEMENT_NODE) throw new TypeError; for (var T, t = [], r = this.querySelectorAll("*"), R = 0; R < r.length; R++) { var O = r[R]; if (!E[O.tagName]) { var S = getComputedStyle(O), D = (T = (T = O.tagName).toUpperCase(), e[T] || (e[T] = A(T)), e[T]); t[R] = O.style.cssText; for (var I = 0; I < S.length; I++) { var o = S[I]; S[o] !== D[o] && (O.style[o] = S[o]) } } } var L = this.outerHTML; for (R = 0; R < r.length; R++)r[R].style.cssText = t[R]; return L } }(); var e = document.body.serializeWithStyles(); return e = (e = e.replace(/\s/g, "")).replace(/style=""/g, "") }
//         ).value;

//     },



//     /**
//      * https://stackoverflow.com/a/6310120/3124680
//      */
//     getFullDom: function () {
//         return browser.execute(
//             function () {

//                 Element.prototype.serializeWithStyles = (function () {

//                     // Mapping between tag names and css default values lookup tables. This allows to exclude default values in the result.
//                     var defaultStylesByTagName = {};

//                     // Styles inherited from style sheets will not be rendered for elements with these tag names
//                     var noStyleTags = { "BASE": true, "HEAD": true, "HTML": true, "META": true, "NOFRAME": true, "NOSCRIPT": true, "PARAM": true, "SCRIPT": true, "STYLE": true, "TITLE": true };

//                     // This list determines which css default values lookup tables are precomputed at load time
//                     // Lookup tables for other tag names will be automatically built at runtime if needed
//                     var tagNames = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"];

//                     // Precompute the lookup tables.
//                     for (var i = 0; i < tagNames.length; i++) {
//                         if (!noStyleTags[tagNames[i]]) {
//                             defaultStylesByTagName[tagNames[i]] = computeDefaultStyleByTagName(tagNames[i]);
//                         }
//                     }

//                     function computeDefaultStyleByTagName(tagName) {
//                         var defaultStyle = {};
//                         var element = document.body.appendChild(document.createElement(tagName));
//                         var computedStyle = getComputedStyle(element);
//                         for (var i = 0; i < computedStyle.length; i++) {
//                             defaultStyle[computedStyle[i]] = computedStyle[computedStyle[i]];
//                         }
//                         document.body.removeChild(element);
//                         return defaultStyle;
//                     }

//                     function getDefaultStyleByTagName(tagName) {
//                         tagName = tagName.toUpperCase();
//                         if (!defaultStylesByTagName[tagName]) {
//                             defaultStylesByTagName[tagName] = computeDefaultStyleByTagName(tagName);
//                         }
//                         return defaultStylesByTagName[tagName];
//                     }

//                     return function serializeWithStyles() {
//                         if (this.nodeType !== Node.ELEMENT_NODE) { throw new TypeError(); }
//                         var cssTexts = [];
//                         var elements = this.querySelectorAll("*");
//                         for (var i = 0; i < elements.length; i++) {
//                             var e = elements[i];
//                             if (!noStyleTags[e.tagName]) {
//                                 var computedStyle = getComputedStyle(e);
//                                 var defaultStyle = getDefaultStyleByTagName(e.tagName);
//                                 cssTexts[i] = e.style.cssText;
//                                 for (var ii = 0; ii < computedStyle.length; ii++) {
//                                     var cssPropName = computedStyle[ii];
//                                     if (computedStyle[cssPropName] !== defaultStyle[cssPropName]) {
//                                         e.style[cssPropName] = computedStyle[cssPropName];
//                                     }
//                                 }
//                             }
//                         }
//                         var result = this.outerHTML;
//                         for (var i = 0; i < elements.length; i++) {
//                             elements[i].style.cssText = cssTexts[i];
//                         }
//                         return result;
//                     }
//                 })();

//                 var domStr = document.body.serializeWithStyles();

//                 //now remove all whitespace and remove all 'style=""'

//                 //whitespace: https://stackoverflow.com/a/6623263/3124680

//                 domStr = domStr.replace(/\s/g, "");
//                 domStr = domStr.replace(/style=""/g, "")

//                 return domStr;

//             }).value;
//     }
// }
