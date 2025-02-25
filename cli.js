import degit from "degit";
import fs from "fs";
import { execSync } from "child_process";

const repo = "https://github.com/zyncc/z3-stack.git";
const projectName = process.argv[2] || "z3-app";

if (fs.existsSync(projectName)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`🚀 Cloning template: ${repo}`);
const emitter = degit(repo, { cache: false, force: true });
await emitter.clone(projectName);

process.chdir(projectName);
execSync("npm install", { stdio: "inherit" });

console.log("\n✅ Project setup complete! Run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
