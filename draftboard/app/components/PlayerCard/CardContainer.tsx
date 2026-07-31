import { getTeamDetails } from "@/lib/api/teamColors";
import Card from "./Card";
import { getPlayerStats } from "@/lib/api/playerStats";
import type { Player } from "@/lib/api/types/types";

interface CardContainerProps {
    player: Player;
}



export default async function CardContainer({ player }: CardContainerProps) {

    const [teamDetails, playerStats] = await Promise.all([
        getTeamDetails(player.team_abbrv),
        getPlayerStats(player.nba_player_id),
    ]);

    console.log(playerStats, 'player stats here [ec]')

    return (
        <Card
            player={player}
            teamDetails={teamDetails}
            playerStats={playerStats}
        />
    );
}