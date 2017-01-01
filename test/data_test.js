import tape from 'tape';
import { test_dates, custom_seed, test_list1, test_list2_using_default_seed, test_list2_using_custom_seed,
    test_list3_using_default_seed, test_list3_using_custom_seed, test_list4_using_default_seed,
    test_list4_using_custom_seed, test_list5_using_default_seed, test_list5_using_custom_seed,
    test_num8_using_default_seed, test_num8_using_custom_seed
} from './helper_data';
import { list1, list2, list3, list4, list5, num8, indexers } from '../src/data';
import { DEFAULT_SEED } from '../src/constants';

function simple_date(date) {
    return date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});
}


tape('Should generate the correct "list1" for the given dates', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let l1 = list1(date);
        let timestamp = date.getTime();

        assert.test('list1 for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            test.deepEqual(l1, test_list1[timestamp], 'list1 should be correct.');
            test.end();
        });
    });

    assert.end();
});


tape('Should generate the correct "list2"', function(assert) {
    assert.test('list2 using default seed (' + DEFAULT_SEED + ')', function (test) {
        let l2 = list2(DEFAULT_SEED);
        test.deepEqual(l2, test_list2_using_default_seed, 'list2 should be correct.');
        test.end();
    });

    assert.test('list2 using custom seed (' + custom_seed + ')', function (test) {
        let l2 = list2(custom_seed);
        test.deepEqual(l2, test_list2_using_custom_seed, 'list2 should be correct.');
        test.end();
    });

    assert.end();
});


tape('Should generate the correct "list3"', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let l1 = list1(date);
        let timestamp = date.getTime();

        assert.test('list3 using default seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(DEFAULT_SEED);
            let l3 = list3(l1, l2);
            test.deepEqual(l3, test_list3_using_default_seed[timestamp], 'list3 should be correct.');
            test.end();
        });

        assert.test('list3 using custom seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(custom_seed);
            let l3 = list3(l1, l2);
            test.deepEqual(l3, test_list3_using_custom_seed[timestamp], 'list3 should be correct.');
            test.end();
        });
    });

    assert.end();
});


tape('Should generate the correct "list4"', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let l1 = list1(date);
        let timestamp = date.getTime();

        assert.test('list4 using default seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(DEFAULT_SEED);
            let l3 = list3(l1, l2);
            let l4 = list4(l3);
            test.deepEqual(l4, test_list4_using_default_seed[timestamp], 'list4 should be correct.');
            test.end();
        });

        assert.test('list4 using custom seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(custom_seed);
            let l3 = list3(l1, l2);
            let l4 = list4(l3);
            test.deepEqual(l4, test_list4_using_custom_seed[timestamp], 'list4 should be correct.');
            test.end();
        });
    });

    assert.end();
});


tape('Should generate the correct "list5"', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let l1 = list1(date);
        let timestamp = date.getTime();

        assert.test('list5 using default seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(DEFAULT_SEED);
            let l3 = list3(l1, l2);
            let l4 = list4(l3);
            let l5 = list5(DEFAULT_SEED, l4);
            test.deepEqual(l5, test_list5_using_default_seed[timestamp], 'list5 should be correct.');
            test.end();
        });

        assert.test('list5 using custom seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(custom_seed);
            let l3 = list3(l1, l2);
            let l4 = list4(l3);
            let l5 = list5(custom_seed, l4);
            test.deepEqual(l5, test_list5_using_custom_seed[timestamp], 'list5 should be correct.');
            test.end();
        });
    });

    assert.end();
});


tape('Should generate the correct "num8"', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let l1 = list1(date);
        let timestamp = date.getTime();

        assert.test('num8 using default seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(DEFAULT_SEED);
            let l3 = list3(l1, l2);
            let n8 = num8(l3);
            test.equal(n8, test_num8_using_default_seed[timestamp], 'num8 should be correct.');
            test.end();
        });

        assert.test('num8 using custom seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let l2 = list2(custom_seed);
            let l3 = list3(l1, l2);
            let n8 = num8(l3);
            test.equal(n8, test_num8_using_custom_seed[timestamp], 'num8 should be correct.');
            test.end();
        });
    });

    assert.end();
});


tape('Should generate the correct "indexers"', function(assert) {
    test_dates.forEach(function (date) {
        date = new Date(date);
        let timestamp = date.getTime();

        assert.test('indexers using default seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let idx = indexers(date, DEFAULT_SEED);
            test.deepEqual(idx, test_list5_using_default_seed[timestamp], 'indexers should be correct.');
            test.end();
        });

        assert.test('indexers using custom seed for: ' + simple_date(date) + ' (timestamp: ' + timestamp + ')', function (test) {
            let idx = indexers(date, custom_seed);
            test.deepEqual(idx, test_list5_using_custom_seed[timestamp], 'indexers should be correct.');
            test.end();
        });
    });

    assert.end();
});
