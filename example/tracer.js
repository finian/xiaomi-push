var Tracer = require('../lib').Tracer;
var moment = require('moment');

var config = require('./config');

var tracer = new Tracer({
  appSecret: config.appSecret,
  production: config.production
});

tracer.getMessageStatus('slm48b03442115760871Zg', config.callback);

var startDate = moment().subtract(1, 'days').valueOf();
var endDate = moment().valueOf();
// tracer.getMessagesStatus(startDate, endDate, config.callback);
