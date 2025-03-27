# @inquirer-cli/number

CLI tool for numeric input using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/number [...options]
```

## Usage

Prompt the user for numeric input:

```bash
age=$(npx @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

## Options

- `<message>` (required): The message to display to the user.
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```bash
age=$(npx @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

## License

MIT
