import { type WinResult, type Cell, COLS, ROWS } from "../types/game";

export function checkWinner(
  latestIndex: number,
  cells: Cell[]
): WinResult | null {
  const directions = [
    { x: 1, y: 0 }, // Horizontal
    { x: 0, y: 1 }, // Vertical
    { x: 1, y: 1 }, // Diagonal /
    { x: 1, y: -1 }, // Diagonal \
  ];

  const latestCell = cells[latestIndex];
  if (!latestCell.player) return null;

  for (const { x: dx, y: dy } of directions) {
    const indices = [latestIndex];

    for (let dir = -1; dir <= 1; dir += 2) {
      let step = 1;
      while (true) {
        const newX = (latestIndex % COLS) + dir * step * dx;
        const newY = Math.floor(latestIndex / COLS) + dir * step * dy;
        const newIndex = newY * COLS + newX;

        if (
          newX < 0 ||
          newX >= COLS ||
          newY < 0 ||
          newY >= ROWS ||
          cells[newIndex].player !== latestCell.player
        ) {
          break;
        }

        indices.push(newIndex);
        step++;
      }
    }

    if (indices.length >= 4) {
      return { player: latestCell.player, indices };
    }
  }

  return null;
}

export function getCellColorClass(cell: Cell, isWinning: boolean = false) {
  if (cell.player === "Red") {
    return isWinning
      ? "bg-gradient-to-br from-red-400 to-red-600 shadow-lg"
      : "bg-gradient-to-br from-red-500 to-red-700 shadow-md";
  } else if (cell.player === "Yellow") {
    return isWinning
      ? "bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg"
      : "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md";
  } else {
    return "bg-gray-900 shadow-inner border-2 border-gray-800";
  }
}
