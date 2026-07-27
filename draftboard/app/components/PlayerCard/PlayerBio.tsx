interface PlayerBioProps {
  bio: string;
  color?: string;
}

export default function PlayerBio({ bio, color }: PlayerBioProps) {
  return <p style={{ color: color, fontSize: "16px" }}>{bio}</p>;
}
