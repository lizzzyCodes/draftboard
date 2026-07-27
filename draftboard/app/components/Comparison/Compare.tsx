import Card from "../PlayerCard/Card";

// 2 cards
export default function Compare() {
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

        {/* Metrics layout: POINTS on top of the divider line, stats on the left and right hardcoded for now but will map voer it*/}
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
}
