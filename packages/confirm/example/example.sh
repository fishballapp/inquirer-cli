#!/bin/bash

if $(npx @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Proceeding..."
else
  echo "Operation cancelled."
fi
