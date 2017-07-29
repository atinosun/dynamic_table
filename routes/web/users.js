/**
 * Description:用户展示页面路由
 * User: atinosun
 * Date: 2017/7/29
 * Time: 11:09
 */
var express = require('express');

var router = express.Router();

router.route('/users')
    .get(function (req, res) {
        res.render('users', {
            title: "查看页面",
            month: "Nov",
            savings: "10000"
        })
        ;
        /* $.ajax({
         type: "GET",
         dataType: "json",
         url: "../api/users?page=1",
         //data: { id: id, name: name },
         success: function(json) {
         var typeData = json.Module;
         $.each(typeData, function(i, n) {
         var tbBody = ""
         var trColor;
         if (i % 2 == 0) {
         trColor = "even";
         }
         else {
         trColor = "odd";
         }
         tbBody += "<tr class='" + trColor + "'><td>" + n.ModuleNum + "</td>" + "<td>" + n.ModuleName + "</td>" + "<td>" + n.ModuleDes + "</td></tr>";
         $("#myTb").append(tbBody);
         });
         },
         error: function(json) {
         alert("加载失败");
         }
         });
         };*/
    });


module.exports = router;