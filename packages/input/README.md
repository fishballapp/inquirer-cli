# @inquirer-cli/input

CLI tool for text input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/input [...options]
```

## Usage

Prompt the user for text input:

```bash
name=$(npx @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```bash
name=$(npx @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

## License

MIT
