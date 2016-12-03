import {DEFAULT_SEED, ALPHANUM} from './constants';
import {indexers} from './data';

export function generate(date, seed = DEFAULT_SEED) {
    let idx = indexers(date, seed);

    let password_of_the_day = [];

    let len = idx.length;

    for (let i = 0; i < len; i++) {
        password_of_the_day[i] = ALPHANUM[idx[i]];
    }

    return password_of_the_day.join('');
}

export function arrisPwGen(startdate, enddate, seed = DEFAULT_SEED) {
    let one_day_in_milliseconds = 24 * 60 * 60 * 1000;
    let days = Math.ceil((enddate.getTime() - startdate.getTime() + 1) / one_day_in_milliseconds);

    // Now let's generate one password for each day
    let password_list = {};
    for (let i = 0; i < days; i++) {
        // For each iteration advance the date one day
        let date = startdate + i;

        password_list[date.getTime()] = generate(date, seed);
    }

    return password_list;
}

// Month is zero-based
let yesterday = new Date(2016, 11, 1);
let today = new Date(2016, 11, 2);
let tomorrow = new Date(2016, 11, 3);
let next_week = new Date(2016, 11, 10);
console.log(generate(yesterday, yesterday));
console.log(generate(today, today));
console.log(generate(tomorrow, tomorrow));
console.log(generate(next_week, next_week));
