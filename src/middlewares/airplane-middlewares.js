const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wring while creating airplane";
    ErrorResponse.error = new AppError(
      ["Model numebr not Found in the onComing Req in the Correct Form "],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
