var livywtf = require('./tools/livy')

const currTime = () => {
    return new Date().getTime();
}



module.exports = {

    wtf: function () {
        console.log('autobotwtf wtf');

        livywtf.wtf();
    }
}