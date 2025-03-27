#!/usr/bin/env node

import number from '@inquirer/number';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  string: '_',
  boolean: ['required'],
  alias: { required: 'r' },
});
const message = args._[0];
const required = args.required;

function showHelp() {
  console.log(`Usage: npx @inquirer-cli/number [options] <message>

Options:
  <message>                 The message to display to the user (required)
  -r, --required            Make the input required
  -h, --help                Show this help message and exit

Example:
  npx @inquirer-cli/number "Enter your age" --required`);
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
  const answer = await number({ message, required }, { output: process.stderr });
  console.log(answer);
})();
