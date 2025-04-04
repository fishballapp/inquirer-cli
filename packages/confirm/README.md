# @inquirer-cli/confirm

CLI tool for yes/no confirmation using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx -y @inquirer-cli/confirm [...options]
```

> **Note**: The `-y` flag is used with `npx` to skip the installation prompt. This is necessary because the CLI's output is consumed by `$()` in bash, which would otherwise cause the script to freeze.

## Usage

Prompt the user for confirmation:

```bash
if $(npx -y @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

## Options

- `<message>` (required): The message to display to the user.
- `-y, --yes`: Set the default answer to "yes" (default: "no").
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
if $(npx -y @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

## License

MIT
