var express = require('express');
var router = express.Router();
var {from} = require("rxjs");
const axios = require('axios');

//1. USING   PROMISE
router.get('/', function(req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/users/')
  .then(function (response) {
    res.send( response.data);
  })
  .catch(function (error) {
    res.send(error);
  }) 
});

//2. USING ASYNC AWAIT
router.get('/', function(req, res, next) {
  GetUsersAsync(res);
});

async function GetUsersAsync(res){
  try{
    console.log("testing")
    let users =await axios.get('https://jsonplaceholder.typicode.com/users/');
    console.log(users.data);
    res.send(users.data);
  }
  catch(error){
    res.send(error);
  }
}

//3. USING OBSERVABLES
router.get('/', function(req, res, next) {
  from(axios.get('https://jsonplaceholder.typicode.com/users/')).subscribe(data => res.send(data.data));
});

module.exports = router;
