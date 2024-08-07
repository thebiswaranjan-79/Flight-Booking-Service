const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["flightNumber not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["airplaneId not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.deparatureAirportId) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      [
        "deparatureAirportId not Found in the onComing Req in the Correct Form ",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["arrivalAirportId not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["arrivalTime not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.deparatureTime) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["deparatureTime not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["price not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wring while creating Flight";
    ErrorResponse.error = new AppError(
      ["totalSeats not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  next();
}

function validateUpdateSeatsRequest(req, res,next){
  if (!req.body.seats) {
    ErrorResponse.message = "Something went wring while Updating Flight";
    ErrorResponse.error = new AppError(
      ["Seats not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  next();
}

module.exports = {
  validateCreateRequest,
  validateUpdateSeatsRequest
};
