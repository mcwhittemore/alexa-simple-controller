'use strict';
const parseEvent = require('./lib/parse-event');
const response = require('./lib/response');

module.exports = function(handlerDir) {
  return (event, context, callback) => {
    let opts = parseEvent(event);

    const handler = `${handlerDir}/${toHandler(opts.name)}`;

    try {
      require(handler)(opts, function(err, opts) {
        if (err) return callback(err);
        var res = typeof opts === 'string' ? {say: opts} : opts;
        return callback(null, response(res));
      });
    }
    catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') console.log(`missing handler for ${opts.name}`);
      else {
        console.log(err);
        console.log(JSON.stringify(opts, null, 2));
      }
      callback(err);
    }
  };
};

function toHandler(str) {
  return str.replace(/\./g, '').replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();}).replace(/^-/, '');
}
