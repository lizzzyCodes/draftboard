
// card container that fetches all external data 
import { CardContainerProps, Player } from "./types";
import { getTeamDetails } from "@/lib/api/teamColors";
import Card from "./Card";
import { getPlayerStats } from "@/lib/api/playerStats";


export default async function CardContainer({ player }: CardContainerProps) {

    const [teamDetails, playerStats] = await Promise.all([
        getTeamDetails(player.team_abbrv),
        getPlayerStats(player.nba_player_id),
    ]);

    return (
        <Card
            player={player}
            teamDetails={teamDetails}
            playerStats={playerStats}
        />
    );
}