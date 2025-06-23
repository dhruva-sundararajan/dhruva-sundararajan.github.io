# Dhruva Sundararajan - Personal Website

This is the personal website of Dhruva Sundararajan, a PhD student at Virginia Tech specializing in Operations Research and Artificial Intelligence.

## 🚀 Live Website

Visit the website at: [https://dhruva-sundararajan.github.io](https://dhruva-sundararajan.github.io)

## 🛠️ Technology Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruva-sundararajan/dhruva-sundararajan.github.io.git
   cd dhruva-sundararajan.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with the optimized production files.

### Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── Dhruva_Photo.jpg   # Profile photo
│   ├── Dhruva_Resume.pdf  # CV/Resume
│   └── ...
├── src/                   # React source code
│   ├── components/        # React components
│   │   ├── Navigation.js
│   │   ├── Home.js
│   │   ├── RecentNews.js
│   │   ├── Experiences.js
│   │   └── Papers.js
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add navigation links in `src/components/Navigation.js`

### Styling

The website uses Tailwind CSS for styling. Custom styles are defined in `src/index.css`.

### Content Updates

- **Profile Information**: Update `src/components/Home.js`
- **Recent News**: Update `src/components/RecentNews.js`
- **Experiences**: Update `src/components/Experiences.js`
- **Publications**: Update `src/components/Papers.js`

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Contact**: dhruva.sundararajan@gmail.com 