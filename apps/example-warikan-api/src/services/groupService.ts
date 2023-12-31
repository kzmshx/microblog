import { GroupRepository } from "../repositories/groupRepository";
import { Group } from "../type";

export class GroupService {
  constructor(private readonly repository: GroupRepository) {}

  getGroups = (): Group[] => {
    return this.repository.findAll();
  };

  getGroupByName = (name: string): Group | undefined => {
    return this.getGroups().find((group) => group.name === name);
  };

  addGroup = (group: Group): void => {
    this.repository.save(group);
  };
}
