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


  return (
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

    </div>
  );
} 
