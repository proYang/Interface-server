/**
 * Created by Slane on 2016/11/13.
 */
const   http        = require('http'),
        url         = require('url');

    function start (router) {
        function onRequest(req, res) {
            var pathname = url.parse(req.url).pathname;
            console.log("Requset For " + pathname + "Recevied");

            var body = "";

            req.addListener('data', function (chunk) { body += chunk });
            req.addListener('end', function () {

                // Dispatch the request to the router
                router.handle(req, body, function (result) {
                    res.writeHead(result.status, result.headers);
                    res.end(result.body);
                });
            });
        }



        http.createServer(onRequest).listen(8888);
        console.log("Server has started.Port:8888");
    }
module.exports.start = start;