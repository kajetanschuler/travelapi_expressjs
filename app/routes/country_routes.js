// Created - 08.04.2020 - by Kajetan

module.exports = app => {
    const country = require('../controller/country_controller.js');

    // Find all countries and corresponding codes
    app.get("/api/v1/countries", country.findAll);

    // Find all regions in country
    
    // Find all cities in country by CountryCode
    app.get("/api/v1/countries/:countryCode/cities", country.findCitiesInCountryByCode);

    // Find all cities in country by CountryName
    app.get("/api/v1/countries/name/:countryName/cities", country.findCitiesInCountryByName);

}