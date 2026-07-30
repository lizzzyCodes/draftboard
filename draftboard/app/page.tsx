import Card from "./components/PlayerCard/Card";
import NavBar from "./components/NavBar/NavBar";
import Tray from "./components/Tray/Tray";
import { getPlayers } from "@/lib/api/players";
import type { Player } from "@/lib/api/types/player";
import { getTeamDetails } from "@/lib/api/teamColors";

export default async function Home() {
  const players = await getPlayers();
  const teamDetails = await getTeamDetails({ team_abbrv: "LAL" });

  console.log(teamDetails, 'here are the team details [ec]')

  return (
    <>
      <NavBar />

      {players.map((player: Player) => (
        <Card key={player.id} player={player} />
      ))}

      <Tray />
    </>
  );
}
``;
