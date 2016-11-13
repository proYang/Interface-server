const   server  =    require("./services/server"),
        routes  =    require("./routes/routes");

server.start(routes.router);