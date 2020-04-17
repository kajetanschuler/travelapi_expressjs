// Created - 02.04.2020 - by Kajetan

module.exports = app => {
    const city = require('../controller/city_controller.js');

    // Find all cities and corresponding IDs
    app.get("/cities", city.findAll);

    // Find City by ID
    app.get("/cities/:cityId", city.findOne);

    // Find City from Parameters
    app.get("/cities/name/:cityName", city.findName);


}