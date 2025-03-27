# @inquirer-cli

The `@inquirer-cli` suite provides standalone command-line interface (CLI) tools for various prompt types, leveraging the robust functionality of [Inquirer.js](https://github.com/SBoudrias/Inquirer.js). These tools enable developers to incorporate interactive prompts directly into shell scripts or command pipelines without the need to write custom JavaScript code.

## Installation

No installation required. Simply do to start the prompt:

```bash
$ npx @inquirer-cli/<prompt-name> [...args]
```

Replace `<prompt-name>` with the desired prompt listed in the next section.


## Prompts

Each prompt type is available as a separate package under the `@inquirer-cli` scope:
Each package corresponds to an Inquirer.js prompt type and is designed to be used independently.

### `@inquirer-cli/input`

> Uses [@inquirer/input](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input).

Prompts the user for text input.

Example:

```bash
name=$(npx @inquirer-cli/input --message "What's your name?")
echo "Hello, $name!"
```

### `@inquirer-cli/number`

> Uses [@inquirer/number](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number).

Requests a numeric input from the user.

Ask the user for their age:

```bash
age=$(npx @inquirer-cli/number --message "How old are you?")
echo "You are $age years old."
```

### `@inquirer-cli/confirm`

> Uses [@inquirer/confirm](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/confirm).

Presents a yes/no confirmation to the user.

Confirm an action with the user:

```bash
if npx @inquirer-cli/confirm --message "Do you want to proceed?"; then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

### `@inquirer-cli/select`

> Uses [@inquirer/select](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select).

Offers a list of options for the user to select one.

Let the user choose a fruit:

```bash
fruit=$(npx @inquirer-cli/select --message "Pick a fruit" --choices "Apple" "Banana" "Cherry")
echo "You selected: $fruit"
```

### `@inquirer-cli/checkbox`

> Uses [@inquirer/checkbox](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox).

Allows the user to select multiple options from a list.

Allow the user to select multiple options:

```bash
choices=$(npx @inquirer-cli/checkbox --message "Select options" --choices "Option 1" "Option 2" "Option 3")
echo "You selected: $choices"
```

### `@inquirer-cli/password`

> Uses [@inquirer/password](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password).

Prompts the user for sensitive information with input masking.

Prompt the user for a password:

```bash
password=$(npx @inquirer-cli/password --message "Enter your password")
echo "Password received."
```

### `@inquirer-cli/editor`

> Uses [@inquirer/editor](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/editor).

Opens the user's default text editor for multi-line input.

Open the default editor for multi-line input:

```bash
notes=$(npx @inquirer-cli/editor --message "Enter your notes")
echo "Your notes: $notes"
```

*Note: The examples above use `npx` for on-the-fly execution. If you've installed the packages globally, you can omit `npx`.*

## Options

Each CLI prompt accepts various options to customize its behavior. Common options include:

- `--message` (or `-m`):
  The message to display to the user.

- `--choices` (or `-c`):
  A space-separated list of choices (applicable to `select` and `checkbox` prompts).

- `--default` (or `-d`):
  The default value if the user provides no input.

- `--validate` (or `-v`):
  A validation pattern or function to validate user input.

For a full list of options and detailed usage, refer to the documentation of the respective `@inquirer-cli` package.

## Author

[@ycmjason](https://github.com/ycmjason))

## License

Licensed under the MIT License.

---

*The `@inquirer-cli` project is an independent initiative and is not affiliated with or endorsed by Inquirer.js.*
