const express = require('express');

const {AirportController} = require('../../controllers');
const {AirportMiddlewares} = require('../../middlewares')

const router = express.Router();

// /api/v1/airports POST 
router.post('/', AirportMiddlewares.validateCreateRequest ,AirportController.createAirport);

// api/v1/airplanes GET 
router.get('/', 
    AirportController.getAirports);

// api/v1/airplane/id DELETE 
router.get('/:id', AirportController.getAirport);

router.delete('/:id', AirportController.destroyAirports);




module.exports = router;