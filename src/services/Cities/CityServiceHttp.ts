import axios from "axios";
import { Http } from "../@shared/Http";

export class CityServiceHttp extends Http {
  constructor() {
    super();
  }

  async getAllCities() {
    return this.http.get("/stops");
  }

  async getById({ id }) {
    return this.http.get("/stops", { id });
  }

  async getByName({ name }) {
    return this.http.get("/stops", { name });
  }
}

export default new CityServiceHttp();
