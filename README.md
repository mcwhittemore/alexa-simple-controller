# Alexa Simple Controller

Quickly write lambda functions for the Amazon Echo.

This is not really well tested.

## Usage

```js
var controller = require('alexa-simple-controller')('./handler');
controller(alexaEvent, lambdaContext, callback);
```

## Notes

The `LaunchRequest` invocation would need to be at `./handler/launch-request.js` for the above example.

All handlers will be the snake cased version of the invocation sent by Amazon.

