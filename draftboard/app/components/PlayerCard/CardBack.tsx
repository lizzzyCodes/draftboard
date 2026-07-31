import * as NBAIcons from "react-nba-logos";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "./PlayerInfo";
import CardFooter from "./CardFooter";
import { getLatestSeason } from "@/lib/api/utils/stats";
import YearTable from "./YearTable";
import { TrophyIcon } from "lucide-react";
import { getPlayerStats } from '@/lib/api/playerStats'
import { CAREER } from "@/lib/api/const";
import type { CardBackProps } from "./types";

export default async function CardBack({
  player, primaryColor, secondaryColor
}: CardBackProps) {
  console.log(player, '[ec] player is here ')
  const { first_name, last_name, team_name, team_abbrv, birthday, draft_year, height, jersey, position, weight } = player;
  const { season_stats, combine } = await getPlayerStats(player.nba_player_id);

  const wingspan = combine?.wingspan;
  const standing_reach = combine?.standing_reach;

  const latestStats = await getLatestSeason(season_stats)

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
        borderColor: primaryColor, // this is background color the rest is border
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
        style={{ borderColor: secondaryColor }}
      >
        <PlayerInfo wingspan={wingspan} standing_reach={standing_reach} first_name={first_name} last_name={last_name} birthday={birthday} height={height} weight={weight} position={position} draft_year={draft_year} jersey={jersey} color={primaryColor} secondaryColor={secondaryColor} />
        <MetricContainer latestSeasonStats={latestStats} />


        <div className="flex items-center gap-4 text-gray-400 ">
          <TrophyIcon size={20} />
          <h4 className="font-bold tracking-wider text-lg ">{CAREER}</h4>
        </div>

        <YearTable seasonText={"Regular Season"} stats={regularSeason} secondaryColor={secondaryColor} />
        <YearTable seasonText={"Playoffs"} stats={playoffSeason} secondaryColor={secondaryColor} />
        <CardFooter />
      </div>
    </section>
  );
}
