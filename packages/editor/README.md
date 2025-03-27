# @inquirer-cli/editor

CLI tool for multi-line input using the default editor via Inquirer.js.

## Status

🚧 **NOT SUPPORTED YET**: This package is currently not functional due to technical difficulties.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/editor [...options]
```

## Usage

Attempt to prompt the user for multi-line input:

```bash
notes=$(npx @inquirer-cli/editor "Write your notes")
echo "Your notes: $notes"
```

## Options

- `<message>` (required): The message to display to the user.
- `-h, --help`: Show the help message and exit.

## Example

```sh
#!/bin/sh
notes=$(npx @inquirer-cli/editor "Write your notes")
echo "Your notes: $notes"
```

## License

MIT
