'use strict';

var transformTools = require('browserify-transform-tools');

var options = {
  jsFilesOnly: true
};

module.exports  =  transformTools.makeRequireTransform('provify', options,
  function (args, opts, done) {
    if (args[0] === 'tap' || args[0] === 'tape') {
      return done(null, 'require(\'prova\')');
    }
    else {
      return done();
    }
  });
