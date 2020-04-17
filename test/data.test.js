import { test_dates, custom_seed, test_list1, test_list2_using_default_seed, test_list2_using_custom_seed,
    test_list3_using_default_seed, test_list3_using_custom_seed, test_list4_using_default_seed,
    test_list4_using_custom_seed, test_list5_using_default_seed, test_list5_using_custom_seed,
    test_num8_using_default_seed, test_num8_using_custom_seed
} from './helper_data';
import { list1, list2, list3, list4, list5, num8, indexers } from '../src/data.js';
import { _DEFAULT_SEED } from '../src/constants.js';


test('Should generate the correct "list1" for the given dates', () => {
    test_dates.forEach((date) => {
        date = new Date(date);
        const l1 = list1(date);
        const timestamp = date.getTime();

        expect(l1).toMatchObject(expect.objectContaining(test_list1[timestamp]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list2_using_default_seed],
    [custom_seed, test_list2_using_custom_seed]
])('Should generate the correct "list2"', (seed, expected) => {
    const l2 = list2(seed);
    expect(l2).toMatchObject(expect.objectContaining(expected));
});


test.each([
    [_DEFAULT_SEED, test_list3_using_default_seed],
    [custom_seed, test_list3_using_custom_seed]
])('Should generate the correct "list3"', (seed, expected) => {
    test_dates.forEach(function (date) {
        date = new Date(date);
        const l1 = list1(date);
        const timestamp = date.getTime();

        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        expect(l3).toMatchObject(expect.objectContaining(expected[timestamp]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list4_using_default_seed],
    [custom_seed, test_list4_using_custom_seed]
])('Should generate the correct "list4"', (seed, expected) => {
    test_dates.forEach(function (date) {
        date = new Date(date);
        const l1 = list1(date);
        const timestamp = date.getTime();

        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        expect(l4).toMatchObject(expect.objectContaining(expected[timestamp]));
    });
});


test.each([
    [_DEFAULT_SEED, test_list5_using_default_seed],
    [custom_seed, test_list5_using_custom_seed]
])('Should generate the correct "list5"', (seed, expected) => {
    test_dates.forEach(function (date) {
        date = new Date(date);
        const l1 = list1(date);
        const timestamp = date.getTime();

        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        const l5 = list5(seed, l4);
        expect(l5).toMatchObject(expect.objectContaining(expected[timestamp]));
    });
});


test.each([
    [_DEFAULT_SEED, test_num8_using_default_seed],
    [custom_seed, test_num8_using_custom_seed]
])('Should generate the correct "num8"', (seed, expected) => {
    test_dates.forEach(function (date) {
        date = new Date(date);
        const l1 = list1(date);
        const timestamp = date.getTime();

        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const n8 = num8(l3);
        expect(n8).toBe(expected[timestamp]);
    });
});


test.each([
    [_DEFAULT_SEED, test_list5_using_default_seed],
    [custom_seed, test_list5_using_custom_seed]
])('Should generate the correct "indexers"', (seed, expected) => {
    test_dates.forEach(function (date) {
        date = new Date(date);
        const timestamp = date.getTime();
        const idx = indexers(date, seed);
        expect(idx).toMatchObject(expect.objectContaining(expected[timestamp]));
    });
});
