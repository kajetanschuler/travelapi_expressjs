// Created - 11.04.2020 - by Kajetan

module.exports = app => {
    const weather = require("../controller/weather_controller.js");

    // Get all weather stations with assigned cities
    app.get("/api/v1/weather", weather.findAll);
}