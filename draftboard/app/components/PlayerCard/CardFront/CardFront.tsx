// CardFront.tsx
import CardHeader from "../CardHeader";
import Image from "next/image";
import PlayerName from "../PlayerName";
import Team from "../TeamName";
import type { Player, PlayerDetails } from "@/lib/api/types/types";
import { headshotUrl } from "@/lib/api/utils/utils";

interface CardFrontProps {
    player: Player;
    playerDetails: PlayerDetails | null;
}

export default function CardFront({ player, playerDetails }: CardFrontProps) {
    const { first_name, last_name, team_name, nba_player_id } = player;
    if (!playerDetails) {
        return null;
    }
    const { team } = playerDetails;
    const { alternate_color } = team;

    return (
        <>
            <div className="h-[90%] p-[3px] border-[3px] border-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none">
                <div
                    className="h-full flex flex-col border-[3px] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-none"
                    style={{ borderColor: alternate_color ?? undefined }}
                >
                    <CardHeader />
                    <hr className="border-t-[1.5px] border-white" />
                    <div className="flex-1 min-h-0 relative w-full">
                        <Image
                            // src={`/player-images/${first_name}_${last_name}_headshot.avif`}
                            src={headshotUrl(nba_player_id)}
                            alt={`${first_name} ${last_name}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <hr className="border-t-[1.5px] border-white" />
                    <div className="flex justify-center items-center pl-[95px] pr-4 min-w-0">
                        <div className="truncate whitespace-nowrap">
                            <PlayerName name={`${first_name} ${last_name}`} />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-0 left-0 z-50 border-2 bg-white rounded-full size-25 flex items-center justify-center overflow-hidden"
                style={{ borderColor: alternate_color ?? undefined }}
            >
                <Image
                    src={team.logo_url}
                    alt={`${team.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                />

            </div>

            <div className="absolute right-4 -mt-2">
                <Team team_name={team_name} />
            </div>
        </>
    );
}