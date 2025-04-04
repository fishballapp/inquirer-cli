# @inquirer-cli/checkbox

CLI tool for selecting multiple options using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/checkbox [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user to select multiple options:

```bash
choices=$(npx -y @inquirer-cli/checkbox -r "Select your favorite colors" -c "Red" -c "Blue" -c "Green")
echo "You selected:"
for choice in $choices; do
  echo "- $choice"
done
```

## Options

- `<message>` (required): The message to display to the user.
- `-c, --choice <choice>` (required): Define a choice (can be used multiple times).
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
choices=$(npx -y @inquirer-cli/checkbox -r "Select your favorite colors" -c "Red" -c "Blue" -c "Green")
echo "You selected:"
for choice in $choices; do
  echo "- $choice"
done
```

## License

MIT
