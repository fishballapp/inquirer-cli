#!/bin/sh

notes=$(npx @inquirer-cli/editor "Write your notes")
echo "Your notes: $notes"
