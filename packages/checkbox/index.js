#!/usr/bin/env node

import checkbox from '@inquirer/checkbox';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  string: ['_', 'choice'],
  boolean: ['required'],
  alias: { choice: 'c', required: 'r' },
});
const message = args._[0];
const choices = [args.choice].flat();
const required = args.required;

function showHelp() {
  console.log(`Usage: npx @inquirer-cli/checkbox [options] <message>

Options:
  <message>                 The message to display to the user (required)
  -c, --choice <choice>     Define a choice (can be used multiple times, required)
  -r, --required            Make the input required
  -h, --help                Show this help message and exit

Example:
  npx @inquirer-cli/checkbox "Select your favorite colors" -c "Red" -c "Blue" --required`);
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

if (choices.length === 0) {
  console.error('Error: At least one --choice is required.');
  showHelp();
  process.exit(1);
}

(async () => {
  const answer = await checkbox({ message, choices, required }, { output: process.stderr });
  console.log(answer.join(' ')); // Log as a space-separated string
})();
