var test = require('tap').test;
var provify = require('../');

test('The Module Should not do anything', function (t) {
  t.plan(1);
  t.equal(provify, 'I DO NOT DO ANYTHING!!!');
});
