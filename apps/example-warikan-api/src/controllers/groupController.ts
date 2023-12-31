import express from "express";
import { GroupService } from "../services/groupService";
import { ZodError } from "zod";
import { Group } from "../type";
import { groupSchema } from "../schema/group";

export class GroupController {
  constructor(private groupService: GroupService) {}

  getGroupList = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const groups = this.groupService.getGroups();
      res.status(200).json(groups);
    } catch (e) {
      next(e);
    }
  };

  getGroupByName = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const group = this.groupService.getGroupByName(req.params.name);
      if (!group) {
        return res.status(404).send("group not found");
      }
      res.status(200).json(group);
    } catch (e) {
      next(e);
    }
  };

  addGroup = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      let validatedInput: Group;
      validatedInput = groupSchema.parse(req.body);
      const { name, members } = validatedInput;

      const groups = this.groupService.getGroups();
      if (groups.map((g) => g.name).includes(name)) {
        return res.status(400).send("group name is already used");
      }

      this.groupService.addGroup({ name, members });
      res.status(200);
    } catch (e) {
      if (e instanceof ZodError) {
        const errorMessages = e.issues.map((e) => e.message);
        return res.status(400).send(errorMessages);
      }
      next(e);
    }
  };
}
