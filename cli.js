#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { run } = require("./lib/run");
const { exit } = require("./lib/helpers");

const argv = yargs(hideBin(process.argv)).argv;

if (!argv._.length) {
  console.error("error Command not specified.");
  exit(1);
}

const scriptName = argv._[0];

run(scriptName);
