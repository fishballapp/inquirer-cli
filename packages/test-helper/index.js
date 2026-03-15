import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const NPX_STUB = join(dirname(fileURLToPath(import.meta.url)), 'npx');

function spawnWithInput(child, input, timeout) {
  return new Promise((resolve, reject) => {
    let stdout = '';
    let stderr = '';
    let inputSent = false;

    child.stdout.on('data', d => {
      stdout += d;
    });

    child.stderr.on('data', d => {
      stderr += d;
      if (!inputSent && stderr.includes('?')) {
        inputSent = true;
        setTimeout(() => {
          if (typeof input === 'string') {
            child.stdin.write(input);
          } else {
            input(child.stdin);
          }
        }, 100);
      }
    });

    const timer = setTimeout(() => {
      child.kill();
      reject(new Error(`Timed out.\nstdout: ${stdout}\nstderr: ${stderr}`));
    }, timeout);

    child.on('close', code => {
      clearTimeout(timer);
      resolve({ stdout: stdout.trim(), stderr, code });
    });

    child.on('error', reject);
  });
}

export function run(args, input, { timeout = 5000 } = {}) {
  const child = spawn('node', args, {
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  return spawnWithInput(child, input, timeout);
}

export function runScript(scriptPath, input, { timeout = 5000 } = {}) {
  const child = spawn('sh', [scriptPath], {
    stdio: ['pipe', 'pipe', 'pipe'],
    cwd: ROOT,
    env: {
      ...process.env,
      PATH: `${dirname(NPX_STUB)}:${process.env.PATH}`,
      INQUIRER_CLI_ROOT: ROOT,
    },
  });
  return spawnWithInput(child, input, timeout);
}
