#!/bin/bash

echo "🛡️  Selmeti Mobile App - Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🚀 You can now start the app with:"
    echo "   npm start"
    echo ""
    echo "📱 Then:"
    echo "   - Press 'a' for Android emulator"
    echo "   - Press 'i' for iOS simulator"
    echo "   - Scan QR code with Expo Go app on your phone"
    echo ""
    echo "📖 For more information, see QUICKSTART.md"
else
    echo ""
    echo "❌ Installation failed. Try:"
    echo "   npm install --legacy-peer-deps"
fi
