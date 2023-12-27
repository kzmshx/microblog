import axios from "axios";
import { Users } from "./users";

jest.mock("axios");

const axiosMock = jest.mocked(axios);

describe("Users", () => {
  describe("all", () => {
    it("should return users", async () => {
      axiosMock.get.mockResolvedValue({
        data: [
          { name: "Adam", age: 10 },
          { name: "Bob", age: 13 },
        ],
      });

      const users = await Users.all();
      expect(users).toEqual([
        { name: "Adam", age: 10 },
        { name: "Bob", age: 13 },
      ]);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
  });
});
