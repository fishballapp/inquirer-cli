#!/bin/bash

name=$(npx @inquirer-cli/input -r "What is your name?")
echo "Hello, $name!"
