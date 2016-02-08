/**
 * Created by Jun on 2016-02-08.
 */
var express = require('express');
var router = express.Router();
var db=require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
    db.memoModel.find({},function(err,docs){
        console.log(docs);
    })
});
module.exports = router;