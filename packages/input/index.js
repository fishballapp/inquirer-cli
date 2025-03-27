#!/usr/bin/env node

import input from '@inquirer/input';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  string: '_',
  boolean: ['required'],
  alias: { required: 'r' },
});
const message = args._[0];
const required = args.required;

function showHelp() {
  console.log(`Usage: npx @inquirer-cli/input [options] <message>

Options:
  <message>                 The message to display to the user (required)
  -r, --required            Make the input required
  -h, --help                Show this help message and exit

Example:
  npx @inquirer-cli/input "What is your name?" --required`);
}

if (args.help || args.h) {
  showHelp();
  process.exit(0);
}

if (!message) {
  console.error('Error: <message> is required.');
  showHelp();
  process.exit(1);
}

(async () => {
  const answer = await input({ message, required }, { output: process.stderr });
  console.log(answer);
})();
