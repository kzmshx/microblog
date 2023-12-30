import { GroupRepository } from "../../src/repositories/groupRepository";
import { Group } from "../../src/type";

const fsMocks = vi.hoisted(() => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
}));
vi.mock("fs", async () => {
  return {
    default: {
      ...(await vi.importActual("fs")),
      ...fsMocks,
    },
  };
});

describe("GroupRepository", () => {
  beforeEach(() => {
    fsMocks.existsSync.mockClear();
    fsMocks.readFileSync.mockClear();
    fsMocks.writeFileSync.mockClear();
  });

  describe("findAll", () => {
    it("should return empty array when file does not exist", () => {
      // Arrange
      fsMocks.existsSync.mockReturnValueOnce(false);
      const repo = new GroupRepository("group.json");
      // Act
      const actual = repo.findAll();
      // Assert
      expect(actual).toEqual([]);
    });

    it("should return groups when file exists", () => {
      // Arrange
      const groups: Group[] = [
        { name: "group1", members: ["Sam", "Tom"] },
        { name: "group2", members: ["Mike", "Bob"] },
      ];
      const mockData = JSON.stringify(groups);
      fsMocks.existsSync.mockReturnValueOnce(true);
      fsMocks.readFileSync.mockReturnValueOnce(mockData);
      const repo = new GroupRepository("group.json");
      // Act
      const actual = repo.findAll();
      // Assert
      expect(actual).toEqual(groups);
    });
  });

  describe("save", () => {
    it("should save group", () => {
      // Arrange
      fsMocks.existsSync.mockReturnValueOnce(true);
      fsMocks.readFileSync.mockReturnValueOnce(JSON.stringify([]));
      const filePath = "group.json";
      const repo = new GroupRepository(filePath);
      // Act
      const group: Group = {
        name: "group1",
        members: ["Sam", "Tom"],
      };
      repo.save(group);
      // Assert
      expect(fsMocks.writeFileSync).toHaveBeenCalledWith(filePath, JSON.stringify([group]));
    });
  });
});
