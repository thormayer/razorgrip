var express = require('express');
var router = express.Router();
const http = require('http');
const request = require('request');
const url = 'http://northwind.servicestack.net/customers.json';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/countries', function (req, res, next) {
  request(url, (error, response, body) => {
    // let data = response.statusCode === 200 ? body : error;
    // res.send(data);
    if(response.statusCode === 200) {
      let data = JSON.parse(response.body);
      res.send(data.Customers);
    } else res.send(error);
  });
});


router.get('/city/:id', function (req, res, next) {
  let id = req.params.id;
  request(url, (error, response, body) => {
    if(response.statusCode === 200) {
      let data = JSON.parse(response.body);
      res.send(data.Customers.filter(el => el.Id.includes(id.toUpperCase())));
    } else res.send(error);
  });
});

module.exports = router;
