import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/number/index.js'];

describe('number', () => {
  it('accepts numeric input', async () => {
    const { stdout, code } = await run([...cmd, 'Age?'], '42\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, '42');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('example script works', async () => {
    const { stdout, code } = await runScript('packages/number/example/example.sh', '25\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Age received: 25'));
  });
});
