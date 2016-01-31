"use strict";

let router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('indexView');
});

module.exports = router;