import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/password/index.js'];

describe('password', () => {
  it('accepts password input', async () => {
    const { stdout, code } = await run([...cmd, 'Secret?'], 'hunter2\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'hunter2');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('example script works', async () => {
    const { stdout, code } = await runScript('packages/password/example/example.sh', 'secret123\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Password received. secret123'));
  });
});
