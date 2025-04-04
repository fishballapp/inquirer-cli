#!/bin/sh

notes=$(npx -y @inquirer-cli/editor "Write your notes")
echo "Notes received: $notes"
