/**
 * Description:users api路由
 * User: atinosun
 * Date: 2017/7/29
 * Time: 10:22
 */
var express = require('express');
var usersController = require('../../controllers/users');
var router = express.Router();

router.route('/users')
    .get(function (req, res) {
        usersController.inquire(req, res);
    });


module.exports = router;
