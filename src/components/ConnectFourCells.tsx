import { COLS, type Cell } from "../types/game";
import ConnectFourCell from "./ConnectFourCell";

interface ConnectFourCellsProps {
  cells: Cell[];
  winningCells: number[];
  onHandlePlayerTurn: (index: number) => void;
}

const gridColsClass =
  {
    7: "grid-cols-7",
    6: "grid-cols-6",
  }[COLS] || "grid-cols-7";

export default function ConnectFourCells({
  cells,
  winningCells,
  onHandlePlayerTurn,
}: ConnectFourCellsProps) {
  return (
    <div className={`grid ${gridColsClass} gap-4 mt-4`}>
      {cells.map((cell, index) => (
        <ConnectFourCell
          key={index}
          index={index}
          cell={cell}
          highlight={winningCells.includes(index)}
          onHandlePlayerTurn={onHandlePlayerTurn}
        />
      ))}
    </div>
  );
}
