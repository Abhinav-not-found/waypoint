#!/bin/bash

set -e

# Resolve project root
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
FEATURES_DIR="$ROOT_DIR/client/src/features"

echo ""
echo "=== Create New Feature ==="
read -r -p "Enter feature name: " FEATURE_NAME

# Normalize name
FEATURE_NAME=$(echo "$FEATURE_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

# Validate
if [[ ! "$FEATURE_NAME" =~ ^[a-z][a-z0-9-]*$ ]]; then
  echo "Invalid feature name. Use letters, numbers and hyphens."
  exit 1
fi

FEATURE_DIR="$FEATURES_DIR/$FEATURE_NAME"

# Check if feature already exists
if [ -d "$FEATURE_DIR" ]; then
  echo "Feature '$FEATURE_NAME' already exists!"
  exit 1
fi

# Generate PascalCase hook name
PASCAL_NAME=$(echo "$FEATURE_NAME" | awk -F- '{
  for (i = 1; i <= NF; i++)
    printf "%s", toupper(substr($i, 1, 1)) substr($i, 2)
}')

# Create directories
mkdir -p "$FEATURE_DIR"/hooks
mkdir -p "$FEATURE_DIR/ui/pages"
mkdir -p "$FEATURE_DIR/ui/components"

# Create hook file
touch "$FEATURE_DIR/hooks/use${PASCAL_NAME}.hook.ts"

echo ""
echo "Feature created successfully!"
echo "$FEATURE_DIR"
echo ""
