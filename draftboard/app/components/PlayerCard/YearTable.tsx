import { Flame, Shield, Zap, Target, TrophyIcon } from "lucide-react";
interface YearTableProps {}

export default function YearTable() {
  return (
    <>
      <TrophyIcon size={10} />
      <h4 style={{ fontWeight: "bold", fontSize: "8px" }}>CAREER</h4>
      <table className="table-auto font-space-mono">
        <thead>
          <tr>
            <th>YEAR</th>
            <th>TEAM</th>
            <th>GP</th>
            <th>FG%</th>
            <th>3PT%</th>
            <th>FT%</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>AVG</th>
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
