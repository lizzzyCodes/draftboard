import CardHeader from "./CardHeader";
import Image from "next/image";
import PlayerName from "./PlayerName";
import Team from "./TeamName";
import * as NBAIcons from "react-nba-logos";
import { Player } from "@/lib/api/types/player";
import CardBack from './CardBack'
import { getTeamDetails } from "@/lib/api/teamColors";
import AnimatedCard from "./AnimatedCard";
import { getPlayerStats } from "@/lib/api/playerStats";
import type { CardProps } from "./types";

export default async function Card({ player }: CardProps) {
  const { first_name, last_name, team_name, team_abbrv } = player;
  const teamDetails = await getTeamDetails(team_abbrv);
  const color = teamDetails.color;
  const secondaryColor = teamDetails.alternate_color;

  const TeamIcon = NBAIcons[team_abbrv as keyof typeof NBAIcons];
  return (
    <>
      <AnimatedCard

        color={color}
        secondaryColor={secondaryColor}>
        <div
          className="
          h-[90%]
          p-[3px]
          border-[3px]
          border-white
          rounded-tl-[20px]
          rounded-tr-[20px]
          rounded-bl-[20px]
          rounded-br-none"
        >
          <div
            className="
            h-full
            flex
            flex-col
            border-[3px]
            rounded-tl-[16px]
            rounded-tr-[16px]
            rounded-bl-[16px]
            rounded-br-none"
            style={{ borderColor: secondaryColor }}
          >
            <CardHeader />

            <hr className="border-t-[1.5px] border-white" />
            <div className="flex-1 min-h-0 relative w-full">

              <Image src={`/player-images/${first_name}_${last_name}_headshot.avif`} alt={`${first_name} ${last_name}`} fill className="object-cover" />
            </div>

            <hr className="border-t-[1.5px] border-white" />

            <div className="flex justify-center items-center pl-[95px] pr-4  min-w-0">
              <div className="truncate whitespace-nowrap">
                <PlayerName name={`${first_name} ${last_name}`} />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 z-50 border-2 bg-white rounded-full size-25 flex items-center justify-center overflow-hidden"
          style={{ borderColor: secondaryColor }}
        >
          <TeamIcon className="w-full h-full p-2" />
        </div>

        <div className="absolute right-4 -mt-2">
          <Team team={team_name} />
        </div>
      </AnimatedCard >
      <CardBack player={player} primaryColor={color} secondaryColor={secondaryColor} />
    </>
  );
}