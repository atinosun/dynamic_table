/**
 * Description:users控制器
 * User: atinosun
 * Date: 2017/7/29
 * Time: 10:32
 */
var constHelper = require('../helpers/constanthelper');
var usersController = {};

usersController.inquire = function (req, res) {
    if (!("page" in req.query) || req.query.page <= 0 || req.query.page >= 100) {
        constHelper.returnMsg(res, constHelper.paramError);
        return;
    }
    ;

    let page = req.query.page;
    let data = [];
    for (let i = 1; i <= 20; i++) {
        let index = (page - 1) * 20 + i;
        data.push({
            "id": index,
            "name": "name" + index
        });
    }
    ;
    constHelper.returnMsg(res, constHelper.successCode, "", data);
};


module.exports = usersController;