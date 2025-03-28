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

### [`@inquirer-cli/input`](./packages/input/README.md)

> Uses [@inquirer/input](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/input).

Prompts the user for text input.

Example:

```bash
name=$(npx @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
```

### [`@inquirer-cli/number`](./packages/number/README.md)

> Uses [@inquirer/number](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/number).

Requests a numeric input from the user.

Ask the user for their age:

```bash
age=$(npx @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
```

### [`@inquirer-cli/confirm`](./packages/confirm/README.md)

> Uses [@inquirer/confirm](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/confirm).

Presents a yes/no confirmation to the user.

Confirm an action with the user:

```bash
if $(npx @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
```

### [`@inquirer-cli/select`](./packages/select/README.md)

> Uses [@inquirer/select](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/select).

Offers a list of options for the user to select one.

Let the user choose a fruit:

```bash
fruit=$(npx "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
```

### [`@inquirer-cli/checkbox`](./packages/checkbox/README.md)

> Uses [@inquirer/checkbox](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/checkbox).

Allows the user to select multiple options from a list.

Allow the user to select multiple options:

```bash
choices=$(npx @inquirer-cli/checkbox -r "Select your favorite colors" -c "Red" -c "Blue" -c "Green")
echo "You selected:"
for choice in $choices; do
  echo "- $choice"
done
```

### [`@inquirer-cli/password`](./packages/password/README.md)

> Uses [@inquirer/password](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/password).

Prompts the user for sensitive information with input masking.

Prompt the user for a password:

```bash
password=$(npx @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
```

### ~~[`@inquirer-cli/editor`](./packages/editor/README.md)~~ (🚧 NOT SUPPORTED YET)

I wished `editor` would work like the following but sadly I couldn't make it work. Any help on this would be appreciated!

> Uses [@inquirer/editor](https://github.com/SBoudrias/Inquirer.js/tree/main/packages/editor).

```bash
notes=$(npx @inquirer-cli/editor "Write your notes")
echo "Your notes: $notes"
```

## Options

Each CLI prompt accepts various options to customize its behavior. Common options include:

- `--message` (or `-m`):
  The message to display to the user.

- `--choices` (or `-c`):
  A space-separated list of choices (applicable to `select` and `checkbox` prompts).

- `--required` (or `-r`):
  When set, empty responses will be reprompted (not applicable to `confirm`).

For a full list of options and detailed usage, refer to the documentation of the respective `@inquirer-cli` package.

## Author

[@ycmjason](https://github.com/ycmjason))

## License

Licensed under the MIT License.

---

*The `@inquirer-cli` project is an independent initiative and is not affiliated with or endorsed by Inquirer.js.*
