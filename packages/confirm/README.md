# @inquirer-cli/confirm

CLI tool for yes/no confirmation using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/confirm [...options]
```

## Usage

Prompt the user for confirmation:

```bash
if $(npx @inquirer-cli/confirm "Do you want to continue?"); then
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

```bash
if $(npx @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

## License

MIT
