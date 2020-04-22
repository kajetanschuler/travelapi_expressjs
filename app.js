// Created - 02.04.2020 - by Kajetan

const serverless = require('serverless-http');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Enable CORS for all requests
app.use(cors());

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

// module.exports.handler = serverless(app); //