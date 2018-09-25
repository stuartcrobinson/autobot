var assert = require('assert');

var asdf = 9; 

module.exports = {

afunction: function() {
        console.log("in afunction");
        console.log("in afunction " + this.test);
        console.log(11 + " myglobalmaybe in afunction" + myglobalmaybe);

    },

};