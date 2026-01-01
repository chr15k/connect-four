import { useState } from "react";
import {
  type Cell,
  type History,
  type Player,
  CELLS,
  COLS,
} from "../types/game";
import { checkWinner } from "../utils/game";

export function useConnectFour() {
  const [activePlayer, setActivePlayer] = useState<Player>("Red");
  const [winner, setWinner] = useState<Player>(null);
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [cells, setCells] = useState<Cell[]>(
    Array.from({ length: CELLS }, () => ({ player: null }))
  );
  const [moveInProgress, setMoveInProgress] = useState(false);
  const [history, setHistory] = useState<History>([]);

  const allCellsEmpty = cells.every((cell) => cell.player === null);

  const handlePlayerTurn = (index: number) => {
    if (cells[index].player !== null || winner || moveInProgress) return;

    setMoveInProgress(true);

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

    setTimeout(() => {
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
      setMoveInProgress(false);
      setHistory((prev) => [...prev, cells]);
    }, (endRow + 1) * 100);
  };

  const handleReset = () => {
    setCells(Array.from({ length: CELLS }, () => ({ player: null })));
    setActivePlayer("Red");
    setWinner(null);
    setWinningCells([]);
  };

  const handleUndo = () => {
    if (history.length === 0 || moveInProgress) return;

    const previousCells = history[history.length - 1];
    setCells(previousCells);
    setHistory((prev) => prev.slice(0, -1));
    setActivePlayer(activePlayer === "Red" ? "Yellow" : "Red");
    setWinner(null);
    setWinningCells([]);
  };

  return {
    activePlayer,
    winner,
    winningCells,
    cells,
    allCellsEmpty,
    moveInProgress,
    history,
    handlePlayerTurn,
    handleReset,
    handleUndo,
  };
}
