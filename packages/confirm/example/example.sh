#!/bin/sh

if $(npx -y @inquirer-cli/confirm "Do you want to continue?"); then
  echo "Continuing..."
else
  echo "Aborted."
fi
