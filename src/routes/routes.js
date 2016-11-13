const journey = require('journey');

// Create a Router
const router = new(journey.Router);
// import controllers
const ctrl = require('../controllers/controller');

// Create the routing table
router.map(function () {
    this.root.bind(function (req, res) { res.send("Hello Gays!") });


    this.get('/user').bind(function (req, res, data) {
        if (!data.id) throw 'can not find ID';
        ctrl.getUser(data.id)
            .then(function (data) {
                console.log(data);
                res.send(data);
            },function (err) {
                console.log(err);
        });
    });

    // this.post('/trolls').bind(function (req, res, data) {
    //     sys.puts(data.type); // "Cave-Troll"
    //     res.send(200);
    // });
});

module.exports.router = router;