import { getPlayers } from "@/lib/api/players";
import type { Player } from "@/lib/api/types/player";
import CardContainer from "./components/PlayerCard/CardContainer";

export default async function Home() {
  const players = await getPlayers();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {players.map((player: Player) => (
        <CardContainer key={player.nba_player_id} player={player} />
      ))}
    </div>
  );
}