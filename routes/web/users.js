/**
 * Description:用户展示页面路由
 * User: atinosun
 * Date: 2017/7/29
 * Time: 11:09
 */
var express = require('express');

var router = express.Router();
var request = require("request");
var constantHelper = require("../../helpers/constanthelper");
router.route('/users')
    .get(function (req, res) {
        if (!("page" in req.query) || req.query.page <= 0) {
            req.query.page = 1;
        }

        request('http://127.0.0.1:3000/api/users?page=' + req.query.page, function (err, response, body) {
            if (err) {
                console.log(err);
                constantHelper(res, constHelper.paramError);
                return;
            }

            res.render('users', {
                title: "查看页面",
                users: JSON.parse(body).data,
                page:req.query.page+1
            });
        })

    });


module.exports = router;