#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import os from "os";

const repoUrl = "https://github.com/zyncc/z3-stack.git";
const projectName = process.argv[2] || "z3-app";

if (fs.existsSync(projectName)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating a new Next.js app: ${projectName}`);
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

process.chdir(projectName);
if (fs.existsSync(".git")) {
  if (os.platform() === "win32") {
    execSync("rmdir /s /q .git");
  } else {
    execSync("rm -rf .git");
  }
}
execSync("npm install", { stdio: "inherit" });

console.log("\n✅ Project setup complete! Run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
