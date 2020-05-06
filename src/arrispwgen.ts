import {_ALPHANUM, _DEFAULT_SEED} from './constants';
import {indexers} from './data';


export function generate(date: Date, seed: string = _DEFAULT_SEED) {
    const idx = indexers(date, seed);

    const passwordOfTheDay = [];

    const len = idx.length;

    for (let i = 0; i < len; i++) {
        passwordOfTheDay[i] = _ALPHANUM[idx[i]];
    }

    return passwordOfTheDay.join('');
}

export class InvalidDateRangeError extends Error {
    constructor() {
        super('The start date must precede the end date.');
    }
}

export function generate_multi(startDate: Date, endDate: Date, seed: string = _DEFAULT_SEED) {
    if (startDate > endDate) {
        throw new InvalidDateRangeError();
    }

    const days = 1 + Math.ceil((endDate.getTime() - startDate.getTime()) / (1000*60*60*24));

    const passwordList = [];
    for (let i = 0; i < days; i++) {
        const date = new Date(new Date(startDate).setDate(startDate.getDate() + i));
        passwordList.push({
            'date': date,
            'password': generate(date, seed)
        });
    }

    return passwordList;
}

export const DEFAULT_SEED = _DEFAULT_SEED;
