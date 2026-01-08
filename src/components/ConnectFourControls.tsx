import type { Player } from "../types/game";

interface ConnectFourControlsProps {
  activePlayer: Player;
  winner: Player;
  allCellsEmpty: boolean;
  onHandleReset: () => void;
  onHandleUndo: () => void;
}

export default function ConnectFourControls({
  activePlayer,
  winner,
  allCellsEmpty,
  onHandleUndo,
  onHandleReset,
}: ConnectFourControlsProps) {
  return (
    <div className="border rounded-xl p-6 bg-gray-50 shadow-md">
      <div className="flex justify-between items-center gap-4">
        <h2
          className={`${
            activePlayer === "Yellow" ? "text-yellow-600" : "text-red-700"
          } font-bold text-xl flex-1 text-center`}
        >
          {winner
            ? `🎉 ${winner} wins!`
            : allCellsEmpty
              ? `${activePlayer} starts the game`
              : `${activePlayer}'s turn`}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={onHandleUndo}
            disabled={allCellsEmpty}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium
              hover:bg-blue-600 transition-all duration-150
              disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:active:scale-100
              shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            Undo
          </button>
          <button
            onClick={onHandleReset}
            disabled={allCellsEmpty}
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium
              hover:bg-red-600 transition-all duration-150
              disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:active:scale-100
              shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
