import fs from "fs";

export function readFile(path: string): string {
  return fs.readFileSync(path, { encoding: "utf-8" });
}
