module.exports = function(event) {
  var out = {};

  try {
    out.session = event.session ? event.session.sessionId : null;
    out.user = event.session ? event.session.user.userId : event.context.System.user.userId;
    out.name = event.request.intent ? event.request.intent.name : event.request.type;
    out.dateTime = new Date(event.request.timestamp);
    if (event.request.intent) Object.keys(event.request.intent.slots || {}).forEach(function(key) {
      out[key] = event.request.intent.slots[key].value;     
    });
  }
  catch (err) {
    console.log('event', JSON.stringify(event, null, 2));
    throw err;
  }

  return out;
}
