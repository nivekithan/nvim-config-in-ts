const { spawnSync } = require("child_process");
const path = require("path");

const regex = `'require\\("lua.'`;
const replacement = `'require("'`;
spawnSync("npx", ["replace", regex, replacement, "./dist", "-r"], {
  stdio: "inherit",
  cwd: path.resolve(__dirname, ".."),
  shell: "nu",
});
