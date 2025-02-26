#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const repoUrl = "zyncc/z3-stack";

let projectName = process.argv[2] || ".";
const projectPath = path.resolve(projectName);

console.log(`🚀 Creating a new Z3 App in ${projectPath}`);
execSync(`npx degit ${repoUrl} ${projectPath}`, { stdio: "inherit" });
console.log(`🚀 Running bun install`);
process.chdir(projectPath);
execSync("bun install", { stdio: "inherit" });

const packageJsonPath = path.join(process.cwd(), "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  if (packageJson.bin) {
    delete packageJson.bin;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

console.log("\n✅ Project setup complete! Run:");
if (projectName !== ".") console.log(`   cd ${projectName}`);
console.log("   bun dev");
