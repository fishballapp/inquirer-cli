#!/bin/bash
choices=$(npx @inquirer-cli/checkbox -r "Select your favorite colors" -c "Red" -c "Blue" -c "Green")
echo "You selected:"
for choice in $choices; do
  echo "- $choice"
done
