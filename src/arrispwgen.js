import {_ALPHANUM, _DEFAULT_SEED} from './constants.js';
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

export class InvalidDateRangeError extends Error {
    constructor(msg) {
        super(msg);
        this.message = 'The start date must precede the end date.';
    }
}

export function generate_multi(startdate, enddate, seed = _DEFAULT_SEED) {
    if (startdate > enddate) {
        throw new InvalidDateRangeError();
    }

    const days = 1 + Math.ceil((enddate - startdate) / (1000*60*60*24));

    let password_list = [];
    let date = startdate;
    for (let i = 0; i < days; i++) {
        const this_date = new Date(new Date(date).setDate(date.getDate() + i));
        password_list.push({
            'date': this_date,
            'password': generate(this_date, seed)
        });
    }

    return password_list;
}

export const DEFAULT_SEED = _DEFAULT_SEED;
