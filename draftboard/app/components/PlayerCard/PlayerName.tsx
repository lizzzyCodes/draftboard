import CardHeader from "./CardHeader";

interface PlayerName {
  name: string;
}

export default function PlayerName({ name }: PlayerName) {
  return <h3 className="text-white">{name.toUpperCase()}</h3>;
}
