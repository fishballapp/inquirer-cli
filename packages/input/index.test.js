import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/input/index.js'];

describe('input', () => {
  it('accepts text input', async () => {
    const { stdout, code } = await run([...cmd, 'Name?'], 'Alice\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'Alice');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('example script works', async () => {
    const { stdout, code } = await runScript('packages/input/example/example.sh', 'Alice\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Name received: Alice'));
  });
});
