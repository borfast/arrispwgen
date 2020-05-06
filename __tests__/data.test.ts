import {
    customSeed,
    testDates,
    testList1,
    testList2UsingCustomSeed,
    testList2UsingDefaultSeed,
    testList3UsingCustomSeed,
    testList3UsingDefaultSeed,
    testList4UsingCustomSeed,
    testList4UsingDefaultSeed,
    testList5UsingCustomSeed,
    testList5UsingDefaultSeed,
    testNum8UsingCustomSeed,
    testNum8UsingDefaultSeed
} from './helper_data';
import {indexers, list1, list2, list3, list4, list5, num8} from '../src/data';
import {_DEFAULT_SEED} from '../src/constants';
import {expect, test} from '@jest/globals';


test('Should generate the correct "list1" for the given dates', () => {
    testDates.forEach((date: number, idx: number) => {
        const d = new Date(date);
        const l1 = list1(d);
        expect(l1).toEqual(expect.arrayContaining(testList1[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, testList2UsingDefaultSeed],
    [customSeed, testList2UsingCustomSeed]
])('Should generate the correct "list2"', (seed: string, expected: string[]) => {
    const l2 = list2(seed);
    expect(l2).toEqual(expect.arrayContaining(expected));
});


test.each([
    [_DEFAULT_SEED, testList3UsingDefaultSeed],
    [customSeed, testList3UsingCustomSeed]
])('Should generate the correct "list3"', (seed: string, expected: number[][]) => {
    testDates.forEach( (date: number, idx: number) => {
        const d = new Date(date);
        const l1 = list1(d);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        expect(l3).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, testList4UsingDefaultSeed],
    [customSeed, testList4UsingCustomSeed]
])('Should generate the correct "list4"', (seed: string, expected: number[][]) => {
    testDates.forEach( (date: number, idx: number) => {
        const d = new Date(date);
        const l1 = list1(d);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        expect(l4).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, testList5UsingDefaultSeed],
    [customSeed, testList5UsingCustomSeed]
])('Should generate the correct "list5"', (seed: string, expected: number[][]) => {
    testDates.forEach( (date: number, idx: number) => {
        const d = new Date(date);
        const l1 = list1(d);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const l4 = list4(l3);
        const l5 = list5(seed, l4);
        expect(l5).toEqual(expect.arrayContaining(expected[idx]));
    });
});


test.each([
    [_DEFAULT_SEED, testNum8UsingDefaultSeed],
    [customSeed, testNum8UsingCustomSeed]
])('Should generate the correct "num8"', (seed: string, expected: number[][]) => {
    testDates.forEach( (date: number, idx: number) => {
        const d = new Date(date);
        const l1 = list1(d);
        const l2 = list2(seed);
        const l3 = list3(l1, l2);
        const n8 = num8(l3);
        expect(n8).toBe(expected[idx]);
    });
});


test.each([
    [_DEFAULT_SEED, testList5UsingDefaultSeed],
    [customSeed, testList5UsingCustomSeed]
])('Should generate the correct "indexers"', (seed: string, expected: number[][]) => {
    testDates.forEach( (date, i) => {
        const d = new Date(date);
        const index = indexers(d, seed);
        expect(index).toEqual(expect.arrayContaining(expected[i]));
    });
});
