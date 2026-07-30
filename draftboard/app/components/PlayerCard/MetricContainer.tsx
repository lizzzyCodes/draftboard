import { Flame, Shield, Zap, Target, TrophyIcon } from "lucide-react";
import { formatPercent } from "@/lib/api/utils/utils";
import { SeasonStats } from "@/lib/api/types/player";

interface MetricProps {
  latestSeasonStats?: SeasonStats
}

export default function MetricsContainer({ latestSeasonStats }: MetricProps) {

  const { ppg, rpg, apg, fg3_pct, fg_pct, ft_pct } = latestSeasonStats;

  const metrics = [
    { label: "PPG", value: ppg, icon: Flame },
    { label: "RPG", value: rpg, icon: Shield },
    { label: "APG", value: apg, icon: Zap },
    { label: "3P%", value: formatPercent(fg3_pct), icon: Target },
    { label: "FG%", value: formatPercent(fg_pct), icon: Target },
    { label: "FT%", value: formatPercent(ft_pct), icon: TrophyIcon },
  ];


  {/*return (
     <div>
      <div
        className="outline-2 outline-offset-2 outline-solid rounded-lg"
        // style={{ color: color }}
        style={{ color: "#000000" }}
      >
        <div>
          <Flame size={10} />
          <h4 style={{ color: "#000000", fontWeight: "bold", fontSize: "8px" }}>
            PPG
          </h4>
        </div>
        <h4 style={{ color: "#000000", fontWeight: "bold", fontSize: "24px" }}>
          26.4
        </h4>
      </div>

    </div> */}
  return (
    <div className="grid grid-cols-3 gap-3">
      {metrics.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-gray-50 py-5"
        >
          <div className="flex items-center gap-1.5 text-gray-400">
            <Icon size={16} strokeWidth={2} />
            <span className="text-sm font-semibold tracking-widest">
              {label}
            </span>
          </div>
          <span className="font-mono text-4xl font-bold tracking-tight text-gray-900">
            {value}
          </span>
        </div>
      ))}
    </div>
  )
} 
