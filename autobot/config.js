const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function () {
    try {
        return yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
    } catch (e) {
        console.log(e);
    }
}