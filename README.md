# Arris Password of the Day Generator

-----------------------------------

**PLEASE READ THIS!**

1 - In the past few years, some internet service providers have been changing their modem configurations in ways that prevent this tool from working. If it doesn't work with your modem even though it is in the supported modems list, I'm afraid there's nothing I can do about it.

2 - I am not Spanish or from Latin America. Please don't assume I can speak Spanish or that I have to reply to you in Spanish.

-----------------------------------

[![NPM Version](https://img.shields.io/npm/v/@borfast/arrispwgen.svg?style=flat)](https://npmjs.org/package/@borfast/arrispwgen)
![License](https://img.shields.io/github/license/borfast/arrispwgen)
[![Build Status](https://travis-ci.org/borfast/arrispwgen.svg?branch=master)](https://travis-ci.org/borfast/arrispwgen)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/borfast/arrispwgen/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/borfast/arrispwgen/?branch=master)
[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B61NQ8A)

Do you need an Arris modem password? Are you stuck with your Arris modem, in a message that says "in order to access advanced features you must enter the password of the day"? Then you came to the right place!

## Description

This is the _library_ that implements the [Arris password of the day generator](https://arrispwgen.borfast.com) for various Arris cable modems.

Unless you want to help with the code or use it in your own project, you are probably just interested in the [online generator](https://arrispwgen.borfast.com). You may also want to check the [CLI](https://github.com/borfast/arrispwgen-cli) or the [Android app](https://play.google.com/store/apps/details?id=com.grounduphq.arrispwgen) (which is also [open source](https://github.com/borfast/arrispwgen-android)).

For a list of supported modems, troubleshooting options and more information, please visit the [help page](https://arrispwgen.borfast.com/help).


## How to use

Install with `npm install @borfast/arrispwgen`.


The API consists of only two functions: `generate()`, to generate a single password for a given date, and `generate_multi()`, to generate multiple passwords for a range of dates.

`generate()` has one required parameter and one optional parameter:

* `date` (required): a `Date` object representing the date for which a password should be generated;
* `seed` (optional): a string to be used as the seed for the password generator.

It returns a string which is the password for the given date.

`generate_multi()` has two required parameters and one optional parameter:

* `startdate` (required): a `Date` object representing the _first_ date for which a password should be generated;
* `enddate` (required): a `Date` object representing the _last_ date for which a password should be generated;
* `seed` (optional): a string to be used as the seed for the password generator.

It returns a dictionary/object of which the values are the passwords for each given date and the keys are the [primitive value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf) of the corresponding `Date` object.
