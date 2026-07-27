import Card from "./components/PlayerCard/Card";
import CardBack from "./components/PlayerCard/CardBack";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import NavBar from "./components/NavBar/NavBar";
import Tray from "./components/Tray/Tray";

export default function Home() {
  return (
    <>
      <NavBar />
      <CardBack
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
      />

      <Tray />
    </>
  );
}
``;
