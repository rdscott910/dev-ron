#!/bin/zsh

echo "--- Cursor Environment Check ---"
echo "Current User: $(whoami)"
echo "Shell: $SHELL"
echo "PATH: $PATH"

if command -v bun &> /dev/null; then
    echo "✅ SUCCESS: Bun is accessible!"
    echo "Location: $(which bun)"
    echo "Version: $(bun --version)"
else
    echo "❌ ERROR: Bun is still not in Cursor's PATH."
    echo "Tip: Make sure you added Bun to ~/.zshenv and restarted Cursor."
fi
