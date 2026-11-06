import fs from "node:fs";
import path from "node:path";

const configPath = path.resolve(
  "../client/src/shared/api/core/OpenAPI.ts"
);

let content = fs.readFileSync(configPath, "utf-8");

content = content.replace(
  "WITH_CREDENTIALS: false",
  "WITH_CREDENTIALS: true"
);

fs.writeFileSync(configPath, content);

console.log("OpenAPI client credentials enabled.");