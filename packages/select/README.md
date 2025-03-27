# @inquirer-cli/select

CLI tool for selecting an option using Inquirer.js.

## Installation

No installation required. Use `npx` to run the tool directly:

```bash
npx @inquirer-cli/select [...options]
```

## Usage

Prompt the user to select an option:

```bash
fruit=$(npx "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
```

## Options

- `<message>` (required): The message to display to the user.
- `-c, --choice <choice>` (required): Define a choice (can be used multiple times).
- `-r, --required`: Make the input required.
- `-h, --help`: Show the help message and exit.

## Example

```bash
fruit=$(npx "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
```

## License

MIT
