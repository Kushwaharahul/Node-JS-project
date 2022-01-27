var events = require('events');
var eventEmitter = new events.EventEmitter();
var myCallback = function(data) {
     console.log('Got data: '+data);
};

eventEmitter.on('RojrocksEvent', myCallback);
var fn = function() {
      eventEmitter.emit('RojrocksEvent','Data from Emitter');
};
fn();