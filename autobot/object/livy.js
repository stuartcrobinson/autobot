var dateFormat = require('dateformat');
var fs = require('fs')
var os = require('os')


/**
 * Livy is a logger that stores logs from each test in appropriate files.
 */
module.exports = {
  // startTime: new Date().toLocaleDateString("en-US", {year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric'}),
  // startDateTime: dateFormat(new Date(), "yyyymmdd hh:MM:ssTT"), //    dddd, mmmm dS, yyyy, h:MM:ss TT
  // startTime: dateFormat(new Date(), "hh:MM:ssTT"), //    dddd, mmmm dS, yyyy, h:MM:ss TT
  // startDate: dateFormat(new Date(), "yyyymmdd"), //    dddd, mmmm dS, yyyy, h:MM:ss TT
  // testParentTitle: "na",
  // testTitle: "na",
  // someData: 55,
  // someData2: 155,
  log: function (message) {

    if (!message){
      message = ''
    }

    // const file = 'log/' + this.startDate + '/' + this.startTime + ' ' + this.testParentName + ' - ' + this.testname + '.log'

    const dir1 = 'autobot/log'

    const dir2 = 'autobot/log/' + global.testParentDate

    const file = dir2 + '/' + global.testTime + ' ' + global.testParentTitle + ', ' + global.testTitle + '.log'


    if (!fs.existsSync(dir1)) {
      fs.mkdirSync(dir1);
    }
    if (!fs.existsSync(dir2)) {
      fs.mkdirSync(dir2);
    }

    //now .... append log to the correct file.  need start timestamp of test.  

    fs.appendFileSync(file, global.testParentDate + '_' + global.testTime + "> " + message + os.EOL);

    if (global.livyDoDisplay) {
      console.log(global.testTime + ' ' + global.testParentTitle + ', ' + global.testTitle + "> " + message)
    }
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
