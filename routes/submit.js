/**
 * Created by Jun on 2016-02-08.
 */
var express = require('express');
var router = express.Router();
var db=require('../db');
/* GET home page. */
router.post('/', function (req,res,err) {
    var memo = new db.memoModel({username: req.body.username, memo: req.body.memo});
    memo.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
        res.end("success");
    });
});
module.exports = router;