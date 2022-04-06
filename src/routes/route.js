const express = require('express');
const logger = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');
const module4 = require('../lodash/module4')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(logger.welcome());
    console.log(helper.printDate());
    console.log(helper.printMonth());
    console.log(helper.getBatchInfo());
    console.log(formatter.trim());
    console.log(formatter.changetoLowerCase())
    console.log(formatter.changeToUpperCase());
    res.send(logger.welcome()+"<br>"+helper.printDate()+"<br>"+helper.printMonth()+"<br>"+helper.getBatchInfo()+"<br><br>"+formatter.trim()+"<br><br>"+formatter.changetoLowerCase()+"<br><br>"+formatter.changeToUpperCase());
});

router.get('/hello',function(req,res){
    console.log(module4.monthSplitedArr)
    console.log(module4.usingTail)
    console.log(module4.usingUnion)
    console.log(module4.usingFromPairs)
    res.send("We are working on Hello path")
});

module.exports = router;
// adding this comment for no reason