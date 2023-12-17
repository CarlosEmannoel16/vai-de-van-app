import { Http } from "../@shared/Http";

class UserServiceHttp extends Http {
  constructor() {
    super();
  }

  async getUser(id) {
    const response = await this.httpClient.get(`/users/${id}`);
    return response.data;
  }
}

export default new UserServiceHttp();
