#!/bin/sh
# Stub npx that resolves @inquirer-cli/* to local packages.
# Strips the -y flag and maps package names to local index.js files.

args=""
pkg=""
for arg in "$@"; do
  case "$arg" in
    -y) ;;
    @inquirer-cli/*)
      pkg=$(echo "$arg" | sed 's|@inquirer-cli/||' | tr -d '"')
      ;;
    *)
      args="$args \"$arg\""
      ;;
  esac
done

if [ -n "$pkg" ]; then
  eval exec node "$INQUIRER_CLI_ROOT/packages/$pkg/index.js" $args
else
  # Fall through to real npx for non-inquirer-cli packages
  eval exec "$(which -a npx | grep -v "$0" | head -1)" "$@"
fi
