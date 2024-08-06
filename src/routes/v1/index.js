const express = require("express");
const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");
const cityRoutes = require("./city-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", airportRoutes);

router.get("/info", InfoController.info);

module.exports = router;
