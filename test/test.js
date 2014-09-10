var path = require('path');
var test = require('tap').test;

var transformTools = require('browserify-transform-tools');
var provify = require('../');

var dummy = path.resolve(__dirname, '../fixtures/dummy.js');
var contentTap = 'require(\'tap\');';
var contentTape = 'require(\'tape\');';
var contentUnrelated = 'require(\'hacktheplanet\');';

test('tap requires should be transformed', function (t) {
  t.plan(1);
  transformTools.runTransform(provify, dummy, {content: contentTap}, function (err, transformed) {
    if (err) { throw new Error(err); }
    t.equal(transformed, 'require(\'prova\');');
  });
});

test('tape requires should be transformed', function (t) {
  t.plan(1);
  transformTools.runTransform(provify, dummy, {content: contentTape}, function (err, transformed) {
    if (err) { throw new Error(err); }
    t.equal(transformed, 'require(\'prova\');');
  });
});

test('unrelated requires should not be transformed', function (t) {
  t.plan(1);
  transformTools.runTransform(provify, dummy, {content: contentUnrelated}, function (err, transformed) {
    if (err) { throw new Error(err); }
    t.equal(transformed, contentUnrelated);
  });
});
