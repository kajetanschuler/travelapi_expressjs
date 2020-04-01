module.exports = app => {
    const region = require('../controller/region_controller.js');

    // Find all regions 
    app.get("/regions", region.findAll);

    // Find all regions 
    app.get("/regions/name/:regionName", region.findByName);


}