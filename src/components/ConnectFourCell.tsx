import { memo } from "react";
import type { Cell } from "../types/game";
import { getCellColorClass } from "../utils/game";

interface ConnectFourCellProps {
  disabled: boolean;
  index: number;
  cell: Cell;
  highlight: boolean;
  isAnimating: boolean;
  onHandlePlayerTurn: (index: number) => void;
}

export default memo(function ConnectFourCell({
  disabled,
  index,
  cell,
  highlight,
  isAnimating,
  onHandlePlayerTurn,
}: ConnectFourCellProps) {
  const isEmpty = cell.player === null;
  const isDisabled = !isEmpty || disabled;

  return (
    <button
      onClick={() => onHandlePlayerTurn(index)}
      disabled={isDisabled}
      className={`${getCellColorClass(
        cell,
        highlight,
      )} h-22 w-22 rounded-full flex items-center justify-center
      transition-all duration-200 ease-in-out
      ${isAnimating ? "scale-110 shadow-lg" : ""}
      ${
        !isDisabled && isEmpty
          ? "hover:scale-105 hover:opacity-70 cursor-pointer"
          : ""
      }
      ${isDisabled ? "cursor-not-allowed" : ""}
      ${highlight ? "ring-4 ring-yellow-300 shadow-xl animate-pulse" : ""}`}
    ></button>
  );
});
