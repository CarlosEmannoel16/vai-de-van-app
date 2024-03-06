import { Http } from "../@shared/Http";

class UserServiceHttp extends Http {
  constructor() {
    super();
  }

  async getUser(id) {
    const response = await this.http.get(`/users/${id}`);
    return response.data;
  }

  async createUser({
    name,
    phone,
    password,
    dateOfBirth = new Date(),
    cpf,
    email,
  }) {
    const result = await this.http.post("/customer", {
      name,
      phone,
      password,
      dateOfBirth,
      cpf,
      email,
    });
    return result.data;
  }

  async authenticateUser({ email, password }) {
    const result = await this.http.post("/customer/auth", {
      email,
      password,
    });
    return result.data;
  }
}

export default new UserServiceHttp();
