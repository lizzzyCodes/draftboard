import Card from "./components/PlayerCard/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import CardBack from "./components/PlayerCard/CardBack";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton";
import BackButton from "./components/Buttons/Back";

export default function Home() {
  return (
    <>
      <SearchBar />
      <PrimaryButton text={"COMPARE PLAYERS"} />
      <BackButton />
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
      ;
    </>
  );
}
``;
