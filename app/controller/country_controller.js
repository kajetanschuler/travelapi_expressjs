const Country = require('../models/country_model.js');

// Find all countries
exports.findAll = (req, res) => {
    Country.getAll((err, data) => {
        if (err) 
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving countries."
            });
        else res.send(data);
    });
};

//

//

// Find all cities in country
exports.findCitiesInCountry = (req, res) => {
    Country.getCitiesByCountryCode(req.params.countryCode, (err, data) => {
        if (err) 
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving countries."
            });
        else res.send(data);
    });
};
