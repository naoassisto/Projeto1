const express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


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