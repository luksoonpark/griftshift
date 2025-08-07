# Puzzle Game Web App

This is a React-based puzzle game built with TypeScript. It includes a modular component structure and modern UI elements.

## Features

- 🧩 Puzzle Game logic and animations
- 🎨 Theme customization via `ThemeProvider`
- ⚙️ Settings menu for game customization
- 📱 Responsive and accessible UI components
- 🌐 Built with modern React and TypeScript

## Project Structure

```
.
├── App.tsx                  # Main application entry
├── components/
│   ├── PuzzleGame.tsx       # Core game logic
│   ├── PuzzleTile.tsx       # Puzzle tile UI
│   ├── SettingsMenu.tsx     # User settings interface
│   ├── LandingPage.tsx      # Home/start screen
│   ├── ThemeProvider.tsx    # Dark/light theme support
│   └── ui/                  # Reusable UI components (button, card, modal, etc.)
├── Attributions.md          # Attributions and credits
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository (if needed)
git clone <your-repo-url>

# Navigate to the project folder
cd <project-folder>

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will start on [http://localhost:5173](http://localhost:5173) by default (if using Vite).

## Build for Production

```bash
npm run build
# or
yarn build
```

## License

See [Attributions.md](./Attributions.md) for open-source credits.
