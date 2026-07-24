interface Team {
  team: string;
}

export default function Team({ team }: Team) {
  return (
    <div className="p-1">
      <p
        className="font-passion-one font-bold text-6xl"
        style={{ color: "#FFFFFF" }}
      >
        {team}
      </p>
    </div>
  );
}
