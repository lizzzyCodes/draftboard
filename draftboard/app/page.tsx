import Card from "./components/PlayerCard/Card";
import NavBar from "./components/NavBar/NavBar";
import Tray from "./components/Tray/Tray";
import { getPlayers } from "@/lib/api/players";
import type { Player } from "@/lib/api/types/player";
import CardContainer from "./components/PlayerCard/CardContainer";


{/*export default async function Home() {
  const players = await getPlayers();

  return (
    <>
      {players.map((player: Player) => (
        <Card key={player.id} player={player} />
      ))}
    </>
  );
} */}

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