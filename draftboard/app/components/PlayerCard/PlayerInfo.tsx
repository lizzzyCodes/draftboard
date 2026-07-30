interface PlayerMetricProps {
  birthday: string;
  height: string;
  weight: string;
  position: string;
  draft_year: number;
  jersey: number;
  color?: string;
}

export default function PlayerMetric({
  birthday,
  height,
  weight,
  position,
  draft_year,
  jersey,
  color,
}: PlayerMetricProps) {

  const info = [
    {
      label: "Born",
      value: birthday,
    },
    {
      label: "Height",
      value: height,
    },
    {
      label: "Weight",
      value: weight,
    },
    {
      label: "Position",
      value: position,
    },
    {
      label: "Drafted",
      value: draft_year,
    },
    {
      label: "Jersey",
      value: `#${jersey}`,
    },
  ];

  return (
    <>
      {info.map((item) => (
        <div key={item.label}>
          <h4 style={{ color: color, fontWeight: "bold" }}>
            {item.label.toUpperCase()}
          </h4>

          <p>
            {item.value}
          </p>


        </div>
      ))}
    </>
  );
}
