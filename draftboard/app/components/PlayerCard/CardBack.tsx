import * as NBAIcons from "react-nba-logos";
import BackButton from "../Buttons/Back";
import MetricContainer from "./MetricContainer";
import PlayerInfo from "./PlayerInfo";
import PlayerBio from "./PlayerBio";
import ScoutReportsSection from "./ScoutReports";
import CardFooter from "./CardFooter";
import Headshot from "./Headshot";

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

export default function CardBack({
  player
}: CardProps) {

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
        borderColor: "#fec524", // this is background color the rest is border
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
        <div className="size-25">
          {/*<TeamIcon />*/}
        </div>
        <h3 style={{ borderColor: "#fec524" }}>{`${first_name} ${last_name}`} </h3>
        <PlayerInfo birthday={birthday} height={height} weight={weight} position={position} draft_year={draft_year} jersey={jersey} color={"#fec524"} />
        <MetricContainer color={"#fec524"} />
        <PlayerBio
          color={"#fec524"}
          bio="Four-time champion and the league's all-time leading scorer. Still running the offense at an elite level deep into his twenties year."
        />
        <ScoutReportsSection color={"#fec524"} />
        <CardFooter />
      </div>
    </section>
  );
}
