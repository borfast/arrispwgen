#!/usr/bin/env node
// TODO: Allow setting the default seed for future use. Use this: https://www.npmjs.com/package/preferences
import chalk from 'chalk';
import moment from 'moment';
import columnify from 'columnify';
import minimist from 'minimist';

import {DEFAULT_SEED} from './constants.js';
import * as arrispwgen from './arrispwgen.js';


const options = {
    string: ['seed', 's'],
    alias: {s: 'seed', h: 'help'},
    default: {seed: DEFAULT_SEED}
};

const argv = minimist(process.argv.slice(2), options);

const dates = argv['_'];
const seed = argv['seed'];

function print_usage() {
    console.log(chalk.yellow('\nUsage: ' + process.argv[0] + 'start_date [end_date] [--seed|-s custom_seed]\n'));
    console.log('If you only want the password for a specific date, specify only \'start_date\'.');
    console.log('If \'end_date\' is also passed, a password for each day between \'start_date\' and \'end_date\' will be generated.');
    console.log('The --seed or -s parameter allows you to use a custom seed for the password generator.');
    console.log('The dates should be specified in ISO 8601 format, i.e. "YYYY-MM-DD". Example for Christmas day 2016: "2016-12-25".');
}

if (argv.hasOwnProperty('help')) {
    print_usage();
    process.exit();
}

if (dates.length > 2) {
    console.log(chalk.red('Can only process one or two dates at once.'));
    print_usage();
    process.exit(1);
}

const input_date_format = 'YYYY-MM-DD';
const long_date_format = 'dddd, MMMM Do YYYY';
let data = [];

// If no date is given, default to outputting the password for the current date.
if (dates.length == 0) {
    dates.push(moment().format(input_date_format));
}

if (dates.length == 1) {
    const date = moment(dates[0], input_date_format);
    const long_date = date.format(long_date_format);
    const potd = arrispwgen.generate(date.toDate(), seed);
    data.push({
        date: long_date,
        password: potd
    });
} else {
    const start_date = moment(dates[0], input_date_format);
    const end_date = moment(dates[1], input_date_format);
    try {
        const potd = arrispwgen.generate_multi(start_date.toDate(), end_date.toDate(), seed);

        for (let p in potd) {
            data.push({
                date: moment(parseInt(p)).format(long_date_format),
                password: potd[p]
            });
        }
    } catch (e) {
        // TODO: Be more specific in the exception that we're catching.
        console.log(chalk.red('The given dates are out of order.'));
        print_usage();
    }
}

console.log();
console.log(columnify(data, {
    columnSplitter: ' | '
}));
