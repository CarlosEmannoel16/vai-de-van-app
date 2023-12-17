import axios from "axios";
import { Http } from "../@shared/Http";

export class CityServiceHttp extends Http {
  constructor() {
    super();
  }

  async getAllCities() {
    return this.http.get("/city");
  }

  async getById({ id }) {
    return this.http.get("/city", { id });
  }

  async getByName({ name }) {
    return this.http.get("/city", { name });
  }

  async create(data) {
    return this.http.post("/city", data);
  }

  async update({ id, data }) {
    return this.http.put(`/city/${id}`, data);
  }

  async delete(id) {
    return this.http.delete(`/city/${id}`);
  }

  async changeStatus({ id, status }) {
    return this.http.patch(`/city/${id}`, { status });
  }
}

export default new CityServiceHttp();
