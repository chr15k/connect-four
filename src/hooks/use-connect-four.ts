import { useState } from "react";
import { type Cell, type Player, CELLS, COLS } from "../types/game";
import { checkWinner } from "../utils/game";

export function useConnectFour() {
  const [activePlayer, setActivePlayer] = useState<Player>("Red");
  const [winner, setWinner] = useState<Player>(null);
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [cells, setCells] = useState<Cell[]>(
    Array.from({ length: CELLS }, () => ({ player: null })),
  );

  const allCellsEmpty = cells.every((cell) => cell.player === null);

  const handlePlayerTurn = (index: number) => {
    if (cells[index].player !== null || winner) return;

    let currentIndex = index;
    while (cells[currentIndex + COLS]?.player === null) {
      currentIndex += COLS;
    }

    const startRow = Math.floor(index / COLS);
    const endRow = Math.floor(currentIndex / COLS);

    for (let row = startRow; row <= endRow; row++) {
      const animIndex = row * COLS + (index % COLS);
      setTimeout(() => {
        setCells((prev) => {
          const newCells = [...prev];
          if (row > startRow) {
            newCells[(row - 1) * COLS + (index % COLS)] = { player: null };
          }
          newCells[animIndex] = { player: activePlayer };
          return newCells;
        });
      }, row * 100);
    }

    setTimeout(
      () => {
        setCells((prev) => {
          const newCells = [...prev];
          newCells[currentIndex] = { player: activePlayer };

          const result = checkWinner(currentIndex, newCells);
          if (result) {
            setWinner(result.player);
            setWinningCells(result.indices);
          } else {
            setActivePlayer(activePlayer === "Red" ? "Yellow" : "Red");
          }

          return newCells;
        });
      },
      (endRow + 1) * 100,
    );
  };

  const handleReset = () => {
    setCells(Array.from({ length: CELLS }, () => ({ player: null })));
    setActivePlayer("Red");
    setWinner(null);
    setWinningCells([]);
  };

  return {
    activePlayer,
    winner,
    winningCells,
    cells,
    allCellsEmpty,
    handlePlayerTurn,
    handleReset,
  };
}
