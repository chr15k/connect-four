export const COLS = 7;
export const ROWS = 6;
export const CELLS = COLS * ROWS;

export interface Cell {
  player: Player;
}

export interface WinResult {
  player: Player;
  indices: number[];
}

export type Player = "Red" | "Yellow" | null;
export type History = Cell[][];
