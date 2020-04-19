// Created - 19.04.2020 - by Kajetan

module.exports = app => {
    const swaggerUi = require("swagger-ui-express");
    swaggerDocument = require("../docs/swagger.json");

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

