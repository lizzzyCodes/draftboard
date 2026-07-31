import { getPlayers } from "@/lib/api/players";
import type { Player } from "@/lib/api/types/player";
import CardContainer from "./components/PlayerCard/CardContainer";


export default async function Home() {
  const players = await getPlayers();

  return (
    <>
      {players.map((player: Player) => (
        <CardContainer
          key={player.id}
          player={player}
        />
      ))}
    </>
  );
}