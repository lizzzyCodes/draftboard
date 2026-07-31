import * as NBAIcons from "react-nba-logos";
import BackButton from "../Buttons/Back";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "./PlayerInfo";
import PlayerBio from "./PlayerBio";
import ScoutReportsSection from "./ScoutReports";
import CardFooter from "./CardFooter";
import Headshot from "./Headshot";
import { fullName } from "@/lib/api/utils/utils";
import { getLatestSeason } from "@/lib/api/utils/stats";
import YearTable from "./YearTable";
import { TrophyIcon } from "lucide-react";
import { CardProps } from "./Card";
import { getPlayerStats } from '@/lib/api/playerStats'
import { CAREER } from "@/lib/api/const";

interface CardBackProps extends CardProps {
  primaryColor: string;
  secondaryColor: string;
}


export default async function CardBack({
  player, primaryColor, secondaryColor
}: CardBackProps) {
  const playerStats = await getPlayerStats(2544); // harcoded for now
  const latestStats = await getLatestSeason(playerStats.season_stats) // gets the latest stats for 2025-2026 season
  const careerStats = playerStats.season_stats; // all career stas

  const { first_name, last_name, team_name, team_abbrv, birthday, draft_year, height, jersey, position, weight } = player;
  const TeamIcon = NBAIcons[team_abbrv as keyof typeof NBAIcons];

  const playoffSeason = careerStats.filter(
    (season: any) => season.season_type === "Playoffs"
  );

  const regularSeason = careerStats.filter(
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
        <PlayerInfo first_name={first_name} last_name={last_name} birthday={birthday} height={height} weight={weight} position={position} draft_year={draft_year} jersey={jersey} color={primaryColor} secondaryColor={secondaryColor} />
        <MetricContainer latestSeasonStats={latestStats} />
        {/**    <MetricContainer latestSeasonStats={playerStats} color={"#fec524"} /> */}
        <TrophyIcon size={10} />
        <h4 style={{ fontWeight: "bold", fontSize: "8px" }}>{CAREER}</h4>
        <YearTable seasonText={"Regular Season"} stats={regularSeason} color={primaryColor} secondaryColor={secondaryColor} />
        {/* <YearTable seasonText={"Playoffs"} stats={playoffSeason} color={primaryColor} secondaryColor={secondaryColor} /> */}
        <PlayerBio
          color={secondaryColor}
          bio="Four-time champion and the league's all-time scoring leader. Still running the offense at an elite level deep into his twenties year."
        />
        <ScoutReportsSection color={secondaryColor} />
        <CardFooter />
      </div>
    </section>
  );
}
