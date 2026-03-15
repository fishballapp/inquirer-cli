import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/checkbox/index.js'];

describe('checkbox', () => {
  it('selects first choice with space then submits', async () => {
    const { stdout, code } = await run([...cmd, 'Pick', '-c', 'Red', '-c', 'Blue'], ' \r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'Red');
  });

  it('selects multiple choices', async () => {
    const { stdout, code } = await run([...cmd, 'Pick', '-c', 'Red', '-c', 'Blue'], stdin => {
      stdin.write(' ');
      stdin.write('\x1b[B');
      setTimeout(() => {
        stdin.write(' ');
        stdin.write('\r');
      }, 100);
    });
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'Red Blue');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('example script works', async () => {
    const { stdout, code } = await runScript('packages/checkbox/example/example.sh', ' \r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Choices selected: Red'));
  });
});
