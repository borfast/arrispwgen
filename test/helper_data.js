// Note: the month in a Date object is 0-indexed, i.e. new Date(2016, 11, 20)
// is the 20th of December, 2016. Unfortunately, new Date(2016, 12, 20) will
// not produce an error and will happily and *silently* (yes...) give you a
// Date object representing the 20th of *January*, 2016. Nice, right?... :(
export const test_dates = [
    (new Date(2016, 9, 19)).getTime(),
    (new Date(2016, 9, 20)).getTime(),
    (new Date(2016, 9, 21)).getTime(),
    (new Date(2016, 9, 22)).getTime(),
    (new Date(2016, 10, 1)).getTime(),
    (new Date(2016, 10, 2)).getTime(),
    (new Date(2016, 10, 3)).getTime()
];

let potd_using_default_seed = {};
potd_using_default_seed[test_dates[0]] = 'RZ631QL7H4';
potd_using_default_seed[test_dates[1]] = '730B78VQPT';
potd_using_default_seed[test_dates[2]] = '13UITQJ132';
potd_using_default_seed[test_dates[3]] = '8722S2N0T7';
potd_using_default_seed[test_dates[4]] = 'R6HBPKY66J';
potd_using_default_seed[test_dates[5]] = 'CTXRK3NV0D';
potd_using_default_seed[test_dates[6]] = 'N776Z9GSO9';
const _potd_using_default_seed = potd_using_default_seed;
export { _potd_using_default_seed as potd_using_default_seed };

export const custom_seed = 'ABCDEFGHIJ';

let potd_using_custom_seed = {};
potd_using_custom_seed[test_dates[0]] = 'ZJC551QLMO';
potd_using_custom_seed[test_dates[1]] = 'BZLLEEPPKS';
potd_using_custom_seed[test_dates[2]] = '0H0WEOI4WQ';
potd_using_custom_seed[test_dates[3]] = 'T5F0OJ2RKM';
potd_using_custom_seed[test_dates[4]] = 'SJ3LQ46SN8';
potd_using_custom_seed[test_dates[5]] = '1FKXJAUR1Q';
potd_using_custom_seed[test_dates[6]] = 'JCBCYHOQBP';
const _potd_using_custom_seed = potd_using_custom_seed;
export { _potd_using_custom_seed as potd_using_custom_seed };

/**
 * list 1 is always the same for both default and custom seeds
 * because it only depends on the date.
 */
let test_list1 = {};
test_list1[test_dates[0]] = [ 29, 14, 32, 29, 24, 19, 7, 21 ];
test_list1[test_dates[1]] = [ 23, 32, 24, 29, 29, 20, 6, 26 ];
test_list1[test_dates[2]] = [ 14, 29, 10, 21, 29, 21, 5, 31 ];
test_list1[test_dates[3]] = [ 34, 27, 16, 23, 30, 22, 4, 0 ];
test_list1[test_dates[4]] = [ 13, 14, 27, 32, 10, 1, 26, 6 ];
test_list1[test_dates[5]] = [ 29, 14, 32, 29, 24, 2, 25, 12 ];
test_list1[test_dates[6]] = [ 23, 32, 24, 29, 29, 3, 24, 18 ];
const _test_list1 = test_list1;
export { _test_list1 as test_list1 };


export const test_list2_using_default_seed = [ 5, 8, 11, 2, 3, 5, 32, 0 ];

let test_list3_using_default_seed = {};
test_list3_using_default_seed[test_dates[0]] = [ 34, 22, 7, 31, 27, 24, 3, 21, 25, 1 ];
test_list3_using_default_seed[test_dates[1]] = [ 28, 4, 35, 31, 32, 25, 2, 26, 3, 9 ];
test_list3_using_default_seed[test_dates[2]] = [ 19, 1, 21, 23, 32, 26, 1, 31, 10, 16 ];
test_list3_using_default_seed[test_dates[3]] = [ 3, 35, 27, 25, 33, 27, 0, 0, 6, 0 ];
test_list3_using_default_seed[test_dates[4]] = [ 18, 22, 2, 34, 13, 6, 22, 6, 15, 9 ];
test_list3_using_default_seed[test_dates[5]] = [ 34, 22, 7, 31, 27, 7, 21, 12, 17, 25 ];
test_list3_using_default_seed[test_dates[6]] = [ 28, 4, 35, 31, 32, 8, 20, 18, 32, 4 ];
const _test_list3_using_default_seed = test_list3_using_default_seed;
export { _test_list3_using_default_seed as test_list3_using_default_seed };

let test_list4_using_default_seed = {};
test_list4_using_default_seed[test_dates[0]] = [ 22, 27, 31, 1, 34, 21, 25, 7, 24, 3 ];
test_list4_using_default_seed[test_dates[1]] = [ 2, 31, 25, 9, 4, 3, 35, 26, 32, 28 ];
test_list4_using_default_seed[test_dates[2]] = [ 32, 31, 19, 16, 26, 21, 23, 1, 10, 1 ];
test_list4_using_default_seed[test_dates[3]] = [ 3, 35, 27, 0, 25, 33, 27, 0, 0, 6 ];
test_list4_using_default_seed[test_dates[4]] = [ 22, 34, 6, 9, 22, 15, 2, 6, 13, 18 ];
test_list4_using_default_seed[test_dates[5]] = [ 7, 21, 22, 25, 17, 34, 27, 31, 7, 12 ];
test_list4_using_default_seed[test_dates[6]] = [ 18, 35, 32, 4, 32, 4, 20, 28, 31, 8 ];
const _test_list4_using_default_seed = test_list4_using_default_seed;
export { _test_list4_using_default_seed as test_list4_using_default_seed };

let test_list5_using_default_seed = {};
test_list5_using_default_seed[test_dates[0]] = [ 27, 35, 6, 3, 1, 26, 21, 7, 17, 4 ];
test_list5_using_default_seed[test_dates[1]] = [ 7, 3, 0, 11, 7, 8, 31, 26, 25, 29 ];
test_list5_using_default_seed[test_dates[2]] = [ 1, 3, 30, 18, 29, 26, 19, 1, 3, 2 ];
test_list5_using_default_seed[test_dates[3]] = [ 8, 7, 2, 2, 28, 2, 23, 0, 29, 7 ];
test_list5_using_default_seed[test_dates[4]] = [ 27, 6, 17, 11, 25, 20, 34, 6, 6, 19 ];
test_list5_using_default_seed[test_dates[5]] = [ 12, 29, 33, 27, 20, 3, 23, 31, 0, 13 ];
test_list5_using_default_seed[test_dates[6]] = [ 23, 7, 7, 6, 35, 9, 16, 28, 24, 9 ];
const _test_list5_using_default_seed = test_list5_using_default_seed;
export { _test_list5_using_default_seed as test_list5_using_default_seed };

let test_num8_using_default_seed = {};
test_num8_using_default_seed[test_dates[0]] = 1;
test_num8_using_default_seed[test_dates[1]] = 3;
test_num8_using_default_seed[test_dates[2]] = 4;
test_num8_using_default_seed[test_dates[3]] = 0;
test_num8_using_default_seed[test_dates[4]] = 3;
test_num8_using_default_seed[test_dates[5]] = 5;
test_num8_using_default_seed[test_dates[6]] = 2;
const _test_num8_using_default_seed = test_num8_using_default_seed;
export { _test_num8_using_default_seed as test_num8_using_default_seed };



export const test_list2_using_custom_seed = [ 29, 30, 31, 32, 33, 34, 35, 0 ];

let test_list3_using_custom_seed = {};
test_list3_using_custom_seed[test_dates[0]] = [ 22, 8, 27, 25, 21, 17, 6, 21, 3, 9 ];
test_list3_using_custom_seed[test_dates[1]] = [ 16, 26, 19, 25, 26, 18, 5, 26, 17, 25 ];
test_list3_using_custom_seed[test_dates[2]] = [ 7, 23, 5, 17, 26, 19, 4, 31, 24, 0 ];
test_list3_using_custom_seed[test_dates[3]] = [ 27, 21, 11, 19, 27, 20, 3, 0, 20, 4 ];
test_list3_using_custom_seed[test_dates[4]] = [ 6, 8, 22, 28, 7, 35, 25, 6, 29, 25 ];
test_list3_using_custom_seed[test_dates[5]] = [ 22, 8, 27, 25, 21, 0, 24, 12, 31, 1 ];
test_list3_using_custom_seed[test_dates[6]] = [ 16, 26, 19, 25, 26, 1, 23, 18, 10, 16 ];
const _test_list3_using_custom_seed = test_list3_using_custom_seed;
export { _test_list3_using_custom_seed as test_list3_using_custom_seed };

let test_list4_using_custom_seed = {};
test_list4_using_custom_seed[test_dates[0]] = [ 6, 25, 17, 9, 8, 3, 27, 21, 21, 22 ];
test_list4_using_custom_seed[test_dates[1]] = [ 18, 5, 26, 25, 17, 16, 26, 25, 19, 26 ];
test_list4_using_custom_seed[test_dates[2]] = [ 7, 23, 5, 0, 17, 26, 19, 4, 31, 24 ];
test_list4_using_custom_seed[test_dates[3]] = [ 0, 11, 20, 4, 27, 21, 3, 27, 19, 20 ];
test_list4_using_custom_seed[test_dates[4]] = [ 35, 25, 8, 25, 29, 6, 7, 28, 22, 6 ];
test_list4_using_custom_seed[test_dates[5]] = [ 8, 21, 25, 1, 22, 12, 31, 27, 0, 24 ];
test_list4_using_custom_seed[test_dates[6]] = [ 26, 18, 16, 16, 1, 19, 25, 26, 10, 23 ];
const _test_list4_using_custom_seed = test_list4_using_custom_seed;
export { _test_list4_using_custom_seed as test_list4_using_custom_seed };

let test_list5_using_custom_seed = {};
test_list5_using_custom_seed[test_dates[0]] = [ 35, 19, 12, 5, 5, 1, 26, 21, 22, 24 ];
test_list5_using_custom_seed[test_dates[1]] = [ 11, 35, 21, 21, 14, 14, 25, 25, 20, 28 ];
test_list5_using_custom_seed[test_dates[2]] = [ 0, 17, 0, 32, 14, 24, 18, 4, 32, 26 ];
test_list5_using_custom_seed[test_dates[3]] = [ 29, 5, 15, 0, 24, 19, 2, 27, 20, 22 ];
test_list5_using_custom_seed[test_dates[4]] = [ 28, 19, 3, 21, 26, 4, 6, 28, 23, 8 ];
test_list5_using_custom_seed[test_dates[5]] = [ 1, 15, 20, 33, 19, 10, 30, 27, 1, 26 ];
test_list5_using_custom_seed[test_dates[6]] = [ 19, 12, 11, 12, 34, 17, 24, 26, 11, 25 ];
const _test_list5_using_custom_seed = test_list5_using_custom_seed;
export { _test_list5_using_custom_seed as test_list5_using_custom_seed };

let test_num8_using_custom_seed = {};
test_num8_using_custom_seed[test_dates[0]] = 3;
test_num8_using_custom_seed[test_dates[1]] = 5;
test_num8_using_custom_seed[test_dates[2]] = 0;
test_num8_using_custom_seed[test_dates[3]] = 2;
test_num8_using_custom_seed[test_dates[4]] = 5;
test_num8_using_custom_seed[test_dates[5]] = 1;
test_num8_using_custom_seed[test_dates[6]] = 4;
const _test_num8_using_custom_seed = test_num8_using_custom_seed;
export { _test_num8_using_custom_seed as test_num8_using_custom_seed };
