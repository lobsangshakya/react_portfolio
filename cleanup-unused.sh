#!/bin/bash

# Cleanup unused and unnecessary files
echo "Removing unused and unnecessary files..."

# Remove unused component files
rm -f src/components/Alert.tsx
rm -f src/components/DarkMode.tsx
rm -f src/components/ExerciseButton.tsx
rm -f src/components/ListGroup.tsx
rm -f src/components/My_app.tsx

# Remove unused asset files
rm -f src/assets/GalaxyIcon.jpg
rm -f src/assets/dark_moon.jpeg
rm -f src/assets/galaxy.jpg
rm -f src/assets/react.svg

# Remove unused public files
rm -f public/dark.jpeg
rm -f public/galaxy.jpg
rm -f public/portfolio.png
rm -f public/vite.svg

# Remove empty CSS file
rm -f src/App.css

# Remove unused config files
rm -f REACT_ORTFOLIO
rm -f REACT_ORTFOLIO.pub
rm -f react_portfolio
rm -f react_portfolio.pub

echo "Cleanup completed! Unused and unnecessary files have been removed."