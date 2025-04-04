# @inquirer-cli/number

CLI tool for numeric input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/number [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user for numeric input:

```bash
age=$(npx -y @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
age=$(npx -y @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

## License

MIT
