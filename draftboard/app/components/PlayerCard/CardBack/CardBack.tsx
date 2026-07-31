import MetricContainer from "./MetricContainer";
import PlayerInfo from "../PlayerInfo";
import CardFooter from "../CardFooter";
import { getLatestSeason } from "@/lib/api/utils/stats";
import YearTable from "../YearTable";
import { TrophyIcon } from "lucide-react";
import { CAREER } from "@/lib/api/const";
import type { CardProps } from "@/lib/api/types/types";
import { safeColor } from "@/lib/api/utils/utils";

export default function CardBack({
  player, // birthday, draft_year, nombre, id
  teamDetails, // equipo color, color secondary
  playerStats, // season_stats
}: CardProps) {

  if (!teamDetails || !playerStats) {
    return null;
  }

  const {
    first_name,
    last_name,
    birthday,
    draft_year,
    height,
    weight,
    jersey,
    position,
  } = player;

  const {
    color: rawColor,
    alternate_color: rawAlternateColor,
  } = teamDetails;

  const color = safeColor(rawColor);
  const alternate_color = safeColor(rawAlternateColor);

  const { season_stats, combine } = playerStats;

  const latestSeasonStats = getLatestSeason(season_stats);

  const playoffSeason = season_stats.filter(
    (season: any) => season.season_type === "Playoffs"
  );

  const regularSeason = season_stats.filter(
    (season: any) => season.season_type === "Regular Season"
  );

  return (
    <section
      className="
        rounded-tl-[20px]
        rounded-tr-[20px]
        rounded-bl-[20px]
        rounded-br-[20px]
        p-[10px]
        overflow-hidden
        relative
      "
      style={{
        borderColor: color, // this is background color the rest is border
      }}
    >
      <div
        className="
                h-full
                flex
                flex-col
                border-[3px]
            rounded-tl-[20px]
            rounded-tr-[20px]
            rounded-bl-[20px]
            rounded-br-[20px]"
        style={{ borderColor: alternate_color, padding: "10px" }}
      >
        <PlayerInfo combine={combine} player={player} color={color} secondaryColor={alternate_color} />
        <MetricContainer latestSeasonStats={latestSeasonStats} />
        <div className="flex items-center gap-4 text-gray-400 p-4">
          <TrophyIcon size={20} />
          <h4 className="font-bold tracking-wider text-lg ">{CAREER}</h4>
        </div>
        <div className="p-2">
          <YearTable seasonText={"Regular Season"} stats={regularSeason} secondaryColor={alternate_color} />
        </div>
        <div className="p-2">
          <YearTable seasonText={"Playoffs"} stats={playoffSeason} secondaryColor={alternate_color} />
        </div>
        <CardFooter />
      </div>
    </section>
  );
}
