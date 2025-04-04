#!/bin/sh

age=$(npx -y @inquirer-cli/number -r "Enter your age")
echo "Age received: $age"
