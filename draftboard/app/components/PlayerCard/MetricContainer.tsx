import { Flame, Shield, Zap, Target, TrophyIcon } from "lucide-react";
import YearTable from "./YearTable";

interface MetricProps {
  stats?: string; // optional for now
  number?: number;
  color?: string; // font color, border color
}

// this will map over the metrics
export default function MetricContainer({ color }: MetricProps) {
  return (
    <div>
      <div
        className="outline-2 outline-offset-2 outline-solid rounded-lg"
        style={{ color: color }}
      >
        <div>
          <Flame size={10} />
          <h4 style={{ color: color, fontWeight: "bold", fontSize: "8px" }}>
            PPG
          </h4>
        </div>
        <h4 style={{ color: color, fontWeight: "bold", fontSize: "24px" }}>
          26.4
        </h4>
      </div>
      <YearTable />
    </div>
  );
}
