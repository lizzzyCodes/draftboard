import Card from "./components/PlayerCard/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import CardBack from "./components/PlayerCard/CardBack";

export default function Home() {
  return (
    <>
      <SearchBar />
      <CardBack backgroundColor="#1D428A" borderColor="#FFC72C" teamAbbreviation="GSW" playerName="STEPHEN CURRY" />
      <Card
        backgroundColor="#1D428A"
        borderColor="#FFC72C"
        img="/player-images/lebron.jpg"
        playerName="VICTOR WEMBANYAMA"
        team="WARRIORS"
        teamAbbreviation="GSW"
      />
      ;
    </>
  );
}
``;
