const express = require("express");
const bodyParser = require("body-parser");

const app = express();

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

// set port to listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});