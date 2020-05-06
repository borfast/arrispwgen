import {_TABLE1, _TABLE2} from './constants';


export function list1(date: Date): number[] {
    // Last two digits of the year
    const year = parseInt(date.getFullYear().toString(10).substr(2, 2), 10);

    // Number of the month. The month in a Date object is zero-indexed,
    // i.e., January == 0, so we add 1 to satisfy the algorithm.
    const month = date.getMonth() + 1;

    const dayOfMonth = date.getDate();

    // Day of the week. Normally 0 would be Sunday but we need it to be Monday.
    let dayOfWeek = date.getDay() - 1;
    if (dayOfWeek < 0) {
        dayOfWeek = 6;
    }

    const list1Result = [];

    for (let i = 0; i <= 4; i++) {
        list1Result[i] = _TABLE1[dayOfWeek][i];
    }

    list1Result[5] = dayOfMonth;

    if (((year + month) - dayOfMonth) < 0) {
        list1Result[6] = (((year + month) - dayOfMonth) + 36) % 36;
    } else {
        list1Result[6] = ((year + month) - dayOfMonth) % 36;
    }

    list1Result[7] = (((3 + ((year + month) % 12)) * dayOfMonth) % 37) % 36;

    return list1Result;
}

export function list2(seed: string): number[] {
    const list2Result = [];

    for (let i = 0; i <= 7; i++) {
        list2Result[i] = (seed.charCodeAt(i)) % 36;
    }

    return list2Result;
}

export function num8(l3: number[]): number {
    return l3[8] % 6;
}

export function list3(l1: number[], l2: number[]): number[] {
    const list3Result = [];

    for (let i = 0; i <= 7; i++) {
        list3Result[i] = (((l1[i] + l2[i])) % 36);
    }

    list3Result[8] = (list3Result[0] + list3Result[1] + list3Result[2] + list3Result[3] + list3Result[4] + list3Result[5] + list3Result[6] + list3Result[7]) % 36;

    list3Result[9] = Math.round(Math.pow(num8(list3Result), 2));

    return list3Result;
}

export function list4(l3: number[]): number[] {
    const list4Result = [];

    for (let i = 0; i <= 9; i++) {
        list4Result[i] = l3[_TABLE2[num8(l3)][i]];
    }

    return list4Result;
}

export function list5(seed: string, l4: number[]): number[] {
    const list5Result = [];

    for (let i = 0; i <= 9; i++) {
        list5Result[i] = (seed.charCodeAt(i) + l4[i]) % 36;
    }

    return list5Result;
}

export function indexers(date: Date, seed: string): number[] {
    const l1 = list1(date);
    const l2 = list2(seed);
    const l3 = list3(l1, l2);
    const l4 = list4(l3);

    return list5(seed, l4);
}
