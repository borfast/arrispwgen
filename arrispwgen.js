/*
 * Arris TM602A password of the day generator
 * 
 * Author: Raul Pedro Fernandes Santos
 * Project homepage: http://www.borfast.com/projects/arrispwgen
 * 
 * Copyright (c) 2010, Raul Pedro Fernandes Santos
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 */

function GenArrisPasswords(startdate, enddate) {
  var password_count;
  var date1, date2;
  var one_day_in_milliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

  // Check how many passwords we're going to generate.
  if (startdate !== undefined && enddate !== undefined) {
    password_count = Math.ceil((enddate - startdate) / one_day_in_milliseconds);
  } else {
    password_count = 1;
    if (startdate === undefined) {
      startdate = (new Date()).getTime();
    }
  }

  // See if we have a valid number of passwords
  if ((password_count < 1) | (password_count > 365)) {
    alert('Since we can only generate passwords for a full year at a time, the number of passwords must be between 1 and 365.');
  } else {
    var seed = 'MPSJKMDHAI';
    var seedeight = seed.substr(0, 8);
    var seedten = seed;

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

    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];    
    var year;
    var month;
    var day_of_month;
    var day_of_week;
    var iter, i;

    // Now let's generate one password for each day
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
      password_of_the_day = password_of_the_day.join('');

      // TODO: Should this be presented in an overlay on the current page?
      alert(password_of_the_day);
    }
  }
}

//var dateA = new Date(2010, 7, 26, 0, 0, 0, 0);
//var dateB = new Date(2010, 7, 30, 0, 0, 0, 0);
//GenArrisPasswords(dateA.getTime(), dateB.getTime());

// For the bookmarklet, get just one password. Later I'll implement an UI.
GenArrisPasswords();

