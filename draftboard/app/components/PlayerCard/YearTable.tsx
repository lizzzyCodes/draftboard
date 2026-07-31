import { Flame, Shield, Zap, Target, TrophyIcon } from "lucide-react";
import { getPlayerStats } from "@/lib/api/playerStats";
import type { SeasonStats } from "@/lib/api/types/player";
import { formatPercent } from "@/lib/api/utils/utils";

interface YearTableProps {
  careerStats: SeasonStats
  color?: string,
  secondaryColor?: string
}

type ColumnKey =
  | "season"
  | "team"
  | "gp"
  | "fg_pct"
  | "fg3_pct"
  | "ft_pct"
  | "rpg"
  | "apg"
  | "stl"
  | "blk"
  | "ppg"
  | "avg";

const COLUMNS: { key: ColumnKey; label: string }[] = [
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
export default async function YearTable({ careerStats, color, secondaryColor }: YearTableProps) {

  return (
    <>
      <TrophyIcon size={10} />
      <h4 style={{ fontWeight: "bold", fontSize: "8px" }}>CAREER</h4>

      <div
        className="px-4 py-2.5"
        style={{
          background: secondaryColor,
        }}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white">
          REGULAR SEASON
        </h3>
      </div>

      <table className="table-auto font-space-mono">
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th key={column.key}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>84-85</td>
            <td>Houston</td>
            <td>82</td>
            <td>.471</td>
            <td>-</td>
            <td>-</td>
            <td>6.5</td>
            <td>5.5</td>
            <td>2.3</td>
            <td>1.1</td>
            <td>24.5</td>
          </tr>
          <tr>
            <td>84-85</td>
            <td>Houston</td>
            <td>82</td>
            <td>.471</td>
            <td>-</td>
            <td>-</td>
            <td>6.5</td>
            <td>5.5</td>
            <td>2.3</td>
            <td>1.1</td>
            <td>24.5</td>
          </tr>
          <tr>
            <td>84-85</td>
            <td>Houston</td>
            <td>82</td>
            <td>.471</td>
            <td>-</td>
            <td>-</td>
            <td>6.5</td>
            <td>5.5</td>
            <td>2.3</td>
            <td>1.1</td>
            <td>24.5</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

