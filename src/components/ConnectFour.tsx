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
    moveInProgress,
    animatingCell,
    handlePlayerTurn,
    handleReset,
    handleUndo,
  } = useConnectFour();

  return (
    <div className="border rounded-xl p-8">
      <ConnectFourControls
        activePlayer={activePlayer}
        winner={winner}
        allCellsEmpty={allCellsEmpty}
        onHandleUndo={handleUndo}
        onHandleReset={handleReset}
      />
      <ConnectFourCells
        cells={cells}
        winningCells={winningCells}
        moveInProgress={moveInProgress}
        animatingCell={animatingCell}
        onHandlePlayerTurn={handlePlayerTurn}
      />
    </div>
  );
}
