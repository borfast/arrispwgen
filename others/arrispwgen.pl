#!/usr/bin/perl
#
# Arris password of the day generator. For a full list of the supported
# modem models, visit the project homepage.
#
# Author: Raúl Pedro Fernandes Santos
# Project homepage: http://www.borfast.com/projects/arris-password-of-the-day-generator/
# Perl version: Daniel Sales
#
#/

use strict;
use warnings;
use DateTime;

my $now = DateTime->now;

my $initial = $ARGV[0] || $now->ymd;
my $final   = $ARGV[1] || $initial;

# Check params
&usage  unless ($initial =~ m#\d{4}[-/]?\d{2}[-/]?\d{2}#);
&usage  unless ($final =~ m#\d{4}[-/]?\d{2}[-/]?\d{2}#);

# Calculate passwords
my %result = GenArrisPasswords($initial, $final);

# Print results
foreach my $d (sort keys %result) {
    print "$d\t$result{$d}\n";
}

sub usage {
    print "Usage : $0 [YYYY-MM-DD [YYYY-MM-DD]]\n";
    exit -1;
}

sub GenArrisPasswords {
    my $startdate = shift;
    my $enddate   = shift || $startdate;

    my ($startyear,$startmonth,$startday) = ($1,$2,$3) if ($startdate =~ m#(\d{4})[-/]?(\d{2})[-/]?(\d{2})#);
    my ($endyear,$endmonth,$endday) = ($1,$2,$3) if ($enddate =~ m#(\d{4})[-/]?(\d{2})[-/]?(\d{2})#);

    my $first = DateTime->new(year => $startyear, month => $startmonth, day => $startday);
    my $last  = DateTime->new(year => $endyear, month => $endmonth, day => $endday);

    # Check how many passwords we're going to generate.
    my $diff = $first->delta_days($last);
    my $password_count = $diff->in_units('days') + 1;

    # See if we have a valid number of passwords
    if (($password_count < 1) || ($password_count > 365)) {
        die "Invalid dates. I need dates that span a year at most\n";
    }


    my $seed = 'MPSJKMDHAI';
    my $seedeight = substr($seed,0, 8);
    my $seedten = $seed;

    my $table1 = [
        [15, 15, 24, 20, 24],
        [13, 14, 27, 32, 10],
        [29, 14, 32, 29, 24],
        [23, 32, 24, 29, 29],
        [14, 29, 10, 21, 29],
        [34, 27, 16, 23, 30],
        [14, 22, 24, 17, 13]
    ];

    my $table2 = [
        [0, 1, 2, 9, 3, 4, 5, 6, 7, 8],
        [1, 4, 3, 9, 0, 7, 8, 2, 5, 6],
        [7, 2, 8, 9, 4, 1, 6, 0, 3, 5],
        [6, 3, 5, 9, 1, 8, 2, 7, 4, 0],
        [4, 7, 0, 9, 5, 2, 3, 1, 8, 6],
        [5, 6, 1, 9, 8, 0, 4, 3, 2, 7]
    ];

    my @alphanum = (
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    my @list1 = ();
    my @list2 = ();
    my @list3 = ();
    my @list4 = ();
    my @list5 = ();
    my $year;
    my $month;
    my $day_of_month;
    my $day_of_week;
    my $date = $first;

    # Now let's generate one password for each day
    my %password_list;
    for (my $iter = 0; $iter < $password_count; $iter++) {
        # Last two digits of the year
        $year = substr($date->year,2,2);

        # Number of the month (no leading zero; January == 0)
        $month = $date->month;

        # Day of the month
        $day_of_month = $date->day;

        # Day of the week. Normally 0 would be Sunday but we need it to be Monday.
        $day_of_week = $date->day_of_week - 1;
        if ($day_of_week < 0) {
           $day_of_week = 6;
        }

        # Now build the lists that will be used by each other.

        # list1
        for (my $i = 0; $i <= 4; $i++) {
           my @xx = @{$table1->[$day_of_week]};
           $list1[$i] = $xx[$i];
        }
        $list1[5] = $day_of_month;
        if ((($year + $month) - $day_of_month) < 0) {
           $list1[6] = ((($year + $month) - $day_of_month) + 36) % 36;
        } else {
           $list1[6] = (($year + $month) - $day_of_month) % 36;
        }
        $list1[7] = (((3 + (($year + $month) % 12)) * $day_of_month) % 37) % 36;

        # $list2
        for (my $i = 0; $i <= 7; $i++) {
           $list2[$i] = ord(substr($seedeight,$i, 1)) % 36;
        }

        # $list3
        for (my $i = 0; $i <= 7; $i++) {
           $list3[$i] = ((($list1[$i] + $list2[$i])) % 36);
        }
        $list3[8] = ($list3[0] + $list3[1] + $list3[2] + $list3[3] + $list3[4] +
                     $list3[5] + $list3[6] + $list3[7]) % 36;
        my $num8 = ($list3[8] % 6);
        $list3[9] = int($num8 * $num8);

        # $list4
        for (my $i = 0; $i <= 9; $i++) {
           my @xx = @{$table2->[$num8]};
           $list4[$i] = $list3[$xx[$i]];
        }

        # $list5
        for (my $i = 0; $i <= 9; $i++) {
           $list5[$i] = (ord(substr($seedten,$i, 1)) + $list4[$i]) % 36;
        }


        # Finally, build the password of the day.
        my @password_of_the_day = ();
        my $len = $#list5 + 1;
        for (my $i = 0; $i < $len; $i++) {
           $password_of_the_day[$i] = $alphanum[$list5[$i]];
        }
        $password_list{$date->ymd} = join('',@password_of_the_day);

        # For each iteration advance the date one day
        $date = $date->add(days => 1);
    }

    return %password_list;
}
