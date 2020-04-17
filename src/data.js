import {_TABLE1, _TABLE2} from './constants.js';


export function list1(date) {
    // Last two digits of the year
    const year = parseInt(date.getFullYear().toString(10).substr(2, 2), 10);

    // Number of the month. The month in a Date object is zero-indexed,
    // i.e., January == 0, so we add 1 to satisfy the algorithm.
    const month = date.getMonth() + 1;

    const day_of_month = date.getDate();

    // Day of the week. Normally 0 would be Sunday but we need it to be Monday.
    let day_of_week = date.getDay() - 1;
    if (day_of_week < 0) {
        day_of_week = 6;
    }

    let list1 = [];

    for (let i = 0; i <= 4; i++) {
        list1[i] = _TABLE1[day_of_week][i];
    }

    list1[5] = day_of_month;

    if (((year + month) - day_of_month) < 0) {
        list1[6] = (((year + month) - day_of_month) + 36) % 36;
    } else {
        list1[6] = ((year + month) - day_of_month) % 36;
    }

    list1[7] = (((3 + ((year + month) % 12)) * day_of_month) % 37) % 36;

    return list1;
}

export function list2(seed) {
    let list2 = [];

    for (let i = 0; i <= 7; i++) {
        list2[i] = (seed.charCodeAt(i)) % 36;
    }

    return list2;
}

export function num8(l3) {
    return l3[8] % 6;
}

export function list3(l1, l2) {
    let list3 = [];

    for (let i = 0; i <= 7; i++) {
        list3[i] = (((l1[i] + l2[i])) % 36);
    }

    list3[8] = (list3[0] + list3[1] + list3[2] + list3[3] + list3[4] +
        list3[5] + list3[6] + list3[7]) % 36;

    list3[9] = Math.round(Math.pow(num8(list3), 2));

    return list3;
}

export function list4(l3) {
    let list4 = [];

    for (let i = 0; i <= 9; i++) {
        list4[i] = l3[_TABLE2[num8(l3)][i]];
    }

    return list4;
}

export function list5(seed, l4) {
    let list5 = [];

    for (let i = 0; i <= 9; i++) {
        list5[i] = (seed.charCodeAt(i) + l4[i]) % 36;
    }

    return list5;
}

export function indexers(date, seed) {
    let l1 = list1(date);
    let l2 = list2(seed);
    let l3 = list3(l1, l2);
    let l4 = list4(l3);

    return list5(seed, l4);
}
