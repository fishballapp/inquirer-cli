#!/bin/sh

password=$(npx -y @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
