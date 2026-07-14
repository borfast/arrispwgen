// Note: the month in a Date object is 0-indexed, i.e. new Date(2016, 11, 20)
// is the 20th of December, 2016. Unfortunately, new Date(2016, 12, 20) will
// not produce an error and will happily and *silently* (yes...) give you a
// Date object representing the 20th of *January*, 2016. Nice, right?... :(
// These dates are stored as timestamps so they can be used to index
export const testDates: number[] = [
    new Date(2016, 9, 19).getTime(),
    new Date(2016, 9, 20).getTime(),
    new Date(2016, 9, 21).getTime(),
    new Date(2016, 9, 22).getTime(),
    new Date(2016, 10, 1).getTime(),
    new Date(2016, 10, 2).getTime(),
    new Date(2016, 10, 3).getTime(),
];

export const defaultSeedPotds: string[] = [
    'RZ631QL7H4',
    '730B78VQPT',
    '13UITQJ132',
    '8722S2N0T7',
    'R6HBPKY66J',
    'CTXRK3NV0D',
    'N776Z9GSO9',
];

export const customSeed: string = 'ABCDEFGHIJ';

export const customSeedPotds: string[] = [
    'ZJC551QLMO',
    'BZLLEEPPKS',
    '0H0WEOI4WQ',
    'T5F0OJ2RKM',
    'SJ3LQ46SN8',
    '1FKXJAUR1Q',
    'JCBCYHOQBP',
];
