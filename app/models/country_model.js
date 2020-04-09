const sql = require('./db.js');

// Constructor for country
const Country = function(country) {
    this.countryCode = Country.countryCode;
    this.countryName = Country.countryName;
};

Country.getAll = result => {
    sql.query("SELECT countryName, countryCode FROM country_data;", (err, res) => {
        if (err) {
            console.log("errors: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found country/countries: ", res);
            result(err, res);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

// Function that return regions of country specified with the countryCode
Country.getRegionsByCountryCode = result => {
    sql.query();

}

// Function that return regions of country specified with the countryName
Country.getRegionsByCountryName = result => {
    sql.query();

}

// Function that returns all cities for given CountryCode
Country.getCitiesByCountryCode = (countryCode, result) => {
    sql.query(`SELECT cityId, cityName FROM city_data WHERE countryCode = "${countryCode}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found city/cities: ", res);
            result(err, res);
            return
        }

        result({kind: "not_found"}, null);
    });
};

module.exports = Country;