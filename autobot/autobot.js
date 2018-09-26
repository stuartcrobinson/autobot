const yaml = require('js-yaml');
const fs = require('fs');

module.exports = {

    /**
     * Loads the app and logs in with the given credentials.  Must stipulate email address for user in the config.yml file, so we have password, api key, etc.
     * 
     * @param {string} email
     */

    deployAgent: function (email) {

        roles.sort();
        const rolesStr = JSON.stringify(roles);

        const json = this.getConfigs();
        const users = json.accounts;

        // console.log(users);

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (email.toLowerCase() === user['email'].toLowerCase() && user['password'] && user['api key']) {
                return user;
            }
        }

        throw new Error('Email not found in config file with api key and password: ' + email);
    },
    
    getConfigs: function () {
        try {
            return yaml.safeLoad(fs.readFileSync('./autobot/config.yml', 'utf8'));
        } catch (e) {
            console.log(e);
        }
    }
}