#!/bin/bash

password=$(npx @inquirer-cli/password -r "Enter your password")
echo "Password received. $password"
