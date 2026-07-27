import PrimaryButton from "../Buttons/PrimaryButton";

interface ScoutReportsSectionProps {
  color?: string;
}

export default function ScoutReportsSection({
  color,
}: ScoutReportsSectionProps) {
  return (
    <>
      <h4 style={{ color: color, fontWeight: "bold", fontSize: "8px" }}>
        SCOUT REPORTS
      </h4>
      <h4 style={{ color: color, fontWeight: "bold", fontSize: "24px" }}>
        HISTORY
      </h4>
      <div
        className="outline-2 outline-offset-2 outline-solid rounded-lg"
        style={{ color: color }}
      >
        <p> No reports yet. Start the first one</p>
      </div>
      <PrimaryButton text="+ NEW REPORT" />
    </>
  );
}
