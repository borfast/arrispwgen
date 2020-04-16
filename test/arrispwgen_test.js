import tape from 'tape';
import { potd_using_default_seed, potd_using_custom_seed, custom_seed } from './helper_data.js';
import * as a from '../src/arrispwgen.js';

function simple_date(date) {
    return date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});
}

// DRY function for testing single password
function test_single_passwords(assert, data, seed) {
    for (let p in data) {
        let date = (new Date(parseInt(p)));
        let potd = a.generate(date, seed);
        assert.test('Password for: ' + simple_date(date) + ' (timestamp: ' + p + ')', function (test) {
            test.equal(potd, data[p], 'Generated password should be correct.');
            test.end();
        });
    }

    assert.end();
}

tape('Should generate the correct password for the given days with the default seed', function(assert) {
    test_single_passwords(assert, potd_using_default_seed);
});

tape('Should generate the correct password for the given days with a custom seed', function (assert) {
    test_single_passwords(assert, potd_using_custom_seed, custom_seed);
});


tape('Should throw an exception if start date is after end date', function (assert) {
    assert.plan(1);
    let fn = function () {
        let d1 = new Date(2016, 1, 10);
        let d2 = new Date(2016, 1, 5);
        a.generate_multi(d1, d2);
    };

    assert.throws(fn);
});

tape('Should generate a single password if the date interval is just one day', function (assert) {
    assert.plan(1);
    let d1 = new Date(2016, 1, 5);
    let d2 = new Date(2016, 1, 5);
    let potd = a.generate_multi(d1, d2);

    assert.equal(Object.keys(potd).length, 1, 'Should generate 1 password');
});

function test_multiple_passwords(assert, data, start_index, end_index, seed) {
    let keys = Object.keys(data);

    let start = new Date(parseInt(keys[start_index]));
    let end = new Date(parseInt(keys[end_index]));
    let potd = a.generate_multi(start, end, seed);
    let count = end_index - start_index + 1;
    assert.equal(Object.keys(potd).length, count, 'Should generate ' + count + ' passwords');
    for (let p in potd) {
        let date = simple_date((new Date(parseInt(p))));
        assert.test('Password for: ' + date + ' (timestamp: ' + p + ')', function (test) {
            test.equal(potd[p], data[p], 'Generated password should be correct.');
            test.end();
        });
    }
}

tape('Should generate the correct passwords for the given date interval, with the default seed', function (assert) {
    test_multiple_passwords(assert, potd_using_default_seed, 0, 3);
    test_multiple_passwords(assert, potd_using_default_seed, 4, 6);
    assert.end();
});

tape('Should generate the correct passwords for the given date interval, with a custom seed', function (assert) {
    test_multiple_passwords(assert, potd_using_custom_seed, 0, 3, custom_seed);
    test_multiple_passwords(assert, potd_using_custom_seed, 4, 6, custom_seed);
    assert.end();
});
