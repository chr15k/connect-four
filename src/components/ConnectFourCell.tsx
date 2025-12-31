import type { Cell } from "../types/game";
import { getCellColorClass } from "../utils/game";

interface ConnectFourCellProps {
  index: number;
  cell: Cell;
  highlight: boolean;
  onHandlePlayerTurn: (index: number) => void;
}

export default function ConnectFourCell({
  index,
  cell,
  highlight,
  onHandlePlayerTurn,
}: ConnectFourCellProps) {
  return (
    <button
      onClick={() => onHandlePlayerTurn(index)}
      disabled={cell.player !== null}
      className={`${getCellColorClass(
        cell,
        highlight,
      )} h-22 w-22 rounded-full flex items-center justify-center`}
    ></button>
  );
}
