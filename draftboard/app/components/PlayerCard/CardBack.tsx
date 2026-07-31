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

/* interface CardBackProps {
  backgroundColor?: string;
  borderColor?: string;
  teamAbbreviation: keyof typeof NBAIcons;
  playerName?: string;
}

export default function CardBack({
  backgroundColor,
  borderColor,
  teamAbbreviation,
  playerName,
}: CardBackProps) {
  const TeamIcon = NBAIcons[teamAbbreviation]; // cant use ? or else its going to cmplin keep in mind

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
        backgroundColor,
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
        style={{ borderColor: borderColor }}
      >
        <div className="size-25">
          <TeamIcon />
        </div>
        <h3 style={{ color: borderColor }}>{playerName} </h3>
        <PlayerInfo color={borderColor} />
        <MetricContainer color={borderColor} />
        <PlayerBio
          color={borderColor}
          bio="Four-time champion and the league's all-time leading scorer. Still running the offense at an elite level deep into his twenties year."
        />
        <ScoutReportsSection color={borderColor} />
        <CardFooter />
      </div>
    </section>
  );
} */

import { CardProps } from "./Card";
import { getPlayerStats } from '@/lib/api/playerStats'

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
        <YearTable careerStats={careerStats} color={primaryColor} secondaryColor={secondaryColor} />
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
