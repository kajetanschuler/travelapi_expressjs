const sql = require("./db.js");

// constructor for region
const Region = function(region) {
  this.regionName = region.regionName;
  this.regionCode = region.regionCode;
};

Region.getAll = result => {
  sql.query("SELECT regionName FROM city_data", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Found region: ", res);
    result(null, res);
    return;
  });
};


Region.getByName = (regionName, result) => {
  sql.query(`SELECT countryCode, timezone FROM city_data WHERE regionName = "${regionName}"`, (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
      }

      if (res.length) {
          console.log("Found region/regions: ", res);
          result(err, res);
          return
      }

      result({kind: "not_found"}, null);
  });
};


module.exports = Region;
