# @inquirer-cli

[![CI](https://github.com/fishballapp/inquirer-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/fishballapp/inquirer-cli/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@inquirer-cli/select)](https://www.npmjs.com/search?q=%40inquirer-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interactive command-line prompts for shell scripts, powered by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js).

The `@inquirer-cli` suite lets you add interactive prompts (text input, confirmations, selections, and more) to any shell script - no JavaScript required.

## Quick Start

No installation needed. Run any prompt directly with `npx`:

```bash
name=$(npx -y @inquirer-cli/input "What is your name?")
echo "Hello, $name!"
```

> **Why `-y`?** The `-y` flag auto-confirms the `npx` install prompt. Without it, the confirmation prompt would interfere when capturing output with `$()`.

## How It Works

Each prompt renders its UI to **stderr** and writes the user's answer to **stdout**. This means you can capture the answer with `$()` while the prompt remains visible in the terminal.

## Prompts

### [`@inquirer-cli/input`](./packages/input/README.md)

Prompts for free-text input.

```bash
name=$(npx -y @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-r, --required` | Reject empty input |
| `-h, --help` | Show help |

### [`@inquirer-cli/number`](./packages/number/README.md)

Prompts for numeric input.

```bash
age=$(npx -y @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-r, --required` | Reject empty input |
| `-h, --help` | Show help |

### [`@inquirer-cli/confirm`](./packages/confirm/README.md)

Prompts for a yes/no confirmation. Outputs `true` or `false`.

```bash
if $(npx -y @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-y, --yes` | Default to "yes" instead of "no" |
| `-h, --help` | Show help |

### [`@inquirer-cli/select`](./packages/select/README.md)

Prompts the user to pick one option from a list.

```bash
fruit=$(npx -y @inquirer-cli/select -c Apple -c Banana -c Cherry "Pick a fruit")
echo "You selected: $fruit"
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-c, --choice <value>` | Add a choice (use multiple times, at least one required) |
| `-r, --required` | Reject empty selection |
| `-h, --help` | Show help |

### [`@inquirer-cli/checkbox`](./packages/checkbox/README.md)

Prompts the user to select multiple options from a list. Outputs selected values as a space-separated string.

```bash
colors=$(npx -y @inquirer-cli/checkbox -r "Select your favorite colors" -c Red -c Blue -c Green)
echo "You selected:"
for color in $colors; do
  echo "- $color"
done
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-c, --choice <value>` | Add a choice (use multiple times, at least one required) |
| `-r, --required` | Require at least one selection |
| `-h, --help` | Show help |

### [`@inquirer-cli/password`](./packages/password/README.md)

Prompts for sensitive input with masking.

```bash
secret=$(npx -y @inquirer-cli/password -r "Enter your password")
```

| Option | Description |
|---|---|
| `<message>` | The prompt message (required) |
| `-r, --required` | Reject empty input |
| `-h, --help` | Show help |

### ~~[`@inquirer-cli/editor`](./packages/editor/README.md)~~ (not supported yet)

Opens the user's default editor for multi-line input. This package is currently not functional due to technical difficulties. Contributions welcome!

```bash
notes=$(npx -y @inquirer-cli/editor "Write your notes")
echo "Your notes: $notes"
```

## Full Example

```bash
#!/bin/sh

name=$(npx -y @inquirer-cli/input -r "What is your name?")
age=$(npx -y @inquirer-cli/number -r "How old are you?")
lang=$(npx -y @inquirer-cli/select -c JavaScript -c Python -c Go "Favorite language?")

if $(npx -y @inquirer-cli/confirm "Save profile?"); then
  echo "Saved: $name, age $age, likes $lang"
fi
```

## Requirements

- Node.js >= 20.12.0

## Author

[@ycmjason](https://github.com/ycmjason)

## License

MIT

---

*`@inquirer-cli` is an independent project and is not affiliated with or endorsed by Inquirer.js.*
