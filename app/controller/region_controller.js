const Region = require("../models/region_model.js");

exports.findAll = (req, res) => {
    Region.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: "Error retrieving Regions"
        });
      else res.send(data);
    });
  };


  // Find Region by Name
  exports.findByName = (req, res) => {
    Region.getByName(req.params.regionName, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Region with name ${req.params.regionName}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving City with name " + req.params.regionName
          });
        }
      } else res.send(data);
    });
  };