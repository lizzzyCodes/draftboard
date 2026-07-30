interface Team {
  team: string;
}

export default function Team({ team }: Team) {
  return (
    <div className="p-1">
      <h2 style={{ color: "#FFFFFF" }}>{team.toUpperCase()}</h2>
    </div>
  );
}
