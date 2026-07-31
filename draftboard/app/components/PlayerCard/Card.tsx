import CardFront from "./CardFront/CardFront";
import CardBack from "./CardBack/CardBack";
import AnimatedCard from "./AnimatedCard";
import type { CardProps } from "./types";

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
      front={<CardFront player={player} teamDetails={teamDetails} />}
      back={<CardBack player={player} teamDetails={teamDetails} playerStats={playerStats} />}
    />
  );
}