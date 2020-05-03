// Note: the month in a Date object is 0-indexed, i.e. new Date(2016, 11, 20)
// is the 20th of December, 2016. Unfortunately, new Date(2016, 12, 20) will
// not produce an error and will happily and *silently* (yes...) give you a
// Date object representing the 20th of *January*, 2016. Nice, right?... :(
// These dates are stored as timestamps so they can be used to index
export const test_dates = [
    (new Date(2016, 9, 19)).getTime(),
    (new Date(2016, 9, 20)).getTime(),
    (new Date(2016, 9, 21)).getTime(),
    (new Date(2016, 9, 22)).getTime(),
    (new Date(2016, 10, 1)).getTime(),
    (new Date(2016, 10, 2)).getTime(),
    (new Date(2016, 10, 3)).getTime()
];

export const default_seed_potds = [
    'RZ631QL7H4',
    '730B78VQPT',
    '13UITQJ132',
    '8722S2N0T7',
    'R6HBPKY66J',
    'CTXRK3NV0D',
    'N776Z9GSO9'
];

export const custom_seed = 'ABCDEFGHIJ';

export const custom_seed_potds = [
    'ZJC551QLMO',
    'BZLLEEPPKS',
    '0H0WEOI4WQ',
    'T5F0OJ2RKM',
    'SJ3LQ46SN8',
    '1FKXJAUR1Q',
    'JCBCYHOQBP'
];

// "list" values

/**
 * list 1 is always the same for both default and custom seeds
 * because it only depends on the date.
 */
export const test_list1 = [
    [ 29, 14, 32, 29, 24, 19, 7, 21 ],
    [ 23, 32, 24, 29, 29, 20, 6, 26 ],
    [ 14, 29, 10, 21, 29, 21, 5, 31 ],
    [ 34, 27, 16, 23, 30, 22, 4, 0 ],
    [ 13, 14, 27, 32, 10, 1, 26, 6 ],
    [ 29, 14, 32, 29, 24, 2, 25, 12 ],
    [ 23, 32, 24, 29, 29, 3, 24, 18 ]
];

// "list" values using default seed.

export const test_list2_using_default_seed = [ 5, 8, 11, 2, 3, 5, 32, 0 ];

export const test_list3_using_default_seed = [
    [ 34, 22, 7, 31, 27, 24, 3, 21, 25, 1 ],
    [ 28, 4, 35, 31, 32, 25, 2, 26, 3, 9 ],
    [ 19, 1, 21, 23, 32, 26, 1, 31, 10, 16 ],
    [ 3, 35, 27, 25, 33, 27, 0, 0, 6, 0 ],
    [ 18, 22, 2, 34, 13, 6, 22, 6, 15, 9 ],
    [ 34, 22, 7, 31, 27, 7, 21, 12, 17, 25 ],
    [ 28, 4, 35, 31, 32, 8, 20, 18, 32, 4 ]
];

export const test_list4_using_default_seed = [
    [ 22, 27, 31, 1, 34, 21, 25, 7, 24, 3 ],
    [ 2, 31, 25, 9, 4, 3, 35, 26, 32, 28 ],
    [ 32, 31, 19, 16, 26, 21, 23, 1, 10, 1 ],
    [ 3, 35, 27, 0, 25, 33, 27, 0, 0, 6 ],
    [ 22, 34, 6, 9, 22, 15, 2, 6, 13, 18 ],
    [ 7, 21, 22, 25, 17, 34, 27, 31, 7, 12 ],
    [ 18, 35, 32, 4, 32, 4, 20, 28, 31, 8 ]
];

export const test_list5_using_default_seed = [
    [ 27, 35, 6, 3, 1, 26, 21, 7, 17, 4 ],
    [ 7, 3, 0, 11, 7, 8, 31, 26, 25, 29 ],
    [ 1, 3, 30, 18, 29, 26, 19, 1, 3, 2 ],
    [ 8, 7, 2, 2, 28, 2, 23, 0, 29, 7 ],
    [ 27, 6, 17, 11, 25, 20, 34, 6, 6, 19 ],
    [ 12, 29, 33, 27, 20, 3, 23, 31, 0, 13 ],
    [ 23, 7, 7, 6, 35, 9, 16, 28, 24, 9 ]
];

export const test_num8_using_default_seed = [1, 3, 4, 0, 3, 5, 2];

// "list" values using custom seed.
export const test_list2_using_custom_seed = [ 29, 30, 31, 32, 33, 34, 35, 0 ];

export const test_list3_using_custom_seed = [
    [ 22, 8, 27, 25, 21, 17, 6, 21, 3, 9 ],
    [ 16, 26, 19, 25, 26, 18, 5, 26, 17, 25 ],
    [ 7, 23, 5, 17, 26, 19, 4, 31, 24, 0 ],
    [ 27, 21, 11, 19, 27, 20, 3, 0, 20, 4 ],
    [ 6, 8, 22, 28, 7, 35, 25, 6, 29, 25 ],
    [ 22, 8, 27, 25, 21, 0, 24, 12, 31, 1 ],
    [ 16, 26, 19, 25, 26, 1, 23, 18, 10, 16 ]
];

export const test_list4_using_custom_seed = [
    [ 6, 25, 17, 9, 8, 3, 27, 21, 21, 22 ],
    [ 18, 5, 26, 25, 17, 16, 26, 25, 19, 26 ],
    [ 7, 23, 5, 0, 17, 26, 19, 4, 31, 24 ],
    [ 0, 11, 20, 4, 27, 21, 3, 27, 19, 20 ],
    [ 35, 25, 8, 25, 29, 6, 7, 28, 22, 6 ],
    [ 8, 21, 25, 1, 22, 12, 31, 27, 0, 24 ],
    [ 26, 18, 16, 16, 1, 19, 25, 26, 10, 23 ]
];

export const test_list5_using_custom_seed = [
    [ 35, 19, 12, 5, 5, 1, 26, 21, 22, 24 ],
    [ 11, 35, 21, 21, 14, 14, 25, 25, 20, 28 ],
    [ 0, 17, 0, 32, 14, 24, 18, 4, 32, 26 ],
    [ 29, 5, 15, 0, 24, 19, 2, 27, 20, 22 ],
    [ 28, 19, 3, 21, 26, 4, 6, 28, 23, 8 ],
    [ 1, 15, 20, 33, 19, 10, 30, 27, 1, 26 ],
    [ 19, 12, 11, 12, 34, 17, 24, 26, 11, 25 ]
];

export const test_num8_using_custom_seed = [3, 5, 0, 2, 5, 1, 4];
