var stringArgv = require('string-argv');
var yargsParse = require('yargs-parser');

var args = stringArgv(
    '--testing test valid=true --quotes "test quotes" "nested \'quotes\'" --key="some value" --title="Peter\'s Friends"',
    'node',
    'testing.js'
);
 
//legacy
var args2 = stringArgv.parseArgsStringToArgv(
    '-testing test -valid=true --quotes "test quotes" "nested \'quotes\'" --key="some value" --title="Peter\'s Friends"',
    'node',
    'testing.js'
);
 
console.log(args);


var argv = yargsParse('--foo=99 --bar=33')
console.log(argv)


var arg3 = yargsParse(args)

console.log(arg3)

// const options = require('yargs-parser')(require('string-argv')('one=1 --two 2 --three "the third" --four="number 4"'))

// console.log(options.one)
// console.log(options['two'])

// console.log(options.four)
// console.log(options)


