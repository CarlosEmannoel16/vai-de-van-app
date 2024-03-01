import axios from "axios";
import { URLS } from "../../config/urls";

export class Http {
  http;
  constructor() {
    this.http = axios.create({
      baseURL: URLS.ApiUrl,
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    });
  }
}
