const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create a new Airplane Object ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
      const airplanes = await airplaneRepository.getAll();
      return airplanes;
  } catch(error) {
      throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplane(id){
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {

      if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError('The airplane You requested is Not Present', error.statusCode);
      }
    throw new AppError(
      "Cannot fetch data of all the  Airplanes  ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplanes(id){
  try {
    const response = await airplaneRepository.destroy();
    return response;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the  Airplanes  ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplanes
};
