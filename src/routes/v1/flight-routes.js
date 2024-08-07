const express = require('express');

const {FlightController} = require('../../controllers');
const {FlightMiddlewares} = require('../../middlewares')

const router = express.Router();

// /api/v1/flights POST 
router.post('/', FlightMiddlewares.validateCreateRequest ,FlightController.createFlight);

// /api/v1/flights?MUM_DEL GET

router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlight);

// PATCH request 
router.patch('/:id/seats',FlightMiddlewares.validateUpdateSeatsRequest ,FlightController.updateSeats);

module.exports = router;