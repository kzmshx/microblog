import fs from "fs";
import { readFile } from "./mock_module";

jest.mock("fs");

const mockFs = jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("mocked_file_content");

describe("readFile", () => {
  it("should read file", () => {
    expect(readFile("path/to/file")).toBe("mocked_file_content");
    expect(mockFs.readFileSync).toHaveBeenCalledTimes(1);
  });
});
