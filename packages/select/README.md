# @inquirer-cli/select

CLI tool for selecting an option using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/select [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user to select an option:

```bash
fruit=$(npx -y "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
```

## Options

- `<message>` (required): The message to display to the user.
- `-c, --choice <choice>` (required): Define a choice (can be used multiple times).
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
fruit=$(npx -y "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
```

## License

MIT
