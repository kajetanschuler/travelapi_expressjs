const City = require('../models/travelapi_model.js');

// Find City by ID
exports.findOne = (req, res) => {
    City.getById(req.params.cityId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found City with id ${req.params.cityId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.cityId
          });
        }
      } else res.send(data);
    });
  };