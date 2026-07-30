import Card from "./components/PlayerCard/Card";
import CardBack from "./components/PlayerCard/CardBack";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import NavBar from "./components/NavBar/NavBar";
import Tray from "./components/Tray/Tray";
import { getPlayers } from "@/lib/api/players";
import { Player } from "../app/components/PlayerCard/types"

export default async function Home() {
  const players = await getPlayers();
  console.log(players, ' players here [ec]')
  return (
    <>
      <NavBar />
      <CardBack
        backgroundColor="#1D428A"
        borderColor="#FFC72C"
        teamAbbreviation="GSW"
        playerName="STEPHEN CURRY"
      />

      {players.map((player: Player) => (
        <Card key={player.id} player={player} />
      ))}

      <Tray />
    </>
  );
}
``;
