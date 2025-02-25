import { execSync } from "child_process";
import fs from "fs";

const repoUrl = "https://github.com/zyncc/z3-stack.git";
const projectName = process.argv[2] || "my-next-app";

if (fs.existsSync(projectName)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

console.log(`🚀 Creating a new Next.js app: ${projectName}`);
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

process.chdir(projectName);
execSync("rm -rf .git", { stdio: "inherit" });
execSync("npm install", { stdio: "inherit" });

console.log("\n✅ Project setup complete! Run:");
console.log(`   cd ${projectName}`);
console.log("   npm run dev");
