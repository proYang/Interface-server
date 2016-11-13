/**
 * Created by Slane on 2016/11/13.
 */
const   http        = require('http'),
        url         = require('url'),
        port        = require('../config/config').port;

    function start (router) {
        function onRequest(req, res) {
            let pathname = url.parse(req.url).pathname;
            console.log("Requset For " + pathname + "Recevied");

            let body = "";

            req.addListener('data', function (chunk) { body += chunk });
            req.addListener('end', function () {

                // Dispatch the request to the router
                router.handle(req, body, function (result) {
                    res.writeHead(result.status, result.headers);
                    res.end(result.body);
                });
            });
        }



        http.createServer(onRequest).listen(port);
        console.log("Server has started.Port:" + port);
    }
module.exports.start = start;