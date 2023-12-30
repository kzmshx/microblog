import fs from "fs";
import { Group } from "../type";

export class GroupRepository {
  constructor(private filePath: string) {}

  findAll(): Group[] {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }

    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data);
  }

  save(group: Group): void {
    const groups = this.findAll();
    groups.push(group);
    fs.writeFileSync(this.filePath, JSON.stringify(groups));
  }
}
