import type { Player } from "../types/game";

interface ConnectFourControlsProps {
  activePlayer: Player;
  winner: Player;
  allCellsEmpty: boolean;
  onHandleReset: () => void;
}

export default function ConnectFourControls({
  activePlayer,
  winner,
  allCellsEmpty,
  onHandleReset,
}: ConnectFourControlsProps) {
  return (
    <div className="border rounded-xl p-4 my-4 flex justify-center items-center relative">
      <h2
        className={`${
          activePlayer === "Yellow" ? "text-yellow-600" : "text-red-700"
        } font-bold text-lg`}
      >
        {winner
          ? `${activePlayer} wins!`
          : allCellsEmpty
            ? `${activePlayer} starts the game`
            : `${activePlayer}'s turn`}
      </h2>
      <button
        onClick={onHandleReset}
        className="absolute right-1 cursor-pointer"
      >
        Reset
      </button>
    </div>
  );
}
