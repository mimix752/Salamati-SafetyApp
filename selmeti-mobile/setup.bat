@echo off
echo.
echo ========================================
echo   Selmeti Mobile App - Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version
echo [OK] npm is installed
npm --version
echo.

REM Install dependencies
echo [INFO] Installing dependencies...
echo.
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Setup completed!
    echo ========================================
    echo.
    echo To start the app, run:
    echo   npm start
    echo.
    echo Then:
    echo   - Press 'a' for Android emulator
    echo   - Press 'i' for iOS simulator
    echo   - Scan QR code with Expo Go app
    echo.
    echo For more info, see QUICKSTART.md
    echo.
) else (
    echo.
    echo [ERROR] Installation failed.
    echo Try running: npm install --legacy-peer-deps
    echo.
)

pause
