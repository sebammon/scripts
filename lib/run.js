const path = require("path");
const fs = require("fs");
const { exit } = require("./helpers");
const { exec } = require("child_process");

function run(scriptName) {
  const cwd = process.cwd();

  try {
    const scriptFile = fs.readFileSync(path.join(cwd, "scripts.json"), "utf8");
    const scripts = JSON.parse(scriptFile);
    const command = scripts[scriptName];

    if (!command) {
      console.error(`error Command "${scriptName}" not found.`);
      exit(1);
    }

    console.log(`$ ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`error ${error.message}`);
        exit(1);
      }
      if (stderr) {
        console.error(`error ${stderr}`);
        exit(1);
      }

      console.log(stdout);
      console.log(`Done!`);
      exit(0);
    });
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error(`error File "scripts.json" not found.`);
    } else if (e.message.includes("Unexpected token")) {
      console.error(`error File "scripts.json" is not valid.`);
    } else {
      console.error(`error ${e.message}.`);
    }
    exit(1);
  }
}

module.exports = {
  run,
};
