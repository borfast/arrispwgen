import moment from 'moment';
import {DEFAULT_SEED, ALPHANUM} from './constants.js';
import {indexers} from './data.js';


export function generate(date, seed = DEFAULT_SEED) {
    let idx = indexers(date, seed);

    let password_of_the_day = [];

    let len = idx.length;

    for (let i = 0; i < len; i++) {
        password_of_the_day[i] = ALPHANUM[idx[i]];
    }

    return password_of_the_day.join('');
}

export function generate_multi(startdate, enddate, seed = DEFAULT_SEED) {
    if (startdate > enddate) {
        throw 'The start date must precede the end date.';
    }

    let days = 1 + Math.ceil(moment(enddate).diff(startdate, 'days', true));

    // Now let's generate one password for each day
    let password_list = {};
    let date = moment(startdate);
    for (let i = 0; i < days; i++) {
        password_list[date.valueOf()] = generate(date.toDate(), seed);
        date.add(1, 'day');
    }

    return password_list;
}
