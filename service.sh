#!/system/bin/sh
# FloppyCompanion service script
# This script applies saved tweaks after boot completes

MODDIR="${0%/*}"

# Wait for boot to complete
while [ "$(getprop sys.boot_completed)" != "1" ]; do
    sleep 1
done

# Additional delay for vendor scripts to finish
sleep 3

# --- Capture Kernel Defaults (before any tweaks) ---
if [ -f "$MODDIR/tweaks/capture_defaults.sh" ]; then
    sh "$MODDIR/tweaks/capture_defaults.sh"
fi

# --- Apply Saved Tweaks ---

# ZRAM
if [ -f "$MODDIR/tweaks/zram.sh" ]; then
    sh "$MODDIR/tweaks/zram.sh" apply_saved
fi

# Memory
if [ -f "$MODDIR/tweaks/memory.sh" ]; then
    sh "$MODDIR/tweaks/memory.sh" apply_saved
fi

# I/O Scheduler
if [ -f "$MODDIR/tweaks/iosched.sh" ]; then
    sh "$MODDIR/tweaks/iosched.sh" apply_saved
fi

# --- Update Module Description ---
KERN_VER=$(uname -r)
DESCRIPTION="Companion module to tweak FloppyKernel."

if echo "$KERN_VER" | grep -q "Floppy"; then
    STATUS="✅"
    INFO="$KERN_VER"
else
    STATUS="❌"
    INFO="Not Floppy or incompatible version"
fi

if [ -f "$MODDIR/module.prop" ]; then
    sed -i "s/^description=.*/description=$DESCRIPTION Detected kernel: $INFO $STATUS/" "$MODDIR/module.prop"
fi
