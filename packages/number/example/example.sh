#!/bin/bash

age=$(npx @inquirer-cli/number -r "Enter your age")
echo "You are $age years old."
