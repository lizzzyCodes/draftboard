import type { ColumnKey } from "./types";

export const COLUMNS: { key: ColumnKey; label: string }[] = [
    { key: "season", label: "YEAR" },
    { key: "team", label: "TEAM" },
    { key: "gp", label: "GP" },
    { key: "fg_pct", label: "FG%" },
    { key: "fg3_pct", label: "3PT%" },
    { key: "ft_pct", label: "FT%" },
    { key: "rpg", label: "REB" },
    { key: "apg", label: "AST" },
    { key: "stl", label: "STL" },
    { key: "blk", label: "BLK" },
    { key: "ppg", label: "PPG" },
    { key: "avg", label: "AVG" },
];