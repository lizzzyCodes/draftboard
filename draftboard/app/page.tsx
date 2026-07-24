import Card from "./components/PlayerCard/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import CardBack from "./components/PlayerCard/CardBack";

export default function Home() {
  return (
    <>
      <SearchBar />
      <CardBack />
      <Card backgroundColor="#240050" borderColor="#FEB54C" img="/player-images/lebron.jpg" playerName='LeBRON JAMES' team='LAKERS' teamAbbreviation='LAL' />;
      <Card backgroundColor="#1D428A" borderColor="#FFC72C" img="/player-images/lebron.jpg" playerName='VICTOR WEMBANYAMA' team='WARRIORS' teamAbbreviation='GSW' />;

    </>
  )
}
``