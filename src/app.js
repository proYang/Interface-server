var server = require("./services/server");
var routes = require("./routes/routes");

server.start(routes.router);