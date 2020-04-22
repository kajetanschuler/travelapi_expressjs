//created by Svenja

const Region = require("../models/region_model.js");


//find all region
exports.findAll = (req, res) => {
    Region.getAll((err, data) => {
      if (err) {
        if (err.kind == "not found") {
        res.status(500).send({
          message: "Did not find regions"
        });
      }
        else {
          res.status(500).send({
            message: "Error retrieving regions"
          });
        }
      }
      else res.send(data);
    });
  };


// Find details for one region by regionCode or regionName
exports.findRegionDetails = (req, res) => {
  Region.getRegionDetails((err, data) => {
    if (err) {
      if (err.kind == "not found") {
      res.status(500).send({
        message: "Did not find regions with code:" + req.params.regionCode
      });
    }
      else {
        res.status(500).send({
          message: "Error retrieving regions with Code" + req.params.regionCode
        });
      }
    }
    else res.send(data);
  });
};



// Find all cities in region by regionCode or regionName
exports.findCitiesInRegion = (req, res) => {
  Region.getCitiesInRegion(req.params.region, (err, data) => {
    if (err) {
     if (err.kind == "not_found") {
       res.status(404).send({
            message: "Did not find region with name" + req.params.region
       });
      }
     else {
       res.status(500).send({
         message: "Error retrieving regions with name" + req.params.region
       });
      }
    }
      else res.send(data);
  });
};
