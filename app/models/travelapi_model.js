const sql = require('./db.js')

// Contstructor for city
const City = function(city) {
    this.cityName = city.cityName;
    this.cityId = city.cityId;
    // mehr?
};

City.getById = (cityId, result) => {
    sql.query(`SELECT * FROM city_data WHERE cityId = ${cityId}`, (err, res) => {
        if (err) {
            console.log("error: ". err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found city: ", res[0]);
            result(err, res[0]);
            return;
        }

        // not found city with id
        result({kind: "not_found"}, null);
    });
};

module.exports = City;