import Card from "./components/PlayerCard/Card";
import CardBack from "./components/PlayerCard/CardBack";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import NavBar from "./components/NavBar/NavBar";
import Tray from "./components/Tray/Tray";
import { getPlayers } from "@/lib/api/players";

export default async function Home() {
  const players = await getPlayers();

  return (
    <>
      <NavBar />
      {/*}   <CardBack
        backgroundColor="#1D428A"
        borderColor="#FFC72C"
        teamAbbreviation="GSW"
        playerName="STEPHEN CURRY"
      />
      <Card
        backgroundColor="#1D428A"
        borderColor="#FFC72C"
        img="/player-images/lebron.jpg"
        playerName="VICTOR WEMBANYAMA"
        team="WARRIORS"
        teamAbbreviation="GSW"
      /> */}    {players.map((player: any) => (
        <Card
          key={player.id}
          img={`/player-images/lebron.jpg`}
          playerName={`${player.first_name} ${player.last_name}`}
          team={player.team_name.toUpperCase()}
          teamAbbreviation={player.team_abbrv}
          backgroundColor="#123456" // will be taken from .. github repo
          borderColor="#ffffff"
        />
      ))}



      <Tray />
    </>
  );
}
``;
