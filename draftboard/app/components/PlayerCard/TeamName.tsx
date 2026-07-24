interface Team {
  team: string;
}

export default function Team({ team }: Team) {
  return (
    <p className="font-passion-one font-bold" style={{ color: "#FFFFFF" }}>
      {team}
    </p>
  );
}
