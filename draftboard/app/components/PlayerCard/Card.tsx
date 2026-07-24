import CardHeader from "./CardHeader";
import Image from "next/image";
import PlayerName from "./PlayerName";
import Team from "./TeamName";
import * as NBAIcons from "react-nba-logos";

interface CardProps {
  backgroundColor: string;
  borderColor: string;
  img: string;
  playerName: string;
  team: string;
  teamAbbreviation: keyof typeof NBAIcons;
}

export default function Card({
  backgroundColor,
  borderColor,
  img,
  playerName,
  team,
  teamAbbreviation,
}: CardProps) {
  const TeamIcon = NBAIcons[teamAbbreviation];
  return (
    <section
      className="
        w-[320px]
        h-[450px]
        rounded-tl-[20px]
        rounded-tr-[20px]
        rounded-bl-[40px]
        rounded-br-none
        p-[5px]
        overflow-hidden
        relative
      "
      style={{
        backgroundColor,
      }}
    >
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
          style={{ borderColor: borderColor }}
        >
          <CardHeader />

          <hr className="border-t-[1.5px] border-white" />
          <div className="flex-1 min-h-0 relative w-full">
            <Image src={img} alt={playerName} fill className="object-cover" />
          </div>

          <hr className="border-t-[1.5px] border-white" />

          <div className="flex justify-center items-center pl-[95px] pr-4  min-w-0">
            <div className="truncate whitespace-nowrap">
              <PlayerName name={playerName} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 z-50 border-2 bg-white rounded-full size-25 flex items-center justify-center overflow-hidden"
        style={{ borderColor: borderColor }}
      >
        <TeamIcon className="w-full h-full p-2" />
      </div>

      <div className="absolute right-4 -mt-2">
        {/** -mt moves the container up */}
        <Team team={team} />
      </div>
    </section>
  );
}
