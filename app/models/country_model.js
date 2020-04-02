const sql = require('./db.js');

// Constructor for country
const Country = function(country) {
    this.countryCode = Country.countryCode;
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

module.exports = Country;