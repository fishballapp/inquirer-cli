#!/bin/sh
choices=$(npx -y @inquirer-cli/checkbox -r "Select your favorite colors" -c "Red" -c "Blue" -c "Green")
echo "Choices selected: $choices"
