const { StatusCodes } = require("http-status-codes");
const { FlightService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const airport = require("../models/airport");

async function createFlight(req, res) {
  try {
    const flight = await FlightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      deparatureAirportId: req.body.deparatureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      deparatureTime: req.body.deparatureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
      const flights = await FlightService.getAllFlights(req.query);
      SuccessResponse.data = flights;
      return res
              .status(StatusCodes.CREATED)
              .json(SuccessResponse);
  } catch(error) {
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
};
