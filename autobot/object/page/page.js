
const currTime = () => {
	return new Date().getTime();
}


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

	//TODO - make default timeout equal to a mocha setting or something
	waitForStableDom(timeoutInMillis = 10000) {


		const initTime = currTime();


		let prevDom = document.documentElement.innerHTML

		while (currTime() - initTime < timeoutInMillis) {

		}

		let elapsedTime =






			prevTime = curTime;




		curTime = (new Date()).getTime();
		deltaTime = curTime - prevTime;
		//compare these strings every 100 ms
		//document.documentElement.innerHTML

		/*



		try this page in wdio repl:
		https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader


		code to get all dom:
		https://stackoverflow.com/questions/6209161/extract-the-current-dom-and-print-it-as-a-string-with-styles-intact

		*/



	}
}
