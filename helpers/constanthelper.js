/**
 * Description:常量帮助类
 * User: atinosun
 * Date: 2017/7/29
 * Time: 10:41
 */

const helper = {};
helper.paramError = -1;
helper.successCode = 0;

helper.resMsg = {
    "-1": "Your param is wrong.",
    "0": "Your request has succeeded."
};

helper.returnMsg = function (res, code, msg = "", data = "") {
    if (msg == "") {
        msg = helper.resMsg[code];
    }

    if (data == "") {
        res.send({
            "code": code,
            "msg": msg
        });
    } else {
        res.send({
            "code": code,
            "msg": msg,
            "data": data
        });
    }

};

module.exports = helper;