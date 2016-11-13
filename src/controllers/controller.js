/**
 * Created by Slane on 2016/11/13.
 */
var findUser = require('../models/testDB').findUser;

module.exports.getUser = function (id) {
    return findUser(id);
}