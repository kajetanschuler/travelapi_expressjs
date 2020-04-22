// Created - 02.04.2020 - by Kajetan

const serverless = require('serverless-http');
const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
//const allowCrossDomain = require("./app/middleware/cors.js");

const app = express();

module.exports.handler = function(event, context, callback) {

    callback(null, {
        statusCode: '200',
        body: "Hello world",
        headers: {
            // This is ALSO required for CORS to work. When browsers issue cross origin requests, they make a 
            // preflight request (HTTP Options) which is responded automatically based on SAM configuration. 
            // But the actual HTTP request (GET/POST etc) also needs to contain the AllowOrigin header. 
            // 
            // NOTE: This value is *not* double quoted: ie. "'www.example.com'" is wrong
            "Access-Control-Allow-Origin": "*"
        }
    });

}
// Enable CORS for all Endpoints
//app.use(cors());
//app.use(allowCrossDomain);

// parse requests of content type: application/json
app.use(bodyParser.json());

// parse requests of conten type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to TravelAPI"});
});

// Include the routes
require("./app/routes/city_routes.js")(app);
require("./app/routes/country_routes.js")(app);

module.exports.handler = serverless(app);