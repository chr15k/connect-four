import { useConnectFour } from "../hooks/use-connect-four";
import ConnectFourControls from "./ConnectFourControls";
import ConnectFourCells from "./ConnectFourCells";

export default function ConnectFour() {
  const {
    activePlayer,
    winner,
    winningCells,
    cells,
    allCellsEmpty,
    handlePlayerTurn,
    handleReset,
  } = useConnectFour();

  return (
    <div className="border rounded-xl p-8">
      <h1>Connect Four</h1>
      <ConnectFourControls
        activePlayer={activePlayer}
        winner={winner}
        allCellsEmpty={allCellsEmpty}
        onHandleReset={handleReset}
      />
      <ConnectFourCells
        cells={cells}
        winningCells={winningCells}
        onHandlePlayerTurn={handlePlayerTurn}
      />
    </div>
  );
}
