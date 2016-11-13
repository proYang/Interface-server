/**
 * Created by Slane on 2016/9/29.
 */
const db = require('./utils/connect')

var data = {
    code:'1',
    data:{},
    msg:''
}

function findUser(id) {
    return new Promise(function (resolve, reject) {
        let sql = 'select * from t_user where id =' + id;
        console.log("SQL:" + sql);
        db.query(sql, function(err, res) {
            if (err) reject(err);
            if (res.length > 0) {
                data.data.id = res[0].id;
                data.data.user_id = res[0].user_id;
                resolve(data);
            } else {
                reject("SQL: can't find");
            }
        })
    });

}

module.exports.findUser = findUser;