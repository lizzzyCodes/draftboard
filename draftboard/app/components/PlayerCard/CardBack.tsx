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

export default async function CardBack({
  player
}: CardProps) {
  const playerStats = await getPlayerStats({ nba_player_id: 2544 }); // harcoded for now
  const latestStats = await getLatestSeason(playerStats.season_stats) // gets the latest stats for 2025-2026 season
  const { team_abbrv: ABRV } = playerStats;
  const { first_name, last_name, team_name, team_abbrv, birthday, draft_year, height, jersey, position, weight } = player;
  const TeamIcon = NBAIcons[ABRV as keyof typeof NBAIcons];

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
        borderColor: "#FFFFFF", // this is background color the rest is border
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
        style={{ borderColor: "#fec524", }}
      >
        <h3 style={{ borderColor: "#fec524" }}>{fullName(first_name, last_name).toUpperCase()} </h3>
        <PlayerInfo birthday={birthday} height={height} weight={weight} position={position} draft_year={draft_year} jersey={jersey} color={"#fec524"} />
        <MetricContainer latestSeasonStats={latestStats} />
        {/**    <MetricContainer latestSeasonStats={playerStats} color={"#fec524"} /> */}
        <YearTable />
        <PlayerBio
          color={"#fec524"}
          bio="Four-time champion and the league's all-time scoring leader. Still running the offense at an elite level deep into his twenties year."
        />
        <ScoutReportsSection color={"#fec524"} />
        <CardFooter />
      </div>
    </section>
  );
}
