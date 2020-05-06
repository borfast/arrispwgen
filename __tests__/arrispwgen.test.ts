import {customSeed, customSeedPotds, defaultSeedPotds, testDates} from './helper_data';
import * as a from '../src/arrispwgen';
import {expect, test} from '@jest/globals';


test.each([
    [defaultSeedPotds],
    [customSeedPotds, customSeed]
])('Should 22222 generate the correct password for the given days with the given seed', (potd: string[], seed: string|undefined = undefined) => {
    testDates.forEach( (date, i) => {
        const password = a.generate(new Date(date), seed);
        expect(password).toBe(potd[i]);
    });
});


test('Should throw an exception if start date is after end date', () => {
    const fn = () => {
        const d1 = new Date(2016, 1, 10);
        const d2 = new Date(2016, 1, 5);
        a.generate_multi(d1, d2);
    };

    expect(fn).toThrow(a.InvalidDateRangeError);
});


test('Should generate a single password if the date interval is just one day', () => {
    const d1 = new Date(2016, 1, 5);
    const d2 = new Date(2016, 1, 5);
    const potd = a.generate_multi(d1, d2);

    expect(potd.length).toBe(1);
});


test.each([
    [defaultSeedPotds, 0, 3],
    [defaultSeedPotds, 4, 6],
    [customSeedPotds, 0, 3, customSeed],
    [customSeedPotds, 4, 6, customSeed]
])('Should generate the correct passwords for the given date interval', (potdList: string[], startIndex: number, endIndex: number, seed: string|undefined = undefined) => {
    const count = endIndex - startIndex + 1;
    const startDate = new Date(testDates[startIndex]);
    const endDate = new Date(testDates[endIndex]);
    const potd = a.generate_multi(startDate, endDate, seed);

    expect(potd.length).toBe(count);
    for (let i = startIndex; i <= endIndex; i++) {
        const date = potd[i - startIndex].date;
        const password = potd[i - startIndex].password;
        expect(date).toEqual(new Date(testDates[i]));
        expect(password).toBe(potdList[i]);
    }
});
