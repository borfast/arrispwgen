// Note: the month in a Date object is 0-indexed, i.e. new Date(2016, 11, 20)
// is the 20th of December, 2016. Unfortunately, new Date(2016, 12, 20) will
// not produce an error and will happily and *silently* (yes...) give you a
// Date object representing the 20th of *January*, 2016. Nice, right?... :(

const test_dates = [
    (new Date(2016, 10, 19)).getTime(),
    (new Date(2016, 10, 20)).getTime(),
    (new Date(2016, 10, 21)).getTime(),
    (new Date(2016, 10, 22)).getTime(),
    (new Date(2016, 11, 1)).getTime(),
    (new Date(2016, 11, 2)).getTime(),
    (new Date(2016, 11, 3)).getTime()
];
exports.test_dates = test_dates;

let using_default_seed = {};
using_default_seed[test_dates[0]] = '2BEIRWLZ35';
using_default_seed[test_dates[1]] = 'O2A2MLL32D';
using_default_seed[test_dates[2]] = 'K716USYKFR';
using_default_seed[test_dates[3]] = 'NUD21IN1EV';
using_default_seed[test_dates[4]] = '1F3I94R4FO';
using_default_seed[test_dates[5]] = '64Y3MJRL0N';
using_default_seed[test_dates[6]] = 'DTARW8TPKM';
exports.using_default_seed = using_default_seed;

exports.custom_seed = 'ABCDEFGHIJ';

let using_custom_seed = {};
using_custom_seed[test_dates[0]] = 'KF6WGPG74Q';
using_custom_seed[test_dates[1]] = '2DL07E57EK';
using_custom_seed[test_dates[2]] = 'E93CGHF957';
using_custom_seed[test_dates[3]] = 'EG304636TM';
using_custom_seed[test_dates[4]] = '9KEWMOYQ82';
using_custom_seed[test_dates[5]] = 'IBV5K74ER9';
using_custom_seed[test_dates[6]] = 'ELEXOJ6B2Q';
exports.using_custom_seed = using_custom_seed;
