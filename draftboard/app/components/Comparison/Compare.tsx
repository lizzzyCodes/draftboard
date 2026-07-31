import { Player, TeamDetails, SeasonStats } from "../PlayerCard/types";
import Card from "../PlayerCard/Card";

export type CompareProps = {
    playerA: Player;
    playerB: Player;
    teamDetailsA: TeamDetails;
    teamDetailsB: TeamDetails;
    playerAStats: SeasonStats;
    playerBStats: SeasonStats;
    playerAShotData: ShotData[];
    playerBShotData: ShotData[];
};

export default async function Compare({ playerA, playerB, teamDetailsA, teamDetailsB, playerAStats, playerBStats, playerAShotData, playerBShotData }: CompareProps) {
    return (
        <div>
            <p> hola </p>
            <Card player={playerA} teamDetails={teamDetailsA} playerStats={playerAStats} />
            <Card player={playerB} teamDetails={teamDetailsB} playerStats={playerBStats} />
            {playerA.first_name}
            {playerB.first_name}
            {teamDetailsA.color}
            {teamDetailsB.color}
            {playerAStats.ppg}
            {playerBStats.ppg}
            {playerAShotData.length}
            {playerBShotData.length}
        </div>
    );
}