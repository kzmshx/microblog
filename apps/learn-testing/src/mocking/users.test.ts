import axios from "axios";
import { Users } from "./users";

jest.mock("axios");

const axiosMock = jest.mocked(axios);

describe("Users", () => {
  describe("all", () => {
    beforeEach(() => {
      axiosMock.get.mockClear();
    });

    it.each`
      data                                                     | expected
      ${[]}                                                    | ${[]}
      ${[{ name: "Adam", age: 10 }]}                           | ${[{ name: "Adam", age: 10 }]}
      ${[{ name: "Adam", age: 10 }, { name: "Bob", age: 13 }]} | ${[{ name: "Adam", age: 10 }, { name: "Bob", age: 13 }]}
    `("should return users", async ({ data, expected }) => {
      axiosMock.get.mockResolvedValue({ data });

      const users = await Users.all();
      expect(users).toEqual(expected);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
  });
});
