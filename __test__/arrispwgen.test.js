import {custom_seed} from './helper_data.js';
import * as a from '../src/arrispwgen.js';
import {custom_seed_potds, default_seed_potds, test_dates} from './helper_data.js';


test.each([
    [default_seed_potds],
    [custom_seed_potds, custom_seed]
])('Should 22222 generate the correct password for the given days with the given seed', (potd, seed = undefined) => {
    test_dates.forEach( (date, i) => {
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

    expect(fn).toThrow('The start date must precede the end date.');
});


test('Should generate a single password if the date interval is just one day', () => {
    const d1 = new Date(2016, 1, 5);
    const d2 = new Date(2016, 1, 5);
    const potd = a.generate_multi(d1, d2);

    expect(potd.length).toBe(1);
});


test.each([
    [default_seed_potds, 0, 3],
    [default_seed_potds, 4, 6],
    [custom_seed_potds, 0, 3, custom_seed],
    [custom_seed_potds, 4, 6, custom_seed]
])('Should generate the correct passwords for the given date interval', (potd_list, start_index, end_index, seed = undefined) => {
    const count = end_index - start_index + 1;
    const potd = a.generate_multi(new Date(test_dates[start_index]), new Date(test_dates[end_index]), seed);

    expect(potd.length).toBe(count);
    for (let i = start_index; i <= end_index; i++) {
        expect(potd[i - start_index]['password']).toBe(potd_list[i]);
    }
});
