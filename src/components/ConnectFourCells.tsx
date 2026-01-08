import { COLS, ROWS, type Cell } from "../types/game";
import ConnectFourCell from "./ConnectFourCell";

interface ConnectFourCellsProps {
  cells: Cell[];
  winningCells: number[];
  moveInProgress: boolean;
  animatingCell: number | null;
  onHandlePlayerTurn: (index: number) => void;
}

export default function ConnectFourCells({
  cells,
  winningCells,
  moveInProgress,
  animatingCell,
  onHandlePlayerTurn,
}: ConnectFourCellsProps) {
  return (
    <div
      role="grid"
      aria-label="Connect Four game board"
      className="grid gap-2 p-4 bg-blue-600 rounded-lg mt-4"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {cells.map((cell, index) => (
        <ConnectFourCell
          disabled={moveInProgress}
          key={index}
          index={index}
          cell={cell}
          highlight={winningCells.includes(index)}
          isAnimating={animatingCell === index}
          onHandlePlayerTurn={onHandlePlayerTurn}
        />
      ))}
    </div>
  );
}
