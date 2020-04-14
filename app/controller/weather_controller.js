// Created - 11.04.2020 - by Kajetan
 const Weather = require("../models/weather_model.js");

 // Find all weather stations with assigned cities
 exports.findAll = (req, res) => {
     Weather.getAll((err, data) => {
        if (err) {
            if (err.kind = "not_found") {
                res.status(404).send({
                    message: "Did not find weather stations"
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving weather stations"
                 });
            }
        } else res.send(data);
     });
 };