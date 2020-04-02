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