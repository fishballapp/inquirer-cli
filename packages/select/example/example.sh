#!/bin/bash
fruit=$(npx "@inquirer-cli/select" -c "Apple" -c "Banana" -c "Cherry" "Pick a fruit")
echo "You selected: $fruit"
