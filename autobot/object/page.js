const autobot = require('../autobot')

export default class Page {
	constructor() {
		this.title = 'My Page';
	}

	//moved to autobot.js

	// open(path) {
	// 	browser.url(path);
	// }

	// isLoaded(path) {
	// 	browser.url(path);
	// }

	//TODO - make default timeout equal to a mocha setting or something
	// static waitForStableDom(timeoutInMillis = 10000) {

	// 	const initTime = currTime();

	// 	let currDom;
	// 	let prevDom = tools.getFullDom();
	// 	livy.log(`waiting ${timeoutInMillis} ms for stable DOM...`);

	// 	while (currTime() - initTime < timeoutInMillis) {

	// 		browser.pause(200);

	// 		currDom = tools.getFullDom();

	// 		if (currDom === prevDom) {
	// 			return;
	// 		}
	// 		if (currTime() - initTime > timeoutInMillis) {
	// 			throw new Error('Timed out waiting for stable DOM.')
	// 		}
	// 		prevDom = currDom;
	// 	}
	// }

	//TODO - make default timeout equal to a mocha setting or something
	waitForStableDom(timeoutInMillis = 10000) {
		autobot.waitForStableDom(timeoutInMillis);
	}



	// //TODO - make default timeout equal to a mocha setting or something
	// waitForStableDom__Trash(timeoutInMillis = 10000) {



	// 	console.log(document.body.serializeWithStyles());

	// 	const initTime = currTime();


	// 	let prevDom = document.documentElement.innerHTML

	// 	while (currTime() - initTime < timeoutInMillis) {

	// 	}

	// 	let elapsedTime =






	// 		prevTime = curTime;




	// 	curTime = (new Date()).getTime();
	// 	deltaTime = curTime - prevTime;
	// 	//compare these strings every 100 ms
	// 	//document.documentElement.innerHTML

	// 	/*



	// 	try this page in wdio repl:
	// 	https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
	// 	- no this page sucks cos in an iframe ugh


	// 	code to get all dom:
	// 	https://stackoverflow.com/questions/6209161/extract-the-current-dom-and-print-it-as-a-string-with-styles-intact


	// 	note:
	// 	this doesn't work - doens't pick up changes in svg animation:
	// 	browser.execute(function() { return document.documentElement.innerHTML }).value

	// 	note: 

	// 	okay ......... nthing is working.  pages seem to be constantly changing??????

	// 	next - try shorten line lengths - to see where it's changign - wtf, makes no sense


	// 	...maybe it does work.... if u take string and remove all:
	// 	- whitespace
	// 	- 'style=""'

	// 	*/

	// 	browser.execute(function () {
	// 		Element.prototype.serializeWithStyles = function () { for (var E = {}, T = { BASE: !0, HEAD: !0, HTML: !0, META: !0, NOFRAME: !0, NOSCRIPT: !0, PARAM: !0, SCRIPT: !0, STYLE: !0, TITLE: !0 }, e = ["A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI", "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CENTER", "CITE", "CODE", "COL", "COLGROUP", "COMMAND", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FONT", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR", "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND", "LI", "LINK", "MAP", "MARK", "MATH", "MENU", "META", "METER", "NAV", "NOBR", "NOSCRIPT", "OBJECT", "OL", "OPTION", "OPTGROUP", "OUTPUT", "P", "PARAM", "PRE", "PROGRESS", "Q", "RP", "RT", "RUBY", "S", "SAMP", "SCRIPT", "SECTION", "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP", "SVG", "TABLE", "TBODY", "TD", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME", "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"], A = 0; A < e.length; A++)T[e[A]] || (E[e[A]] = t(e[A])); function t(E) { for (var T = {}, e = document.body.appendChild(document.createElement(E)), A = getComputedStyle(e), t = 0; t < A.length; t++)T[A[t]] = A[A[t]]; return document.body.removeChild(e), T } return function () { if (this.nodeType !== Node.ELEMENT_NODE) throw new TypeError; for (var e, A = [], R = this.querySelectorAll("*"), O = 0; O < R.length; O++) { var S = R[O]; if (!T[S.tagName]) { var r = getComputedStyle(S), D = (e = (e = S.tagName).toUpperCase(), E[e] || (E[e] = t(e)), E[e]); A[O] = S.style.cssText; for (var I = 0; I < r.length; I++) { var L = r[I]; r[L] !== D[L] && (S.style[L] = r[L]) } } } var N = this.outerHTML; for (O = 0; O < R.length; O++)R[O].style.cssText = A[O]; return N } }();

	// 		return document.body.serializeWithStyles();
	// 	}).value



	// 	browser.execute(function () { return document.body.serializeWithStyles(); }).value

	// }
}
