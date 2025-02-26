#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const repoUrl = "zyncc/z3-stack";
const projectName = process.argv[2] || "z3-app";

if (fs.existsSync(projectName)) {
  console.error(`❌ Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating a new Z3 App...`);
execSync(`npx degit ${repoUrl} ${projectName}`, { stdio: "inherit" });

process.chdir(projectName);
execSync("bun install", { stdio: "inherit" });

const packageJsonPath = path.join(process.cwd(), "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  if (packageJson.bin) {
    delete packageJson.bin;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log("✅ Removed 'bin' entry from package.json");
  }
}

const cliPath = __filename;
process.on("exit", () => {
  setTimeout(() => {
    try {
      fs.unlinkSync(cliPath);
      console.log("✅ Deleted cli.js");
    } catch (error) {
      console.error("❌ Failed to delete cli.js:", error.message);
    }
  }, 1000);
});

console.log("\n✅ Project setup complete! Run:");
console.log(`   cd ${projectName}`);
console.log("   bun dev");
