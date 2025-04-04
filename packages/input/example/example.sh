#!/bin/sh

name=$(npx -y @inquirer-cli/input -r "What is your name?")
echo "Name received: $name"
