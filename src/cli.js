#!/usr/bin/env node
// TODO: Allow setting the default seed for future use. Use this: https://www.npmjs.com/package/preferences
let chalk = require('chalk');
let moment = require('moment');
var columnify = require('columnify');
let c = require('./constants');
let arrispwgen = require('./arrispwgen');

let options = {
    string: ['seed', 's'],
    alias: {s: 'seed', h: 'help'},
    default: {seed: c.DEFAULT_SEED}
};

let argv = require('minimist')(process.argv.slice(2), options);

let dates = argv['_'];
let seed = argv['seed'];

function print_usage() {
    console.log(chalk.yellow('\nUsage: ' + process.argv[0] + 'start_date [end_date] [--seed|-s custom_seed]\n'));
    console.log('If you only want the password for a specific date, specify only \'start_date\'.');
    console.log('If \'end_date\' is also passed, a password for each day between \'start_date\' and \'end_date\' will be generated.');
    console.log('The --seed or -s parameter allows you to use a custom seed for the password generator.');
    console.log('The dates should be specified in ISO 8601 format, i.e. "YYYY-MM-DD". Example for Christmas day 2016: "2016-12-25".')
}

if (argv.hasOwnProperty('help') || dates.length == 0) {
    print_usage();
    process.exit();
}

if (dates.length > 2) {
    console.log(chalk.red('Can only process one or two dates at once.'));
    print_usage();
    process.exit(1);
}

let input_date_format = 'YYYY-MM-DD';
let long_date_format = 'dddd, MMMM Do YYYY';

if (dates.length == 1) {
    let date = moment(dates[0], input_date_format);
    let long_date = date.format(long_date_format);
    let potd = arrispwgen.generate(date.toDate(), seed);
    console.log(`\nPassword for ${long_date}: ${potd}\n`);
} else {
    let start_date = moment(dates[0], input_date_format);
    let end_date = moment(dates[1], input_date_format);
    let potd = arrispwgen.generate_multi(start_date.toDate(), end_date.toDate(), seed);

    let data = [];

    for (let p in potd) {
        data.push({
            date: moment(parseInt(p)).format(long_date_format),
            password: potd[p]
        });
    }

    console.log(columnify(data));
}