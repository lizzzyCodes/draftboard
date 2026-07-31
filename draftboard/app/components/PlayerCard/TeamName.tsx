export default function Team({ team_name }: { team_name: string }) {
  return (
    <div className="  py-2 overflow-hidden">
      <h2
        className="font-black uppercase tracking-tight leading-none"
        style={{
          color: "#FFFFFF",
          fontSize: "clamp(1.25rem, 5vw, 2.5rem)", // scales with container, never overflows
        }}
      >
        {team_name}
      </h2>
    </div>
  );
}