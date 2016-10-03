'use strict';

// Your first function handler
module.exports.hello = (event, context, cb) => {
  console.log('Is this working?');
  cb(null, {message: 'lol'});
};

// You can add more handlers here, and reference them in serverless.yml
