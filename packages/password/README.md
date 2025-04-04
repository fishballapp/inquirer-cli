# @inquirer-cli/password

CLI tool for masked password input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/password [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user for a password:

```bash
password=$(npx -y @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
password=$(npx -y @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
```

## License

MIT
