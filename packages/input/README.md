# @inquirer-cli/input

CLI tool for text input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/input [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user for text input:

```bash
name=$(npx -y @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
name=$(npx -y @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

## License

MIT
