const hostname = '127.0.0.1'; // IP Adress
const port = 3030; // Door

var express = require(“express”);
var router = express.Router();

var http = require('http');
var path = require("path");


// app.get("/readAWSData", (req, res) => { // Método Get, pega as informações disponíveis no EndPoint, sendo assim, é possível pegar os dados enviados da Aws para esse EndPoint

//     res.statusCode = 200;

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     var selectCommand = 'Query SQL';

//     aws.all(sql, [], (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         res.json(awsData);
//     });
//     aws.close();
// });

// router.get(“/”, function(req, res, next) {
//     res.send(“API is working properly”);
// });

// module.exports = router;