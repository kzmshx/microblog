import axios from "axios";

export class Users {
  static async all() {
    const resp = await axios.get("/users.json");
    return resp.data;
  }
}
