import Compare from "../components/Comparison/ComparePage";
import NavBar from "../components/NavBar/NavBar";
import { getPlayers } from "@/lib/api/players";
import { getTeamDetails } from "@/lib/api/teamColors";
import { getShotData } from "@/lib/api/shot";
import { getPlayerStats } from "@/lib/api/playerStats";

export default async function ComparePage() {

  const players = await getPlayers();
  const teamDetailsA = await getTeamDetails(players[0].team_abbrv);
  const teamDetailsB = await getTeamDetails(players[1].team_abbrv);

  const playerA = players[0];
  const playerB = players[1];

  const playerAShotData = await getShotData(playerA.nba_player_id);
  const playerBShotData = await getShotData(playerB.nba_player_id);

  const playerAStats = await getPlayerStats(playerA.nba_player_id)
  const playerBStats = await getPlayerStats(playerB.nba_player_id);

  return (
    <div>
      <Compare />
      <p>basketball metrics here</p>
    </div>
  );
}
