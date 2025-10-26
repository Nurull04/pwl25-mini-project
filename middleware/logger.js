const morgan = require('morgan');

const logger = morgan('[:date[clf]] :method :url :status :response-time ms');

module.exports = logger;