# @inquirer-cli/password

CLI tool for masked password input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/password [...options]
```

## Usage

Prompt the user for a password:

```bash
password=$(npx @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
password=$(npx @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
```

## License

MIT
