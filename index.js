'use strict';
const Authorizer = require('./lib/AuthorizerModule');
const authorizer = new Authorizer();

console.log('Loading function');

exports.handler = (event, context, callback) => {
  // The callback function should be used to return from the handler
  // The callbacks first argument is an error
  // The callbacks second argument is for a successful JSON response

  if (authorizer.authorize(event, context)) {
    callback (null, {
      message: `Token is ${event.authorizationToken}`
    });
  } else {
    callback({message: 'FAIL'}, null);
  }
};