module.exports = app => {
    const city = require('../controller/travelapi_controller.js');

    // Find City by ID
    app.get("/city/:cityId", city.findOne);

    // Find City from Parameters
    app.get("/recommendation");

}