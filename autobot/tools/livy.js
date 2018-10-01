var dateFormat = require('dateformat');
var fs = require('fs')
var os = require('os')
// var colors = require('colors');
var colors = require('colors/safe');
var fs_extra = require('fs-extra')

var Entities = require('html-entities').AllHtmlEntities;

var entities = new Entities();
var filenamify = require('filenamify');

function passthrough(message) {
  return message;
}

/**
 * Livy is a logger that stores logs from each test in appropriate files.
 */
module.exports = {


  getSpecFileName: function () {

    const specFilePath = global.specFilePath;

    // /Users/stuartrobinson/repos/autobot/autobot/test/dashboard.js

    const split = specFilePath.split('/')

    return split[split.length - 1].replace(".js", "")
  },
  getSpecFileDirName: function () {

    const specFilePath = global.specFilePath;

    // /Users/stuartrobinson/repos/autobot/autobot/test/dashboard.js

    const split = specFilePath.split('/')

    const fileName = split[split.length - 1]
    return split[split.length - 2]
  },

  // getSpecFullName: function () {

  //   return parentDirName + "__" + fileName.replace(".js", "")
  // },

  getDateDir: function () {
    return 'livy/' + global.specDate;
  },
  getTimeDir: function () {
    return this.getDateDir() + '/' + global.specTime
  },

  /** one log file per test js file */
  getReportDir: function () {
    return this.getTimeDir() + '/' + this.getSpecFileDirName() + '__' + this.getSpecFileName();
  },


  getEventScreenshotsDirName: function () {
    return 'eventScreenshots';
  },

  getEventScreenshotsDir: function () {
    return this.getReportDir() + '/eventScreenshots';
  },
  // getErrorScreenshotsDir: function () {
  //   return this.getReportDir() + '/errorScreenshots';
  // },

  // livy.getErrorScreenshotFile(); //testCaseSpacelessName

  getEventScreenshotFileRelPath: function (id) {
    return this.getEventScreenshotsDirName() + '/' + id + '.png';
  },

  getEventScreenshotFileAbsPath: function (id) {
    return this.getEventScreenshotsDir() + '/' + id + '.png';
  },

  getErrorScreenshotFileAbsPath: function () {
    return this.getReportDir() + '/' + global.testCaseFullTitle.replace(/ /g, '_') + '.png';
  },

  getErrorScreenshotFileRelPath: function () {
    return global.testCaseFullTitle.replace(/ /g, '_') + '.png';
  },



  /** do this per spec.  so beforeSession */
  initialize: function () {
    fs_extra.mkdirsSync(this.getReportDir());
    fs_extra.mkdirsSync(this.getEventScreenshotsDir());

    //        let html = `<!doctype html><style>body{background-color:#f5f5f5}</style><img src=${imageClickablePath} width=900>`
    var html = '<!doctype html><style>body{background-color:#f5f5f5}</style>' + os.EOL;


    /*
    style="position:fixed;top:0;right:0;width:600;border:1px solid blue"
    */

    html += '<img src="default_image.jpg" id="image" style="position:fixed;top:0;right:0;width:700px;border:1px solid blue"/>'



    fs.appendFileSync(this.getFile(), html + os.EOL);

    // fs_extra.mkdirsSync(this.getErrorScreenshotsDir());

    // if (!fs.existsSync(dir1)) {
    //   fs.mkdirSync(dir1);
    // }
    // if (!fs.existsSync(dir2)) {
    //   fs.mkdirSync(dir2);
    // }
  },

  getFile: function () {

    // const file = 'log/' + this.startDate + '/' + this.startTime + ' ' + this.testParentName + ' - ' + this.testname + '.log'
    // const file = dir2 + '/' + global.testCaseTime + ' ' + global.testParentTitle + ', ' + global.testCaseTitle + '.log'
    return this.getReportDir() + "/report.html";
  },


  getScreenshotId: function (a, b, c) {

    return filenamify(a + '_' + b + '_' + c).replace(/ /g, '_');

  },

  logAction: function (message, style) {

    if (!style) {
      style = passthrough;
    }

    var dateFormat = require('dateformat');

    const testDateTime = new Date();

    const currTime = dateFormat(testDateTime, "hh:MM:sstt");
    const currDate = dateFormat(testDateTime, "yyyymmdd");


    if (!message) {
      message = ''
    }


    var screenshotId = this.getScreenshotId(currDate, currTime, message);



    browser.saveScreenshot(this.getEventScreenshotFileAbsPath(screenshotId));

    //now .... append log to the correct file.  need start timestamp of test.  

    // fs.appendFileSync(file, currDate + ' ' + currTime + "> " + message + os.EOL);

    /*
    
    <img src="default_image.jpg" id="image" width="100" height="100" alt="" />
    
    
    <a href="page.html" onmouseover="document.images['image'].src='mouseover.jpg';" onmouseout="document.images['image'].src='default_image.jpg';"/>Text</a>
    
    <span onmouseover="document.images[\'image\'].src='mouseover.jpg';" onmouseout="document.images['image'].src='';"/>Text</span>
    
    */


    var html = '<span onmouseover="document.images[\'image\'].src=\'' + this.getEventScreenshotFileRelPath(screenshotId) + '\';" onmouseout="document.images[\'image\'].src=\'\';"/>'
      + entities.encode(currDate + ' ' + currTime + "> " + message)
      + '</span><br/>'

    //TODO start here!!!!!!!!!! might work maybe not - prob not



    // fs.appendFileSync(this.getFile(), entities.encode(currDate + ' ' + currTime + "> " + message) + "<br/>" + os.EOL);
    fs.appendFileSync(this.getFile(), html + os.EOL);

    // global.livyLog = global.livyLog + currDate + ' ' + currTime + "> " + message + "<br/>" + os.EOL;


    if (global.livyDoDisplay) {
      if (global.testCaseTitle) {
        console.log(currTime + ' ' + colors.gray(global.testGrandparentsTitle) + ' ' + global.testParentTitle + ' ' + colors.black.bold(global.testCaseTitle + "> ") + style(message))
      }
      else {
        //message must be logged from outside a test (before or after?) so just preface message with spec full name
        console.log(currTime + ' ' + colors.gray(this.getSpecFileDirName()) + '/' + colors.black.bold(this.getSpecFileName() + "> ") + style(message))

      }
    }
  },

  logErrorImage() {
    // <img src=${imageClickablePath} width=900></img>
    fs.appendFileSync(this.getFile(), `<img src=${this.getErrorScreenshotFileRelPath()} width=900></img><br/>` + os.EOL);

  },

  logWithoutPrefix: function (message, style) {

    if (!style) {
      style = passthrough;
    }

    // fs.appendFileSync(file, message + os.EOL);
    fs.appendFileSync(this.getFile(), entities.encode(message) + "<br/>" + os.EOL);

    if (global.livyDoDisplay) {
      console.log(style(message))
    }
  },

  //run this before "it"
  logTestStart: function () {

    this.logWithoutPrefix('---------------------------------------------------------------------------------------');
    this.logWithoutPrefix('Starting test: ' + global.testGrandparentsTitle);
    this.logWithoutPrefix('               ' + global.testParentTitle, colors.blue);
    this.logWithoutPrefix('               ' + global.testCaseTitle, colors.bold.blue);
    this.logWithoutPrefix('');
  },


  logPassed: function () {
    this.logAction('PASS', colors.green.bold);
  },
  logFailed: function () {
    this.logAction('FAIL', colors.red.bold);
  },


  // function1: function () {
  //   console.log(this.testTitle + " 1, " + this.startTime)
  // },
  // function2: function () {
  //   console.log(this.testTitle + " 2, " + this.startTime)
  // },
  // function3: function () {
  //   console.log(this.testTitle + " 3, " + this.startTime)
  // }
}
