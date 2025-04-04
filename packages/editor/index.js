#!/usr/bin/env node
// @inquirer-cli/editor is not supported yet due to technical difficulties.
import { spawn } from 'node:child_process';
import { closeSync, openSync, writeSync } from 'node:fs';
import { join } from 'node:path';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2), { string: '_' });
const message = args._[0];

function showHelp() {
  console.log(`Usage: npx -y @inquirer-cli/editor [options] <message>

Options:
  <message>                 The message to display to the user (required)
  -h, --help                Show this help message and exit

Example:
  npx -y @inquirer-cli/editor "Write your notes"`);
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

const TTY_PATH = (() => {
  if (process.platform === 'win32') {
    return '\\\\.\\CON';
  }

  return '/dev/tty';
})();

const stdin = openSync(TTY_PATH, 'r');
const stdout = openSync(TTY_PATH, 'w');

const b = spawn('node', [join(import.meta.dirname, 'prompt.js')], {
  env: {
    ...process.env,
    INQUIRER_MESSAGE: message,
  },
  stdio: [stdin, stdout, 'pipe'],
});

let x = '';
b.stderr.on('data', d => {
  x += d;
});

b.on('exit', code => {
  closeSync(stdin);
  closeSync(stdout);
  if (code === 0) {
    console.log(x);
    process.exit(0);
  }

  console.error(x);
  process.exit(1);
});
b.on('error', err => console.error(err));
