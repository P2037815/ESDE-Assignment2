//require log4js
const log4js = require('log4js');

//logger configuration
log4js.configure({
    appenders: { fileAppender: { type: 'file', filename: './logs/info.log'}},
    categories: { default: { appenders: ['fileAppender'], level: 'info'}}
});

//create the logger
const logger = log4js.getLogger();

//log a message
logger.info('Hello, log4js!');