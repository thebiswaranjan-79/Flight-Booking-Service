const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
   
      const response = await this.model.create(data);
      return response;
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CRUD Repo : DESTROY ");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CRUD Repo : GET ");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CRUD Repo : GET ALL ");
      throw error;
    }
  }

  async update(id, data) { // data is an Object => data= {key : value}
    try {
      const response = await this.model.update(data, {
        where: {
            id : id,
        }
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in the CRUD Repo : UPDATE ");
      throw error;
    }
  }
}

module.exports = CrudRepository;
