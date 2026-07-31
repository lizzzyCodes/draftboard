import type { SeasonStats } from "./types";
import TableDivider from "./TableDivider";
import { COLUMNS } from "./CardBack/SeasonColumns";

interface YearTableProps {
  stats: SeasonStats[]
  secondaryColor?: string
  seasonText: string
}

export default async function YearTable({ stats, secondaryColor, seasonText }: YearTableProps) {

  return (
    <>
      <TableDivider text={seasonText} secondaryColor={secondaryColor} />
      <table className="
        w-full 
        table-fixed 
        font-space-mono 
        text-center
      ">
        <thead>
          <tr>
            {COLUMNS.map((column) => (
              <th className=" font-bold tracking-wider text-lg" key={column.key}>
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

