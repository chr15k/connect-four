# Connect Four

An interactive Connect Four game built with React, TypeScript, and Tailwind CSS.

## Features

- 🎮 **Classic Gameplay**: Traditional 7x6 Connect Four board
- 🎨 **Smooth Animations**: Visual chip-dropping animation effects
- ✨ **Win Detection**: Automatic detection of horizontal, vertical, and diagonal wins
- 🎯 **Winning Highlights**: Visual highlighting of winning chip combinations
- 🔄 **Game Reset**: Easy reset button to start a new game
- 📱 **Responsive Design**: Clean, modern UI with Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## How to Play

1. Red player goes first
2. Click any cell in a column to drop your chip
3. Chips fall to the lowest available position in the column
4. First player to connect 4 chips in a row (horizontally, vertically, or diagonally) wins
5. Use the Reset button to start a new game

## Project Structure

```
src/
├── components/
│   ├── ConnectFour.tsx          # Main game component
│   ├── ConnectFourCell.tsx      # Individual cell component
│   ├── ConnectFourCells.tsx     # Grid of cells
│   └── ConnectFourControls.tsx  # Game controls and status
├── hooks/
│   └── use-connect-four.ts      # Game state and logic hook
├── types/
│   └── game.ts                  # TypeScript type definitions
└── utils/
    └── game.ts                  # Game logic utilities
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **pnpm** - Package manager

## License

MIT
