# Setup Guide for React Website

## Prerequisites

You need to install Node.js to run this React application locally. Here are the installation options:

### Option 1: Install Node.js using Homebrew (Recommended for macOS)

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js**:
   ```bash
   brew install node
   ```

3. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```

### Option 2: Download from Node.js website

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version for macOS
3. Run the installer
4. Verify installation in terminal

### Option 3: Use Node Version Manager (nvm)

1. **Install nvm**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Restart terminal or run**:
   ```bash
   source ~/.zshrc
   ```

3. **Install Node.js**:
   ```bash
   nvm install 18
   nvm use 18
   ```

## After Installing Node.js

Once Node.js is installed, you can run the website locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

The website will automatically deploy to GitHub Pages when you push changes to the `main` branch. The GitHub Actions workflow will handle the build process.

## Troubleshooting

- If you get permission errors, try using `sudo` with the installation commands
- Make sure you're using Node.js version 18 or higher
- If npm commands fail, try clearing the cache: `npm cache clean --force` 