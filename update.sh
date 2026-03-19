#!/bin/bash

echo "Select an action for your modpack:"
echo "1) Import CurseForge Pack"
echo "2) Update all mods"
echo "3) Exit"
read -p "Enter choice [1-3]: " choice

case $choice in
    1)
        read -p "Enter the filename of the zip (e.g., Nexus Beyond.zip): " zipname
        if [ -f "$zipname" ]; then
            packwiz curseforge import "$zipname"
            echo "Import complete."
        else
            echo "Error: File '$zipname' not found."
        fi
        ;;
    2)
        echo "Updating all mods..."
        packwiz update --all
        packwiz refresh
        echo "Update and refresh complete."
        ;;
    3)
        echo "Exiting."
        exit 0
        ;;
    *)
        echo "Invalid option."
        ;;
esac