import type { SeasonStats } from "@/lib/api/types/player";
import TableDivider from "./TableDivider";
import { COLUMNS } from "./CardBack/SeasonColumns";

interface YearTableProps {
  stats: SeasonStats[]
  color?: string,
  secondaryColor?: string
  seasonText: string
}

export default async function YearTable({ stats, color, secondaryColor, seasonText }: YearTableProps) {

  return (
    <>
      <TableDivider text={seasonText} secondaryColor={secondaryColor} />
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
          {stats.map((season) => (
            <tr key={season.season}>
              {COLUMNS.map((column) => (
                <td key={column.key}>
                  {season[column.key as keyof SeasonStats]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

