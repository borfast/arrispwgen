/*
 * Arris password of the day generator. For a full list of the supported
 * modem models, visit the project homepage.
 *
 * Author: Raúl Pedro Fernandes Santos
 * Project homepage: http://www.borfast.com/projects/arris-password-of-the-day-generator/
 *
 */

// TODO: Add some testing, just for fun.

function ArrisPwGen(startdate, enddate, new_seed) {
    "use strict";

    var password_count = 0;
    var one_day_in_milliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

    // Check how many passwords we're going to generate.
    if (arguments.length >= 2) {
        password_count = Math.ceil((enddate - startdate + 1) / one_day_in_milliseconds);
    } else if (arguments.length === 1) {
        password_count = 1;
    }

    // See if we have a valid number of passwords
    if ((password_count < 1) || (password_count > 365)) {
        throw 'Invalid dates. I need dates that span a year at most';
    }


    var seed = new_seed || 'MPSJKMDHAI',
        seedeight = seed.substr(0, 8),
        seedten = seed;
    
    console.log('seed: ', seed);

    var table1 = [
        [15, 15, 24, 20, 24],
        [13, 14, 27, 32, 10],
        [29, 14, 32, 29, 24],
        [23, 32, 24, 29, 29],
        [14, 29, 10, 21, 29],
        [34, 27, 16, 23, 30],
        [14, 22, 24, 17, 13]
    ];

    var table2 = [
        [0, 1, 2, 9, 3, 4, 5, 6, 7, 8],
        [1, 4, 3, 9, 0, 7, 8, 2, 5, 6],
        [7, 2, 8, 9, 4, 1, 6, 0, 3, 5],
        [6, 3, 5, 9, 1, 8, 2, 7, 4, 0],
        [4, 7, 0, 9, 5, 2, 3, 1, 8, 6],
        [5, 6, 1, 9, 8, 0, 4, 3, 2, 7]
    ];

    var alphanum = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    var list1 = [],
        list2 = [],
        list3 = [],
        list4 = [],
        list5 = [],
        year,
        month,
        day_of_month,
        day_of_week,
        iter,
        i,
        date;

    // Now let's generate one password for each day
    var password_list = {};
    for (iter = 0; iter < password_count; iter++) {
        // For each iteration advance the date one day
        date = new Date(startdate + (iter * one_day_in_milliseconds));

        // Last two digits of the year
        year = parseInt(date.getFullYear().toString(10).substr(2, 2), 10);

        // Number of the month (no leading zero; January == 0)
        month = date.getMonth() + 1;

        // Day of the month
        day_of_month = date.getDate();

        // Day of the week. Normally 0 would be Sunday but we need it to be Monday.
        day_of_week = date.getDay() - 1;
        if (day_of_week < 0) {
            day_of_week = 6;
        }


        // Now build the lists that will be used by each other.

        // list1
        for (i = 0; i <= 4; i++) {
            list1[i] = table1[day_of_week][i];
        }
        list1[5] = day_of_month;
        if (((year + month) - day_of_month) < 0) {
            list1[6] = (((year + month) - day_of_month) + 36) % 36;
        } else {
            list1[6] = ((year + month) - day_of_month) % 36;
        }
        list1[7] = (((3 + ((year + month) % 12)) * day_of_month) % 37) % 36;

        // list2
        for (i = 0; i <= 7; i++) {
            list2[i] = (seedeight.substr(i, 1).charCodeAt(0)) % 36;
        }

        // list3
        for (i = 0; i <= 7; i++) {
            list3[i] = (((list1[i] + list2[i])) % 36);
        }
        list3[8] = (list3[0] + list3[1] + list3[2] + list3[3] + list3[4] +
        list3[5] + list3[6] + list3[7]) % 36;
        var num8 = (list3[8] % 6);
        list3[9] = Math.round(Math.pow(num8, 2));

        // list4
        for (i = 0; i <= 9; i++) {
            list4[i] = list3[table2[num8][i]];
        }

        // list5
        for (i = 0; i <= 9; i++) {
            list5[i] = ((seedten.substr(i, 1).charCodeAt(0)) + list4[i]) % 36;
        }


        // Finally, build the password of the day.
        var password_of_the_day = [];
        var len = list5.length;
        for (i = 0; i < len; i++) {
            password_of_the_day[i] = alphanum[list5[i]];
        }
        password_list[date.getTime()] = password_of_the_day.join('');
    }

    return password_list;
}

