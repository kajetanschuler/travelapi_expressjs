module.exports = app => {
    const country = require('../controller/country_controller.js');

    // Find all countries and corresponding codes
    app.get("/api/v1/countries", country.findAll);
}