import assert from 'node:assert';
import { describe, it } from 'node:test';
import { run, runScript } from '@inquirer-cli/test-helper';

const cmd = ['packages/select/index.js'];

describe('select', () => {
  it('selects the first choice by default', async () => {
    const { stdout, code } = await run([...cmd, 'Pick', '-c', 'Apple', '-c', 'Banana'], '\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'Apple');
  });

  it('selects second choice with arrow down', async () => {
    const { stdout, code } = await run([...cmd, 'Pick', '-c', 'Apple', '-c', 'Banana'], '\x1b[B\r');
    assert.strictEqual(code, 0);
    assert.strictEqual(stdout, 'Banana');
  });

  it('shows help', async () => {
    const { stdout, code } = await run([...cmd, '--help'], '');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('Usage:'));
  });

  it('errors without message', async () => {
    const { code } = await run(cmd, '');
    assert.strictEqual(code, 1);
  });

  it('errors without choices', async () => {
    const { code } = await run([...cmd, 'Pick'], '');
    assert.strictEqual(code, 1);
  });

  it('example script works', async () => {
    const { stdout, code } = await runScript('packages/select/example/example.sh', '\r');
    assert.strictEqual(code, 0);
    assert.ok(stdout.includes('You selected: Apple'));
  });
});
