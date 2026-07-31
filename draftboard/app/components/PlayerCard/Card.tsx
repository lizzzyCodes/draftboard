import CardFront from "./CardFront/CardFront";
import CardBack from "./CardBack/CardBack";
import AnimatedCard from "./AnimatedCard";
import type { Player, PlayerDetails, TeamDetails } from "@/lib/api/types/types";

export interface CardProps {
  player: Player;
  playerStats: PlayerDetails | null;
  teamDetails?: TeamDetails | null;
}

export default function Card({ player, teamDetails, playerStats }: CardProps) {

  if (!teamDetails) {
    return null;
  }
  const { color, alternate_color } = teamDetails;

  return (
    <AnimatedCard
      id={player.id.toString()}
      color={color}
      secondaryColor={alternate_color ?? undefined}
      front={<CardFront player={player} playerDetails={playerStats} />}
      back={<CardBack player={player} teamDetails={teamDetails} playerStats={playerStats} />}
    />
  );
}