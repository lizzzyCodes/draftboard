import Card from "../PlayerCard/Card";
import { getPlayers } from "@/lib/api/players";

// 2 cards
{/*export default async function Compare() {
  const players = await getPlayers();
  return (
    <>
      <div className="flex items-center gap-4">
        <Card
          backgroundColor="#1D428A"
          borderColor="#FFC72C"
          img="/player-images/lebron.jpg"
          playerName="VICTOR WEMBANYAMA"
          team="WARRIORS"
          teamAbbreviation="GSW"
        />
        <Card player={players} />

   Metrics layout: POINTS on top of the divider line, stats on the left and right hardcoded for now but will map voer it

        <div className="flex flex-col items-center justify-center flex-1 min-w-[200px]">
          <h4 className="text-xl font-bold tracking-wider text-gray-400 uppercase">
            POINTS
          </h4>
          <div className="flex items-center w-full gap-4 mt-1">
            <h4 className="text-2xl font-bold">19.6</h4>
            <hr className="flex-1 border-gray-600" />
            <h4 className="text-2xl font-bold">18.2</h4>
          </div>
        </div>

        <Card
          backgroundColor="#1D428A"
          borderColor="#FFC72C"
          img="/player-images/lebron.jpg"
          playerName="VICTOR WEMBANYAMA"
          team="WARRIORS"
          teamAbbreviation="GSW"
        />
      </div>
    </>
  );
} */}

export default async function Compare({
  params,
}: {
  params: { playerA: string; playerB: string };
}) {
  const players = await getPlayers();
  const playerA = players[0];
  const playerB = players[1];

  //const playerA = await getPlayer(params.playerA);
  //const playerB = await getPlayer(params.playerB);
  console.log(playerA, 'playerA [ec]')
  return (
    <>
      <Card player={playerA} />
      <div className="flex flex-col items-center justify-center flex-1 min-w-[200px]">
        <h4 className="text-xl font-bold tracking-wider text-gray-400 uppercase">
          POINTS
        </h4>
        <div className="flex items-center w-full gap-4 mt-1">
          <h4 className="text-2xl font-bold">19.6</h4>
          <hr className="flex-1 border-gray-600" />
          <h4 className="text-2xl font-bold">18.2</h4>
        </div>
      </div>
      <Card player={playerB} />
      <p> basketball chart here</p>
    </>
  );
}
