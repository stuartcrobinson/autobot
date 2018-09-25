const yaml = require('js-yaml');
const fs = require('fs');

// module.exports = function () {
//     try {
//         return yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
//     } catch (e) {
//         console.log(e);
//     }
// }


// Agent.deploy(environment = Environment.staging, roles = [Role.noRole]);
// LoginPage.logIn(global.agent)



module.exports = {

    /**
     * Loads the app and logs in with the given credentials.  
     * 
     * @param {string} email 
     * @param {string} password 
     */

    deployAgent: function (environment, roles, email, password) {

        roles.sort();
        const rolesStr = JSON.stringify(roles);

        const json = this.getConfigs();
        const users = json.accounts;

        console.log(users);


        /*
        
        
        NO.
        

        this is stupid.  we should EITHER accept:

       1.  FROM CONFIG FILE:  environment AND roles (both must have values)

        OR

        2.  HARDCODED: email and pw and environment (and api key??  no.  cos this will just b for testing the tests.  so just fail api tests if tried to run this way)

        
        */


        for (let user in users) {
            console.log(user.email);
        }

        //first, if we have the email and we have a config file, then make sure the other stuff matches too
        if (email) {
            users.forEach(user => {
                if (email.toLowerCase() === user.email.toLowerCase()) {
                    let userRolesStr = ""
                    if (user.roles) {
                        let userRoles = user.roles;
                        userRoles.sort();
                        userRolesStr = JSON.stringify(userRoles);
                        if (rolesStr.toLowerCase() !== userRolesStr.toLowerCase()) {
                            throw new Error('Mismatch between agent roles and config roles for email: ' + email);
                        }
                    }
                    if (environment) {
                        if (environment.toLowerCase() !== user.environment.toLowerCase()) {
                            throw new Error('Mismatch between agent roles and config roles for email: ' + email);
                        }
                    }
                    return user;
                }
            });
            if (password) {

            }
        }
        else {
            //not given input email, so just search for user matching environment and roles
            users.forEach(user => {

                if (environment && !user.roles) {
                    if (environment === user.environment) {
                        return user;
                    }
                }
                if (user.roles) {

                    let userRoles = user.roles;
                    userRoles.sort();
                    const userRolesStr = JSON.stringify(userRoles);


                    if (!environment) {
                        if (rolesStr === userRolesStr) {
                            return user;
                        }
                    }

                    if (environment) {
                        if (rolesStr === userRolesStr && environment === user.environment) {
                            return user;
                        }
                    }
                }
            });
        }
    },
    getConfigs: function () {
        try {
            return yaml.safeLoad(fs.readFileSync('./autobot/config.yml', 'utf8'));
        } catch (e) {
            console.log(e);
        }
    }
}





// users.forEach(user => {
//     console.log(user.email)

//     let userRoles = user.roles;
//     userRoles.sort();
//     const userRolesStr = JSON.stringify(userRoles);

//     if (environment === user.environment && rolesStr === userRolesStr) {
//         if (!email || email === user.email) {
//             return user;
//         }
//     }

//     if (!environment && rolesStr === userRolesStr) { }



// });