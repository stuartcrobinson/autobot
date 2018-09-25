// import Settings from '../../../autobotSettings.js';

// const config = require('../../../autobotConfig.js');
const autobot = require('../../../autobot/autobot.js');


// var expect = require('chai').expect;

// describe('login', () => {

//     it('should succeed with good creds', () => {

        console.log("hello?");
        // console.log(Settings.json);
        console.log(autobot.getConfigs().production_url);

        autobot.deployAgent();


        // LoginPage.logIn(environment = Environment.staging, role = Role.noRole)

        // expect(LoginPage.logInButton.isExisting(), 'login button shouldnt exist').to.be.false;
//     });

// });