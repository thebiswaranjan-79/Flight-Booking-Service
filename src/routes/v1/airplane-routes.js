const express = require('express');

const {AirplaneController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares')

const router = express.Router();

// /api/v1/airplane POST 
router.post('/', AirplaneMiddlewares.validateCreateRequest ,AirplaneController.createAirplane);

// api/v1/airplanes GET 
router.get('/', 
    AirplaneController.getAirplanes);

// api/v1/airplane/id DELETE 
router.get('/:id', AirplaneController.getAirplane);

router.get('/:id', AirplaneController.destroyAirplane);
router.get('/:id', AirplaneController.destroyAirplane);



module.exports = router;