/**
 * Created by Slane on 2016/9/29.
 */
const mysql     = require('mysql2'),
      config    = require('../../config/config');

const db = mysql.createConnection(config.db);
db.connect(function (err) {
    if (err) {
        console.log("Sql connect failed\n");
    } else {
        console.log("Sql connect succeed\n");
    }
});

module.exports = db;