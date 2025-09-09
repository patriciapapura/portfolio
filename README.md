# Patri Portfolio

A modern, interactive personal portfolio built with React and Vite. Features a character-based slideshow homepage where users can scroll through different portfolio sections, each represented by a unique character.

## Features

- **Interactive Character Slider**: Scroll through different portfolio sections on the homepage
- **Modern UI Design**: Beautiful, responsive design with glassmorphism effects
- **Navigation**: Fixed header with smooth navigation between sections
- **Portfolio Sections**:
  - Dance & Performance 💃
  - Videography & Content Creation 🎬
  - Tech & Research 🔬
  - Planetwide Collective 🌍
  - Travel & Culture ✈️
  - Writings & Philosophy 📝

## Technology Stack

- React 19
- React Router DOM
- Vite
- CSS3 with modern features (backdrop-filter, CSS Grid, Flexbox)
- Google Fonts (Inter)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Header.css
│   ├── CharacterSlider.jsx # Homepage character slideshow
│   └── CharacterSlider.css
├── pages/
│   ├── Home.jsx            # Homepage with character slider
│   ├── DancePerformance.jsx
│   ├── Videography.jsx
│   ├── TechResearch.jsx
│   ├── PlanetwideCollective.jsx
│   ├── TravelCulture.jsx
│   ├── WritingsPhilosophy.jsx
│   └── Page.css            # Shared page styles
├── App.jsx                 # Main app component with routing
├── App.css                 # Global app styles
├── index.css               # Global styles and CSS reset
└── main.jsx                # App entry point
```

## Usage

- **Homepage**: Scroll with mouse wheel to navigate through character cards
- **Navigation**: Use the header menu to jump directly to specific sections
- **Character Cards**: Click on any character card to navigate to that section
- **Responsive**: Fully responsive design that works on desktop and mobile devices