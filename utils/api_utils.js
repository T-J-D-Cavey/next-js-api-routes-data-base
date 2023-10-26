import path from "path";
import fs from "fs";

export function getFilePath(relativePath) {
  return path.join(process.cwd(), relativePath);
}

export function readFileContent(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function setFileContent(filePath, newJSONData) {
  fs.writeFileSync(filePath, newJSONData);
}
