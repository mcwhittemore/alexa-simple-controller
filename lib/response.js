module.exports = function(opts) {
  opts = opts || {};

  var res = {
    version: '1.0',
    response: {},
    shouldEndSession: opts.end === false ? false : true
  }

  if (opts.say) {
    res.response.outputSpeech = {
      type: 'PlainText',
      text: opts.say
    }
  }

  return res;
}
