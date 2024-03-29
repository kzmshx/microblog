import { GroupController } from "../../src/controllers/groupController";
import { GroupService } from "../../src/services/groupService";
import express from "express";
import { expect, Mock } from "vitest";
import { Group } from "../../src/type";

describe("GroupController", () => {
  let groupController: GroupController;

  let groupService: Partial<GroupService>;
  let req: Partial<express.Request>;
  let res: Partial<express.Response>;
  let next: Mock;

  beforeEach(() => {
    groupService = {
      getGroups: vi.fn(),
      getGroupByName: vi.fn(),
      addGroup: vi.fn(),
    };
    req = {};
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
    };
    next = vi.fn();
    groupController = new GroupController(groupService as GroupService);
  });

  describe("getGroupList", () => {
    it("should return 200 and groups", () => {
      // Arrange
      const groups: Group[] = [{ name: "group1", members: ["user1", "user2"] }];
      (groupService.getGroups as Mock).mockReturnValueOnce(groups);
      // Act
      groupController.getGroupList(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(groups);
    });
  });

  describe("getGroupByName", () => {
    it("should return 200 and group", () => {
      // Arrange
      const group: Group = { name: "group1", members: ["user1", "user2"] };
      (groupService.getGroupByName as Mock).mockReturnValueOnce(group);
      // Act
      req.params = { name: "group1" };
      groupController.getGroupByName(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(group);
    });

    it("should return 404 when group is not found", () => {
      // Arrange
      (groupService.getGroupByName as Mock).mockReturnValueOnce(undefined);
      // Act
      req.params = { name: "group1" };
      groupController.getGroupByName(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith("group not found");
    });
  });

  describe("addGroup", () => {
    it("should return 200 and success message", () => {
      // Arrange
      const group: Group = { name: "group1", members: ["user1", "user2"] };
      (groupService.getGroups as Mock).mockReturnValueOnce([]);
      // Act
      req.body = group;
      groupController.addGroup(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      // Additional assertion
      expect(groupService.addGroup).toHaveBeenCalledWith(group);
    });

    it("should return 400 when group name is duplicated", () => {
      // Arrange
      const group: Group = { name: "group1", members: ["user1", "user2"] };
      (groupService.getGroups as Mock).mockReturnValueOnce([group]);
      // Act
      req.body = group;
      groupController.addGroup(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith("group name is already used");
    });

    test.each`
      description             | group                                              | expectedMessages
      ${"empty name"}         | ${{ name: "", members: ["user1", "user2"] }}       | ${["group name is required"]}
      ${"members.length = 0"} | ${{ name: "group1", members: [] }}                 | ${["group must have at least 2 members"]}
      ${"members.length = 1"} | ${{ name: "group1", members: ["user1"] }}          | ${["group must have at least 2 members"]}
      ${"duplicated members"} | ${{ name: "group1", members: ["user1", "user1"] }} | ${["member names must be unique"]}
    `(`should return 400 when validation failed: $description`, ({ group, expectedMessages }) => {
      // Arrange
      (groupService.getGroups as Mock).mockReturnValueOnce([]);
      // Act
      req.body = group;
      groupController.addGroup(req as express.Request, res as express.Response, next as express.NextFunction);
      // Assert
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith(expectedMessages);
    });
  });
});
