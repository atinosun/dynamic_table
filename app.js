/**
 * Description:入口文件
 * User: atinosun
 * Date: 2017/7/29
 * Time: 10:14
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var apiPath = './routes/api/';
var webPath='./routes/web/';
var apiRouter = express.Router();
var webRouter=express.Router();
var usersRouter = require(apiPath + 'users');
var userViewRouter=require(webPath+'users');

app.set('view engine', 'jade');
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRouter);
apiRouter.use(usersRouter);


app.use('/',webRouter);
webRouter.use(userViewRouter);



app.listen(3000, function () {
    console.log('Express is running now on port 3000!');
});
