import moment from 'moment';
import {_DEFAULT_SEED, _ALPHANUM} from './constants.js';
import {indexers} from './data.js';


export function generate(date, seed = _DEFAULT_SEED) {
    const idx = indexers(date, seed);

    let password_of_the_day = [];

    const len = idx.length;

    for (let i = 0; i < len; i++) {
        password_of_the_day[i] = _ALPHANUM[idx[i]];
    }

    return password_of_the_day.join('');
}

export function generate_multi(startdate, enddate, seed = _DEFAULT_SEED) {
    if (startdate > enddate) {
        throw 'The start date must precede the end date.';
    }

    const days = 1 + Math.ceil(moment(enddate).diff(startdate, 'days', true));

    // Now let's generate one password for each day
    let password_list = {};
    let date = moment(startdate);
    for (let i = 0; i < days; i++) {
        password_list[date.valueOf()] = generate(date.toDate(), seed);
        date.add(1, 'day');
    }

    return password_list;
}

export const DEFAULT_SEED = _DEFAULT_SEED;
