// Note: the month in a Date object is 0-indexed, i.e. new Date(2016, 11, 20)
// is the 20th of December, 2016. Unfortunately, new Date(2016, 12, 20) will
// not produce an error and will happily and *silently* (yes...) give you a
// Date object representing the 20th of *January*, 2016. Nice, right?... :(

let using_default_seed = {};
using_default_seed[(new Date(2016, 10, 19)).getTime()] = '2BEIRWLZ35';
using_default_seed[(new Date(2016, 10, 20)).getTime()] = 'O2A2MLL32D';
using_default_seed[(new Date(2016, 10, 21)).getTime()] = 'K716USYKFR';
using_default_seed[(new Date(2016, 10, 22)).getTime()] = 'NUD21IN1EV';
using_default_seed[(new Date(2016, 11, 1)).getTime()] = '1F3I94R4FO';
using_default_seed[(new Date(2016, 11, 2)).getTime()] = '64Y3MJRL0N';
using_default_seed[(new Date(2016, 11, 3)).getTime()] = 'DTARW8TPKM';
exports.using_default_seed = using_default_seed;

exports.custom_seed = 'ABCDEFGHIJ';

let using_custom_seed = {};
using_custom_seed[(new Date(2016, 10, 19)).getTime()] = 'KF6WGPG74Q';
using_custom_seed[(new Date(2016, 10, 20)).getTime()] = '2DL07E57EK';
using_custom_seed[(new Date(2016, 10, 21)).getTime()] = 'E93CGHF957';
using_custom_seed[(new Date(2016, 10, 22)).getTime()] = 'EG304636TM';
using_custom_seed[(new Date(2016, 11, 1)).getTime()] = '9KEWMOYQ82';
using_custom_seed[(new Date(2016, 11, 2)).getTime()] = 'IBV5K74ER9';
using_custom_seed[(new Date(2016, 11, 3)).getTime()] = 'ELEXOJ6B2Q';
exports.using_custom_seed = using_custom_seed;
