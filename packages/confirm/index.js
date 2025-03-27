#!/usr/bin/env node

import confirm from '@inquirer/confirm';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  string: '_',
  boolean: ['yes'],
  alias: { y: 'yes' },
});
const message = args._[0];
const defaultYes = args.yes ?? false;

function showHelp() {
  console.log(`Usage: npx @inquirer-cli/confirm [options] <message>

Options:
  <message>                 The message to display to the user (required)
  -y, --yes                 Set the default answer to "yes" (default: "no")
  -h, --help                Show this help message and exit

Example:
  npx @inquirer-cli/confirm "Do you want to continue?"
  npx @inquirer-cli/confirm -y "Do you want to continue?"`);
}

if (!message) {
  console.error('Error: <message> is required.');
  showHelp();
  process.exit(1);
}

if (args.help || args.h) {
  showHelp();
  process.exit(0);
}

(async () => {
  const answer = await confirm(
    {
      message,
      default: defaultYes,
    },
    {
      output: process.stderr,
    },
  );
  console.log(`${answer}`);
})();
