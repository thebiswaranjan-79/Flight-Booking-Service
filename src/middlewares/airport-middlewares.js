const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wring while creating Airport";
    ErrorResponse.error = new AppError(
      ["Name not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wring while creating Airport";
    ErrorResponse.error = new AppError(
      ["Code not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }

  if (!req.body.cityId) {
    ErrorResponse.message = "Something went wring while creating Airport";
    ErrorResponse.error = new AppError(
      ["City Id not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
