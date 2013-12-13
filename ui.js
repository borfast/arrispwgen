window.onload = function () {
    "use strict";

    // Start and end date elements
    var start_year = document.getElementById('start-year'),
        start_month = document.getElementById('start-month'),
        start_day = document.getElementById('start-day'),

        end_year = document.getElementById('end-year'),
        end_month = document.getElementById('end-month'),
        end_day = document.getElementById('end-day'),

        // Store the table template in memory
        table = document.getElementById('password-list'),
        table_parent = table.parentNode,
        table_template = table.cloneNode(true),

        // Dance the funky chicken when the user clicks the magic button
        go = document.getElementById('go');

    // Pre-populate dates with today's date
    var today = new Date();
    start_year.value = end_year.value = today.getFullYear();
    // In JS January == 0 but that's not user friendly
    start_month.value = end_month.value = today.getMonth() + 1;
    start_day.value = end_day.value = today.getDate();

    go.onclick = function () {
        // Get the Date objects for the dates entered and pass their timestamps
        // to the password generator
        var start_date = new Date(start_year.value, start_month.value - 1, start_day.value, 0, 0, 0, 0),
            end_date = new Date(end_year.value, end_month.value - 1, end_day.value, 0, 0, 0, 0),
            passwords = ArrisPwGen(start_date.getTime(), end_date.getTime());

        // UI elements.
        var table_guts = document.createDocumentFragment(),
            row,
            col1,
            col2;

        // Clear the previous table and get a reference to the new one
        table_parent.removeChild(table);
        table_parent.appendChild(table_template.cloneNode(true));
        table = document.getElementById('password-list');

        for(var pass in passwords) {
            if (passwords.hasOwnProperty(pass)) {
                row = document.createElement('tr');

                col1 = document.createElement('td');
                col1.textContent = (new Date(parseInt(pass, 10))).toLocaleDateString();
                row.appendChild(col1);

                col2 = document.createElement('td');
                col2.textContent = passwords[pass];
                row.appendChild(col2);

                table_guts.appendChild(row);
            }
        }

        table.appendChild(table_guts);
    };
};
