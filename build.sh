#!/bin/bash

# Configuration
# Run from current directory (repo)
MODULE_DIR="$(dirname "$(readlink -f "$0")")"
OUTPUT_DIR="$MODULE_DIR"

# Get timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M)

# Get Git Hash
HASH=""
if git -C "$MODULE_DIR" rev-parse --git-dir > /dev/null 2>&1; then
    if git -C "$MODULE_DIR" rev-parse HEAD > /dev/null 2>&1; then
        HASH=$(git -C "$MODULE_DIR" rev-parse --short HEAD)
    fi
fi

if [ -z "$HASH" ]; then
    HASH="nohash"
fi

# Get Version from module.prop
VERSION=$(grep "^version=" "$MODULE_DIR/module.prop" | cut -d= -f2)
VERSION_CODE=$(grep "^versionCode=" "$MODULE_DIR/module.prop" | cut -d= -f2)

# Construct Filename
ZIP_NAME="FloppyCompanion-${VERSION}-${HASH}-${TIMESTAMP}.zip"

# --- Magiskboot Handling ---
# Always fetch latest Magisk
echo "Resolving latest Magisk version..."
# Get redirect URL from latest
LATEST_URL=$(curl -sI https://github.com/topjohnwu/Magisk/releases/latest | grep -i "location:" | awk '{print $2}' | tr -d '\r')
# Extract tag (e.g., v30.6)
TAG=${LATEST_URL##*/}
echo "Latest tag: $TAG"

MAGISK_APK="Magisk-${TAG}.apk"
MAGISK_URL="https://github.com/topjohnwu/Magisk/releases/download/${TAG}/${MAGISK_APK}"
TOOLS_DIR="tools"

# Prepare tools directory
mkdir -p "$TOOLS_DIR"

if [ -f "../$MAGISK_APK" ]; then
    rm "../$MAGISK_APK"
fi

echo "Downloading $MAGISK_APK..."
curl -L -o "../$MAGISK_APK" "$MAGISK_URL"

# Extract ARM64 magiskboot
echo "Extracting magiskboot (arm64)..."
unzip -p "../$MAGISK_APK" "lib/arm64-v8a/libmagiskboot.so" > "$TOOLS_DIR/magiskboot"
chmod +x "$TOOLS_DIR/magiskboot"

# Build Zip
echo "Packaging $ZIP_NAME..."
cd "$MODULE_DIR" || exit 1

# Zip contents of current directory
# Exclude:
# - .git directory
# - build.sh (the script itself)
# - any existing .zip files
# - backend script placeholders if any (we will add real ones later)
zip -r "$ZIP_NAME" . -x "*.git*" "build.sh" "*.zip"

# Cleanup tools binary (leave directory if it exists in repo)
rm -f "$TOOLS_DIR/magiskboot"
if [ -z "$(ls -A $TOOLS_DIR)" ]; then
   rmdir "$TOOLS_DIR"
fi

echo "Done! Output: $MODULE_DIR/$ZIP_NAME"
