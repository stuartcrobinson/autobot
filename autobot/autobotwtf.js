var livywtf = require('./tools/livywtf')

const currTime = () => {
    return new Date().getTime();
}



module.exports = {

    wtf: function () {
        console.log('autobotwtf wtf');

        livywtf.wtf();
    }
}