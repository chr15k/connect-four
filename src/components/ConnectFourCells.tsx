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
      className="grid gap-3 p-6 bg-blue-700 rounded-2xl mt-4 shadow-2xl border-8 border-blue-800 w-fit mx-auto"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 80px)`,
        gridTemplateRows: `repeat(${ROWS}, 80px)`,
      }}
    >
      {cells.map((cell, index) => (
        <div
          key={index}
          className="aspect-square flex items-center justify-center"
        >
          <ConnectFourCell
            disabled={moveInProgress}
            index={index}
            cell={cell}
            highlight={winningCells.includes(index)}
            isAnimating={animatingCell === index}
            onHandlePlayerTurn={onHandlePlayerTurn}
          />
        </div>
      ))}
    </div>
  );
}
