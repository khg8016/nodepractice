/**
 * Created by Jun on 2016-02-08.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prdb'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("mongo db connection OK.");
});

var memoShema =mongoose.Schema({
    username : String,
    memo : String
});
module.exports.memoModel = mongoose.model('memo1', memoShema);