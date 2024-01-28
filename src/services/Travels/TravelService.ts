import { Http } from "../@shared/Http";


export interface TravelServiceHttpProtocol{
  search({ origin, destiny, dateOfTravel }): Promise<any>;
  getAll(): Promise<any>;
  getById({ id }): Promise<any>;
  create({ origin, destiny, dateOfTravel, timeOfTravel, price }): Promise<any>;
  update({ id, origin, destiny, dateOfTravel, timeOfTravel, price }): Promise<any>;
  delete({ id }): Promise<any>;
  changeStatus({ id, status }): Promise<any>;
}

export class TravelServiceHttp extends Http implements TravelServiceHttpProtocol{
  constructor() {
    super();
  }

  async search({ origin, destiny, dateOfTravel }) {
    return this.http.get(
      `/travel/search?&origin=${origin}&destiny=${destiny}&dateOfTravel=${dateOfTravel}`
    );
  }

  async getAll() {
    return this.http.get("/travel");
  }

  async getById({ id }) {
    return this.http.get(`/travel/${id}`);
  }

  async create({ origin, destiny, dateOfTravel, timeOfTravel, price }) {
    return this.http.post("/travel", {
      origin,
      destiny,
      dateOfTravel,
      timeOfTravel,
      price,
    });
  }

  async update({ id, origin, destiny, dateOfTravel, timeOfTravel, price }) {
    return this.http.put(`/travel/${id}`, {
      origin,
      destiny,
      dateOfTravel,
      timeOfTravel,
      price,
    });
  }

  async delete({ id }) {
    return this.http.delete(`/travel/${id}`);
  }

  async changeStatus({ id, status }) {
    return this.http.patch(`/travel/${id}/${status}`);
  }
}

export default new TravelServiceHttp();
