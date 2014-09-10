/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var path = require('path');
var test = require('tap').test;

var transformTools = require('browserify-transform-tools');
var provify = require('../');

var dummy = path.resolve(__dirname, '../fixtures/dummy.js');
var contentTap = 'require(\'tap\');';
var contentTape = 'require(\'tape\');';
var contentUnrelated = 'require(\'hacktheplanet\');';

var testContent = function (t, content, result) {
  var expected = result || content;
  transformTools.runTransform(provify, dummy, {content: content}, function (err, transformed) {
    t.plan(2);
    t.equal(err, null);
    t.equal(transformed, expected);
  });
};

var expectedOutput = 'require(\'prova\');';

test('tap requires should be transformed', function (t) {
  testContent(t, contentTap, expectedOutput);
});

test('tape requires should be transformed', function (t) {
  testContent(t, contentTape, expectedOutput);
});

test('unrelated requires should not be transformed', function (t) {
  testContent(t, contentUnrelated);
});
