'use strict';

// Your first function handler
module.exports.hello = (event, context, cb) => {
  console.log(process.env);
};

// You can add more handlers here, and reference them in serverless.yml
