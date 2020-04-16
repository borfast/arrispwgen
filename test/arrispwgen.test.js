import { potd_using_default_seed, potd_using_custom_seed, custom_seed } from './helper_data.js';
import * as a from '../src/arrispwgen.js';


// DRY function for testing single password
function test_single_passwords(data, seed) {
    for (const p in data) {
        const date = (new Date(parseInt(p)));
        const potd = a.generate(date, seed);
        expect(potd).toBe(data[p]);
    }
}


test.each([
    [potd_using_default_seed],
    [potd_using_custom_seed, custom_seed]
])('Should generate the correct password for the given days with the default seed', (data, seed = undefined) => {
    test_single_passwords(data, seed);
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

    expect(Object.keys(potd).length).toBe(1);
});


test.each([
    [potd_using_default_seed, 0, 3, undefined],
    [potd_using_default_seed, 4, 6, undefined],
    [potd_using_custom_seed, 0, 3, custom_seed],
    [potd_using_custom_seed, 4, 6, custom_seed]
])('Should generate the correct passwords for the given date interval', (data, start_index, end_index, seed) => {
    const keys = Object.keys(data);

    const start = new Date(parseInt(keys[start_index]));
    const end = new Date(parseInt(keys[end_index]));
    const potd = a.generate_multi(start, end, seed);
    const count = end_index - start_index + 1;
    expect(Object.keys(potd).length).toBe(count);
    for (const p in potd) {
        expect(potd[p]).toBe(data[p]);
    }
});
