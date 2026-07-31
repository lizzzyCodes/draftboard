import { getPlayers } from "@/lib/api/players";
import { getTeamDetails } from "@/lib/api/teamColors";
import {
  getShotData
} from "@/lib/api/shot";
import { getPlayerStats } from "@/lib/api/playerStats";
import Compare from "./Compare";

export default async function ComparePage() {
  const players = await getPlayers();

  const playerA = players[0];
  const playerB = players[1];

  const [
    teamDetailsA,
    teamDetailsB,
    playerAShotData,
    playerBShotData,
    playerAStats,
    playerBStats,
  ] = await Promise.all([
    getTeamDetails(playerA.team_abbrv),
    getTeamDetails(playerB.team_abbrv),
    getShotData(playerA.nba_player_id),
    getShotData(playerB.nba_player_id),
    getPlayerStats(playerA.nba_player_id),
    getPlayerStats(playerB.nba_player_id),
  ]);

  return (
    <Compare
      playerA={playerA}
      playerB={playerB}
      teamDetailsA={teamDetailsA}
      teamDetailsB={teamDetailsB}
      playerAStats={playerAStats}
      playerBStats={playerBStats}
      playerAShotData={playerAShotData}
      playerBShotData={playerBShotData}
    />
  );
}