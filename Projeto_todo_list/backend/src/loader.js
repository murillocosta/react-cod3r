const server = require('./config/server');
require('./config/db/database');

require('./config/routes/routes')(server);
