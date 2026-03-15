import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/confirm/index.js'];

describe('confirm', () => {
  it('confirms with y', async () => {
    const { stdout, code } = await run([...cmd, 'Continue?'], 'y\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'true');
  });

  it('denies with n', async () => {
    const { stdout, code } = await run([...cmd, 'Continue?'], 'n\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'false');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('example script works (yes)', async () => {
    const { stdout, code } = await runScript('packages/confirm/example/example.sh', 'y\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Continuing...'));
  });

  it('example script works (no)', async () => {
    const { stdout, code } = await runScript('packages/confirm/example/example.sh', 'n\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Aborted.'));
  });
});
