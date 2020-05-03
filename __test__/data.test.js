import { test_dates, custom_seed, test_list1, test_list2_using_default_seed, test_list2_using_custom_seed,
    test_list3_using_default_seed, test_list3_using_custom_seed, test_list4_using_default_seed,
    test_list4_using_custom_seed, test_list5_using_default_seed, test_list5_using_custom_seed,
    test_num8_using_default_seed, test_num8_using_custom_seed
} from './helper_data';
import { list1, list2, list3, list4, list5, num8, indexers } from '../src/data.js';
import { _DEFAULT_SEED } from '../src/constants.js';


test('Should generate the correct "list1" for the given dates', () => {
    test_dates.forEach((date, idx) => {
        const d = new Date(date);
        const l1 = list1(d);
        expect(l1).toEqual(expect.arrayContaining(test_list1[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list2_using_default_seed],
    [custom_seed, test_list2_using_custom_seed]
])('Should generate the correct "list2"', (seed, expected) => {
    const l2 = list2(seed);
    expect(l2).toEqual(expect.arrayContaining(expected));
});


test.each([
    [_DEFAULT_SEED, test_list3_using_default_seed],
    [custom_seed, test_list3_using_custom_seed]
])('Should generate the correct "list3"', (seed, expected) => {
    test_dates.forEach( (date, idx) => {
        date = new Date(date);
        const l1 = list1(date);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        expect(l3).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list4_using_default_seed],
    [custom_seed, test_list4_using_custom_seed]
])('Should generate the correct "list4"', (seed, expected) => {
    test_dates.forEach( (date, idx) => {
        date = new Date(date);
        const l1 = list1(date);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        expect(l4).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list5_using_default_seed],
    [custom_seed, test_list5_using_custom_seed]
])('Should generate the correct "list5"', (seed, expected) => {
    test_dates.forEach( (date, idx) => {
        date = new Date(date);
        const l1 = list1(date);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        const l5 = list5(seed, l4);
        expect(l5).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, test_num8_using_default_seed],
    [custom_seed, test_num8_using_custom_seed]
])('Should generate the correct "num8"', (seed, expected) => {
    test_dates.forEach( (date, idx) => {
        date = new Date(date);
        const l1 = list1(date);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const n8 = num8(l3);
        expect(n8).toBe(expected[idx]);
    });
});


test.each([
    [_DEFAULT_SEED, test_list5_using_default_seed],
    [custom_seed, test_list5_using_custom_seed]
])('Should generate the correct "indexers"', (seed, expected) => {
    test_dates.forEach( (date, i) => {
        date = new Date(date);
        const index = indexers(date, seed);
        expect(index).toEqual(expect.arrayContaining(expected[i]));
    });
});
