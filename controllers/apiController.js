"use strict";

let router = require('express').Router();
let data = require(appRoot + '/data/data.json');
let ordersModel = require(appRoot + '/models/ordersModel.js');

/**
 * JSON Api for all orders
 * */


let ordersModelObject = new ordersModel(data.orders);

router.get('/allCompanies', function(req, res) {

    res.json(ordersModelObject.getAllCompanies());

});

router.get('/allAddresses', function(req, res) {

    res.json(ordersModelObject.getAllAddresses());

});

router.get('/getData', function(req, res) {
    res.json(ordersModelObject.getData());

});

router.get('/getOrderedDataByOccurance', function(req, res) {
    res.json(ordersModelObject.getOrderedDataByOccurence());

});

router.post('/getSearchedData', function(req, res) {

    let queryData = req.body;

    res.json(ordersModelObject.getSearchedData(queryData));

});

router.post('/deleteOrderById', function(req, res) {

    let queryData = req.body;
    res.json(ordersModelObject.deleteOrderById(queryData));

});

module.exports = router;