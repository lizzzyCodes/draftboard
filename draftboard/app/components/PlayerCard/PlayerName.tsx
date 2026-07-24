import CardHeader from "./CardHeader";

interface PlayerName {
  name: string;
}

export default function PlayerName({ name }: PlayerName) {
  return <p className="font-oswald font-bold">{name}</p>;
}
