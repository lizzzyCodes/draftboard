import * as NBAIcons from "react-nba-logos";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "../PlayerInfo";
import CardFooter from "../CardFooter";
import { getLatestSeason } from "@/lib/api/utils/stats";
import YearTable from "../YearTable";
import { TrophyIcon } from "lucide-react";
import { CAREER } from "@/lib/api/const";
import type { CardProps } from "../types";



export default function CardBack({
  player, // birthday, draft_year, nombre, id
  teamDetails, // equipo color, color secondary
  playerStats, // srason satst
}: CardProps) {

  const { first_name, last_name, team_name, team_abbrv, birthday, draft_year, height, jersey, position, weight } = player;
  const { color, alternate_color } = teamDetails;
  const { season_stats, combine } = playerStats;
  const wingspan = combine?.wingspan;
  const standing_reach = combine?.standing_reach;
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
        style={{ borderColor: alternate_color }}
      >
        <PlayerInfo wingspan={wingspan} standing_reach={standing_reach} first_name={first_name} last_name={last_name} birthday={birthday} height={height} weight={weight} position={position} draft_year={draft_year} jersey={jersey} color={color} secondaryColor={alternate_color} />
        <MetricContainer latestSeasonStats={latestSeasonStats} />


        <div className="flex items-center gap-4 text-gray-400 ">
          <TrophyIcon size={20} />
          <h4 className="font-bold tracking-wider text-lg ">{CAREER}</h4>
        </div>

        <YearTable seasonText={"Regular Season"} stats={regularSeason} secondaryColor={alternate_color} />
        <YearTable seasonText={"Playoffs"} stats={playoffSeason} secondaryColor={alternate_color} />
        <CardFooter />
      </div>
    </section>
  );
}
